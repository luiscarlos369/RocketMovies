import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
margin: 0;



>svg{
color: ${({theme}) => theme.COLORS.PINK};
height:2.4rem;
}
`;