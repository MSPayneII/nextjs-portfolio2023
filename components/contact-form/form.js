import React, { useState, useEffect, useRef } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Notification from "../ui/notification";

import emailjs from "@emailjs/browser";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  const form = useRef();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const onSubmit = (data, e) => {
    setRequestStatus("pending");

    emailjs
      .sendForm(
        "portfolio_contact_form",
        "template_3gye8df",
        form.current,
        "rhG0TCy6RzdJNY_8q"
      )
      .then(
        (result) => {
          setRequestStatus("success");

          console.log(result.text);
        },
        (error) => {
          setRequestError(error.message);
          setRequestStatus("error");

          console.log(error.text);
        }
      );

    e.target.reset(); // reset after form submit
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} ref={form}>
      <fieldset>
        <legend className="form-legend">Contact Form</legend>
        <label htmlFor="first-name" className="form-label">
          First name (required)
          {errors.firstName && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> First name cannot be empty
            </div>
          )}
        </label>

        <input
          type="text"
          placeholder="e.g. Jacob"
          id="first-name"
          className="form-input-field"
          aria-label="first name text field"
          {...register("firstName", { required: true })}
        />
        <label htmlFor="last-name" className="form-label">
          Last name (required)
          {errors.lastName && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> Last name cannot be empty
            </div>
          )}
        </label>
        <input
          type="text"
          placeholder="e.g. Smith"
          id="last-name"
          className="form-input-field"
          aria-label="last name text field"
          {...register("lastName", { required: true })}
        />
        <label htmlFor="email" className="form-label">
          Email (required)
          {errors.email && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> An email with an '@' sign is
              required
            </div>
          )}
        </label>
        <input
          type="text"
          placeholder="e.g. johndoe@gmail.com"
          id="email"
          className="form-input-field"
          aria-label="email text field"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <label htmlFor="message" className="form-label">
          Message (required)
          {errors.message && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> Message cannot be empty
            </div>
          )}
        </label>

        <input
          type="text"
          name="message"
          placeholder="Type message here"
          className="form-input-field form-input-message"
          id="message"
          aria-label="message text field"
          {...register("message", { required: true })}
        />

        <input
          type="submit"
          className="form-submit-btn action-btn"
          value="Submit"
        />
      </fieldset>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </form>
  );
};

export default Form;
