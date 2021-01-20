import React from "react";
import './App.css';
import { Form, Button, Header} from 'semantic-ui-react';
import Video from "./video"
import Ginto from "./kocha"


import { Link } from 'react-router-dom'

function App() {
  return (
    <Form >
      <Header  >
      <Button><Link to="/addvideo" >Add Video </Link></Button>
      <Button><Link to="/Login" >Logout </Link></Button>  
      </Header>
     
     <Video />
     <Ginto />
    
      
      
      
      </Form>
      
  );
}

export default App;
