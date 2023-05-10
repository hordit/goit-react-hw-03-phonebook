import styled from "styled-components";
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
padding: 10px;
margin: 25px 0 25px 0;
max-width: 350px;
border: 1px solid ${p => p.theme.colors.black};
`;

export const Label = styled.label`
 display: flex;
 flex-direction: column;
 padding-bottom: 20px;
 `;

export const InputStyled = styled(Field)`
 padding: 4px;
 margin-top: 10px;
 max-width: 250px;
 font-size: 14px;
 border: ${p => p.theme.border};
 border-radius: ${p => p.theme.borderRadius};
 &:hover, &:focus {
    border-color: ${p => p.theme.colors.borderAccent};
    outline: none;
};
 `;

export const ButtonAdd = styled.button`
 border: ${p => p.theme.border};
 border-radius: ${p => p.theme.borderRadius};
 font-size: 13px;
 background-color: ${p => p.theme.colors.white};
 &:hover {
    border: ${p => p.theme.colors.backgroundButtoHover};
    background-color: ${p => p.theme.colors.backgroundButtoHover};
    box-shadow: 0 0 10px rgba(123, 123, 123, 0.426);
 };
 `;