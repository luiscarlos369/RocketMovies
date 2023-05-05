import { Container, Form, Background } from "./styles";
import {FiMail, FiUser, FiArrowLeft} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";

export function SignUp(){
return(
<Container>
<div className="logout">
<Form>
<h1>RocketMovies</h1>
<p>Aplicação para acompanhar tudo que assistir.</p>
<h2>Crie sua conta</h2>

<Input
placeholder="Nome"
type ="text"
icon={FiUser} />

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} />

<Input
id="password"
placeholder="Senha"
type ="password"
icon={RiLockPasswordLine} />

<Button title="Cadastrar" />
</Form>
<Link to="/login">
<ButtonText title={<><FiArrowLeft /> Voltar para o login</>} />
</Link>



</div>
<Background />
</Container>
)
}