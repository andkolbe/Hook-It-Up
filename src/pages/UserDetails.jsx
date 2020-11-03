import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {

    const { id } = useParams(); //can use ES6 destructuring to match id with :id on the App page

    const [user, setUser] = React.useState({}); // we want the info from each object, so we use {} instead of []

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(user => setUser(user));
    }, [id]); // rerun the effect if the id changes

    return (
        <Layout>
            <div className="col-md-8">
                <div className="card shadow-sm mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">Username: {user.username}</p>
                        <p className="card-text">Email: {user.email}</p>
                        <p className="card-text">Phone: {user.phone}</p>
                        <p className="card-text">Website: {user.website}</p>
                        <Link className="btn btn-link" to="/">Go back</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDetails;