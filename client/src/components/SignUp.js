import React, { useState, useContext } from "react";
import Button from "../styles/Button";
import FormField from "../styles/FormField";
import Error from "../styles/Error";
import Label from "../styles/Label";
import Input from "../styles/Input";
import { useHistory } from "react-router-dom";
import axios, { post } from "axios";
import { UserContext } from "../UserContext";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const navigate = useHistory();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const imageFile = React.createRef();
  const { onLogin } = useContext(UserContext);

  // console.log(errors.errors.full_messages)
  // const handleChange = (e) => {
  //   // console.log(e.target.files)
  //   setFile(e.target.files[0]);
  // };

  // const fetchSignup = (formData) => {
  //   fetch("/api/signup", {
  //     method: "POST",
  //     body: formData,
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       r.json()
  //         .then((user) => onLogin(user))
  //         .then(navigate.push("/home"));
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // };

  const handleSubmit=(e)=> {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("passwordConfirmation",passwordConfirmation)
    // formData.append("imageFile",imageFile)
    // formData.append("user[username]", e.target.username.value);
    // formData.append("user[email]", e.target.email.value);
    // formData.append("user[image]", e.target.image.files[0]);
    // formData.append("user[password]", e.target.password.value);
    // formData.append(
    //   "user[password_confirmation]",
    //   e.target.password_confirmation.value
    // );

    // setErrors([]);
  
    // fetchSignup(formData);
  
      fetch("/api/signup", {
        method: "POST",
        body: formData,
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json()
            .then((user) => onLogin(user))
            .then(navigate.push("/home"));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
         
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
        
          type="email"
            id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // autoComplete="off"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
       
          type="password"
            id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
   
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
        
          type="password"
            id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          // autoComplete="current-password"
        />
      </FormField>
      {/* <FormField>
        <Label htmlFor="mediaUrl">Profile Image</Label>
        <Input
          type="file"
      
          name="imageFile"
            // value={imageFile}
          ref={imageFile}
          onChange={(e)=> imageFile.current = e.target.value}
        />
      </FormField> */}
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors?.map((err) => <Error key={err}>{err}</Error>)}
      </FormField>
    </form>
  );
}

export default SignUp;
