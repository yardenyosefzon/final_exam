import React from 'react';
import jwt_decode from 'jwt-decode';

function LogIn({auth,setPage,setBalnace,setForm,form,goToHell,setGoToHell}) {

    const handleSubmit=async(e)=>{

        e.preventDefault();
        e.target.reset();

        let result=await auth()
        if(result==="no sir")
           setGoToHell('');
        else{
 
           setGoToHell('none');
           console.log( jwt_decode(result.data).balance)
           setBalnace(jwt_decode(result.data).balance)
           setPage('balance')

        }

  }

  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',height:"80vh",width:"50vw",backgroundColor:"black",padding:"3vw"}}>

            <h1 style={{marginBottom:"2vw",color:"white"}}>Log in</h1>
            <form onSubmit={handleSubmit}>
            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="email" onChange={(e)=>{setForm({...form,email:e.target.value})}}></input>
            <label for="floatingInput">Email address</label>
            </div>
            <div style={{marginBottom:"2vw"}} class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{setForm({...form,password:e.target.value})}}></input>
            <label for="floatingPassword">Password</label>
            </div>
            <div>

                <button type='submit' className='btn btn-primary'>Submit</button>

            </div>

            <div>

                <p style={{display:goToHell,color:"red"}}>You are not a user go to hell</p>

            </div>
            </form>
        </div>

    </div>
  )
}

export default LogIn;