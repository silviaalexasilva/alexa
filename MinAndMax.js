function findMinMax(arr) {
    let min = arr[0], max = arr[0];
  
    for (let i = 1, len=arr.length; i < len; i++) {
      let v = arr[i];
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
  
    return [min, max];
  }
  
  
