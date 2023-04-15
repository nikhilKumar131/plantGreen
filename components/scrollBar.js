import styles from "../styles/Home.module.css"

function ScrollBar() {
  return (
    <div className={styles.scrollBar}>
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

export default ScrollBar;