import {FiMail, FiUser, FiArrowLeft} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";


export function SignUp(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

function goBack(){
navigate(-1);
}

function handleSignUp(){

if(!name || !email || !password){
return alert("Por favor preencha todos os campos!")
}

api.post("/users", {name, email, password})
.then(() => {
alert("Cadatrado com sucesso!")
navigate(-1)
})
.catch(error => {
if(error.response){
alert(error.response.data.message);
}else{
alert("Não foi possível!");
}
});
}

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
icon={FiUser} 
onChange = {e => setName(e.target.value)}
/>

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} 
onChange = {e => setEmail(e.target.value)}
/>

<Input
id="password"
placeholder="Senha"
type ="password"
icon={RiLockPasswordLine} 
onChange = {e => setPassword(e.target.value)}
/>

<Button 
title="Cadastrar" 
onClick={handleSignUp}
/>

</Form>

<ButtonText 
title={<><FiArrowLeft /> Voltar para o login</>} 
onClick={goBack}
/>

</div>

<Background />

</Container>
)
}