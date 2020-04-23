'use strict'


const map = (arr = [], func = (item) => item) => {
  return (function mapInternal (arrayInternal, counter) {    
    const [head, ...tail] = arrayInternal 
    return arrayInternal.length === 0 ? [] : [
      func(head, counter, arr), ...mapInternal(tail, counter + 1)
    ]
  }
  )(arr, 0)  
}
/* const map = (arr = [], func = (item) => item) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr))
  }
  return newArr
}*/
export default map
