import React,{useContext, useEffect,useState} from "react";
import {useParams,useHistory} from 'react-router-dom'
import LikeButton from '../components/LikeButton';
import AddToCartButton from "../components/AddToCartButton";
import Button from "../styles/Button";
import FormField from "../styles/FormField";
import Error from "../styles/Error"
import Label from "../styles/Label";
import Input from "../styles/Input";
import Textarea from "../styles/Input";
import { UserContext } from '../UserContext';


const GameShowPage=()=>{
  const {user} = useContext(UserContext)
const [merch, setMerch] = useState([])
const [review, setReview] = useState('')
const [allUser, setAllUser] = useState('')

const [errors, setErrors] = useState([])
const [showMe, setShowMe] = useState(true)
const {id} = useParams()
const navigate = useHistory()



// const thumbsUpIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
// <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
// </svg>;


const handleSubmit=(e)=>{
  e.preventDefault()
  fetch('/api/product_reviews',{
     method:"POST", 
     headers: {'Content-Type': 'application/json',
     'Accept':'application/json'},
     body: JSON.stringify({
      review: review,
      product_id: merch.id
 })
 }).then((r)=>{
    if (r.ok) {
      r.json().then((data)=>setReview(data.review)).then(setShowMe(true)).then(navigate.push('/games')).then(alert("Review Submitted"))
    }
    else {
      r.json().then(err=>setErrors(err.errors))
    }
  })
 
}
useEffect(()=>{
  fetch("/api/users")
  .then(res=> res.json())
  .then(res=>setAllUser(res))
},[]);

   useEffect(() => {
     fetch(`/api/products/${id}`).then((r) => {
       if (r.ok) {
        r.json().then((game) => setMerch(game));
       }
     });
   }, [id]);


   const handleChange=(e)=>{
    setReview(e.target.value)
   };


const handleShowmeClick=()=>{
  setShowMe(false)
};

    return(
<center>
<div className="card mb-3" style={{maxWidth: "740px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={merch?.image_url} className="img-fluid rounded-start" alt="..."/>
          <AddToCartButton myGame={merch}/>
          <br/>
      
         
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{merch?.name}</h5>
            <p className="card-text">{merch?.description}</p>
            {/* <LikeButton likeCount={merch.liked_product?.length}id={merch.id}/>  */}
            <p className="card-text" style={{color: "red"}}><small className="text-muted">Price: ${merch?.price}</small></p>
         
           {showMe ? <Button onClick={handleShowmeClick}>add a review</Button>:
           <form onSubmit={handleSubmit}>
         <Button onClick={()=>setShowMe(true)}>close</Button>   <Textarea onChange={handleChange} placeholder="Leave a Review..." type='text-field'>
          </Textarea>
          <Button> Submit</Button>
           <FormField>
             {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
              <h3 style={{fontWieght: 'bold'}}> Reviews </h3>
                {merch ?  merch.product_reviews?.map((data,i)=>(
                allUser.map((u,i)=>{
                  if (u.id ===data.user_id)
                  return   <div key={i} className="container">
                
                  <div className="row">
                           <div style={{fontWeight: "bold" ,color:'red'}} className="col-sm-4">{u.username} said....</div>
                       
                          <div className="col-sm-8"> {data.review}</div>
                          {user.id === data.user_id ? <Button onClick={()=>navigate.push(`/edit/${data.id}`)}> edit</Button> : null}
                        
                  </div>   
                  <hr/>
                </div>
                })
           
            
            )):null}
           </FormField>
      </form>}
     
          </div>
        </div>
      </div>
    </div>
</center>
 

    )
}



export default GameShowPage