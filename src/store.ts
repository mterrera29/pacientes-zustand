import { create } from 'zustand';
import { DraftPatient, Patient } from './types';
import { v4 as uuidv4 } from 'uuid';
import { devtools } from 'zustand/middleware';

type PatientState = {
  patients: Patient[];
  activeId: string;
  addPatients: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
  getPatientbyId: (id: Patient['id']) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: '',
    addPatients: (data) => {
      const newPatient = createPatient(data);
      set((state) => ({
        patients: [...state.patients, newPatient],
      }));
    },
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((st) => st.id !== id),
      }));
    },

    getPatientbyId: (id) => {
      set(() => ({
        activeId: id,
      }));
    },
  }))
);
