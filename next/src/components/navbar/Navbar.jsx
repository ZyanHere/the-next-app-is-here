import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <div className={styles.container}>
          <div>
            Logo
          </div>
          <div>
            <Links/>
          </div>
        </div>
    </div>
  )
}

export default Navbar