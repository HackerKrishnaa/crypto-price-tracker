import Head from 'next/head'
import { useState } from 'react'
import CoinList from '../components/CoinList'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin => 
    coin.symbol.toLowerCase().includes(search.toLowerCase()) || coin.name.toLowerCase().includes(search.toLowerCase())  
     );
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value.toLowerCase())
    }
  return (
    <div style={{background: "black",color: "white"}}>
    <Layout >
      <SearchBar type= "text" placeholder="Search" onChange = {handleChange}/>
      <CoinList filteredCoins={ allCoins } />
      
    </Layout>
    </div>
  )
}

export const getServerSideProps =async () =>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}