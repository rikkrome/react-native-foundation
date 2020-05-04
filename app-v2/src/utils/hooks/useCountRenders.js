import {useRef} from 'react';

const useCountRenders = (name) => {
  if (__DEV__) {
    const renders = useRef(0);
    const current = renders.current++;
    let style;
    switch (true) {
      case current >= 10:
        style = 'background: black ; color: #FFFF00; font-size:13px';
        break;
      case current >= 20:
        style = 'background: black ; color: red; font-size:13px';
        break;
      default:
        style = 'background: black ; color: green; font-size:13px';
        break;
    }
    console.log(`%c${name} renders: %c${current}`, style, style);
  }
};

export default useCountRenders;
