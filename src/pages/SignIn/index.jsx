import { useState } from "react";
import {FiMail} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link  } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const {signIn} = useAuth();  

function handleSignIn(){
signIn({email, password})
}

return(
<Container>
<div className="login">
<Form>
<h1>RocketMovies</h1>

<p>Aplicação para acompanhar tudo que assistir.</p>
<h2>Faça seu login</h2>

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} 
onChange= {e => setEmail(e.target.value)}
/>

<Input
id="password"
placeholder="Senha"
type ="password"
icon={RiLockPasswordLine} 
onChange= {e => setPassword(e.target.value)}
/>

<Button 
title="Entrar" 
onClick={handleSignIn}
/>
</Form>

<Link to="/register">
<ButtonText 
title="Criar Conta" 
/>
</Link>

</div>

<Background />

</Container>
)
};