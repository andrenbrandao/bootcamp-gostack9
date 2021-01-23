import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, CartButton, Logo, Wrapper, ItemCount } from './styles';

import logo from '../../assets/img/logo.png';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <RectButton onPress={() => navigation.navigate('Main')}>
          <Logo resizeMode="contain" source={logo} />
        </RectButton>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={25} color="#fff" />
          <ItemCount>{cartSize}</ItemCount>
        </CartButton>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
