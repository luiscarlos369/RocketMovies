import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100vh;


display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas:
"header"
"content";

main{
padding: 3rem 5rem 0;
grid-area: content;
overflow-y: auto;


h1{
color:${({theme}) => theme.COLORS.WHITE};
font-size: 3.6rem;
line-height: 4.7rem;
font-weight: 500;
margin: 2.4rem 0 4rem;
}

.movieAndRating{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 3rem;

*{
width: 48%;
}


}

h2{
font-size: 2rem;
font-weight: 400;
color:${({theme}) => theme.COLORS.GRAY_808};
margin-bottom: 2.4rem;
}

.tags{
background: ${({theme}) => theme.COLORS.BACKGROUND_606};
display: flex;
flex-direction: row;
align-items: center;
padding: 1.6rem;
border: none;
border-radius:.8rem;
height: 9rem;
margin-bottom: 3rem;

*{
display: flex;
flex-direction: row;
align-items: center;
height: 5.6rem;
gap: 1.6rem;
border-radius: 1rem;
background:${({theme}) => theme.COLORS.BACKGROUND_808};

span{
color: ${({theme}) => theme.COLORS.WHITE};
font-size: 1.6rem;
font-weight: 400;
background:none;
}

svg{
color: ${({theme}) => theme.COLORS.PINK};
font-size: 2.4rem;
font-weight: 600;
}

&:nth-child(2){
background: transparent;
border: .3rem dashed ${({theme}) => theme.COLORS.BACKGROUND_808}; 

svg{
border: none;
}
}

}
}

.action{
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

*{
display: flex;
align-items: center;
justify-content: center;
width: 48%;
height: 5.6rem;
background:${({theme}) => theme.COLORS.PINK};
color: ${({theme}) => theme.COLORS.GRAY_707};

&:nth-child(1){
background: ${({theme}) => theme.COLORS.BACKGROUND_606};
color: ${({theme}) => theme.COLORS.PINK};
}
}







}

}


`; 

export const Textarea = styled.textarea`
width: 100%;
height: 27rem;
background: ${({theme}) => theme.COLORS.BACKGROUND_808};
border: none;
border-radius: 1rem;
padding:2rem;
color: ${({theme}) => theme.COLORS.WHITE};
resize: none;
margin-bottom: 3rem;
`;