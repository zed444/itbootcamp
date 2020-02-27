
// // Zadak 1 (stari standard, razlikuje se this kod arrow u odnosu na standardne)

// let suma = function (a, b){
//     let s=a+b;
//     return s;
// }

// console.log(suma(1, 4));
// console.log(suma(9, 4));

// // Zadak 1 (novi standard)

// let suma2 = (a, b) => {
//     return a+b;
// }

// console.log(suma2(3, 4));


// let hello = () => {
// console.log("Hello World");
// }

// hello();
// hello();

// // Zadatak 2

// let echo = (s1, s2) =>{
//     let s = s1 + ", " + s2;
//     console.log(s);
// }

// echo ("Stefan", "Petrovic");

// // Zadatak 3


// let neparan = (n) => {
//     if (n%2 !== 0 ){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(neparan (4));

// // Zadatak 4 (maksimum od 2)

// let maks2 = (a, b) =>{
//     let max=a;
//     if (b>a){
//         max=b;
//     }
//     return max;
// }

// console.log(maks2(5,77));

// // Zadatak 4.1 (maksimum od 4)


// let maks4 = (a, b, c, d) =>{
//     let max1 = maks2 (a, b);
//     let max2 = maks2 (c, d);
//     let max_konacno = maks2 (max1, max2);
//     return max_konacno;
// }

// console.log(maks4(3, 6, 1, 7));

// // Zadatak 4.2 (maksimum od 8)


// let maks8 = (a, b, c, d, e, f, g, h) =>{
//     let max4_1=maks4(a, b, c ,d);
//     let max4_2=maks4(e, f, g, h);
//     let max_konacno_8=maks2(max4_1, max4_2);
//     return max_konacno_8;
// }

// console.log("Najveci od 8 unetih brojeva je: ");

// // Zadatak 10 

// let deljiviSaTri = (n, m) =>{
//     let suma=0;
//     let nizbrojeva="";
//     for (i=n; i<=m; i++){
//         if (i%3 == 0){
//             suma=suma+1;
//             nizbrojeva= nizbrojeva + (" " + i);
//         }
//     }
//     console.log(nizbrojeva);
//     return suma;
// }

// console.log(deljiviSaTri(4, 12));



// // Zadatak 6  Napisati program za učitavanje prirodnog broja i ispis sa kojim brojevima od 2 do 9 je djeljiv.	

// let operacija = (x) => {
//     let delioci = "";
//     for (i=2; i<=9; i++){
//         if (x%i == 0 ){
//             delioci = delioci + (" " + i);
//         }      
// }
// return delioci;
// }

// console.log(operacija (120) );


// // Zadatak 7 Napisati program za učitavanje 3 cifre počevši od cifre najveće težinske vrijednosti. Zatim formira trocifren broj od njih. Zatim učitati nove tri cifre, formirati novi trocifreni broje te ispisati brojeve i sumu formiranih brojeva.	

// let trocifren = (c, b, a,) =>{
//     let x = c*100+b*10+a;
//     return x;
// }
// console.log(trocifren(4, 7, 5));








// let slika = (putanja) =>{
//     return `<img src="${putanja}.jpg" alt="Nile Monitor">`;
// }

// 1) Kada telo funkcije se sastoji samo od returna

let div = document.getElementById('prvi');

let slika3 = (putanja) =>{ `<img src='${putanja}' alt="Nile Monitor">`;
}
div.innerHTML += slika3('dva.jpg');

// 2) Arrow funkcija prima jedan parametar 

// let slika3 = putanja => `<img src='${putanja}' alt="Nile Monitor">`;
}


let sledbenik = n => n+1;