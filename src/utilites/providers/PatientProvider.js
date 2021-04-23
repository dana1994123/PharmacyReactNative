import React, {createContext, useState} from 'react';

export const PatientContext = createContext();

// export const PatientProvider = ({children}) => {
//   const [patientInfo, setPatientInfo] = useState(null);
//   return (
//     <PatientContext.Provider
//       value={{
//         patientInfo,
//         setPatientInfo,
//         setPatientData: patient => {
//           setPatientInfo(patient);
//         },
//       }}>
//       {children}
//     </PatientContext.Provider>
//   );
// };
