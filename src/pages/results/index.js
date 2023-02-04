import DetailedCard from "@/components/DetailedCard";
import { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Results.module.css"

// HAVING ISSUES MAKING NEXT/IMAGE COMPONENT RESPONSIVE

function index() {
    const [results, setResults] = useState([])
    const [resultsError, setResultsError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchResults = useCallback(async () => {
        setIsLoading(true)
        try{
        const response = await fetch("http://localhost:3001/packages")
        const data = await response.json()
        setResults(data)
        setIsLoading(false)
    
        } catch (error) {
          console.log(error)
          setResults(error.message)
    
        }
      }, [setResults, setIsLoading, setResultsError])
    
      useEffect(() => {
    
        fetchResults();
    
      }, [])


    const mappedResults = results.map(result => <DetailedCard key={result.id} name={result.packageName} image={result.image} location={result.location} description={result.description} price={result.price}/>)

    return (
        <div className={styles.screen}>
            {/* <DetailedCard /> */}
            {mappedResults}
        </div>
    );
}

export default index;
