import { useState } from "react";
import axios from "axios";


function AddVisit() {
  return (
    <>
      {" "}
      <AddVisitForm />{" "}
    </>
  );
}

function AddVisitForm() {
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
      .post("http://localhost:3001/visits", inputs)
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h2 style={{ textAlign: "center" }}>Add Book</h2>
            <div>
              <label>Customer Name: </label>
              <input
                className="i_style"
                type="text"
                name="cust_name"
                value={inputs.cust_name || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contact Person: </label>
              <input
                className="i_style"
                type="text"
                name="contact_person"
                value={inputs.contact_person || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contact Number: </label>
              <input
                className="i_style"
                type="tel"
                name="contact_no"
                value={inputs.contact_no || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Interest Product: </label>
              <input
                className="i_style"
                type="text"
                name="interest_product"
                value={inputs.interest_product || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Visit Subject: </label>
              <input
                className="i_style"
                type="text"
                name="visit_subject"
                value={inputs.visit_subject || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description: </label>
              <input
                className="i_style"
                type="text"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Visit Time: </label>
              <input
                className="i_style"
                type="date"
                name="visit_datetime"
                value={inputs.visit_datetime || ""}
                onChange={handleChange}
                required
              />
            </div>

            <br />
            <div>
              <input
                className="submit"
                style={{ float: "right" }}
                type="submit"
              ></input>
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddVisit;
