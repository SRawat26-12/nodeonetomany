const Author= require("../models/authorModel");
const Book = require("../models/bookModel");
const bookSave=async(req, res)=>{
  const {authorname, bookname, bookprice}= req.body;
  const author =await Author.create({
    author_name:authorname
  })
  const book= await Book.create({
       book_name:bookname,
       book_price:bookprice,
       author_id:author._id
  })
  await Author.findByIdAndUpdate(author._id,{$push:{author_books:book._id}})
 res.send(author);   
}
const bookDisplay=async(req, res)=>{
       const authorData= await Author.find().populate('author_books');
       res.send(authorData);
}

const morebookAdd=async(req, res)=>{
     const {id, bname, bprice} = req.body;
   
     const book = await Book.create({
      book_name: bname,
      book_price:bprice,
      author_id:id
     })
 
     await Author.findByIdAndUpdate(id,{$push:{author_books:book._id}})

     res.send("Ok new book added");
}
module.exports={
    bookSave,
    bookDisplay,
    morebookAdd
}