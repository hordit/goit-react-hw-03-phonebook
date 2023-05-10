import styled from "styled-components";

export const Div = styled.div` 
display: flex;
`;

export const P = styled.p`
padding-right: 15px;
`;

export const ButtonDelete = styled.button`
background-color: ${p => p.theme.colors.white};
border: ${p => p.theme.border};
border-radius: ${p => p.theme.borderRadius};
font-size: 13px;
&:hover {
    border: ${p => p.theme.colors.backgroundButtoHover};
    background-color: ${p => p.theme.colors.backgroundButtoHover};
    box-shadow: 0 0 10px rgba(123, 123, 123, 0.426);
 };
`;
