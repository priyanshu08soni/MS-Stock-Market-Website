
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key


// const basePath1="https://www.alphavantage.co";
// export const search=async()=>{
//     const url=`${basePath1}/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=X9W96WUUOTH4JGIW`
//     const response=await fetch(url);
//     if(!response.ok){
//         const message=`An error has occured : ${response.status}`
//         throw new Error(message);
//     }
//     let result = response.json();
//     let finalResult;
//     result.then((data)=>{console.log(data);})
// }

const basePath="https://finnhub.io/api/v1";
export const searchSymbols=async(query)=>{
    const url=`${basePath}/search?q=${query}&token=cp1l41hr01qu1k1i8eqgcp1l41hr01qu1k1i8er0`
    const response=await fetch(url);
    if(!response.ok){
        const message=`An error has occured : ${response.status}`
        throw new Error(message);
    }
    return await response.json();
}
export const fetchStockDetails=async(stockSymbol)=>{
    const url=`${basePath}/stock/profile2?symbol=${stockSymbol}&token=cp1l41hr01qu1k1i8eqgcp1l41hr01qu1k1i8er0`
    const response=await fetch(url);
    if(!response.ok){
        const message=`An error has occured : ${response.status}`
        throw new Error(message);
    }
    return await response.json();
}
export const  fetchQuote=async(stockSymbol)=>{
    const url=`${basePath}/quote?symbol=${stockSymbol}&token=cp1l41hr01qu1k1i8eqgcp1l41hr01qu1k1i8er0`
    const response=await fetch(url);
    if(!response.ok){
        const message=`An error has occured : ${response.status}`
        throw new Error(message);
    }
    return await response.json();
}
export const fetchHistoricalData=async(stockSymbol,resolution,from,to)=>{
    const url=`${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=cp1l41hr01qu1k1i8eqgcp1l41hr01qu1k1i8er0`
    const response=await fetch(url);
    if(!response.ok){
        const message=`An error has occured : ${response.status}`
        throw new Error(message);
    }
    return await response.json();
}