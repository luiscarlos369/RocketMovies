import { Container, Form, Background } from "./styles";
import {FiMail} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";

export function SignIn(){
return(
<Container>
<div className="login">
<Form>
<Link to="/">
<h1>RocketMovies</h1>
</Link>

<p>Aplicação para acompanhar tudo que assistir.</p>
<h2>Faça seu login</h2>

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} />

<Input
id="password"
placeholder="Senha"
type ="password"
icon={RiLockPasswordLine} />

<Button title="Entrar" />
</Form>
<Link to="/register">
<ButtonText title="Criar Conta" />
</Link>



</div>
<Background />
</Container>
)
}