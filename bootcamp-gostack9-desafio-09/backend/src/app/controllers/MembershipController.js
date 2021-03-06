import { isBefore, parseISO, startOfDay } from 'date-fns';

import * as Yup from 'yup';
import Plan from '../models/Plan';
import Student from '../models/Student';
import Membership from '../models/Membership';

import MembershipMail from '../jobs/MembershipMail';
import Queue from '../../lib/Queue';

class MembershipController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const memberships = await Membership.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      order: ['start_date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'age', 'weight', 'height'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(memberships);
  }

  async show(req, res) {
    const { id } = req.params;

    const membership = await Membership.findByPk(id, {
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'age', 'weight', 'height'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    if (!membership) {
      res.status(404).json({ error: 'Membership not found' });
    }

    return res.json(membership);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { student_id, plan_id } = req.body;

    const studentExists = Student.findByPk(student_id);

    if (!studentExists) {
      return res
        .status(400)
        .json({ error: 'Student provided is not registered' });
    }

    const planExists = Plan.findByPk(plan_id);

    if (!planExists) {
      return res.status(400).json({ error: 'Plan provided is not registered' });
    }

    const { start_date } = req.body;

    const start_date_day = startOfDay(parseISO(start_date));
    const today = startOfDay(new Date());

    if (isBefore(start_date_day, today)) {
      return res
        .status(400)
        .json({ error: 'Membership date needs to be later than today' });
    }

    const membership = await Membership.create({
      ...req.body,
      start_date: start_date_day,
    });

    const student = await membership.getStudent();
    const plan = await membership.getPlan();

    await Queue.add(MembershipMail.key, {
      student,
      membership,
      plan,
    });

    return res.json(membership);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { id } = req.params;
    const membership = await Membership.findByPk(id);

    if (!membership) {
      return res.status(400).json({ error: 'Membership not found' });
    }

    const { start_date, student_id, plan_id } = req.body;
    const start_date_day = startOfDay(parseISO(start_date));

    const updatedMembership = await membership.update({
      start_date: start_date_day,
      student_id,
      plan_id,
    });

    return res.json(updatedMembership);
  }

  async delete(req, res) {
    const { id } = req.params;

    const membership = await Membership.findByPk(id);

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }

    await membership.destroy();

    return res.json({ message: 'Membership deleted' });
  }
}

export default new MembershipController();
