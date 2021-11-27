import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./salesapp/Home";
import VisitList from "./salesapp/VisitList";
import VisitDetails from "./salesapp/VisitDetails";
import AddVisit from "./salesapp/AddVisit";

function App() {
  return (
    <>
      <MyRouter />
    </>
  );
}
export default App;

function MyRouter() {
  var footer = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: 15,
  };

  return (
    <Router>
      <div className="main-body">
        <div className="header">
          <h1>ABC Systems</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet sagittis turpis. Nam porttitor eget massa sit amet porttitor.
            Sed elementum non elit sed feugiat. Nunc cursus scelerisque risus eu
            euismod. Integer nec venenatis justo. Sed sed purus sit amet lectus
            mattis ullamcorper id pharetra massa. Nunc facilisis enim id maximus
            dignissim.
          </p>
        </div>
        <div className="main">
          <div className="nav">
            <Link to="/" className="nav-elements">
              Home
            </Link>{" "}
            <Link to="/visitlist" >
              Visit List
            </Link>{" "}
            <div><Link to="/addbook" >
              Add visit
            </Link></div>
          </div>
        </div>
      </div>


//Routes are defined
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/visitlist" element={<VisitList />} />}
        <Route path="/visitdetails/:id" element={<VisitDetails />} />
        <Route path="/addbook" element={<AddVisit />} />
        {<Route path="*" element={<NoMatch />} />}
      </Routes>

      <hr />
      <p style={footer}>Copyright 2021- All Rights Reserved © </p>
    </Router>
  );

}