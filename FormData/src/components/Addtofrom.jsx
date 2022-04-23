import React from 'react'
import { useState, useEffect } from "react";
const Addtofrom = () => {
    const [formData,setFormData]=useState([]);

    useEffect(( )=>{
        const fetchdata =  async ()=>{
             try{
               let res=await fetch("http://localhost:3000/posts");
               let data=await res.json();
               console.log(data);
               setFormData(data);
             }catch(e){
               console.log(e);
             }
        };fetchdata();
       },[]);
  return (
    <div>Addtofrom
         <table className="table" border="1">
        <thead>
          <tr>
          <th>Sl.no.</th>
            <th>Username</th>
            <th>Password</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((student, index) => {
            return (
              <tr key={student.id} className="houseDetails">
                <td className="houseId">{student.id}</td>
                <td className="houseName">{student.username} </td>
                <td className="ownersName">{student.password}</td>
                <td className="address">{student.age}</td>
                <td className="areaCode">{student.gender}</td>
                <td className="rent">{student.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
    </div>
  )
}

export default Addtofrom