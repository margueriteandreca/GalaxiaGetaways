import { useEffect, useState } from "react";

function index() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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

    console.log(startDate);
    console.log(endDate);
    return (
        <div style={{color: "white"}}>
            
            <p>Check In: {startDate.toDateString()}</p>
            <p>Check Out: {endDate.toDateString()}</p>
        </div>
    );
}

export default index;
