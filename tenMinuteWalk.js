function isValidWalk(walk, routeChecker) {
  var routeCount = 0;
  if(walk.length === 10 && routeCount === 0){
    return true;
    } else {
      return false;
  }
}
  
function routeChecker(val){
  for(var i = 0; i < val.length; i++){
    if(val[i] === 'n'){
      routeCount++;
    }
    if(val[i] === 's'){
      routeCount--;
    }
    if(val[i] === 'e'){
      routeCount += 100;
    }
    if(val[i] === 'w'){
      routeCount -= 100;
    }
  } return routeCount;
}

// function isValidWalk(walk) {
// routeChecker(walk);
// if(walk.length === 10 && routeCount === 0){
//   return true;
//   } else {
//     return false;
//   }
// }

// function routeChecker(val){
//   var routeCount = 0;
//   for(var i = 0; i < val.length; i++){
//     if(val[i] === 'n'){
//       routeCount++;
//     }
//     if(val[i] === 's'){
//       routeCount--;
//     }
//     if(val[i] === 'e'){
//       routeCount += 100;
//     }
//     if(val[i] === 'w'){
//       routeCount -= 100;
//     }
//   } return routeCount;
// }

// routeChecker(testArr);
//   var testArr = ['n','s','n','s','n','s','n','s','n','s'];
//   var n = 0;
//   function routeChecker (val){
//     for(var i = 0; i < val.length; i++){
//       if(val[i] === 'n'){
//         n++;
//         console.log("new instance of n = " + n);
//       }
//     }
//     console.log("Total instances of n = " + n);
// }
//         routeChecker(testArr)
  
  // //filter and count each 'n' in array
  // var n = 0;
  // function north(val){
  //   var count = 0;
  //   if(val === 'n'){
  //   count ++;
  //   n += count;
  //   }
  // }
  
  // //filter and count each 's' in array
  // var s = 0;
  // function south(val){
  //   var count = 0;
  //   if(val === 's'){
  //   count ++;
  //   s -= count;
  //   }
  // }
  
  // //filter and count each 's' in array
  // var e = 0;
  // function east(val){
  //   var count = 0;
  //   if(val === 'e'){
  //   count ++;
  //   e += count * 100;
  //   }
  // }
  
  // //filter and count each 'w' in array
  // var w = 0;
  // function west(val){
  //   var count = 0;
  //   if(val === 'w'){
  //   count --;
  //   w += count * 100;
  //   }
  // }

  //some test cases for you...
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
// !isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
// !isValidWalk(['w']);
// !isValidWalk(['n','n','n','s','n','s','n','s','n','s']);