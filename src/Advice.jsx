import React, { useEffect, useState } from 'react'

const AdviceApp = () => {
  
  const [advice,setAdvice]=useState("Please click button to get advice");
  const [count,setCount]=useState(0);
  async function getAdvice(){
    const res= await fetch("https://api.adviceslip.com/advice");
    // console.log(res);
    const data=  await res.json();
    // console.log(data);
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
  } 
  useEffect(function(){
    getAdvice();
  },[]);
  return (
    <div>
      <h3>
        {advice}
      </h3>
      <button onClick={getAdvice}>
        Get Advice
      </button>
      <Counter counter={count}/>
    </div>
  )
}
function Counter(props){
  return(<p>You have read <b>{props.counter}</b> pieces of advice</p>)
  
}

export default AdviceApp
