import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';



function App() {
    return (
        
            <Router>
                <div>
                    
                    <Routes>
                         <Route path="/" element={< LandingPage/>}   />


                    </Routes>
                </div>
            </Router>
        
    );
}

export default App;
