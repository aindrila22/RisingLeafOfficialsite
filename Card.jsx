import React from 'react';
import dibbo from "../src/images/dibbo.jpeg";
import sayan from "../src/images/sayan.jpg";
import aindrila from "../src/images/aindrila.jpg";
const Card = () => {
    return (
        <>

      
        <section class="section pb-3 text-center">
        
        
          <div class="row">
        
          
          <div class="col-lg-4 col-md-12 mb-4">
        
           
          <div class="card testimonial-card  back-img">
    
            
            <div class="card-up "></div>
    
          
            <div class="avatar mx-auto white"><img src={sayan}
                alt="avatar mx-auto white" class="rounded-circle img-fluid  size"/>
            </div>
    
            <div class="card-body ">
            
              <h4 class="card-title mt-1">Sayan Mondal</h4>
              
           
              <p><b>Founder ¦ CEO </b></p> 
            </div>
            
          </div>
       
    
        </div>
      
            
            <div class="col-lg-4 col-md-12 mb-4">
        
          
              <div class="card testimonial-card back-img">
        
            
                <div class="card-up blue lighten-2">
                </div>
        
                <div class="avatar mx-auto white"><img src={aindrila}
                    alt="avatar mx-auto white" class="rounded-circle img-fluid  size"/>
                </div>
        
                <div class="card-body">
                
                  <h4 class="card-title mt-1">Aindrila Bhattacharjee</h4>
                
                 
                  <p><b>Co-founder ¦ CTO </b></p>
                </div>
        
              </div>
             
        
            </div>
          
            <div class="col-lg-4 col-md-12 mb-4">
        
           
              <div class="card testimonial-card back-img">
        
                
                <div class="card-up deep-purple lighten-2"></div>
        
              
                <div class="avatar mx-auto white"><img src={dibbo}
                    alt="avatar mx-auto white" class="rounded-circle img-fluid size"/>
                </div>
        
                <div class="card-body">
                
                  <h4 class="card-title mt-1">Debajyati Banerjee</h4>
                  
               
                  <p><b>Co-founder ¦ CPO </b></p> 
                </div>
                
              </div>
           
        
            </div>
          
        
          </div>
        
        </section>
       
      

        </>
    );
};

export default Card;