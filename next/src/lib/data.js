// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];
// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

import { Post, User } from "./models";
import { connectDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
  // noStore()
    try {
      connectDb();
      const posts = await Post.find();
      return posts;

    } catch (error) {
      console.log(error)
      throw new Error("failed to fetch posts!")
    }
};

export const getPost = async (slug) => {
    try {
      connectDb();
      const post = await Post.findOne({slug});
      return post;
      
    } catch (error) {
      console.log(error)
      throw new Error("failed to fetch posts!")
    }
}

export const getUser = async (id) => {
  noStore()
  try {
    connectDb();
    const user = await User.findById(id);
    return user;
    
  } catch (error) {
    console.log(error)
    throw new Error("failed to fetch posts!")
  }
}

export const getUsers = async (id) => {
  try {
    connectDb();
    const users = await User.find(id);
    return users;
    
  } catch (error) {
    console.log(error)
    throw new Error("failed to fetch posts!")
  }
}