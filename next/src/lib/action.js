"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import bcrypt from "bcrypt"

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

export const register = async (formData) => {
  const {username, email, password, img, passwordRepeat} = Object.fromEntries(previousState, formData)

  if(password !== passwordRepeat) {return "passwords do not match"}

  try {
    connectDb();

    const user = await User.findOne({username})
    if(user) {
      return "username already exist"
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    })

    await newUser.save();
    console.log("saved to db");

    return {success:true}

  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }

}

export const login = async (prevState, formData) => {
  const {username,  password} = Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })

  } catch (err) {
    console.log(err);
    
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }

}

export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};