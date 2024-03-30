import Image from "next/image"
import styles from "./singlePost.module.css"
import { Suspense } from "react"
import { getPost } from "@/lib/data"
import postUser from "@/components/postUser/postUser"


// fetch data with an API
const getData = async (slug)=> {
  const res = await fetch(`https://localhost:3000/api/blog/${slug}`)

  if(!res.ok){
    throw new Error("Something went wrong")
  }

  return res.json()
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage =async ({params}) => {

  const {slug} = params
  const post = await getData(slug)

    // fetch data without api
  // const posts = await getPost(slug)

  return (
    <div className={styles.container}>
      {post.img && (<div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt=""
          fill
          className={styles.img}
        />
      </div>)}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar}
            src={post.img}
            alt=""
            width={50}
            height={50}
          />
          { post && (<Suspense>
            <postUser userId = {post.userId}/>
          </Suspense>)}
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage