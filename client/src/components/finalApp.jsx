import React, { Component } from 'react';  
import { useState } from 'react';
import Balnce from './balance';
import LogIn from './logIn';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react';

const FinalApp = () => {  

   const[logForm,setLogForm]=useState({})

   const[inc,setInc]=useState(0)

   const[decForm,setDecForm]=useState({tofu:0,gym:0,woman:0})

   const [page,setPage]=useState('logIn');

   const [balance,setBalnace]=useState(-1);

   const [goToHell,setGoToHell]=useState('none');

   useEffect(() => {
    console.log(decForm)
   }, [inc,decForm])

   async function auth(){
      try {
        const response = await axios.post("http://localhost:4000/api/v1/auth",logForm);
        localStorage.setItem('token',response.data)
         return response
       
    } catch (error) {
      return 'no sir'
    }
    }

   async function addIncome(){
      try {
        
        const response = await axios.put("http://localhost:4000/api/v1/user/addIncome",{email:jwt_decode(localStorage.getItem('token')).email,income:inc});
        setBalnace(response.data.balance) 
        
      
    } catch (error) {
      console.error(error);
    }
    }

   async function addExpense(){
      console.log(parseInt(decForm.tofu)+parseInt(decForm.gym)+parseInt(decForm.woman))
      try {
        const response = await axios.put("http://localhost:4000/api/v1/user/addExpense",{email:jwt_decode(localStorage.getItem('token')).email,expense:parseInt(decForm.tofu)+parseInt(decForm.gym)+parseInt(decForm.woman)});
        setBalnace(response.data.balance) 

    } catch (error) {
      console.error(error);
    }
    }
    
      return(  
         <div>  
            {page==="logIn"?<LogIn  setPage={ setPage} auth={auth} setBalnace={setBalnace} setGoToHell={setGoToHell} goToHell={goToHell} form={logForm} setForm={setLogForm}/>:<Balnce setDecForm={setDecForm} setInc={setInc} decForm={decForm} inc={inc} addExpense={addExpense} addIncome={addIncome} balance={balance}/>  }
         </div>  
      );   
}  
export default FinalApp;

