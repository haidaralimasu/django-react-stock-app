import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
import {
    Container,
    FormH1,
    Form,
    FormInput,
    FormContent,
    FormWrap,
    FormLabel,
    FormBtn,Text
} from '../components/FormElements'
const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "name@example.com",
    password: "12345",
    error: "",
    success: false,
    loading: false,
    didRedirect: false,
  });
  const { name, email, password, error, success, loading, didRedirect } =
    values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSumit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.token) {
          //let sessionToken = data.token;
          authenticate(data, () => {
            console.log("TOKKEN ADDED");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({
            ...values,
            loading: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
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

  const SignInForms = () => {

    return (
  <>
  
      <Container>
      <FormWrap>
      <FormContent>
      <Form>
      <FormH1>
      Sign in
      </FormH1>
      <FormLabel>Email</FormLabel>
      <FormInput                 name="email"
               
                value={email}
                onChange={handleChange("email")}
                type="text"required />
                <FormLabel>Password</FormLabel>

      <FormInput                  name="password"
                
                value={password}
                onChange={handleChange("password")}
                type="password" required />
      <FormBtn to="/" onClick={onSumit}> Login </FormBtn>
      </Form>
      <Text to="/signup">
      Sign Up now
      </Text>
      </FormContent>
      </FormWrap>

      </Container>
<Footer />
</>
  
  
    );
  };
    const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };

  return (
    <div >
    <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
      {loadingMessage()}

      {SignInForms()}
    
      {performRedirect()}
    </div>
  );
};

export default Signin;