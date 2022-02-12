//Business Logic

const userNum = 14;
const numToStrng = [];
let roboArray = [];

// function beepBoop() {

for ( let i = 0; i <= userNum ; i++) {
  // roboArray.push(i);
  if(i.toString().includes(3)) {
    roboArray.push("Won't you be my neighbor?")
  }else {
    roboArray.push(i);
  }
}
// return roboArray;




// numArray.forEach(function(number) {
//   numToStrng.push(number.toString());
 
// })

// numToStrng.forEach(function(strng) {
//   if (strng.includes("3")) {
//     numToString.replace(strng, "Won't you be my neighbor?");
//   }
// })

// const neighbor = numArray.indexOf(3);

