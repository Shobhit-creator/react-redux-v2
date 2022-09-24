import React from 'react'

const Card = (props) => {
    const user = props.user;
    return (
        <div key={user.id} className="card">
            <img src={user.avatar} alt="Avatar" style={{width: "100%"}}></img>
            <div className='container'>
                <p><b>{user.first_name} {user.last_name}</b></p>
                <p>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
                </p>
            </div>
        </div>
    )
}

export default Card;