import { getUser } from "@/lib/data"
import styles from "./postUser.module.css"

// const getData = async (userId)=> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  
//     if(!res.ok){
//       throw new Error("Something went wrong")
//     }
  
//     return res.json()
//   }

const postUser = async ({userId}) => {

    // const user = await getData(userId)
      
    
    // fetch data without api
    const posts = await getUser()

    return (
        <div className={styles.detailText}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}

export default postUser