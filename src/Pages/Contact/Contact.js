import React, { useState } from 'react';
import { init, sendForm } from "emailjs-com";
import "./Contact.css";
import { useForm } from 'react-hook-form';
import Header from '../Shared/Header/Header';
import Map from '../Map/Map';
init("user_2ftAe7bPxBw5F9rxP2T8p");

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");

    sendForm("service_lxwmk6r", "template_6ljiams", "#contact-form").then(
      function (response) {
        setStatusMessage("Thank You, Message sent!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
      
    <>
    <Header/>
    <div className="container">
    <div id="info" className="text-center container contact mt-5 pt-5 mt-5">
        

        <p className="text-info fw-bold">Whats Next?</p>
        <h1 className="text-white">Get In Touch</h1>
        <div className="info mb-4">
        <span className=" me-4"><i className="fas fa-envelope me-2"></i>mehjabin.johra00@gmail.com</span>
        <span className=""><i className="fas fa-phone-alt me-2"></i>+8801734570053</span>
        </div>
      
  
        <p className="text-white">
          I'd Love to hear from you . Whether you have a question or just want to
          say hi, fell free to drop a message. I'll try my best to get back to
          you!
        </p>
        
        <strong className="text-center text-success">{statusMessage}</strong>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="p-2 text-black rounded mt-5"
            id="inputID"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )}
          <input
            name="email"
            type="email"
            className="p-2 text-black rounded"
            id="inputID"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-danger">Email field is required</span>
          )}
          <textArea
            name="message"
            placeholder="Your Massage"
            id="inputID"
            className=" p-3 mt-3 text-black rounded"
            {...register("message", { required: true })}
          ></textArea>
          <br />
          {errors.message && (
            <span className="text-danger">Please Tell me something</span>
          )}{" "}
          <br />
          <input className="btn-submit py-1 mb-5 " type="submit" />
        </form>
       
      </div>
      <div>
      <Map></Map>
      </div>
      
          
      
    </div>
    
    </>
  );
};

export default Contact;