let numarr = [5, 6, 7, 3, 2, 1];

for (let i = numarr.length-1; i >= 0; i--) {
    console.log(numarr[i]);
}

//all Even numbers in array 
for (let i = 1; i < numarr.length; i++) {
    if(numarr[i]%2==0){
    console.log(" Even number :"+numarr[i]);
}
}

//count od all Even number 
let count=0;
for (let i = 1; i < numarr.length; i++) {
    if(numarr[i]%2==0){
    count++;
    }
}
console.log("count of even no  "+count);

//all squere of odd numbers from array 
for (let i = 0; i < numarr.length; i++) {
    if(numarr[i]%2!=0){
    console.log(" Squere of odd number :"+ numarr[i]+"  is  "+numarr[i]*numarr[i]);
}
}


