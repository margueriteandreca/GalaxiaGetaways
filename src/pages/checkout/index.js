import DetailedCard from "@/components/DetailedCard";
import { use, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Packages from "../../../db.json";

function index() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const router = useRouter()
    const { id } = router.query
    const selectedPackage = Packages.find(vacationPackage => vacationPackage.id === Number(id))
    

    useEffect(() => {
        const storedStartDate = localStorage.getItem("startDate");
        const storedEndDate = localStorage.getItem("endDate");

        if (storedStartDate) {
            setStartDate(new Date(storedStartDate));
        }

        if (storedEndDate) {
            setEndDate(new Date(storedEndDate));
        }
    }, []);

    const handleReservationConfirmed = () => {
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        router.push({
            pathname: "/confirmation",
            query: { name: selectedPackage.packageName },
          })
    }

    const handleChangeName = (e) => {
        setFullName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)

    }

    return (
        <div className="checkout">
            <div className="checkout_container">
            <div className="right">
            {selectedPackage && <DetailedCard id={selectedPackage.id} name={selectedPackage.packageName} image={selectedPackage.image} location={selectedPackage.location} description={selectedPackage.description} price={selectedPackage.price} goodForFamilies={selectedPackage.goodForFamilies} romantic={selectedPackage.romantic} adventure={selectedPackage.adventure} healthClearance={selectedPackage.healthClearance} visaRequired={selectedPackage.visaRequired} isCheckout={true}/>}
            </div>

                <div className="left">
                    
                    <h1>Confirm your booking</h1>
                    <div className="dates">
                        <p>
                            <strong>Check Date In:</strong>{" "}
                            {startDate.toDateString()}
                        </p>
                        <p>
                            <strong>Check Out:</strong> {endDate.toDateString()}
                        </p>
                    </div>
                        <h2>Please input your booking info:</h2>
                    <div className="info">
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input
                                value={fullName} 
                                onChange={handleChangeName}
                                type="text"
                                id="name"
                                placeholder="Type Your Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                value={email} 
                                onChange={handleChangeEmail}
                                type="email"
                                id="email"
                                placeholder="Type Your Email"
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleReservationConfirmed}>Confirm</button>
                    </div>
                    <div className="terms">
                        * Outer-Planet Health Clearance and Required Visas MUST be obtained prior to Check-in!
                        All dates and times are in accordance with Earth Standard Time (EST).
                        All Earth-Simulating and Necessary-to-Human-Life Gear is provided by Galaxia Getaways.
                    </div>
                </div>

            </div>
        </div>
    );
}

export default index;
