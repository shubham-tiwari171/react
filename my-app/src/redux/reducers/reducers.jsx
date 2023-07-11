import { createSlice, current } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    data: [],
    isPostsVisible: false,
    selectedUser: [],
  },
  reducers: {
    showPosts: (state, action) => {
      const userId = action.payload;
      const userIndex = state.data.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.selectedUser = [...state.data[userIndex].posts];
        state.isPostsVisible = true;
      }
    },

    createUser: (state, action) => {
      const newUser = {
        ...action.payload,
        posts: [],
      };
      state.data = [...state.data, newUser];
    },
    upadateUser: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
        console.log(current(state.data));
      }
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.data = state.data.filter((user) => user.id !== userId);
    },
    createPost: (state, action) => {
      const { userId, newPost } = action.payload;
      const userIndex = state.data.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.data[userIndex].posts.push({
          ...newPost,
          name: state.data[userIndex].name,
          timeStamp: new Date().getTime(),
        });
      }
      state.selectedUser = state.data[userIndex].posts.sort(
        (a, b) => b.timeStamp - a.timeStamp
      );
    },
    editPost: (state, action) => {
      const { userId, post } = action.payload;
      const userIndex = state.data.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        const postIndex = state.data[userIndex].posts.findIndex(
          (p) => p.id === post.id
        );
        if (postIndex !== -1) {
          state.data[userIndex].posts[postIndex] = {
            ...state.data[userIndex].posts[postIndex],
            timeStam: new Date().toLocaleString(),
            post: post.post,
          };
          state.selectedUser = [...state.data[userIndex].posts];
        }
      }
    },
    deletePost: (state, action) => {
      const { userId, postId } = action.payload;
      const userIndex = state.data.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.data[userIndex].posts = state.data[userIndex].posts.filter(
          (post) => post.id !== postId
        );
        state.selectedUser = state.data[userIndex].posts;
      }
    },
  },
});

export const {
  createUser,
  upadateUser,
  deleteUser,
  createPost,
  showPosts,
  deletePost,
  editPost,
} = crudSlice.actions;

export default crudSlice.reducer;
