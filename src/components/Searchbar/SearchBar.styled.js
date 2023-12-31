import styled from '@emotion/styled';
export const SearchbarDiv = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;

  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  border: 2px solid green;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
