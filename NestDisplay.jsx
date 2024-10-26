import React from 'react'

const NestDisplay = (props) => {
  return (
    <>
    <div
          key={props.index}
          style={{ height: 300, width: 400, backgroundColor:"pink", borderStyle:"double", justifyContent:"center"}}
        >
          <h1 key={props.item.id}></h1>
          <h2>{props.item.userId}</h2>
          <h3>{props.item.title}</h3>
          <h4>{props.item.body}</h4>
        </div>
    </>
  )
}

export default NestDisplay