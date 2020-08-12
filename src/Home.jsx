import React from "react";
import web from "../src/images/work2.png";

import Service from "./Service";


const Home = () => {
    return(
        <>
      <section id ="header" className="d-flex align-items-center">
      <div className="container-fluid">
      <div className="row">
      <div className = "col-10 mx-auto">
      <div className="row">
      <div className="col-md-6 pt-30 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
      <h2 className="brand-name">Your Contribution,<br/>World 's Motivation...</h2>
      <h2 className ="my-3"><b>RISING LEAFS : THE FUTURE DEVELOPERS</b></h2>
   
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <img src ={web} className="img-fluid animated" alt="home img" width="600px"/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <Service/>

       </> );
};
export default Home;
