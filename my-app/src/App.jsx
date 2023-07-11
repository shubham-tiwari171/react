import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createUser,
  upadateUser,
  deleteUser,
  createPost,
  showPosts,
  deletePost,
  editPost,
} from "./redux/reducers/reducers";
import { v4 as uuidv4 } from "uuid";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function App() {
  const { data, selectedUser, isPostsVisible } = useSelector(
    (state) => state.crud
  );
  console.log(selectedUser);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [post, setPost] = useState({ id: "", timeStamp: "", post: "" });
  const [isEditable, setEditable] = useState(false);
  // const [postSection, setPostSection] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isPostEditable, setIsPostEditable] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditable) {
      dispatch(upadateUser(user));
      setEditable(false);
    } else {
      if (
        user.address === "" &&
        user.email === "" &&
        user.name === "" &&
        user.phone === ""
      ) {
        return;
      }
      const newUser = { ...user, id: uuidv4() };
      dispatch(createUser(newUser));
    }
    setUser({ id: "", name: "", email: "", phone: "", address: "" });
  };

  const habdleEditClick = (id) => {
    const user = data.find((user) => user.id === id);
    if (user) {
      setEditable(true);
      setUser(user);
    }
  };

  const habdleDeleteClick = (id) => {
    dispatch(deleteUser(id));
  };

  const handlePostVisibleClick = (postId) => {
    if (postId) {
      const selectedUser = data.find((user) => user.id === postId);
      if (selectedUser) {
        dispatch(showPosts(selectedUser.id));
        setSelectedUserId(postId);
      }
    }
  };

  const handlePostChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handlePostClick = (e) => {
    e.preventDefault();
    if (isPostEditable) {
      dispatch(editPost({ userId: selectedUserId, post: post }));
      setPost({ id: "", timeStamp: "", post: "" });
    } else {
      if (post.post !== "") {
        const newPost = {
          ...post,
          id: uuidv4(),
          timeStamp: new Date().getTime(),
        };
        dispatch(createPost({ userId: selectedUserId, newPost: newPost }));
      }
      setPost({ id: "", timeStamp: "", post: "" });
    }
  };

  const handleDeletePostClick = (postId) => {
    dispatch(deletePost({ userId: selectedUserId, postId: postId }));
  };

  const handleEditPostClick = (postId) => {
    const selectedPost = selectedUser.find((post) => post.id === postId);
    if (selectedPost) {
      setPost({
        id: postId,
        timeStamp: selectedPost.timeStamp,
        post: selectedPost.post,
      });
      setIsPostEditable(true);
    }
  };

  return (
    <div className="user-container ">
      <div className="left-container">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              id="email"
              type="text"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              id="phone"
              type="text"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              id="address"
              type="text"
              value={user.address}
              onChange={handleChange}
              placeholder="Address"
            />
            <button type="submit" className="btn btn-outline-danger btn-lg">
              {isEditable ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        <h2>Result</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <AiTwotoneEdit
                    style={{ cursor: "pointer", marginRight: ".5rem" }}
                    size={30}
                    onClick={() => habdleEditClick(user.id)}
                  />
                  <MdDelete
                    style={{ cursor: "pointer" }}
                    size={30}
                    onClick={() => habdleDeleteClick(user.id)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handlePostVisibleClick(user.id)}
                  >
                    Post
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-container">
        {isPostsVisible && (
          <>
            <div className="input-container">
              <form style={{ width: "100%" }}>
                <textarea
                  id="post"
                  type="text"
                  value={post.post}
                  onChange={handlePostChange}
                  placeholder="Write your post..."
                  className="post-area"
                />
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-lg"
                  style={{ marginTop: "-3rem" }}
                  onClick={handlePostClick}
                >
                  Post
                </button>
              </form>
            </div>
            {selectedUser.length > 0 &&
              selectedUser.map((item) => (
                <div
                  key={item.id}
                  className="notifications-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <div className="success">
                    <div className="flex">
                      <div className="success-prompt-wrap">
                        <div className="heading">
                          <p className="success-prompt-heading">{item.name}</p>
                          <p className="success-prompt-heading">
                            {item.timeStamp}
                          </p>
                        </div>
                        <div className="success-prompt-prompt">
                          <p>{item.post}</p>
                        </div>
                        <div className="success-button-container">
                          <button
                            type="button"
                            className="success-button-main"
                            onClick={() => handleEditPostClick(item.id)}
                          >
                            Edit Post
                          </button>
                          <button
                            type="button"
                            className="success-button-main"
                            onClick={() => handleDeletePostClick(item.id)}
                          >
                            Delete Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
