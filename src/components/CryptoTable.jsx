import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function CryptoTable() {
    const [data, setData] = useState()
    async function request() {
       const fetchRequest = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true")
       const json = await fetchRequest.json()
       console.log(json);
    }
    request()
    
  return (
    <p>gg</p>
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
