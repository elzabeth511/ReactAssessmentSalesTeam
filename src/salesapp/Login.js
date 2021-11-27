import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
    localStorage.clear();
    return (<>
        <h1>Please Login</h1>
        <MyForm />
    </>);

}

function MyForm(props) {
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        //during change of every element.
        //save name in 'name' and its value in value
        const name = event.target.name;
        const value = event.target.value;
        // setInputs is the function that updates the state.
        setInputs(values => ({ ...values, [name]: value }))

    }

    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);

        axios
            .post('http://localhost:5000/login', inputs)
            .then(response => {
                //alert(response.data.user.id)
                //alert(response.data.accessToken)
                localStorage.setItem('mytoken', response.data.accessToken)
                //navigate('/stafflist')
                window.location = '/staffs'

            })
            .catch(error => {
                localStorage.clear();
                //alert("got error with no data")
                if (error.response) {
                    alert(error.response.data); // => the response payload 
                }

            })

    }

    return (
        < form onSubmit={handleSubmit} >

            < label > User Id:
                < input type="email" name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    required />
                < br /> <br />
            </label >

            < label > Password:
                < input type="password" name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required />
                < br /> <br />
            </label >

            < input type="submit" />
        </form >
    )

}
export default Login;