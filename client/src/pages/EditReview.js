import React, { useEffect, useState } from "react"
import {useParams,useHistory} from 'react-router-dom'
import Button from "../styles/Button";
import FormField from "../styles/FormField";
import Error from "../styles/Error"
import Textarea from "../styles/Input";


const EditReview=()=>{
    const {id,} = useParams()
    const [comment, setComment]=useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors]=useState([])
    const navigate = useHistory()

    useEffect(()=>{
        fetch(`/api/product_reviews/${id}`)
        .then(res=>res.json())
        .then(res=>setComment(res))
    },[id])

    const handleChange=(e)=>{
        setDescription(e.target.value)
    }

    const handleSubmit=(e)=>{
   
         e.preventDefault()
        fetch(`/api/product_reviews/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                    'Accept':'application/json'},
            body: JSON.stringify({
    
                review: description
              
            })
        }).then(res=>{
            if (res.ok){
                res.json().then(setDescription(...description,res))
           
                navigate.push(`/game/${comment.product_id}`)
             }
             else{ 
                 res.json().then(err=> setErrors(err.errors))}
            
        })
    
    
    }

    return(
        <div>
            <p>
             <h3><label style={{fontWeight: "bold"}}> Your Original Comment</label></h3> 
                 <div class="card">
                     <div class="card-body">
                            {comment?.review} 
                     </div>
                 </div>
             </p>
            <Button onClick={(e)=>fetch(`/api/product_reviews/${id}`,{
            method: 'DELETE'
        })
        .then(navigate.push(`/game/${comment.product_id}`))}>delete</Button> 
            <form onSubmit={handleSubmit}>
                 <Textarea onChange={handleChange} placeholder="Edit Comment Here..." type='text-field'> </Textarea>
                <Button> Edit</Button>
                 <FormField>
                {errors?.map((err) => (
                  <Error key={err}>{err}</Error>
              ))}
                </FormField>
            </form> 
      
        </div>
    )
}

export default EditReview