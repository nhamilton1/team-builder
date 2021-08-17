import React from 'react'

const FormList = (props) => {
    const { user } = props

    return(
        <div>
        {user.map((user, index) => {
            return(
            <div key={index}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>
            )
        })}
        </div>
    )
    
}

export default FormList