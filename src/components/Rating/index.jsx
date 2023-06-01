import { Container } from "./styles"; 
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

export function Rating({notSelected = false, ...rest}){
return(
<Container type="button"
disabled={notSelected}
{...rest} >
{notSelected ? <AiOutlineStar />   : <AiFillStar />}
</Container>
)
}