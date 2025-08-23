import { Link } from "react-router";

export default function Navbar() {
    return (
        <div>
            <Link to={"/"}><h1>Home</h1></Link>
            <Link to={"/about"}><h1>About</h1></Link>
            <Link to={"/login"}><h1>Login</h1></Link>
        </div>
    )

}