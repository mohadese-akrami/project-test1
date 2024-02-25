// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products'; //Question:2
import Users from './Users'; //Question:2
import Verification from './Verification'; //Question:2
import VerificationCode from './VerificationCode'; //Question:3

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/VerificationCode" element={<VerificationCode />} />
      </Routes>
    </Router>
  );
}

// Example Home component
const Home = () => {
  return <div><h1>Welcome to the home page</h1></div>;
 
}

export default App;

   


