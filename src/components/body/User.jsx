import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id, email, phone, username} = user
    return (
        <div className='user-style'>
            <h1>{name}</h1>
            <p>{email}</p>
            <h1>{phone}</h1>
            <Link to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;