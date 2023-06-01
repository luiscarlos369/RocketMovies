import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiCamera } from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import {Button} from "../../components/Button"; 
import { ButtonText } from "../../components/ButtonText";
import {Input} from "../../components/Input";



export function Profile (){
return(
<Container>
<header>
<Link to="/login">
<ButtonText title={<> <FiArrowLeft /> Voltar</>}  />
</Link>

</header>
<Form>

<Avatar>
<img src="https://github.com/rodrigorgtic.png" 
alt="foto do usuario" />
<label htmlFor="avatar">
<FiCamera />
<input id="avatar" type="file" />
</label>
</Avatar>

<Input
placeholder="Nome"
type ="text"
icon={FiUser} />

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} />

<Input
placeholder="Senha atual"
type ="password"
icon={RiLockPasswordLine} />

<Input
placeholder="Nova senha"
type ="password"
icon={RiLockPasswordLine} />

<Button title="Salvar" />

</Form>
</Container>
)
}