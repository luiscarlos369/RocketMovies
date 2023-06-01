import{ Link } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";

export function User(){
return(
<Container>
<div>

<strong>Rodrigo Gonçalves</strong>

<Link to="/login">
<Button title="Sair" />
</Link>
</div>
<Link to="/profile">
<img src="https://github.com/rodrigorgtic.png" alt="foto do usúario." />
</Link>

</Container>
)
}