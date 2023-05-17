import { MdDelete } from 'react-icons/md'
import styles from './delete.module.css'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Delete() {
    const [todo, setTodo] = useState([])
    const [data, setData] = useState('')


    const handleChange = (e) => {
        setData(e.target.value)
    }

    const handleClick = () => {
        let dataObject = { id: uuidv4(), name: data };
        setTodo([...todo, dataObject]);
        setData('');
    }

    const handleDeleteClick = (id) => {
        console.log(id)
        const updatedTodo = todo.filter((item) => item.id !== id);
        setTodo(updatedTodo);
    }
    const getData = () => {
        let locaStorageData = localStorage.getItem("todo");
        if (locaStorageData) {
            return JSON.parse(locaStorageData)
        }
    }
    return (
        <>
            <div className='d-flex flex-column'>
                {
                    todo.map((item) => (
                        <div id={item.id} key={item.id} className={`d-flex justify-content-evenly align-items-center ${styles.container}`}>
                            <div className={`${styles.left}`}><div>{item.name}</div></div>
                            <div className={`${styles.right}`} onClick={() => handleDeleteClick(item.id)}>{<MdDelete size={25} />}</div>
                        </div>

                    ))
                }

                <div className={`d-flex justify-content-center align-items-center ${styles.input}`}>
                    <input type="text" value={data} className="form-control m-auto" name="add" id="add" onChange={handleChange} />
                    <button className="btn btn-outline-dark" style={{ height: "100%" }} onClick={handleClick}>Add</button>
                </div >
            </div >
        </>
    )
}