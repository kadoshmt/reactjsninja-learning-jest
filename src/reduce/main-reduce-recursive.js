'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined

const mainReduce = (arr, func, initialValue) => {
  let acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
  let arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr 

  return(function reduceInternal(accInternal, arrayInternal, counter){  
    const [head, ...tail] = arrayInternal
    const accNext = () => func(accInternal, head, counter, arrCopy)
    return arrayInternal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, counter + 1)

  })(acc, arrCopy, 0)
}

export default mainReduce
