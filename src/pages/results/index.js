import DetailedCard from "@/components/DetailedCard";
import { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Results.module.css"
import { useRouter } from 'next/router'
import Packages from "../../../db.json";


function index() {
    const router = useRouter()
    const { zone } = router.query

    const results = Packages.filter(packageOption => { 
        if (zone && zone !== "") {
            return packageOption[zone]
        }
        return true
    })
    const [resultsError, setResultsError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const resultsText = () => {
        switch (zone) {
            case "inner":
                return "EXPLORING GETAWAYS IN THE INNER SOLAR SYSTEM";
            case "outer": 
                return "EXPLORING GETAWAYS IN THE OUTER SOLAR SYSTEM";
            case "moon": 
                return "EXPLORING GETAWAYS ON EARTH'S MOON";
            default: 
                return "EXPLORING ALL GETAWAYS IN OUR SOLAR SYSTEM"


        }
    }


    const mappedResults = results.map(result => <DetailedCard key={result.id} id={result.id} name={result.packageName} image={result.image} location={result.location} description={result.description} price={result.price} goodForFamilies={result.goodForFamilies} romantic={result.romantic} adventure={result.adventure} healthClearance={result.healthClearance} visaRequired={result.visaRequired}/>)


    return (
        <div className={styles.screen}>
            <div className={styles.resultsText}>
                {resultsText()}
            </div>
            <div className={styles.resultsContainer}>
            {mappedResults}
            </div>
        </div>
    );
}

export default index;
