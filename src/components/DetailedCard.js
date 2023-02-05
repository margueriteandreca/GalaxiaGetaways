import styles from "../styles/Results.module.css"
import Image from "next/image"
import mypic from "../../public/images/outer/azure.jpg"
import Tag from "./Tag";

function DetailedCard({name, image, location, description, price, adventure, romantic, healthClearance, visaRequired, goodForFamilies}) {


    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <div
                className="image"
                style={{
                        height: "100%",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px"
                    }}>

                    </div>
            </div>
            <div className={styles.details}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleInner}>
                        <div className={styles.title}>{name}</div>
                        <div className={styles.location}>{location}</div>
                    </div>
                <div className={styles.price}>${price}/night</div>
                </div>
                <div className={styles.tags}>
                    { goodForFamilies && <Tag text={"Family Friendly"}/> }
                    { romantic && <Tag text={"Romantic"}/> }
                    { adventure && <Tag text={"Adventure"}/> }
                    { healthClearance && <Tag text={"OP* Health Clearance Required"}/> }
                    { visaRequired && <Tag text={"Visa Required"}/> }
                </div>
                
                <div className={styles.description}>{description}</div>

                <div className={styles.button}>Reserve</div>
            </div>
            
        </div>
    )

}

export default DetailedCard;