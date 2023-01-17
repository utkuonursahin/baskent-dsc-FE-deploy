import {useEffect, useRef} from "react";
const useObserver = (options,className) => {
  const observingRef = useRef(null);
  const targetRef = useRef(null);
  const callbackFn = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) targetRef.current?.classList.remove(className)
    else targetRef.current?.classList.add(className)
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(callbackFn,options)
    observingRef.current && observer.observe(observingRef.current)
    return () => observingRef.current && observer.unobserve(observingRef.current)
  },[])
  return [targetRef,observingRef]
}
export default useObserver