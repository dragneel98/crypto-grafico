import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import "./cryptoTable.css"
export default function CryptoTable() {
    const [data, setData] = useState([])

    async function request() {
       const fetchRequest = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true")
       const json = await fetchRequest.json()
       setData(json)
       console.log(json)
    }
    useEffect(() => {
      request()
    }, [])
    
  return (
    <>
      <button onClick={request}>g</button>
     <table>
      <thead>
        <tr>
          <th>#</th>
          <th>moneda</th>
          <th>precio</th>
          <th>1h</th>
          <th>24h</th>
          <th>volumen</th>
          <th>market cap</th>
          <th>ultimos 7 dias</th>
        </tr>
      </thead>
      <tbody>
      {data.map((crypto, index) =>{
        return(
        <tr key={crypto.id}>
          <td> {index} </td>
          <td> <img className='crypto-logo' src={crypto.image}/> {crypto.id}</td>
          <td> {crypto.current_price} </td>
          <td> {crypto.price_change_percentage_24h}% </td>
          <td>Cocker Spaniel</td>
          <td> {crypto.total_volume} </td>
          <td> {crypto.market_cap} </td>
        </tr>
      )})}  
      </tbody>
    </table>
    </>

//     <InfiniteScroll
//   dataLength={items.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={true}
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }/>
  )
}
