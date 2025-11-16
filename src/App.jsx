import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./layout/AppLayout"

function App () {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route  index element={<Home />} />
      </Route>
    </Routes>
    </>

  ) 
}

export default App