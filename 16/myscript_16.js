// let s = 0;
// for (let i=1; i<=3; i++){
//     s+=1;
// }
// //  Moze sa let ili bez 
// for (let i=4; i<=6; i++){  
//     s+=1;
// }
// console.log(i);
// console.log(s);

// HOISTING promenjiva se uvodi sto je ranije moguce i to vazi za VAR promenjive

function f1(){
     j=3;
    if (8 == 8)
    {
         k=-5;
    }

    console.log(j, k);}

function f2(){
    console.log(j, k);
}

f1();
f2();

// Oblasta vazenja promenjivih