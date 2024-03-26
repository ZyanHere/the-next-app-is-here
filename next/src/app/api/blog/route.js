import { Post } from "@/lib/models"
import { connectDb } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectDb()
        const post = await Post.find()
        return NextResponse.json(posts)

    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch posts")
    }
}