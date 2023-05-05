import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas:
"header"
"content"
;

>main{
grid-area: content;
padding: 0 5rem;
overflow-y: auto;


}

.MyFilms{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 3.6rem;



>h1{
font-size: 3.2rem;
line-height: 4.2rem;
font-weight: 400;
color: ${({theme}) => theme.COLORS.WHITE};
width: 35%;
}

>button{
width: clamp(18rem, 18rem + 1vw, 61rem);
font-size: 1.6rem;
}


}

.films{
overflow-y:auto

}


`;