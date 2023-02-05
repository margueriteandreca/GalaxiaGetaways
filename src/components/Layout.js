import Image from "next/image";
const Layout = ({ children }) => {
    return (
        <>
            <nav style={{ background: "#302C3E", padding: "1rem", display: "flex", justifyContent: "center" }}>
                <a href="/">
                    <Image
                        src={"/logo03.png"}
                        width={600}
                        height={100}
                        style={{
                            width: "100%;",
                            height: "100%",
                            maxWidth: "325px",
                        }}
                    />
                </a>
            </nav>
            {children}
        </>
    );
};

export default Layout;
