import React from 'react'
import Home from './routes/Home'
import { Routes, Route } from "react-router-dom";
import Detail from './routes/Detail';

const App = () => {
  return (
    <>
			<Routes>
					<Route path="/" element={<Home/>}> </Route>
                    <Route path="/detail/:id" element={<Detail/>}> </Route>
			</Routes>
    </>
  )
} 

export default App