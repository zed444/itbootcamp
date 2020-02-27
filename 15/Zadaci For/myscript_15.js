// Zadatak 15. for 

// let i;
// let pozitivno=0;
// let negativno=0;
// let n=-7;
// let m=13;

// for (i=n; i<=m; i++)
// {
//     if (i >= 0){
//         pozitivno+=1;
//     }
//     else {
//         negativno+=1;

//     }
// }
//     console.log(pozitivno, negativno);

// Zadatak 16

// let i;
// let deljivi=0;

// for (i=5; i<=50; i++)

// if (i%3==0 || i%5==0)
//     {
//         deljivi=deljivi+1;
//     }
// console.log(deljivi);

// Zadatak 17

// let n=10;
// let m=40;
// let br=0;
// let suma=0;


// for (i=n; i<=m; i++)
// {    
//     if (i%10 == 4)
//     {
//         br++;
//         suma=suma+i;    }

// }
//  console.log(suma, br);



// Odrediti cifre stotice, desetice i jedinice 

// let n=345;
// let a;
// let b;
// let c;
// let pomocna;

// a=n%10;
// b=((n-a)/10)%10;
// c=(n-a-10*b)/100;

// console.log (a, b, c);


// Odrediti cifre 4 broja 

let n=3456;
let a;
let b;
let c;
let d;

a=n%10;
b=((n-a)/10)%10;
c=((n-a-10*b)/100)%10;
d=(n-c*100-b*10-a)/1000;

console.log (d, c, b, a);




// Zadatak 18.

// let n=11;
// let m=30;
// let a=10;
// let p=1;

// for (i=n; i<=m; i++)
// {
// if (i%a == 0)
// { p=p*i;}
// }

// console.log(p);

// Zadatak 10. (Tri slicice naizmenicno) Stavlja se + da bi ih povezao jednu pored druge
// div.innerHTML +="<img src=slike/" + i + ".jpg>"+ <br>;

// let div=document.getElementById('slika');
// let i;


// for (i=1; i<=6; i++)
// {
//     if (i%3 == 1)
//     {div.innerHTML +="<img src='slike/1.jpg'>";}

//     else if (i%3 == 2)
//     {div.innerHTML +="<img src='slike/2.jpg'>"}

//     else {div.innerHTML +="<img src='slike/3.jpg'>"}

// }

