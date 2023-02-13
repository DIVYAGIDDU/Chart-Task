
import { useState } from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import { UserData } from "./Data";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Components/Home";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
    <Router>
    <Navbar/>
   
    <Routes>
     <Route path="/" element={<Home/>} />

        <Route path="/barchart" element={<BarChart chartData={userData} />}/>
      
      
        <Route path="/linechart" element={<LineChart chartData={userData} />}/>
      
    
       <Route path="/piechart" element={<PieChart chartData={userData} />}/> 
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
