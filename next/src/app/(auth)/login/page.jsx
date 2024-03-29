import styles from "./login.module.css";
import { handleGithubLogin, login } from "@/lib/action";


const LoginPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with Github</button>
                </form>
                <form action= {login}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Login with credentials</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage