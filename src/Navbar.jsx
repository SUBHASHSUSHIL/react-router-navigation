import { Link, Outlet } from "react-router";
import './Header.css'

export default function Navbar() {
    return (
        <div>
            <div className="heading">
                <div>
                    <Link className="link" to="/"><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/college">College</Link>
                        </li>
                        <li>
                            <Link className="link" to="/users">User</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}