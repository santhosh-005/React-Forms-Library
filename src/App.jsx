import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  console.log(register);
  console.log(handleSubmit);
  const [fields, setFields] = useState();
  const [submit, setSubmit] = useState(false);

  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data.firstname.length);
    setFields(data);
    setSubmit(true);
    console.log(register.firstname);
  };
  console.log(errors);
  console.log(errors.email);
  return (
    <div>
      <h1>React Forms Library</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="successBox">
          {submit ? <h2 id="successMsg">Register Successfull</h2> : null}
        </div>

        <input
          type="text"
          placeholder="firstname"
          {...register("firstname", { required: "firstname is required" })}
        />

        <span>{errors.firstname?.message}</span>

        <input
          type="text"
          placeholder="lastname"
          {...register("lastname", { required: "lastname is required" })}
        />
        <span>{errors.lastname?.message}</span>

        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "Invalid email",
            },
          })}
        />

        <span>{errors.email?.message}</span>
        <div>
          <input
            type={visible ? "text" : "password"}
            placeholder="password"
            {...register("password", {
              required: "password is required",

              minLength: {
                value: 4,
                message: "password must be more than 4 characters",
              },
              maxLength: {
                value: 20,
                message: "password must be less than 20 characters",
              },
            })}
          />

          <span onClick={() => setVisible(!visible)}>eye</span>
          
        </div>
        <span>{errors.password?.message}</span>
        <button type="submit">Register now</button>
      </form>

      <div></div>
    </div>
  );
}

export default App;
