import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our Users {users.length}</h1>
            <div className='users-style'>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;