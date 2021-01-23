import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #000;
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 150px;
`;

export const CartButton = styled(RectButton)`
  display: flex;
  flex-direction: row;
  padding: 10px 5px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 12px;
  text-align: center;
  background-color: #7159c1;
  color: #fff;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  border-radius: 10;
  overflow: hidden;
`;
