import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./containers/Layout"
import MovieDetail from "./containers/MovieDetail"
import List from "./containers/List"
import PageNotFound from "./containers/PageNotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />} />
        <Route path="/movies/:movieID" element={<MovieDetail />} />
        <Route path="/list/:name" element={<List />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
