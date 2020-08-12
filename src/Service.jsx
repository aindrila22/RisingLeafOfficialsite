import React from 'react';
import CarouselPage from './CarouselPage';
import About from './About';
import Card from './Card';
import online from '../src/images/online.png';
import online2 from '../src/images/online2.png';

const Service = () => {
    return (
        <>
     
        <div id="service" className="container-fluid service">
       <div className ="my">
       <h1 className="text-cent">Our Vision</h1> 
       
       <div className="row h-100">
       <div className="col-md-12 mx-auto">
       <p className="pclass"><span className="para">“Your Contribution , World’s Motivation”  ---</span>
       We thought of creating an application that contains every study tools in one place. Our vision is to build strong relationships internally and externally.
       Internally - every educational organisation has their own ecosystem by our application we call it an “environment”, everybody will be there who belongs to that particular organisation and connect with each other easily.
       Externally - Every educational organisation will get a profile by this application. Organisations can connect with other organisations and collaboratively work together.
       </p>
       
         
     
         <div className="parallax1">
         <div className="row h-100">
         <div className="col-md-10 mx-auto align-self-center">
       
     

       </div></div></div>

       <h1 className="text-cent">Our App</h1> 
      
       <div className="row">
       <div className = "col-10 mx-auto">
       <div className="row">
       <div className="col-md-6 pt-30 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
       <p className="pclass2"><span className="para">Objective :<br/></span>
       The role of this idea is to give new birth to the ecosystem to education and create strong relationships with other 
       educational organisations and also keep students , faculties , principals  of colleges and schools and researchers
        to innovate and contribute to build a new world. <br/></p>
        </div>
        
        <div className="col-lg-6 order-2 order-lg-1 online3">
        <img src={online} className="img-fluid animated" alt="app" width="600px"  /></div></div></div>

        <div className="row">
       <div className = "col-10 mx-auto">
       <div className="row">
        <div className="col-xl-6 pt-30 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
       <p className="pclass2"><span className="para">Benefits :</span><br/>
        Organisations get ranked by the internal and external performance of students, teachers and principals.
Students will no more be distracted.Most of students give more focus to their study,work, inventions and contributions 
also individuals get rewarded by their work. 
Students will not have to search for resources everywhere , all resources will be centered for a particular “environment”.
Individuals will have their own libraries and not only that they also have global and environment libraries.
No need to use many platforms for different works or providers.  </p></div>

<div className="col-xl-4 order-2 order-lg-1 online2">
<img src={online2} alt="app" width="700px"/></div>
</div></div> </div>
 
         <div class="col-12 button2">
         <button className="btn btn-outline-success button" type="submit"><strong>Download Application</strong></button>
         </div></div>
       
       
       <h1 className="text-cent">Meet Our Team</h1>
       <div className="row-100">
       <div className="col-md-12 mx-auto">
       <p className="pclass">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div></div>
         <Card/>
       
  
         <h1 className="text-cent1"></h1> 
         <h1 className="text-cent">Gallery</h1>
         <CarouselPage/>
 
      <h1 className="text-cent1">About Us</h1> 
      <div className="row-100">
      <div className="col-md-12 mx-auto">
      <p className="pclass">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div></div>
        </div>
      </div></div></div>
      <About/>

        </>
    );
};
export default Service;