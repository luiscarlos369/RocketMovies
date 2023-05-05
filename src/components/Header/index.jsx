import { Link } from "react-router-dom";
import { Container } from "./styles";
import { User } from "../User";


export function Header(){
return(
<Container>
<Link to="/">
<h1>RocketMovies</h1>
</Link>
<input type="text" placeholder="Pesquisar pelo título" />
<User />
</Container>

)
}