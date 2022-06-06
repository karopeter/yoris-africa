import React from 'react';
import {
   LocationContainer,
   LocationWrapper,
   LocationRow,
   Column1,
   Column2,
   Column3,
   LocationText,
   ImageBackground,
   LocationPrimary,
   ImageCancel,
   ImageLocation,
   LocationSecondary,
   LocationSaved,
   LocationBox,
   LocationSwitch,
   ImageEllipse,
   LocationType,
   LocationNumber,
   LocationBtn
  } from './pickupLogisticsElements';

export default function PickupLogistics() {
   return (
      <LocationContainer>
        <LocationWrapper>
          <LocationRow>
            <Column1>
              <ImageBackground source={require('../../assets/images/side.png')} />
            </Column1>
            <Column2>
              <LocationPrimary>Pickup Location</LocationPrimary>
            </Column2>
            <Column3>
               <ImageCancel source={require('../../assets/images/cancel.png')} />
            </Column3>
          </LocationRow>
          <LocationRow>
             <Column1>
                <ImageLocation source={require('../../assets/images/location.png')} />
             </Column1>
             <Column2>
               <LocationSecondary>Use Current Location</LocationSecondary>
             </Column2>
          </LocationRow>
           <LocationSaved>Saved Addresses</LocationSaved>
           <LocationRow>
             <Column1>
                <LocationBox>Address 1</LocationBox>
             </Column1>
             <Column2>
               <LocationBox>Address 2</LocationBox>
             </Column2>
             <Column3>
                <LocationBox>Address 3</LocationBox>
             </Column3>
           </LocationRow>
           <LocationRow>
              <Column1>
                 <LocationSecondary>Save new address</LocationSecondary>
              </Column1>
              <Column2>
                 <LocationSwitch>
                     <ImageEllipse source={require('../../assets/images/Ellipse.png')} />
                </LocationSwitch>
              </Column2>
           </LocationRow>
           <LocationType>Type in new location</LocationType>
           <LocationNumber>House number</LocationNumber>
           <LocationNumber>Street address</LocationNumber>
           <LocationNumber>Bus stop</LocationNumber>
           <LocationNumber>Local Govt area</LocationNumber>
            <LocationBtn>continue</LocationBtn>
        </LocationWrapper>
      </LocationContainer>
   );
};