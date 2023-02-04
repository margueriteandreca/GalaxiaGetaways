import DetailedCard from "@/components/DetailedCard";
import { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Results.module.css"
import { useRouter } from 'next/router'
import Packages from "../../../db.json";


function index() {
    const router = useRouter()
    const { zone } = router.query

    const [results, setResults] = useState(Packages.filter(packageOption => { 
        if (zone && zone !== "") {
            return packageOption[zone]
        }
        return true
    }))
    const [resultsError, setResultsError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // const fetchResults = useCallback(async () => {
    //     setIsLoading(true)
    //     try{
    //     const response = await fetch("http://localhost:3001/packages")
    //     const data = await response.json()
    //     setResults(data)
    //     setIsLoading(false)
    
    //     } catch (error) {
    //       console.log(error)
    //       setResults(error.message)
    
    //     }
    //   }, [setResults, setIsLoading, setResultsError])
    
    //   useEffect(() => {
    
    //     fetchResults();
    
    //   }, [])

    const mappedResults = results.map(result => <DetailedCard key={result.id} name={result.packageName} image={result.image} location={result.location} description={result.description} price={result.price}/>)

    return (
        <div className={styles.screen}>
            <div className={styles.resultsText}>
                Showing getaways {zone === "moon" ? "on" : "in"} the {zone}
            </div>
            {/* <DetailedCard /> */}
            {mappedResults}
        </div>
    );
}

export default index;
