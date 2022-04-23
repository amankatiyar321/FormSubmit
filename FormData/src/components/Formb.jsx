import React, { useState } from 'react'
import styles from './Form.module.css';
const Formb = ({addData,data}) => {
   const [formData,setFormData]=useState({ 
         username:"",
         password:"",
         age:0,
         gender:"",
         dob:"",
         resume:"",
       showpassword:"false",
     });

 

   const handleChange=(e)=>{
       const inputName=e.target.name;

       if(e.target.type==="checkbox"){
        setFormData({
            ...formData,
            [inputName]:e.target.checked,
        });
       }else if(e.target.type==="file"){
        setFormData({
            ...formData,
            [inputName]:e.target.file,
        });
       }else{
       console.log(e.target);
           setFormData({
               ...formData,
               [inputName]:e.target.value,
           });
        } 
   };



    const handelSubmit=async(e)=>{
        e.preventDefault();
        let res=await fetch("http://localhost:3000/posts/",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData),
          });
          let data =await res.json();
          addData(data);
    }
  return (
    <div className={styles.form}>Form
        <form onSubmit={handelSubmit}>
            <div className={styles.grid}>
                <label>User Name :</label>
                <input type="text" name='username' onChange={handleChange} />
            </div>
            <div  className={styles.grid}>
                <label htmlFor="">Password :</label>
                <input type={formData.showpassword ? "text" : "password"} name='password' onChange={ handleChange}/>
                <div/>
                 <div  >
                <input type="checkbox" name='showpassword' onChange={handleChange}/>
                <label htmlFor="">ShowPassword </label>
            </div>
            </div>
           
            <div  className={styles.grid}>
                <label htmlFor="">Age :</label>
                <input type="number" name='age' onChange={handleChange} />
            </div>
            <div className={styles.grid}>
                <label htmlFor="">Gender</label>
                <select name="gender" onChange={handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>
            <div  className={styles.grid}>
                <label htmlFor="">DOB :</label>
                <input type="date" name='dob' onChange={handleChange} />
            </div>
            <div  className={styles.grid}>
                <label htmlFor="">Resume</label>
                <input type="file" name='resume' onChange={handleChange} />
            </div>
            <div >
                <input type="Submit" name='Submit' />
            </div>
        </form>
    </div>
  )
}

export default Formb