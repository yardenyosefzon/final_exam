import React from 'react'
import { useEffect } from 'react'

function Balnace({balance,addExpense,addIncome,inc,decForm,setDecForm,setInc}) {

    useEffect(() => {
     
    }, [balance])
    
    const handleDecSubmit=(e)=>{

        e.preventDefault();
        e.target.reset(); 
        addExpense()
        setDecForm({tofu:0,gym:0,woman:0});



    }

    const handleIncSubmit=(e)=>{

        e.preventDefault();
        e.target.reset();
        addIncome()
        setInc(0);


    }

  return (
    <div>

        <h1>Balance:</h1>
        <div style={{fontSize:"2vw"}}>{balance}</div>

        <div style={{display:'flex'}}>


                <div style={{width:"50vw"}}>

                    <form onSubmit={handleDecSubmit}>

                        <h1>Expenses</h1>

                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="Tofu" onChange={(e)=>{setDecForm({...decForm,tofu:e.target.value})}}></input>
                            <label for="floatingInput">Tofu</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control" id="floatingPassword" placeholder="GYM" onChange={(e)=>{setDecForm({...decForm,gym:e.target.value})}}></input>
                            <label for="floatingPassword">GYM</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control" id="floatingPassword" placeholder="Woman" onChange={(e)=>{setDecForm({...decForm,woman:e.target.value})}}></input>
                            <label for="floatingPassword">Woman</label>
                        </div>
                        <button type='submit' className='btn btn-danger'>Submit</button>

                    </form>
                </div>

                <div style={{width:"50vw"}}>

                    <form onSubmit={handleIncSubmit}>

                        <h1>Income</h1>

                        <div class="form-floating mb-3">
                            <input class="form-control" id="floatingInput" placeholder="name@example.com"  onChange={(e)=>{setInc(e.target.value)}}></input>
                            <label for="floatingInput">Dont lie to yourself</label>
                        </div>
                        <button type='submit' className='btn btn-success'>Submit</button>

                    </form>

                </div>

        </div>


    </div>
  )
}

export default Balnace