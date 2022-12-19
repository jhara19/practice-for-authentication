import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


const Login = () => {
  return (

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
   <Link to='/login'> <Button variant="primary" type="submit">
      Login
    </Button></Link>
  </Form>



    // <div className="login-container">
    //   <div className="login-title">
    //     Login
    //     <BiLogInCircle />
    //   </div>
    //   <form className="login-form">
    //     <input type="text" placeholder="Your Email" />
    //     <input type="password" placeholder="password" />
    //    <Link to='/login'> <button>Login</button></Link>

    //     <p>
    //       Don't have an account? <Link to="/signup">Sign up first</Link>
    //     </p>
    //   </form>

    //   <button>Google</button>
    // </div>



  );
};

export default Login;
