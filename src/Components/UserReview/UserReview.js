import React, { useEffect, useState } from 'react';
import SingleUser from '../SignleUser/SingleUser';

const UserReview = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/userreview.json')
        .then(res => res.json())
        .then(data=> setUsers(data));
    }, []);
    return (
        <div>
            <h3 style={{color: 'red'}} className="text-center">Our User Reviews</h3>
            <div className="row g-4 mt-1 mb-3 g-5 w-75 d-flex justify-content-center text-center mx-auto">
                {
                    users?.map( user => <SingleUser
                        key={user.id}
                        user={user}>
    
                        </SingleUser>)
                }
            </div>
        </div>
    );
};

export default UserReview;