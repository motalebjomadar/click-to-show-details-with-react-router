import { useLoaderData } from "react-router-dom";
import './Details.css'


const Details = () => {
    const user = useLoaderData();
    return (
        <div className='details-style'>
            <h1>User {user.id}: {user.name}</h1>
            <h1>Website: {user.website}</h1>
        </div>
    );
};

export default Details;