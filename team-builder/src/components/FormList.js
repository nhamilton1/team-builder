import React from 'react'

const FormList = (props) => {
    // const { user } = props

    return(
        <div>
        {props.user.map((user, index) => {
            return(
            <div key={index}>
                <p>{user.name} {user.email} {user.role}</p>
            </div>
            )
        })}
        </div>
    )
    
}

export default FormList