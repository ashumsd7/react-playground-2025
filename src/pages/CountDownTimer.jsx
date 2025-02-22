import React, { useEffect, useRef, useState } from 'react';
 

function CountDownTimer() {
 
  const [key, setKey] = useState();

  let second = useRef(59);
  let minute = useRef(2);

  let timer=null
  function startTimer() {
     timer = setInterval(() => {
      // if(sec==0){
      //   setMin(prev=>prev-1)
      // }
      if (second.current == 0 && minute.current == 0) {
        console.log('Return now');
        clearInterval(timer);
      }
      if (second.current == 0 && minute.current > 0) {
        second.current = 59;
        minute.current -= 1;
      }
      second.current--;
      setKey(Math.random());
      // setSec(prev=>{
      // if(sec==0){
      //   console.log('Heke 00>>', second.current)
      //   second.current--
      //   return 59
      // }else{
      //   console.log('Heke 333')
      //  return  --prev
      // }
      // })
    }, 1000);
  }

  useEffect(() => {
 
    startTimer();

    return () => {};
  }, []);
  return (
    <div>
      CountDownTimer
      <h1>
        {minute.current<0 ? 0 : String(minute.current).length==1 ? "0"+ String(minute.current) : minute.current }: {second?.current< 0 ? ' 0':String(second.current).length==1 ? "0"+ String(second.current) : second.current }
        
      </h1>

      <button onClick={()=>{
        
      }}>startTimer</button>
    </div>
  );
}

export default CountDownTimer;
