import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "../styles/checkout.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
