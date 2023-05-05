import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Create  } from "../pages/Create";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";


export function AppRoutes(){
return(
<Routes>

<Route path="/" element={<Home />} />
<Route path="/create" element={<Create />} />
<Route path="/profile" element={<Profile />} />
<Route path="/details/:id" element={<Details />} />

</Routes>
)
}
