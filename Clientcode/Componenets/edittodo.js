import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const EditTodo = ({ todo }) => {
    const[description,setDescription]=useState(todo.description);
    
    const updateDescription = async (e) => {
        try
        {
            const body = {description};
            const response = await fetch(`http://localhist:1000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)
            });
            window.location="/";
        }
        catch (err){
            console.log(err.message);
        }
    }

    return (
        <div>
        <button type="button" class="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target={`#id${todo.todo_id}`}   onClick={()=>setDescription(todo.description)}>
          Edit
        </button>
      
        <div class="modal" id={`id${todo.todo_id}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-orange-200 text-black">
               
                <h4 class="modal-title bold">EDIT TEXT</h4>
                <button type="button" class="btn-close bg-orange-500" 
                data-bs-dismiss="modal" 
                onClick={()=>setDescription(todo.description)}></button>
              </div>
        
            
              <div class="modal-body">
                <input type='text' className='form-control' value={description}
                onChange={e => 
                    setDescription(e.target.value)
                }/>
              </div>
        
              <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                onClick={e => 
                    updateDescription(e.target.value)
                }>
                    Edit
                    </button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                  onClick={()=>setDescription(todo.description)}>
                    Close
                    </button>
              </div>
        
            </div>
          </div>
        </div>
        </div>
    );
};

export default EditTodo;
