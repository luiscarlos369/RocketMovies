import {FiArrowLeft} from "react-icons/fi";
import {BiPlus} from "react-icons/bi";
import {MdClose} from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import {Tag} from "../../components/Tag";

export function Create(){
return(
<Container>
<Header />

<main>
<Link to="/">
<ButtonText title={<> <FiArrowLeft /> Voltar</>}  />
</Link>


<h1>Novo Filme</h1>

<div className="movieAndRating">
< Input type="text" placeholder="Título" />
< Input type="text" placeholder="Sua nota (de 0 a 5)" />
</div>

<Textarea placeholder="Observações" />


<h2>Marcadores</h2>

<div className="tags">
<Tag id="one" title={<> <span>Ficção Científica</span>  <MdClose /></>}/>
<Tag id="two" title={<> <span>Novo Marcador</span>  <BiPlus /></>}/>
</div>




<div className="action">
<Button title= "Excluir filme"/>
<Button title="Salvar alterações"/>
</div>
</main>
</Container>
)
}