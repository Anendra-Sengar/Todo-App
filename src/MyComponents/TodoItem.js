import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div >
           {/* <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button classNameName="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>  */}
           <div className="card">
  <div className="card-header " >
    <span >Your Todo No : {todo.sno+1}</span>   <span style={{fontWeight:"700",color:"red",paddingLeft:"800px"}}>{todo.imp}</span>
  </div>
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
        </div>
        {/* <hr/>  */}
        <br/>
        </>
    )
}
