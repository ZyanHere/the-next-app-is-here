import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = ({params}) => {
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
        <h1 className={styles.title}>Title</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam dolorum numquam, deserunt quae incidunt.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage