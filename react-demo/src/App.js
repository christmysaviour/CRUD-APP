import { Route, Routes ,useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Crud from './crud';
import Form from './crud/Form';
import Loading from './crud/Loading';
import "react-toastify/dist/ReactToastify.css"
import Update from './crud/Update';



function App() {
  const params = useParams();
  const id =params.id;
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Crud/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
     {/* <h2>Crud With JSON </h2> */}
     {/* <Form/> */}
     
    </div>
  );
}

export default App;
