import React, { useState } from "react"
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import {
    Container,
    FormH1,
    Form,
    FormInput,
    FormContent,
    FormWrap,
    FormLabel,
    FormBtn
} from '../components/FormElements'

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.email === email) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const SignUpForms = () => {

    return (
    <>

         <Container>
      <FormWrap>
      <FormContent>
      <Form action="/signin">
      <FormH1>
      Sign Up
      </FormH1>
      <FormLabel>Name</FormLabel>
      <FormInput  value={name}
                onChange={handleChange("name")}
                type="text" required />
      <FormLabel >Email</FormLabel>
      <FormInput                 name="email"
               
                value={email}
                onChange={handleChange("email")}
                type="text"required />
                <FormLabel>Password</FormLabel>

      <FormInput                  name="password"
               
                value={password}
                onChange={handleChange("password")}
                type="password" required />
      <FormBtn to="/signin" onClick={onSubmit}> Submit </FormBtn>
      </Form>
      </FormContent>
      </FormWrap>
      </Container>
      <Footer / >
      </>
    );
  };
        const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };
  return (
    <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
      {successMessage()}
      {errorMessage()}
      {SignUpForms()}
  
    </div>
  );
};

export default Signup;