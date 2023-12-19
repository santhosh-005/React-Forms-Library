import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import open from "./assets/open.png";
import close from "./assets/close.png";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [submit, setSubmit] = useState(false);
  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmit(true);
  };

  return (
    <div id="whole-container">
      <h1 id="heading">React Forms Library</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="successBox">
          {submit ? <h2 id="successMsg">Register Successfull</h2> : null}
        </div>

        <div>
          <input
            type="text"
            placeholder="firstname"
            {...register("firstname", { required: "firstname is required" })}
          />

          <p>{errors.firstname?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="lastname"
            {...register("lastname", { required: "lastname is required" })}
          />
          <p>{errors.lastname?.message}</p>
        </div>
        <div>
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

          <p>{errors.email?.message}</p>
        </div>
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
          <img id="eye" src={visible ? open : close}  onClick={() => setVisible(!visible)} alt="" />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <button type="submit">Register now</button>
        </div>
      </form>
      {submit ? <h1>{watch("firstname")}</h1> : null}
    </div>
  );
}

export default App;
