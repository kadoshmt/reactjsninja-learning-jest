'use strict'

const filter = (arr, func) => {
  return(function filterInternal(arrayInternal, counter){
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0 
      ? [] 
      : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
  }
  )(arr, 0)
  
  /*for (let i = 0; i < arr.length; i++) {
    if(func(arr[i], i, arr))
    newArr.push(arr[i])
  }
  return newArr
  */
}

export default filter
