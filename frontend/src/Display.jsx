import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"; 

const Display=()=>{
 const [mydata, setMydata]= useState([]);
  const navigate = useNavigate();
 const loadData=()=>{
  let api="http://localhost:8080/books/booksdisplay";
  axios.get(api).then((res)=>{
    console.log(res.data);
    setMydata(res.data);
  })
 }




useEffect(()=>{
  loadData();
}, [])

const addmoreBook=(id)=>{
 
   navigate(`/addmorebook/${id}`);
}


let i=0;
const ans= mydata.map((key)=>{
  i++;
  return(
    <>
       <tr>
        <td> {i}  </td>
        <td> {key.author_name} </td>
        <td>
         { key.author_books.map((key1)=>{
            return(
              <>
                 <p> Name : {key1.book_name}, - Price {key1.book_price} </p>
              </>
            )
         })  }
           </td>

           <td> 

            <button onClick={()=>{addmoreBook(key._id)}}> Add more Book</button>
           </td>
       </tr>
    
    </>
  )
})


return(
        <>
          <h1> Display Page</h1>
          <table>
            <tr> 
              <th> Sno</th>
              <th> name</th>
              <th> Book Detail</th>
              <th>  </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;