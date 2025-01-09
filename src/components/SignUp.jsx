import '../css/SignUp.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import {useSignUp} from '../hooks/useSignUp'

export default function SignUp() {

  const {ShemaSignUp, clickSignIn, signUp} = useSignUp()

    return (
            <div className="register-form-container">
                <div className="register-box">
                  <p className='register-form-p1'>Welcome</p>
                  <p className='register-form-p2'>Please, complete the registration form:</p>
                  <Formik
                    name="signUp"
                    validationSchema={ShemaSignUp}
                    initialValues={{username:"", email:"", password:"", passwordConfirmation:""}} 
                    onSubmit={
                      (values, actions)=>{
                      signUp(values, actions)
              }}>
            {({ touched, errors }) => (
              <Form className="register-user-form" name="signUp">
                <div className="register-input-box">
                  <label htmlFor="username">
                    {touched.username && errors.username ? <span className="required-star">*</span> : ""}
                    Name
                  </label>
                  <Field className="register-input" type="text" name="username" placeholder="Name" />
                  <div className='error-msg'>
                    <ErrorMessage name="username" as='div' />
                  </div>
                </div>
                <div className="register-input-box">
                  <label htmlFor="email">
                    {touched.email && errors.email ? <span className="required-star">*</span> : ""}
                    Email
                  </label>
                  <Field className="register-input" type="email" name="email" placeholder="E-mail" />
                  <div className='error-msg'>
                    <ErrorMessage name="email" as='div' />
                  </div>
                </div>
                <div className="register-input-box">
                  <label htmlFor="password">
                    {touched.password && errors.password ? <span className="required-star">*</span> : ""}
                    Password
                  </label>
                  <Field className="register-input" type="password" name="password" placeholder="Password" />
                  <div className='error-msg'>
                    <ErrorMessage name="password" as='div' />
                  </div>
                </div>
                <div className="register-input-box">
                  <label htmlFor="passwordConfirmation">
                    {touched.passwordConfirmation && errors.passwordConfirmation ? <span className="required-star">*</span> : ""}
                    Password
                  </label>
                  <Field className="register-input" type="password" name="passwordConfirmation" placeholder="Repeate Password" />
                  <div className='error-msg'>
                    <ErrorMessage name="passwordConfirmation" as='div' />
                  </div>
                </div>
                <div className='register-form-btn-box'>
                  <button type="submit" className="isInActive" onClick={event => { clickSignIn(event) }}>LOG IN</button>
                  <button type="submit" className="isActive">REGISTRATION</button>
                </div>
              </Form>
            )}
                  </Formik>
                </div>
            </div>
    );
  }