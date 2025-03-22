import React , {useState} from 'react'

const Inputtodo = () => {
  
  
    const [description,setDescription] = useState("");
  
    const onSubmitform = async e =>{
      e.preventDefault();
      try{
        const body={description};
        const response= await fetch("",{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(body)
        });
        window.location="/";
      }
      catch(err){
        console.log(err);
      }
    }
  
  return(
    
    <div className='flex flex-col justify-center bg-slate-200 min-h-screen'>
      <h1 className='bg-blue-500 text-white text-center text-3xl
       font-bold p-5 rounded-lg shadow-lg w-3/4 mx-auto mt-1 top-1'>TASK LIST</h1>
       <div className='bg-amber-200 justify-evenly
        shadow-lg text-nowrap rounded-lg w-3/4 mx-auto mt-5 p-5'>
           <h2 className='text-black text-center text-2xl'>To-Do List</h2>
  
          <form className='flex flex-col justify-center' onSubmit={onSubmitform}>
                    <input type="text" className='bg-white-200 shadow-lg
                    text-center justify-center rounded-md mx-auto mt-5 p-3 text-md w-3/4'
                    value={description}
                    onChange={e => {
                      setDescription(e.target.value)
                    }}/>
                    
                    <div className='flex flex-row justify-center'>
                    <button className='bg-blue-500
                      text-white
                      text-md font-bold p-3 rounded-lg mt-2'>Add</button>
  
                    </div>
            
            
            </form>
        </div>
  
    </div>
    
  )
}

export default Inputtodo;
