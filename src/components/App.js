import React from 'react';
import '../Index.css';
import ContainersWithCards from '../containers/ContainersWithCards'
import Buttons from '../components/Buttons'

const App = () => (
  <div>
    <div className="row-flex vcenter hcenter" >
      <div className="desktop-1-of-2" style={{display: 'flex', textAlign: "center"}}>
        <ContainersWithCards />
      </div>
    </div>
    <div style={{textAlign:"center", margin: 10}}>
      <Buttons />
    </div>

  </div>

)

export default App;
