import React, {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {createName, removeName} from "./api";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import FormElement from "./Form";
import Loading from "./Loading";

import axios from "axios";


const Crud = () => {
    // const num = Math.random()*1000+0.1+0.07+3;
    // const a= {id:num,Name:""}

    const[Name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [names,setNames] = useState([]);
   // const[data,setData] = useState(a)
    
    

    // useEffect(() => {
    //     loadNames();
    // },[]);

    // const loadNames = () => getNames.then(name => setNames(name.data));

    useEffect(() => {
      loadNames();
    },[]);

   const loadNames = () => {
     axios.get("http://localhost:5000/data").then(res=>{
    setNames(res.data)
   
})

;}
// console.log(name)
// console.log(names)
    
    // const createName =(name)=>{
    //     return axios.get(`http://localhost:5000/data`,name)
    // }
    // const updateName =(name)=>{
    //     return axios.get("http://localhost:5000/data",name)
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        createName({Name}).then((res) => {
            setLoading(false);
            setName("");
            toast.success(`${Name} is created` );
            // setData([...data,name])
            // setNames([...names,data])
            loadNames();    
            
        }).catch((err) => {
            setLoading(false);
            if(err.response.status === 400)  toast.err(err.response.data);
        });
    }
   // console.log(data)
    

    const handleRemove = (id, Name) => {
        if(window.confirm("Are you sure you want to delete")){
            setLoading(true);
            removeName(id).then((res) => {
               setLoading(false);
               toast.error(`${Name} is deleted `)
              loadNames()
            }).catch((err) => {
                setLoading(false);
                if(err.response.status === 400)  toast.err(err.response.data);
            });
        }
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    {loading ? <Loading /> : 
                    (
                        <>
                            <h2>CRUD with JSON server</h2>
                            <FormElement
                           handleSubmit={handleSubmit}
                            name = {Name}
                            setName = {setName}
                            />
                            {names && names.map((t) => (
                                <div className="border row mx-2 align-items-center" key  = {t.id}>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            {t.Name}
                                           {/* // {t.name} */}
                                        </li>
                                    </ul>
                                    <span
                                onClick={() =>{ handleRemove(t.id, t.Name)}}
                                //onClick={() => handleRemove(t.id, t.name)}
                                    className = "btn btnsm float-right"
                                    >
                                        <DeleteOutlined className="text-danger" />
                                    </span>
                                    <Link to={`/update/${t.id}`}>
                                        <span className = "btn btnsm float-right">
                                            <EditOutlined className="text-warning" />
                                        </span>
                                    </Link>
                                </div>
                                
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )

}
export default Crud;