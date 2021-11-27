import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Visit(props) {
  console.log(props);
  return (
    <>
      <div>
        <h4> {props.details.cust_name}</h4>
        <div>
          <Link to={`/visitdetails/${props.details.id}`}>
           More Details
          </Link>
        </div>

        {/* <Link to={`/deletestaff/${props.details.id}`}>Delete Staff</Link> */}
        {/* <h4>Last Name : {props.details.last_name}</h4>
        <h4>Mobile No : {props.details.mobile_no}</h4>
        <h4>Email Id : {props.details.email}</h4>
        <h4>Date of Joining : {props.details.date_of_joining}</h4> */}
      </div>
    </>
  );
}

export default Visit;
