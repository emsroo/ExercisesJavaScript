
const message = 'Hello world'; // Try edit me


// Log to console
console.log(message);

// Nums = [3, 5, 7, 1, 6]
// //first check the fist and second
// //then second and third
// //then third and fourth
// //then repeat until flag ordered=true
// //it means that all elements are not being swapped anymore

// // bubble sort
// // for (i=0;i<=Nums.length;i++){
// for (i = 0; i < 5; i++) {
//   temp = [0];
//   console.log(Nums[i], Nums[i + 1])
//   if (Nums[i] < Nums[i + 1]) {
//     Nums[i] = temp; //3
//     Nums[i] = Nums[i + 1]; //5
//     Nums[i + 1] = temp; //3
//     // console.log(Nums[i] , Nums[i+1])

//     // [5 3 ]
//     // temp=Nums[i];
//   }
//   else {
//     break;
//   }

//Declaration of numbers

//swap
// temp =[0];
// temp[0] = Nums[0];
// Nums[0] = Nums[0 + 1]
// Nums[0 + 1] = temp[0];
// //swap

//  Nums= [-1, 3, 4, 2, 6]
// Nums = [3444, 5, 7, 1, 6,2,3,4,5];
// while (flag==false){
function Bubble(Nums){
flag=false;
while (flag===false){
  flag=true
  for(i=0;i< Nums.length-1;i++){
  if(Nums[i]>Nums[i+1]){
  
  temp =[0];
  temp[0] = Nums[i];
  Nums[i] = Nums[i + 1];
  Nums[i + 1] = temp[0];
  flag=false
  //swap
  }
    // console.log("iter")
  // console.log("ccc",Nums[i])
  console.log("---",Nums)
}//bubblesort
}
    Max=(Nums[Nums.length-1]);
    Min=(Nums[0]);
    return [Min,Max];
}//funcBubble
// }

// a=Bubble(Nums)
// console.log(a)

// Nums=[0,3,3,3,4,6]

function Repeater (Nums){
  res=false
  // counted=false
  for (i=0;i<Nums.length;i++)
    for(k=i;k<Nums.length;k++){
      if(Nums[i]===Nums[k+1]){
        // console.log("hola")
        console.log(`Numeros repetidos ${Nums[i]} ${Nums[k+1]}, en posicion 
        ${i} y ${k+1} de ${Nums}\n`)
        res=true;
          }
      else{
        continue;
          }
      }
    if (res===false)
    console.log(`${Nums} no se repite!`)
}


// Repeater(Nums);
// Repeater([1, 22, 5, 17, 10, 5, 40, 5])

// Repeater([1, 22, 5, 14, 24, 31, 27, 15, 105])
// Shifter([1, 2, 5, 14, 24, 31, 50, 105]);

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

 console.log(getRandomInt(Ordered.length));
// Expected output: 0, 1 or 2

Ordered= [1, 2, 5, 14, 24, 31, 50, 105];
console.log(Ordered.length)

unOrdered=[];
for (i=0;i<Ordered.length;i++){
  // console.log(Ordered[i])
  blank=false;
  while(blank===false){
    
  randomIndex=getRandomInt(Ordered.length)
    
  if (unOrdered[randomIndex]!=undefined){
    console.log("The index is not empty") 
    blank=false; //this line is not necessary, the while loop persists as false
    console.log("The index is redefined")
    // randomIndex=getRandomInt(Ordered.length) //you are doing double work generating the random index
  }
  else{
    blank=true
  }
  }
  console.log("The index is good now, you can add")
  unOrdered[randomIndex]=Ordered[i]   
  console.log("added element")
}
console.log("Lista Final",unOrdered)








