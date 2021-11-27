import { useState, useEffect } from "react";
import axios from "axios";
import Visit from "./Visit";
import "./index.css";

function VisitList() {
  //initializwe ths usestate to empty
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/visits").then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setVisits(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2 className="visit">Visit List</h2>
        <ul className="form-container">
          {visits.map((visit) => (
            <li key={visit.id}>
              <Visit details={visit} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default VisitList;