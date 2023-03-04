import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const DivInput = styled.div`
display: flex;
flex-direction: column;
   label {
      font-size: 12px;
      color: #999999;
      margin-left: 30px;
   }
   input {
      width: 90%;
      height: 60px;
      background-color: #F5F5F5;
      margin: 0 auto;
      border-radius: 8px;
      margin-top: 5px;
      padding-left: 10px;
   }
   input::placeholder{
      font-size: 12px;
   }

`
