import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Add = () => {

    const [employee, setEmployee] = useState({
      empId:'',
      empName:'',
      department:'',
      location:''
    })
    let fetchValue=(e)=>{
      // console.log(e)
      setEmployee({...employee,[e.target.name]:e.target.value})     //... spread operator an
    }
    let sendData=()=>{
      alert('data submitted')
      console.log(employee)
    }
  
  return (
    <>
     <h2>New Employee</h2>
    <TextField
    required
    id="outlined-required"
    label="Employee ID"
     name='empId'                 //name individual ayit call cheyan vendi oroninm 
    value={employee.empId}       //value browser il varan
    onChange={fetchValue}
    
   
  />
  <br /><br />
  <TextField
    required
    id="outlined-required"
    label="Employee Name"
    name='empName'
  //  value={employee.empName}
   onChange={fetchValue}              //nml one letter adicha athin ola caption kanikm like ab adichal ab thot varuna names kanikm
   
  />
  <br /><br />
  <TextField
    required
    id="outlined-required"
    label="Department"
    name='department'
    value={employee.department}
    onChange={fetchValue}
    
  />
  <br /><br />
  <TextField
    required
    id="outlined-required"
    label="Location"
    name='location'
    value={employee.location}
    onChange={fetchValue}
    
  />
  <br /><br />
   <button onClick={sendData}>submit</button>
  
   </>
  )
}

export default Add