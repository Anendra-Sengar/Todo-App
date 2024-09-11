import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [imp, setImp] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc,imp);
            setTitle("");
            setDesc("");
            setImp("");
        }
    }
    return (
        <div className="container my-3" >
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="todp-title" className="form-text">Enter Your Todo Title 📜.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                    <div id="todp-title" className="form-text">Enter Your Todo 😊.</div>
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" value="Important 🧐" className="form-check-input" onChange={(e) => setImp(e.target.value)} id="imp"/>
                <label className="form-check-label" htmlFor="exampleCheck1"> Important 🧐</label>
            </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
