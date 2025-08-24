import { Link, NavLink, Outlet } from "react-router";

export default function College(){
    return <div className="college" style={{textAlign:'center'}}>
        <h1>College Page</h1>
        <h3><Link to="/">Go to home page</Link></h3>
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="details">College Details</NavLink>
        <Outlet />
    </div>
}