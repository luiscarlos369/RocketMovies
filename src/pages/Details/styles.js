import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
width: 100%;


display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas:
"header"
"content"
;



main{
padding: 0 5rem;
grid-area: content;
overflow-y: auto;


.movieAndRating{
display: flex;
justify-content: flex-start;
align-items: center;
gap: 1rem;
height: 6rem;
margin:2.4rem 0;


>h1{
color: ${({theme}) => theme.COLORS.WHITE};
font-size: 3.6rem;
font-weight: 500;
}
}

.authorAndDate{
display: flex;
align-items: center;
margin-bottom: 4rem;
gap: .8rem;
color: ${({theme}) => theme.COLORS.WHITE};

>img{
width: 1.6rem;
height: 1.6rem;
border-radius: 50%;
}

>span{
display:flex;
align-items: center;


svg{
width: 1.6rem;
height: 1.6rem;
margin-right: .8rem;
color: ${({theme}) => theme.COLORS.PINK};
}
}
}

.tags{
display: flex;
flex-direction: row;
justify-content:start;
margin-bottom: 4rem;
border: none;
}

p{
padding: 3rem;
font-size: 1.6rem;
line-height: 2.1rem;
text-align: justify;
font-weight: 400;
color: ${({theme}) => theme.COLORS.WHITE};

display: flex;
align-items: center;
text-align: justify;
}

}
`;

