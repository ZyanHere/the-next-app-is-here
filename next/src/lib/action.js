"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post } from "./models";
import { connectDb } from "./utils";

export const addPost= async (formData) => {
    

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectDb();
        const newPost = new Post({
          title,
          desc,
          slug,
          userId,
        })

        await newPost.save();
        console.log("saved to db");

        revalidatePath("/blog");

      } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
      }

    console.log(title, desc, slug, userId)
}

export const deletePost = async(formData) => {
    const {id} = Object.fromEntries(formData)

    try {
        connectDb();
        await Post.findByIdAndDelete(id)
        console.log("deleted from db")

        revalidatePath("/blog")
        
    } catch (error) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};