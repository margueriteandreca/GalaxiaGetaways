function HotDealsCards({ packageName, image, location, price }) {

    return (
        <>
            <style jsx>
                {`
                    .card_container {
                        transition: padding 0.15s;
                        overflow: hidden;
                        border-top-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                        transition: all 0.15s;
                        margin-bottom: 1rem;
                        margin: auto;
                    }
                    .image, .panel {
                        transition: all 0.25s;
                    }
                    .card_container:hover > .panel {
                        background: #4B5A65 !important;
                    }
                    .card_container:hover > .image {
                        transform: scale(1.05);
                    }
                `}
            </style>
            <div
                className="card_container"
                style={{ width: "275px", cursor: "pointer", height: "100%" }}>
                <div
                    className="image"
                    style={{
                        height: "200px",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderTopLeftRadius: "8px",
                    }}></div>
                <div
                    className="panel"
                    style={{
                        textAlign: "center",
                        backgroundColor: "#333740",
                        color: "#F5ECFF",
                        padding: "2rem 1rem",
                        borderBottomRightRadius: "8px",
                        height: "130px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                    <h2 style={{ fontSize: "1.25rem", margin: "0" }}>
                        {packageName}
                    </h2>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            textAlign: "left",
                        }}>
                        <p style={{ maxWidth: "150px" }}>{location}</p>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "600",
                            }}>
                            ${price}/night
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotDealsCards;
