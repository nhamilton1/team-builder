import React from 'react'

const FormList = (props) => {
    // const { user } = props

    return(
        <div>
        {props.user.map((user, index) => {
            return(
            <div key={index} className='friend container'>
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