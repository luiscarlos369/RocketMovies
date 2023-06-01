import{ useState, useEffect } from "react";
import {FiArrowLeft} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import {NoteItem} from "../../components/NoteItem";
import {api} from "../../services/api";

export function Create(){

const [title, setTitle] = useState("");
const [rating, setRating] = useState("");
const [streaming, setStreaming] = useState("");
const [description, setDescription] = useState("");

const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("");

const navigate = useNavigate();

function goBack(){
navigate(-1);
}

function handleAddTags(){
setTags(prevState => [...prevState, newTag]);
setNewTag(""); 
}

function handleRemoveTag(deleted){
setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewNote(){

if(!title || !rating || !streaming){
return alert("Digite: título, avaliação e serviço de streaming do Filme.")
}

if(newTag){
return alert(`Deve clicar no simbolo de + para adicionar sua nova Tag.`)
}
    

await api.post("/notes", {
title,
streaming_services: streaming,
rating,
description,
tags
});
alert("Filme cadastrado com sucesso!");
navigate(-1);
};

function handleRemoveFilm(){
setTitle("");
setRating("");
setStreaming("");
setDescription("");
setTags([]);
setNewTag("");

alert("filme excluido")
navigate(-1)
}

return(
<Container>
<Header />

<main>

<ButtonText 
title={<> <FiArrowLeft /> Voltar</>}  
onClick={goBack}
/>

<h1>Novo Filme</h1>

<div className="movieAndRating">
< Input 
type="text" 
placeholder="Título" 
value={title}
onChange = {e=> setTitle(e.target.value)}
/>

<Input
type="number"
list="options"
placeholder="✮✮✮✮✮"
value={rating}
onChange={e => {
const inputValue = e.target.value;
const numericValue = parseInt(inputValue);

if (numericValue >= 1 && numericValue <= 5) {
setRating(numericValue);
}
}}
/>

<datalist id="options">
<option value="1" />
<option value="2" />
<option value="3" />
<option value="4" />
<option value="5" />
</datalist>

< Input 
type="text" 
placeholder="Streaming" 
value={streaming}
onChange = {e=> setStreaming(e.target.value)}
/>
</div>

<Textarea 
placeholder="Observações" 
value={description}
onChange = {e=> setDescription(e.target.value)}
/>

<h2>Marcadores</h2>

<div className="tags">

<NoteItem 
isNew 
placeholder="Nova Tag"
value={newTag}
onChange={e => setNewTag(e.target.value)}
onClick={handleAddTags}
/> 

{
tags.map((tag, index) =>(
<NoteItem
key={String(index)}
value={tag}
onClick={() => handleRemoveTag(tag)}
/>
))
}
</div>

<div className="action">
<Button 
title= "Excluir"
onClick={handleRemoveFilm}
/>
<Button 
title="Salvar"
onClick={handleNewNote}
/>
</div>
</main>
</Container>
)
}