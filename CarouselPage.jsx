import React from "react";
import ca1 from "../src/images/ca1.jpg";
import ca2 from "../src/images/ca2.jpg";
import ca3 from "../src/images/ca3.jpg";
import rl from "../src/images/rl.jpg";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <>
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
      
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 height"
              src={ca1}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
         
        </MDBCarouselItem>
        
        <MDBCarouselItem itemId="2">
        <MDBView>
          <img
            className="d-block w-100 height"
            src={ca3}
            alt="Second slide"
          />
        <MDBMask overlay="black-slight" />
        </MDBView>
     
      </MDBCarouselItem>

      <MDBCarouselItem itemId="3">
      <MDBView>
        <img
          className="d-block w-100 height"
          src={rl}
          alt="Third slide"
        />
      <MDBMask overlay="black-slight" />
      </MDBView>
    
    </MDBCarouselItem>
    <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100 h-20  height"
              src={ca2}
              alt="Fourth slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
        
        </MDBCarouselItem>


      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </>
  );
}

export default CarouselPage;