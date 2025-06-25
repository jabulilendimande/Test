


function chunkArrayInGroups(arr , num){
  var arr1 = arr.slice(0,num);
  console.log(arr1);
  var arr2 = arr.slice( arr.length-num);
  console.log(arr2);
  var newArr = []; 
  newArr.push(arr1);  newArr.push(arr2); 
  
  return newArr;
}

var arr = ["0","1","2","3","4","5"];
var num = 2;

console.log(chunkArrayInGroups(arr,num));
function chunkArrayInGroups(arr, num) {
  var result = [];
  for (var i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}
