import styles from "../styles/Results.module.css"

function Tag({text}) {
    return (
        <div className={styles.tagContainer}>
            <div className={styles.tagText}>{text}</div>
        </div>
    )
}

export default Tag;