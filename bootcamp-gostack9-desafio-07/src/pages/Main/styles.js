import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 15px;
  max-width: 300px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  align-self: center;
  width: 150px;
  height: 150px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
  min-width: 200px;
`;

export const AddToCartButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
  align-self: center;
`;
