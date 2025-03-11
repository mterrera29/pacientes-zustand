import { usePatientStore } from '../store';
import PatientsDetails from './PatientsDetails';

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);
  return (
    <div className='md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll'>
      {patients.length ? (
        <>
          <h2 className=' font-black text-3xl text-center'>
            Listado de Pacientes
          </h2>
          <p className='text-xl mt-5 mb-5 text-center'>
            Administra tus{' '}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
          {patients.map((patient) => (
            <PatientsDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className=' font-black text-3xl text-center'>
            {' '}
            No hay pacientes
          </h2>
          <p className=' text-xl mt-5 mb-5 text-center'>
            Comienza agregando pacientes{' '}
            <span className=' text-indigo-600 font bold'>
              y aparecerean en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}
