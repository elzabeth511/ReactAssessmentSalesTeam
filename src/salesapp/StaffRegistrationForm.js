import { useState } from "react";
import axios from "axios";

function StaffRegistration() {
  return (
    <>
      {" "}
      <StaffRegForm />{" "}
    </>
  );
}

function StaffRegForm() {
  var bg = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    width: "100%",
    fontFamily: "Verdana",
    // backgroundColor:'linear-gradient(to right, rgba(162, 193, 242,0), rgba(162, 193, 242,1))'
    //   backgroundColor: "rgb(162, 193, 242)",
  };

  var i_style = {
    paddingTop: 5,
    borderColor: "none",
    float: "right",
    borderStyle: "none",
    fontFamily: "Verdana",
  };
  var lab_style = {
    paddingTop: 20,
    fontFamily: "Verdana",
  };
  var btn_lft = {
    padding: 5,
    fontFamily: "Verdana",

    //padding:5
  };
  var btn_ryt = {
    float: "right",
    fontFamily: "Verdana",

    padding: 5,
  };
  var frmCont = {
    borderStyle: "outset",
    padding: 10,
    backgroundColor: "#11bd75",
    fontFamily: "Verdana",
  };
  //initialize to empty
  const [inputs, setInputs] = useState({});

  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent the default html form submit behaviour
    event.preventDefault();
    //printing the values to console
    console.log(inputs);
    axios
    //API for inputting the data
      .post("http://localhost:5000/employees", inputs)
      .then((response) => {
        console.log("fullfilled...");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    //  window.location('')
  }

  return (
    <>
      <div style={bg}>
        <form onSubmit={handleSubmit}>
          <div style={frmCont}>
            <h2>Staff Registration Form</h2>
            <div style={lab_style}>
              <label>First Name: </label>
              <input
                style={i_style}
                type="text"
                name="firstName"
                value={inputs.firstName || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div style={lab_style}>
              <label>Last Name: </label>
              <input
                style={i_style}
                type="text"
                name="lastName"
                value={inputs.lastName || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div style={lab_style}>
              <label>Age: </label>
              <input
                style={i_style}
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div style={lab_style}>
              <label>Gender: </label>
              <input
                style={i_style}
                type="text"
                name="gender"
                value={inputs.gender || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div style={lab_style}>
              <label>Address: </label>
              <input
                style={i_style}
                type="textarea"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div style={lab_style}>
              <label>Mobile Number: </label>
              <input
                style={i_style}
                type="tel"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
                required
              />

              <div style={lab_style}>
                <input style={btn_lft} type="submit"></input>
                <button style={btn_ryt}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default StaffRegistration;
