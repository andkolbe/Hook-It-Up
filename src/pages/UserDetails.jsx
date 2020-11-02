import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {

    const { id } = useParams(); //can use ES6 destructuring to match id with :id on the App page

    return (
        <Layout>
            <div className="col-md-8">
                <div className="card shadow-sm mb-2">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-link" to="/">Go back</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDetails;
