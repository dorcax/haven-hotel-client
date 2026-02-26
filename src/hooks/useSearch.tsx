import { useCallback, useRef, useState } from 'react'

const useSearch = (initialQuery:string="",delay:number =1000) => {
    const [query,setQuery] =useState(initialQuery)
    const timeOutRef =useRef<number |null>(null)
//     Stores the setTimeout ID between re-renders.
// Important because if we used useState here, every keystroke would re-render unnecessarily.
// useRef doesn’t trigger re-renders, so it’s efficient
// reason of useCallback:Memoizes the function — React won’t recreate it on every render.
// Prevents re-rendering of child components that depend on it.
const onSearch =useCallback((value:string,callback?:(value:string)=>void)=>{
  console.log("kkkk",value)
   setQuery(value);
    if(timeOutRef.current){
        clearTimeout(timeOutRef.current)
        // Cancels the previous timer whenever the user keeps typing.
        // This prevents multiple callbacks from firing (classic debounce logic)
    }

    timeOutRef.current =window.setTimeout(()=>{
        callback?.(value.trim())

    },delay)

},[delay])


  return {
    query,onSearch
  }
}

export default useSearch