import React, {useState} from 'react'
import Employee from './EmployeeSignIn'
import Employer from './EmployerSignIn'



export default function SignIn(){
    const [bool, setBool] = useState(true)


   return (
     
    <div className="signindiv">
       {bool ?  <Employee setBool={setBool}/> : <Employer setBool={setBool}/>}
      
     </div>
   )
  
    
}