import { NavLink, Outlet } from "react-router";
import './Header.css'

export default function Navbar() {
    return (
        <div>
            <div className="heading">
                <div>
                    <NavLink className="NavLink" to="/"><h2>Logo</h2></NavLink>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active NavLink" : "NavLink"} to="/">Home</NavLink>  {/* Home custom link */}
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active NavLink" : "NavLink"} to="/in/user/about">About</NavLink> {/* About custom link */}
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/in/user/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/college">College</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/users">User</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}