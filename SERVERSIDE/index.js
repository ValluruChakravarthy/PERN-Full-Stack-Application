const express=require("express");
const cors=require("cors");

const app=express();
const pool=require("./db");

//middleware, also we are using Cors here too
app.use(cors());
app.use(express.json())


//ROUTES//

//Create a todo
app.post("/todos",async(req,res)=>{
    try{
       const {description}=req.body;
       const newtodo=await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);
       res.json(newtodo);
    }
    catch(err){
        console.log(err);
    }
})

//get all todos

app.get("/todos",async(req,res)=>{
    try{
const alltodos=await pool.query("SELECT * from todo");
res.json(alltodos.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

//Get the single todo you want to see
app.get("/todos/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await todo.query("SELECT * from todo where todo-id=$1",[id]);
        res.json(todo.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

//Update a todo link
app.put("/todos/:id",async(req,res)=>{
    try{
const {id}=req.params;
const {description}=req.body;
const updatetodo=await pool.query("UPDATE todo SET description =$1 where todo_id=$2",
    [description,id]);
res.json("Your Todo list is updated.");   
}
    catch(err){
        console.log(err.message);
    }
})

//Delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const deletetodo =  await pool.query("delete from todo where todo_id =$1;",[id]);
        res.json("todo was deleted from your system");
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(5000,()=>{
    console.log("Server has started on 5000");
})