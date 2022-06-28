import React, { useState } from "react";
import Button from "../styles/Button";
import FormField from "../styles/FormField";
import Error from "../styles/Error"
import Label from "../styles/Label";
import Input from "../styles/Input";
import {useHistory} from 'react-router-dom'
import axios, {post} from 'axios'

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
    const navigate = useHistory()
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file,setFile]= useState(null)
 const imageFile = React.createRef()


 const handleChange=(e)=>{
    // console.log(e.target.files)
    setFile(e.target.files[0])
        }
     
  function handleSubmit(e) {
    
    e.preventDefault();

    const formData = new FormData();
    formData.append({name:"file"},file);

    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image: formData,
     
      })
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user)).then(navigate.push('/home'));
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
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="imageUrl">Profile Image</Label>
        <Input
          type="file"
          id="imageUrl"
          name='image'
        //   value={imageUrl}
          ref={imageFile}
          onChange={handleChange}
        />
      </FormField>
      {/* <FormField>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField> */}
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUp;