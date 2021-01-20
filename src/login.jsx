import React, {useState} from "react";
import {Grid, Form, Segment, Header, Button, Message} from 'semantic-ui-react';
import "./auth.css"
import { Link,useHistory} from 'react-router-dom'


const Login = () =>{
    const history=useHistory()

    let user ={
        username : "",
        password : "",
    }
    let errors = [];
    let log=[];
    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(errors);
    const [isLogin, setIsLogin] = useState(false);
    const [logg,setLogg] = useState(log);
    
    const loginuser=()=>{

        user.username=userState.username
        user.password=userState.password

        fetch("http:///localhost:3000/login", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
    
            },
            body: JSON.stringify(user),
            })    
            .then(response=>response.json())
            .then((response) => {
                if (response.result.status === "sucess") {
                    console.log(response.result)
                    console.log('Login Successful');
                    alert("Login Successfull")
                    setIsLogin(true)
                    history.push('/')
                } else {
                    alert("Login Failed")
                    console.log('Login Unsuccessful');
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
    // const job = () =>{
    //     if(setIsLogin(true)){
    //         {message:"login success"}
    //     }
    //     else{
    //         {message:"login failed"}
    //     }
        
    // }
    const checkForm = () => {
        if (isFormEmpty()) {
            seterrorState((error) => error.concat({ message: "Please fill in all fields" }));
            return false;
        }
        return true;
    }

    const isFormEmpty = () => {
        return !userState.password.length ||
            !userState.username.length;
    }
    const formaterrors = () => {
        return errorState.map((error, index) => <p key={index}>{error.message}</p>)
    }
    const onSubmit = (event) => {
        seterrorState(() => []);
        // setIsLogin(false)
        if (checkForm()) {
            // setIsLoading(true);
            // firebase.auth()
            //     .signInWithEmailAndPassword(userState.email, userState.password)
            //     .then(user => {
            //         setIsLoading(false);
            //         console.log(user);
            //     })
            //     .catch(serverError => {
            //         setIsLoading(false);
            //         seterrorState((error) => error.concat(serverError));
            //     })

        }
    }
     return <Grid verticalAlign="middle" textAlign="center" className="grid-form" >
        <Grid.Column style={{ maxWidth: '500px' }}>
            <Header >
                
                <h2>Login </h2>
            </Header>
            <Form onSubmit={onSubmit}>
                <Segment stacked>
                    <Form.Input
                    name="username"
                    value={userState.username}
                    icon="user"
                    iconPosition="left"
                    onChange={handleInput}
                    type="text"
                    placeholder="User Name"
                    />
                    
                    <Form.Input
                    name="password"
                    value={userState.password}
                    icon="lock"
                    iconPosition="left"
                    onChange={handleInput}
                    type="password"
                    placeholder="Password"
                    />
                    
                </Segment>
                <Button onClick={loginuser}>Login</Button>
            </Form>
            {errorState.length > 0 && <Message error>
                <h3>Errors</h3>
                {formaterrors()}
            </Message>
            }
            {/* {isLogin && <Message sucess>
                <h3>Successfully Loggedin. Please Login to proceed</h3>
            </Message>
            } */}
            {/* <Message >
            {job()}
            </Message> */}
            <Message>
                Not an User? <Link to="/register" >Register </Link>
            </Message>
        </Grid.Column>
    </Grid>
}

export default Login ;
