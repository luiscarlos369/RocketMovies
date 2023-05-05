import styled from "styled-components";

export const Container = styled.header`
background-color: transparent;
grid-area: header;
width: 100%;
padding:2rem;


display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;

border-bottom-width: 100%;
border-bottom: .1rem solid ${({theme}) => theme.COLORS.GRAY_707};

a{
color: ${({theme}) => theme.COLORS.PINK};  
font-size: clamp(.8rem, .8rem + 1vw, 2.4rem);
font-weight: 700;

}


input{
background: ${({theme}) => theme.COLORS.BACKGROUND_808};
width: 18vw;
height: 5.6rem;
padding:.3rem;
margin-right: 3rem;
margin-left: 1rem;
border: none;
border-radius: 1rem;

color: ${({theme}) => theme.COLORS.WHITE};
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);

&::placeholder{
font-size: clamp(.2rem, .2rem + 1vw, 1.6rem);

}
}


`;