import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Button} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://hidden-beyond-97375.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Successfully added.');
                    e.target.reset();
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="container">
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    placeholder="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" className="btn btn-primary">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;