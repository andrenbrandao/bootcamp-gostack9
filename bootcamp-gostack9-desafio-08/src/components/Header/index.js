import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, CartButton, Logo, Wrapper, ItemCount } from './styles';

import logo from '../../assets/img/logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
