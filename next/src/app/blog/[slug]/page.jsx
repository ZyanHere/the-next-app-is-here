import Image from "next/image"
import styles from "./singlePost.module.css"

const getData = async (slug)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if(!res.ok){
    throw new Error("Something went wrong")
  }

  return res.json()
}

const SinglePostPage =async ({params}) => {

  const {slug} = params
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src=""
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar}
            src=""
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Subh B</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>20-03-24</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage