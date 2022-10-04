import React from "react";
import {Input} from "antd";


function Form({handleSubmit,name,setName}) {
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Input
            type="text"
            placeholder="Enter Name"
            value ={name}
            style={{width:"50%"}}
            autoFocus
            required
            onChange={(e)=>{
              setName(e.target.value)
            }}></Input>
            <br/>
            <button className="btn btn-primary mt1">Submit</button>
            <button className="btn btn-danger mt1" onClick={()=>setName("")}>Cancel</button>
        </div>
    </form>
    </div>
  )
}

export default Form

