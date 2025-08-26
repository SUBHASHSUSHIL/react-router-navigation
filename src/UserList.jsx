import { Link } from "react-router"

export default function UserList(){
    const userData=[
        {id:1,name:'Sushil'},
        {id:2,name:'Subhash'},
        {id:3,name:'Sandeep'},
        {id:4,name:'Pradip'},
        {id:5,name:'Sagar'}
    ]
    return <div style={{marginLeft:20}}>
        <h1>User List Page</h1>
        {
            userData.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                </div>
            ))
        }
    </div>
}