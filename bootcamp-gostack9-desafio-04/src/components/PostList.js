import React, { Component } from 'react';

import './PostList.css';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'André Brandão',
          avatar: 'https://avatars0.githubusercontent.com/u/3364098?v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real).',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        },
        date: '10 Jun 2019',
        content:
          'Fala Dev! Quem aqui está preparado pra próxima Semana Omnistack?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rocketseat',
              avatar: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            },
            content:
              'Nessa semana iremos aprender Node.js, ReactJS e React Native!',
          },
          {
            id: 2,
            author: {
              name: 'Filipe Deschamps',
              avatar: 'https://avatars0.githubusercontent.com/u/4248081?v=4',
            },
            content: 'Cara, essa semana OmniStack está delicinha!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        },
        date: '13 Jun 2019',
        content:
          'Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'André Brandão',
              avatar: 'https://avatars0.githubusercontent.com/u/3364098?v=4',
            },
            content: 'Vamo nessa!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div id="post-list">
        <ul>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
