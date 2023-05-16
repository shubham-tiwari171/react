import axios from "axios";
const get = async () => {
    try {
        let res = await axios.get('http://localhost:4000/data');
        // console.log(res.data)
        // setTodo(res.data)
        return res.data;
    } catch (error) {
        console.error(error);
    }

}

const post = async (todoObj) => {
    try {
        const response = await axios.post('http://localhost:4000/data', todoObj);
        // console.log(response.data);
        // setTodo([...todo, todoObj]);
    } catch (error) {
        console.error(error);
    }
}

const put = async (editItemId, editItem) => {
    const updatedTodo = { id: editItemId, task: editItem };
    try {
        const response = await axios.put(`http://localhost:4000/data/${updatedTodo.id}`, updatedTodo);
        // const updatedTodoIndex = todo.findIndex((item) => item.id === updatedTodo.id);
        // const updatedTodoList = [...todo];
        // updatedTodoList[updatedTodoIndex] = updatedTodo;
        // setTodo(updatedTodoList);
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id) => {
    try {
        await axios.delete(`http://localhost:4000/data/${id}`);
        console.log(`Data with ID ${id} deleted successfully!`);
        // const updatedTodoList = todo.filter(item => item.id !== id);
        // setTodo(updatedTodoList);
    } catch (error) {
        console.error(`Error deleting data with ID ${id}: ${error}`);
    }
}

// const print = () => {
//     console.log("hhi")
// }

export { get, post, put, deleteData };