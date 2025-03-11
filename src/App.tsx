import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <>
      <div className='container mx-auto mt-10'>
        <h1 className=' font-black text-5xl text-center md:w-2/3 md:mx-auto'>
          Seguimiento de Pacientes{' '}
          <span className=' text-indigo-700'> Veterinaria</span>
        </h1>
        <div className=' mt-5 justify-center md:flex'>
          <PatientForm />
          <PatientList />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
