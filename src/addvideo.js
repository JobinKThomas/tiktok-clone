import React, {useState} from "react";
import {Grid, Form, Segment, Header, Button, Message} from 'semantic-ui-react';
import './Footer.css';
import { Link,useHistory} from 'react-router-dom'



const Video = () =>{
    const history=useHistory()

    let vdo ={
        url : "",
        // description: "",
        // song:"", 
    }
    let errors = [];
    const [userState, setuserState] = useState('');
    const [errorState, seterrorState] = useState(errors);
    const addVideo=()=>{
        vdo.url=userState.url
      
        fetch("http:///localhost:3000/addvideo", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
    
            },
            body: JSON.stringify(vdo),
            })    
            .then(response=>response.json())
            .then((response) => {
                if (response.result.status === "sucess") {
                    console.log(response.result)
                    console.log(
                        'Video successfully uploaded'
                
                       
                    );
                    alert("video added ")
                    history.push('/')
                } else {
                    console.log('Video uploaded Unsuccessful');
                }
    
            }).catch((error) => {
                console.log(error);
            });
        
    }
    const handleInput = (event) =>{
        let target = event.target;
        setuserState((currentState)=> {
            let currentuser = {...currentState};
            currentuser[target.name] = target.value;
            return currentuser;
        })
    }
    const checkForm = () => {
        if (isFormEmpty()) {
            seterrorState((error) => error.concat({ message: "Please fill in all fields" }));
            return false;
        }
        return true;
    }

    const isFormEmpty = () => {
        return !userState.url.length 
    }
    const formaterrors = () => {
        return errorState.map((error, index) => <p key={index}>{error.message}</p>)
    }
    const onSubmit = (event) => {
        seterrorState(() => []);
        if (checkForm()) {
           

        }
    }
     return <Grid verticalAlign="middle" textAlign="center" className="grid-form" >
        <Grid.Column style={{ maxWidth: '500px' }}>
            <Header >
                
                <h2>Add Video </h2>
            </Header>
            <Form onSubmit={onSubmit}>
                <Segment stacked>
                    <Form.Input
                    name="url"
                    value={userState.url}
                    onChange={handleInput}
                    type="text"
                    placeholder="Enter URL"
                    />
                    {/* <Form.Input
                    name="description"
                    value={userState.description}
                    onChange={handleInput}
                    type="text"
                    placeholder="Enter description"
                    />
                     <Form.Input
                    name="song"
                    value={userState.song}
                    onChange={handleInput}
                    type="text"
                    placeholder="Title"
                    /> */}
                </Segment>
                <Button 
                onClick={addVideo}>Add</Button>
            </Form>
            
        </Grid.Column>
    </Grid>
}

export default Video ;
