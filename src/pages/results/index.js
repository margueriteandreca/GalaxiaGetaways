import DetailedCard from "@/components/DetailedCard";
import { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Results.module.css"

function index() {
    const [results, setResults] = useState([])
    const [resultsError, setResultsError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchResults = useCallback(async () => {
        setIsLoading(true)
        try{
        const response = await fetch("")
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

    // const mappedResults = results.map(result => <DetailedCard key={result.id} />)

    return (
        <div className={styles.screen}>
            <DetailedCard />
        </div>
    );
}

export default index;
