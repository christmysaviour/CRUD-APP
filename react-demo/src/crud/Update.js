import React ,{useState,useEffect} from 'react'
import {  useNavigate,useParams } from 'react-router-dom';
import {toast} from "react-toastify"
import {updateName,getName} from './api'
import Loading from './Loading';
import Form from './Form';

function Update() {
    const navigate = useNavigate();
    const [Name,setName] =useState("");
    const [loading,setLoading] = useState(false);
    const params = useParams();
    const id =params.id;
   // const {id} = useParams();
//    useEffect(()=>{
//       navigate('/update')
//    },[])

    useEffect(()=>{
        loadName();
    },[])
    // console.log(id)
//   // console.log("id",match.params.id)

    const loadName = () =>{
        getName(id).then((d)=>setName(d.data.Name))
    }


    const handleSubmit = (e) =>{
     e.preventDefault();
     setLoading(true);
     updateName(id,{Name}).then((res)=>{
        setLoading(false);
        toast.success(`${Name} is updated`)
        navigate("/")
     }).catch((err)=>{
        setLoading(false);
        if(err.response.status === 400)toast.err(err.response.data)
     })

    };








  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                {loading ? <Loading /> : (
                    <h4>Update Name</h4>
                )}
               <Form
               handleSubmit = {handleSubmit} 
               name = {Name}
                setName={setName}/>
            </div>
        </div>
    </div>
  )
}

export default Update