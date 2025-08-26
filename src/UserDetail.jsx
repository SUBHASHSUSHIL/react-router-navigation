import { Link, useParams } from "react-router"

export default function UserDetail(){

    const paramsData = useParams();
    console.log(paramsData.id);

    return <div style={{marginLeft:20}}>
        <h1>User Details Page</h1>
        <h1>User id is : {paramsData.id}</h1>
        <h2><Link to="/users" >Back</Link></h2>
    </div>
}