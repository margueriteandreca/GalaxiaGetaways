import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import DetailedCard from "@/components/DetailedCard";
import styles from "../../styles/Confirmation.module.css"


function index() {
    const router = useRouter()
    const { name } = router.query
    const [confirmationNumber, setConfirmationNumber] = useState(0)

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const storedStartDate = localStorage.getItem("startDate");
        const storedEndDate = localStorage.getItem("endDate");
        
        const storedFullName = localStorage.getItem("fullName");
        const storedEmail = localStorage.getItem("email");

        if (storedStartDate) {
            setStartDate(new Date(storedStartDate));
        }

        if (storedEndDate) {
            setEndDate(new Date(storedEndDate));
        }

        if (storedFullName) {
            setFullName(storedFullName)
        }

        if (storedEmail) {
            setEmail(storedEmail)
        }

        setConfirmationNumber(Math.floor(Math.random() * 10000000000))
    }, []);

    return (
        <div className={styles.screen}>
            <div className={styles.confirmation}> RESERVATION CONFIRMED: #{confirmationNumber}</div>
            <span>Get ready, {fullName}! Your reservation for 
            <span className={styles.bold}> {name} </span> 
            has been successfully confirmed for:</span>
            <div>
                <p>Check In: {startDate.toDateString()}</p>
                <p>Check Out: {endDate.toDateString()}</p>
            </div>

            <div>The full details of your trip, and payment options have been sent to:</div>
            <div className={styles.bold}>{email}</div>

            
        </div>
    );
}

export default index;
