import styled from "styled-components";


export const Container = styled.span`
height: 3rem;
padding: 0 1.6rem;
margin-right: .8rem;
border-radius: .8rem;
background: ${({theme}) => theme.COLORS.BACKGROUND_707};
color: ${({theme}) => theme.COLORS.GRAY_808};
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
font-weight: 400;
`;