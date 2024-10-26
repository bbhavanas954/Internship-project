import React from 'react'

function Properties(props){
    return(
        <>
        <div>
            <p style={{borderBlockStyle:"outset"}}>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.IsStudent ? "Yes" : "No"}</p>
        </div>
        </>
    )
}
 export default Properties