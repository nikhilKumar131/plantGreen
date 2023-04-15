import styles from "../styles/Home.module.css"
function Footer() {
    return (
        <div className={styles.footer}>
            {/* <img className={styles.fimage} src='./8933.jpg' /> */}
            <a>Terms</a>
            <a>Privacy</a>
            <a>Securty</a>
            <a>Status</a>
            <a>Docs</a>
            <a>Blog</a>
            <a>About</a>
        </div>
    )
}

export default Footer;