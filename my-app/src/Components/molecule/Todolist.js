import styles from "./Todolist.module.css";
import React from "react";
import { MdDelete, MdSearch, MdModeEdit, MdCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { get, post, put, deleteData } from '../../Sevices/Userservice';

// Use the functions as needed in your components
/*
notes:How to start server you have to start json server first example
step 1:
Function Up\react> npm install -g json-server 
step 2:
you have to write this comand before starting react server
Function Up\react> json-server --watch db.json --port 4000

*/

export const Todolist = () => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  let isCompleted = false;

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    if (e.target.value != "") {
      setData(e.target.value);
      if (editItemId !== null) {
        setEditItem(e.target.value);
      }
    }

  };

  const handleClick = (e) => {
    if (data === "") {
      alert("Please enter some data")
      return
    }

    const todoObj = { id: uuidv4(), task: data };
    if (editItemId === null) {
      postData(todoObj);
    }
    setData("");

  };

  const getData = async () => {
    let res = await get();
    setTodo(res);
  };

  const postData = async (todoObj) => {
    post(todoObj);
    setTodo([...todo, todoObj]);
  };

  const handleEditClick = (id, data) => {
    if (isCompleted) {
      alert("Task is compled you can't edit");
      return;
    }
    let fileteredData = todo.find((todoId) => todoId.id === id);
    setEditItemId(fileteredData.id);
    setEditItem(fileteredData.task);
  };

  const handleUpdateClick = () => {
    const updatedTodo = { id: editItemId, task: editItem };
    put(editItemId, editItem);
    const updatedTodoIndex = todo.findIndex(
      (item) => item.id === updatedTodo.id
    );
    const updatedTodoList = [...todo];
    updatedTodoList[updatedTodoIndex] = updatedTodo;
    setTodo(updatedTodoList);
  };


  const handleDeleteClick = (id) => {
    deleteData(id);
    const updatedTodoList = todo.filter((item) => item.id !== id);
    setTodo(updatedTodoList);
  };


  const handleCompleteTaskClick = (id) => {
    const todoItem = document.getElementById(id);
    if (todoItem.style.color === "") {
      todoItem.style.color = `rgb(136, 222, 7)`;
      isCompleted = true;
    } else {
      todoItem.style.color = ``;
      isCompleted = false;
    }
    return isCompleted;
  };

  return (
    <>
      <div className={styles.container}>
        {/* HEADER */}
        <header className="text-center text-light my-4">
          <h1 className="mb-4">Todo List</h1>
          <form className={styles.search}>
            <span className={styles.searchicon}>
              <MdSearch size={25} />
            </span>
            <input
              type="text"
              className={`form-control m-auto`}
              style={{ height: "3rem" }}
              name="search"
            />
          </form>
        </header>

        {/* <!--  LIST  --> */}
        <ul className="list-group todos mx-auto text-light">
          {todo.map((data) => (
            <li
              key={data.id}
              className={`${styles["list-group-item"]} d-flex justify-content-between align-items-center`}
            >
              <div className={`${styles.text}`}>
                <span style={{ marginLeft: "2rem" }}>{data.task}</span>
              </div>
              <button id={data.id} className={`btn ${styles.icon}`}>
                <MdCheckCircle
                  size={25}
                  onClick={() => handleCompleteTaskClick(data.id)}
                />
              </button>
              <div className={`btn ${styles.icon}`}>
                <MdModeEdit
                  size={25}
                  onClick={() => handleEditClick(data.id)}
                />
              </div>
              <div className={`btn ${styles.icon}`}>
                <MdDelete
                  size={25}
                  onClick={() => handleDeleteClick(data.id)}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* <!--  FORM  --> */}
        <form className="add text-center my-4">
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 4 }}>
              <input
                type="text"
                value={editItemId !== null ? editItem : data}
                className="form-control m-auto"
                name="add"
                id="add"
                onChange={handleChange}
              />
            </div>
            {editItemId === null ? (
              <div style={{ flexGrow: 2 }}>
                <button
                  className={`btn btn-primary ${styles.button}`}
                  onClick={handleClick}
                >
                  Add
                </button>
              </div>
            ) : (
              <div style={{ flexGrow: 2 }}>
                <button
                  className={`btn btn-primary ${styles.button}`}
                  onClick={handleUpdateClick}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
