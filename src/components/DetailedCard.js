import styles from "../styles/Results.module.css"
import Image from "next/image"
import mypic from "../../public/images/outer/azure.jpg"
import Tag from "./Tag";

function DetailedCard({name, image, location, description, price}) {

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                layout="fill"
                className={styles.image}
                src={image}
                // alt={description}
                // width="350"
                // height="250"
                style={{borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}
                />
            </div>
            <div className={styles.details}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleInner}>
                        <div className={styles.title}>{name}</div>
                        <div className={styles.location}>{location}</div>
                    </div>
                <div className={styles.price}>${price}/night</div>
                </div>

                <Tag />
                <div className={styles.description}>{description}</div>

                <div className={styles.button}>Reserve</div>
            </div>
            
        </div>
    )

}

export default DetailedCard;