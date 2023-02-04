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

    return (
        <div className="checkout">
            <div className="checkout_container">
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
                                type="text"
                                id="name"
                                placeholder="Type Your Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Type Your Email"
                            />
                        </div>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
                <div className="right">
                    <h2>Component Card with package data goes here</h2>
                </div>
            </div>
        </div>
    );
}

export default index;
