import styled from 'styled-components';

export const DivWrapper = styled.div`
  padding-top: 25px;
`;

export const InputFilter = styled.input`
  display: flex;
  padding: 4px;
  margin-top: 10px;
  font-size: 14px;
  border: ${p => p.theme.border};
  border-radius: ${p => p.theme.borderRadius};
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.borderAccent};
    outline: none;
  }
`;
