const some = (arr, func) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i], i, arr))
      return true
  }
  return false
}

export default some
