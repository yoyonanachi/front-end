import { Link, Outlet } from "react-router-dom";
import "./index.css"
import "./tailwind.css"

export default function RootLayout() {
    return (
    <div >
        <div class="tagblock" >
        <div class="tag text-white"> <Link to="/">Home</Link> </div> 
        <div class="tag text-white"> <Link to="/about">About</Link> </div>
        <div class="tag text-white"> <Link to="/zoo">Zoo</Link> </div> 
        <div class="tag text-white"> <Link to="/App">App</Link> </div>
        <div class="secret text-white "> <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Secret  (Don't touch this!)</Link> </div>
        </div>
    <div>
    <Outlet />
        </div>
        </div>
    );
}
export function RootIndex() {
    return <div class="mt-6 ml-8 text-2xl">Here  is  <b>Yoyonanchi</b>'s  web</div>;
}