import styles from "../styles/Results.module.css"
import Image from "next/image"
import mypic from "../../public/images/outer/azure.jpg"
import Tag from "./Tag";

function DetailedCard() {

    return (
        <div className={styles.card}>
            <div className={styles.images}>
                <Image
                src={mypic}
                // alt={description}
                width="350"
                height="250"
                style={{borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}
                />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>Title of Vaca</div>
                <div className={styles.location}>Location</div>
                <Tag />
                <div className={styles.description}>"Unwind and rejuvenate at The Soothing Sulfuric Springs Spa, a luxurious spa resort located in the heart of Venus' most stunning region. Surrounded by breathtaking landscapes, this tranquil oasis offers guests the opportunity to escape from the stresses of everyday life and unwind in style."</div>
            </div>
        </div>
    )

}

export default DetailedCard;