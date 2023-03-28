import './App.css'
import LinesChart from './components/ChartsEj'
import CryptoTable from './components/CryptoTable'
import LineCharts from './components/LineCharts'

function App() {
  let ceos = ['Sundar', 'Mark', 'Tim', 'Jeff'];

ceos.map((ceo, index) => console.log(`The ${index} is ${ceo}`));

  return (
    <div className="app">
      {/* <LineCharts></LineCharts> */}
      {/* <LinesChart></LinesChart> */}
      <CryptoTable></CryptoTable>
    </div>
  )
}

export default App
