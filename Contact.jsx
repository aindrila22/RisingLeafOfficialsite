import React from 'react';


const Contact = () => {
    return (
        <>
   <div className="my-5">
   <h1 className="text-center"><b>Contact Us</b></h1><br/>
   </div>
   <div className="container contact_div">
   <div className="row">
   <div className="col-md-6 col-10 mx-auto">
   <form className="contact">
   <div className="mb-3">
    <label for="exampleFormControlInput1">FullName</label><br/>
    <input type="email" className="forms" id="exampleFormControlInput1" placeholder="Enter your name" />
    </div><br/>
    <div className="mb-3">
    <label for="exampleFormControlInput1">Mobile Number</label><br/>
    <input type="text" className="forms" id="exampleFormControlInput1" placeholder="mobile number" maxlength="10" />
    </div><br/>
  <div className="mb-3">
    <label for="exampleFormControlInput1">Email address</label><br/>
    <input type="email" className="forms" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div><br/>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1">Message</label><br/>
    <textarea className="form" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12">
  <button className="btn btn-outline-primary" type="submit">Submit Form</button>
  </div>
</form>
   </div>
   </div>
   </div>
        </>

    );
};
export default Contact;