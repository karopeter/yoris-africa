import React from 'react';
import {
  LogisticsContainer,
  LogisticsPrimary,
  LogisticsWrapper,
  LogisticsRow,
  Column1,
  Column2,
  LogisticsSlot,
  LogisticsBox,
  LogisticsBtn
  } from './logisticsElements';

const LogisticsAddress = () => {
  return (
    <LogisticsContainer>
      <LogisticsPrimary>Save New Address?</LogisticsPrimary>
      <LogisticsWrapper>
        <LogisticsRow>
          <Column1>
             <LogisticsSlot>Create new slot</LogisticsSlot>
             <LogisticsBox></LogisticsBox>
          </Column1>
          <Column2>
            <LogisticsSlot>Replace</LogisticsSlot>
            <LogisticsBox></LogisticsBox>
          </Column2>
        </LogisticsRow>
        <LogisticsRow>
          <Column1>
             <LogisticsSlot>Replace</LogisticsSlot>
             <LogisticsBox></LogisticsBox>
          </Column1>
          <Column2>
            <LogisticsSlot>Replace</LogisticsSlot>
            <LogisticsBox></LogisticsBox>
          </Column2>
        </LogisticsRow>
      </LogisticsWrapper>
       <LogisticsBtn>continue</LogisticsBtn>
    </LogisticsContainer>
  );
};

export default LogisticsAddress;