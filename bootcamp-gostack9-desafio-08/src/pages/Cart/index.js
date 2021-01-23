import React, { Fragment, Component } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import {
  Container,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  DeleteButton,
  DeleteIcon,
  ProductControls,
  ProductControlButton,
  DecrementIcon,
  IncrementIcon,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  SubmitCartButton,
  SubmitCartButtonText,
  EmptyTitle,
  EmptyIcon,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotalFormatted: formatPrice(product.price * product.amount),
    })),
  );

  const totalFormatted = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    ),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <ScrollView>
      {cart.length > 0 ? (
        <Container>
          {cart.map(product => (
            <Fragment key={String(product.id)}>
              <Product>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductInfo>
                <DeleteButton
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }>
                  <DeleteIcon />
                </DeleteButton>
              </Product>

              <ProductControls>
                <ProductControlButton onPress={() => decrement(product)}>
                  <DecrementIcon />
                </ProductControlButton>
                <ProductAmount value={String(product.amount)} />
                <ProductControlButton onPress={() => increment(product)}>
                  <IncrementIcon />
                </ProductControlButton>

                <ProductSubtotal>{product.subtotalFormatted}</ProductSubtotal>
              </ProductControls>
            </Fragment>
          ))}

          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{totalFormatted}</TotalAmount>
          </TotalContainer>
          <SubmitCartButton>
            <SubmitCartButtonText>FINALIZAR PEDIDO</SubmitCartButtonText>
          </SubmitCartButton>
        </Container>
      ) : (
        <Container>
          <EmptyIcon />
          <EmptyTitle>Seu carrinho está vazio.</EmptyTitle>
        </Container>
      )}
    </ScrollView>
  );
}
