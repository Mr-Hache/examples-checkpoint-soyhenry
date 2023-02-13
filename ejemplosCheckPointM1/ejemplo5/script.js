
function primalityTest(n) {
    if (n == 2 || n == 3) {
        return true;
      }
    if (n < 2 || n % 2 == 0 || n % 3 == 0) {
      return false;
    }
   
    let count = 0;
  
    for (let i = 4;  i < n; i++) {
      
  if(n % i == 0){
    count++;
  }
  
  
  
  }
  if(count == 0){
    return true;
  }
  else{ return false;}
    }

    console.log(primalityTest(3));