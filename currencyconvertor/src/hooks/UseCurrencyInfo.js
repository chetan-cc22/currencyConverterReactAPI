import { useEffect,useState } from "react"

function UseCurrencyInfo(currency){
    const [data, setData]=useState({})
        useEffect(()=> {
            fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json")
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
            console.log(data);
        },[currency])
        console.log(data)
        return data      
}

export default UseCurrencyInfo;

import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    // ✅ Use backticks `` for proper template literal interpolation
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency])  // res["usd"], res["inr"], etc.
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err)
      })
  }, [currency])

  return data
}

export default UseCurrencyInfo

