import React from 'react';
import styles from './Form.module.css';
import { v4 as uuidv4 } from "uuid";
import { get, post, put, deleteData } from 'D:/Function Up/react/my-app/src/Sevices/Userservice.js';

export const Form = ({ editItemId, editItem, data, todo, setTodo, setEditItem, setEditItemId, setData }) => {

    const handleChange = (e) => {
        setData(e.target.value);
        if (editItemId !== null) {
            setEditItem(e.target.value);
        }
    };

    const handleFormClick = () => {
        const todoObj = { id: uuidv4(), task: data };
        if (editItemId === null) {
            post(todoObj);
        }
        setData("");
    }
    const handleFromUpdateClick = () => { }
    return (
        <form className="add text-center my-4">
            <div style={{ display: 'flex' }}>
                <div style={{ flexGrow: 4 }}>
                    <input type="text" value={editItemId !== null ? editItem : data} className="form-control m-auto" name="add" id="add" onChange={handleChange} />
                </div>
                {editItemId === null ? <div style={{ flexGrow: 2 }}>
                    <button className={`btn btn-primary ${styles.button}`} onClick={handleFormClick} >Add</button></div>
                    : <div style={{ flexGrow: 2 }}><button className={`btn btn-primary ${styles.button}`} onClick={handleFromUpdateClick} >Update</button></div>
                }
            </div>
        </form>
    )
}
{/* <Form
          todo={todo}
          setTodo={setTodo}
          data={data}
          setdata={setData}
          editItem={editItem}
          setEditItem={setEditItem}
          editItemId={editItemId}
          setEditItemId={setEditItemId}
        /> */}