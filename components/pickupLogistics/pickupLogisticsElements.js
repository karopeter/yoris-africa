import styled from 'styled-components/native';

export const LocationContainer = styled.View`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LocationWrapper = styled.View`
  display: grid;
  z-index: 1;
  margin-left: 30px;
  padding: 0 24px;
  margin-top: 40px;
  justify-content: center;
`;

export const LocationRow = styled.View`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)}
`;

export const Column1 = styled.View`
   padding: 0 30px;
   grid-area: col1;
`;

export const Column2 = styled.View`
   padding: 0 25px;
   grid-area: col2;
`;

export const Column3 = styled.View`
  padding: 0 30px;
  grid-area: col3;
`;

export const ImageBackground = styled.ImageBackground`
     width: 20px;
     position: relative;
     height: 20px;
`;

export const LocationPrimary = styled.Text`
      color: #C3AD60;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      margin-left: 10px;
      font-family: 'Roboto';
`;

export const ImageCancel = styled.ImageBackground`
      width: 20px;
      position: relative;
      left: 60px;
      height: 20px;
`;

export const ImageLocation = styled.ImageBackground`
     width: 20px;
     position: relative;
     top: 50px;
     height: 20px;
`;

export const LocationSecondary = styled.Text`
   color: #fff;
   margin-top: 100px;
   text-align: center;
   font-size: 12px;
   font-family: 'Roboto';
   font-weight: bold;
`;

export const LocationSaved = styled.Text`
      position: relative;
       color: #4E4E4E;
       font-family: 'Roboto';
       font-size: 15px;
       text-align: left;
       margin-left: 40px;
       margin-top: 70px;
`;

export const LocationBox = styled.View`
     position: relative;
     width: 128px;
     height: 96px;
     top: 20px;
     color: #fff;
     text-align: center;
     background: #4E4E4E;
     border-radius: 5px;
     padding: 25px;
`;


export const LocationSwitch = styled.View`
   position: relative;
   width: 32px;
   height: 16px;
   top: 50px;
   border-radius: 15px;
   background: #1DB704;
`;

export const ImageEllipse = styled.ImageBackground`
   width: 20px;
   height: 15px;
`;

export const LocationType = styled.Text`
    color: #fff;
    font-family: 'Roboto';
    font-size: 15px;
    text-align: left;
    position: relative;
    margin-left: 40px;
    margin-top: 70px;
`;

export const LocationNumber = styled.View`
   position: relative;
   width: 320px;
   height: 48px;
   left: 40px;
   color: #fff;
   top: 10px;
   margin-bottom: 30px;
   padding: 12px;
   text-align: left;
   background: #4E4E4E;
   border-radius: 5px;
`;

export const LocationBtn = styled.Text`
   position: relative;
   width: 300px;
   height: 48px;
   margin-top: 15px;
   left: 40px;
   padding: 12px;
   text-align: center;
   color: #000;
   font-weight: 400;
   font-size: 18px;
   background: #C3AD60;
   border-radius: 5px;
   text-transform: uppercase;
`;