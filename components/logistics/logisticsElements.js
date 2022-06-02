import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const LogisticsContainer = styled.View`
     display: flex;
     align-items: center;
     justify-content: center;
`;

export const LogisticsPrimary = styled.Text`
   color: #fff;
   text-align: center;
   font-size: 15px;
   font-weight: bold;
   margin-top: 60px;
`;

export const LogisticsWrapper = styled.View`
  display: grid;
  z-index: 1;
  margin-left: 30px;
  padding: 0 24px;
  margin-top: 40px;
  justify-content: center;
`;

export const LogisticsRow = styled.View`
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)}
`;

export const Column1 = styled.View`
   margin-bottom: 15px;
   padding: 0 18px;
   grid-area: col1;
`;

export const Column2 = styled.View`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col2;
`;

export const LogisticsSlot = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: left;
  margin-top: 20px;
  font-family: 'Roboto';
`;

export const LogisticsBox = styled.View`
   position: relative;
   width: 128px;
   height: 96px;
   top: 20px;
   background: #4E4E4E;
   border-radius: 5px;
`;

export const LogisticsBtn = styled(Button)`
   position: relative;
   width: 300px;
   height: 48px;
   top: 30px;
   left: 10px;
   color: #000;
   background: #C3AD60;
   border-radius: 5px;
`;