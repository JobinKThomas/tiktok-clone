import React, {useState} from "react";
import {Grid, Form, Segment, Header, Button, Message} from 'semantic-ui-react';
import { Link,useHistory } from 'react-router-dom';
import "./auth.css"


const Register = () =>{
    const history=useHistory()

    let user ={
        username : "",
        email : "",
        password :"",
        confirmPassword : ""
    }
    
    let errors = [];
    
    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(errors);
    const [isSuccess, setIsSuccess] = useState(false);


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
         else if (!checkPassword()) {
             return false;
         }
         return true;
    }

    const isFormEmpty = () => {
        return !userState.username.length ||
             !userState.password.length ||
             !userState.confirmPassword.length ||
             !userState.email.length;
    }
    const checkPassword = () => {
         if (userState.password.length < 8) {
             seterrorState((error) => error.concat({ message: "Password length should be greater than 8" }));
             return false;
         }
         else if (userState.password !== userState.confirmPassword) {
             seterrorState((error) => error.concat({ message: "Password and Confirm Password does not match" }));
             return false;
         }
         return true;
    }
    const registeruser=()=>{
    user.username=userState.username
    user.email=userState.email
    user.password=userState.password
    fetch("http:///localhost:3000/register", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(user),
        })    
        if(checkForm()){
        console.log(    'Registration Successful. Please Login to proceed');
        
        // .then(response=>response.json())
        // .then((response) => {
        //     if (response.status === "sucess") {
        //         console.log(response.result)
        //         console.log(
        //             'Registration Successful. Please Login to proceed'
            
                   
                //);
                alert("Registration Successful. Please Login to proceed ")
                setIsSuccess(true) 
                history.push('/login')


            } else {
                console.log('Registration Unsuccessful');
            }

        // }).catch((error) => {
        //     console.log(error);
        // });
    
}
    const onSubmit = (event) => {
        setIsSuccess(false);
         registeruser(()=>[])
         seterrorState(() => []);

         if (checkForm()) {
        //     setIsLoading(true);
        //     firebase.auth()
        //         .createUserWithEmailAndPassword(userState.email, userState.password)
        //         .then(createdUser => {
        //             setIsLoading(false);
        //             updateuserDetails(createdUser);
        //         })
        //         .catch(serverError => {
        //             setIsLoading(false);
        //             seterrorState((error) => error.concat(serverError));
        //         })

        }
    }
    const formaterrors = () => {
        return errorState.map((error, index) => <p key={index}>{error.message}</p>)
    }
    return (<Grid verticalAlign="middle" textAlign="center" className="grid-form" >
        <Grid.Column style={{ maxWidth: '500px' }}>
            <Header >
                
                <h2>Register</h2>
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
                    name="email"
                    value={userState.email}
                    icon="mail"
                    iconPosition="left"
                    onChange={handleInput}
                    type="email"
                    placeholder="Email"
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
                    <Form.Input
                    name="confirmPassword"
                    value={userState.confirmPassword}
                    icon="lock"
                    iconPosition="left"
                    onChange={handleInput}
                    type="password"
                    placeholder="Confirm password"
                    />
                </Segment>
                <Button onClick={registeruser}>Submit</Button>
            </Form>
            {errorState.length > 0 && <Message error>
                <h3>Errors</h3>
                {formaterrors()}
            </Message>
            }
            {isSuccess && <Message sucess>
                <h3>Successfully Registered. Please Login to proceed</h3>
            </Message>
            }
            <Message>
                Already an User? <Link to="/login" >Login </Link>
            </Message>
        </Grid.Column>
    </Grid>)
}

export default Register ;
