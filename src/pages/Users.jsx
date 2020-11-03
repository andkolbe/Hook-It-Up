import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {

        async function getUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            setUsers(users);
        }

        getUsers();

    }, []);

   

    return (
        <Layout>
            <h1 className="text-center">Highly Sensitive Information About These People</h1>
            <div className="col-10">
                <ul className="list-group list-group-flush">
                    {users.map(user => (
                        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {user.name}
                            <Link className="btn btn-link" to={`/${user.id}/details`}>Click Here To Steal Identity!</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}

export default Users;