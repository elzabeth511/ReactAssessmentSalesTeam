import { useState } from "react";
import axios from "axios";


function AddVisit() {
  return (
    <>
 
      <AddVisitForm />
    </>
  );
}

function AddVisitForm() {
  
  //Inline styles assigned to variables
  var bg = {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120vh',
        width: '100%',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        fontFamily: 'arial',


    }
    var f_style = {
        border: ' 25px solid #227093',
        padding: 50,
        background: 'linear-gradient(to right,  #373b44, #4286f4)'
    }
    var d_style = {
        paddingTop: '2vh',
        height: "auto",
        fontSize: 17,



    }
    var i_style = {
        float: 'right',
        height: 20,

    }
    var b_style = {

        background: '#218c74',
        fontSize: 20,
        

    }
    var c_style = {
        float: 'right',
        background: '#b33939',
        fontSize: 20,

    }
    var l_style = {
        textAlign : "left"
    }
    
  //initialize to empty
  const [inputs, setInputs] = useState({});

  //handles the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state with setInputs
    setInputs((values) => ({ ...values, [name]: value }));
  }
  //gets invoked upon submission 
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

            <div className="bodyform">
                <form style={f_style} onSubmit={handleSubmit} action="">
                    <h1 className="labels"> Visitor Registration Form </h1>
                    <div>
                        </div>
                    <div style={d_style}>
                        <label style={l_style}>Customer Name : </label>
                        <input style={i_style} type="text" name="cust_name" id="" value={inputs.cust_name || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={d_style}>
                        <label style={l_style}>Contact Person : </label>
                        <input style={i_style} type="contact_person" name="contact_person" id="" value={inputs.contact_person || ""}
                            onChange={handleChange}
                        />
                    </div>
                   
                    <div style={d_style}>
                        <label style={l_style} >  Enter Contact Number : </label>
                        <input style={i_style} type="tel" autoComplete='off' name="contact_no" id="" value={inputs.contact_no || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={d_style}>
                        <label style={l_style}>Interested Product : </label>
                        <input style={i_style} type="text" name="interest_producte" id="" value={inputs.interest_product || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={d_style}>
                        <label style={l_style}>Subject of Visit: </label>
                        <input style={i_style} type="text" name="visit_subject" id="" value={inputs.visit_subject || ""}
                            onChange={handleChange}
                        />
                    </div>
                        <div style={d_style}>
                        <label style={l_style}>Date of Visit: </label>
                        <input style={i_style} type="date" name="visit_datetime" id="" value={inputs.visit_datetime || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={d_style}>
                        <label style={l_style}>Description : </label>
                        <input style={i_style} width='30' type="date" name="description" id="" value={inputs.description || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={d_style}>
                        <input type="submit" value="Submit" style={b_style} />
                        <input type="reset" name='clear' value="Clear" style={c_style} />
                    </div>
                </form>
            </div>
        </>
    )

}
export default AddVisit;
