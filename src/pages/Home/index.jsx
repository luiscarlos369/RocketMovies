import{BiPlus} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Home(){
return(
<Container>
<Header />

<main>

<div className="MyFilms">
<h1>Meus Filmes</h1>
<Link to="/create">
<Button title={<> <BiPlus /> Adicionar filme </>} />
</Link>

</div>

<div className="films">
<Section />

</div>


</main>

</Container>
)
}