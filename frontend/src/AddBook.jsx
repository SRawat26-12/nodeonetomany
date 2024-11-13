import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddBook=()=>{
    const {id} = useParams();

     const [bname, setBname]= useState("");
     const [bprice, setBprice]= useState("");


      const handleSubmit=()=>{
        let api="http://localhost:8080/books/morebookadd";
        axios.post(api, {id:id, bname:bname, bprice:bprice}).then((res)=>{
          alert("New Book Add succesfully!");
        })
      }


    return(
        <>
          <h1> Add more book : {id}</h1>

          Enter Book name :<input type="text" value={bname} 
          onChange={(e)=>{setBname(e.target.value)}}/>
          <br/>
          Enter Book Price : <input type="text" value={bprice}
          onChange={(e)=>{setBprice(e.target.value)}} />
          <br/>
          <button onClick={handleSubmit}> Submit</button>
        </>
    )
}

export default AddBook;