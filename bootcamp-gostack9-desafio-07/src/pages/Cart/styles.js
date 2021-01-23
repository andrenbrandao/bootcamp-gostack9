import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  margin: 20px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  padding: 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 15px;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const DeleteIcon = styled(Icon).attrs({
  name: 'delete-forever',
})`
  font-size: 23px;
  color: #7159c1;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const DecrementIcon = styled(Icon).attrs({
  name: 'remove-circle-outline',
})`
  color: #7159c1;
  font-size: 20px;
`;

export const IncrementIcon = styled(Icon).attrs({
  name: 'add-circle-outline',
})`
  color: #7159c1;
  font-size: 20px;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background-color: #fff;
  padding: 5px;
  border: 1px #ddd;
  border-radius: 4px;
  min-width: 40px;
  margin: 0 5px 0 5px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 15px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  padding: 10px;
  margin-bottom: 20px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const SubmitCartButton = styled(RectButton)`
  background-color: #7159c1;
  align-items: center;
  padding: 14px;
  border-radius: 4px;
`;

export const SubmitCartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const EmptyTitle = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const EmptyIcon = styled(Icon).attrs({
  name: 'remove-shopping-cart',
})`
  font-size: 70px;
  color: #eee;
  text-align: center;
  margin-bottom: 15px;
`;
