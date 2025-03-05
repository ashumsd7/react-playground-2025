import React, { useState, useEffect, useRef } from 'react';

function useCheckStatus(delay = 6) {
  const [isOnline, setIsOnline] = useState(true);

  const timer = useRef(0);

  function checkStatus() {
    setInterval(() => {
      // chekc the diff
      console.log('>>>>>>>>>> Diff is ', Date.now() - timer.current);
      if (Date.now() - timer.current > delay) {
        console.log('first');
        setIsOnline(false);
      }
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('mouseover', function () {
      console.log('Inter');
      timer.current = Date.now(); // 1003
      console.log('>>>>', timer.current);
      setIsOnline(true);
    });
  }, []);

  useEffect(() => {
    checkStatus();
  }, []);

  return { isOnline };
}

export default useCheckStatus;
