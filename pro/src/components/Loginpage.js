import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Loginpage.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const LoginPage = () => {
  const images = [
    image1,
    image2,
    image3,
    // Add more image imports
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">Contact Us</Link></li>
        </ul>
      </nav>
      <main className="main" style={backgroundStyle}>
        <div className="login-container">
          <h2>Login</h2>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={Yup.object({
              username: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
              // Handle login logic here
              console.log('Logging in with:', values);
            }}
          >
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field type="text" id="username" name="username" />
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" className="login-button">Login</button>
            </Form>
          </Formik>
          <Link to="/register" className="register-link">
          New user? Register here
        </Link>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
