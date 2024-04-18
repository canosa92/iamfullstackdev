import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Pages/Home.jsx'
import ItemDetailPage from "./componenetes/ItemDetailPage.jsx";
import InputCreate from "./componenetes/inputCreate.jsx";


const App = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:2999'

const fetchData = async () => {
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchData()
}, [data])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/create"> Create</Link>
        </nav>
        {data === null 
        ? (<div>cargando...</div>) 
        : 
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/create" element={<InputCreate />} />
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item}/>} />
            ))
            }
          </Routes>
        }
        
      </div>
    </Router>
  )
};

export default App;