import React from 'react'
import Cards from './Cards.jsx'
import Properties from './Properties.jsx'
import Bi from './BT.jsx'
import Loop from './Loop.jsx'
import Property from './Textfields.jsx'
import Condition from './Conditionalrender.jsx'
import Conditionren from './conditions.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Hello from './Pages/Events.jsx'
import SimpleForm from './Forms.jsx'
import ToggleButton from './hookus.jsx'
import SimpleCounter from './hookue.jsx'
import Component1 from './hookuc.jsx'

function Hyy() {
  return (
    <>
      <div style={{ color: "Pink", backgroundColor: "Blue" }}>
        Hlooo<br />
      </div>
    </>
  )
}

function App() {
  const Pets = ['Dog', 'Cat', 'Rabbit'];
  return (
    <>
      <div style={{ border: '2px solid white', padding: '10px',textAlign:"center",marginLeft:"500px"}}>
        Hy Everyone
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> <Route index element={<Home />} /><Route path="blogs" element={<Blogs />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
        <Hyy></Hyy><br />
        <Hello></Hello><br/><br/>
        <Cards></Cards>
        <Condition isGoal={true} />
        <Condition isGoal={false} />
        <Properties name="Bhavana" age={20} IsStudent={true} />
        <Properties name="Yashwanth" age={16} IsStudent={false} />
        <Conditionren Pets={Pets} />
        <SimpleForm/>
        <Bi></Bi>
        <Property></Property>
        <Loop></Loop>
        <ToggleButton/>
        <SimpleCounter/>
        <Component1/>
      </div>
    </>
    )
}

export default App
