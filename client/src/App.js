import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewPirate from './components/NewPirate';
import EditPirate from './components/EditPirate';
import OnePirate from './components/OnePirate';
import AllPirates from './components/AllPirates';



function App() {
  const NotFound = () => {
    return (
      <div>Route not Found</div>
    )
  };

  return (
    <div className="App">
      <Router>
        < AllPirates path="/pirate" />
        < NewPirate path="/pirate/new" />
        < OnePirate path="/pirate/:id" />
        < EditPirate path="pirate/:pirateId/edit" />
        < NotFound default />

      </Router>
  
    </div>
  );
}

export default App;
