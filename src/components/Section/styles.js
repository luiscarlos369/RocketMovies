import styled from "styled-components";

export const Container = styled.div`
background: ${({theme}) => theme.COLORS.BACKGROUND_707};
width: 100%;
height: 22rem;
border: none;
border-radius: 1.6rem;
padding: 3.2rem;
margin-bottom: 2.4rem;

>.movieAndRating{
display: flex;
flex-direction: column;
gap: .9rem;

div{
display: flex;
flex-direction: row;
gap: .6rem;
}

h1{
color: ${({theme}) => theme.COLORS.WHITE};
font-size: 2.4rem;
}

svg{
font-size: 1.2rem;
}
}

>p{
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
line-height: 1.8rem;
height: 3.6rem;
overflow: hidden;
color: ${({theme}) => theme.COLORS.GRAY_808};
margin-top: .5rem;

a{
color: ${({theme}) => theme.COLORS.WHITE};
}
}

.tags{
display: flex;
flex-direction: row;
justify-content:start;
border: none;
margin-top: 2rem;

* {
background: ${({theme}) => theme.COLORS.BACKGROUND_808};
color: ${({theme}) => theme.COLORS.WHITE};
}
}

`;