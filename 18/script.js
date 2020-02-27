// 0. Pocetak

let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);

cars[1]="Ford";
console.log(cars);

let test =[6.07, "sreda", -9, false];
console.log(test);

// 1. Ispis svih elemenata niza 

let cars1 = ["Volvo", "BMW", "Toyota"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars1[i]);
}

    // 1.1 Ispis svih elemenata niza druga metoda (al je laksa prva)

        // for (let i=0; i<=cars.length -1; i++){
        // }

// 2. ispis svih elemenata u obrnutom redosledu 


for (let i=cars1.length; i>=0; i--){
    console.log(cars1[i]);
}

let niz = [1, 2, 3, 4, 5];
let suma_niza=0;

for (let i=0; i<niz.length; i++){
    suma_niza = suma_niza + niz[i];
}

console.log(suma_niza);


    // Ako se stavi i<=niz.length nece da radi. Mora da bude ili i<niz.length  ili i<=niz.length-1, i krece od 0


// 3. Odrediti proizvod elemenata celobrojnog niza 

let proizvod = 1;

for (i=0; i<=niz.length-1; i++){
    proizvod= proizvod* niz[i];
}

console.log(proizvod);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza

suma=0;

for (i=0; i<=niz.length-1; i++){
    suma=suma+niz[i];
}

let srvr;
if (niz.length == 0){
    srvr = 0;
}
else {
    srvr= suma/niz.length;
    console.log(srvr);
}


// 5. Odrediti maksimalnu vrednost u celobrojnom nizu

let niz1 = [4, 17, 12, 33, 8, 56, 2, -8 ];

let max = niz1[0];
for (i=1; i<niz1.length; i++){   
    if (niz1[i]>max){
        max = niz1[i];
    }
}

console.log(max);

// 6. Odrediti minimalnu vrednost u celobrojnom nizu

// let min = niz1[0];

// for (i=1; i<niz1.length; i++){
//     if (niz1[i]<min){
//         min = niz1[i];
//     }
// }

// console.log(min);

 



                                                    // Vezba

// let promenjiva = cars[2];

// console.log(promenjiva);

// for (i=0; i<=2; i++){
//     console.log(cars[i]);
// }

// // 8. Odrediti indeks elementa najveceg celobrojnog niza

//  max = niz1[0];
// for (let i=1; i<niz1.length; i++){   
//     if (niz1[i]>max){
//         max = niz1[i];
//     }
//     let indeks = i;
    
// }


                                                    // 


// 6. Odrediti minimalnu vrednost u celobrojnom nizu


let minArrow = niz => {
    let min = niz1[0];
    for (i=1; i<niz1.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

console.log(minArrow (niz1));


// 7. Odrediti indeks najveceg broja 

let max_indeks = niz => {
    let max = niz[0];
    for (let i=1; i<=niz.length; i++){
        if (niz[i]>max){
            max = niz[i];
            ind = i; 
        }
    }
    return ind;
}

console.log(max_indeks(niz1));

console.log(max_indeks([1, 3, 7, 8, 4]));

// 8. Odrediti indeks najmanjeg celobrojnog broja 

let min_indeks = niz => {
    let min = niz[0];
    for (let i=1; i<=niz.length; i++){
        if (niz[i]<min){
            min = niz[i];
            ind = i; 
        }
    }
    return ind;
}

console.log(min_indeks(niz1));

// console.log(min_indeks([1, 3, 7, 8, 4]));

// 9. Napisati funkicju koja vraca broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brojSrVr = niz => {
    let suma = 0;
    for (i=0; i<niz.length; i++){
        suma += niz[i];
    }
    srvr = suma/niz.length;
    brojac = 0;

    for (i=0; i<niz.length; i++){
        if (niz[i]>srvr){
            brojac+=1;
            console.log(niz[i]);
        }
    }
    return brojac;
}


console.log(brojSrVr([1,2,3,4,5,6]));


// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.


let suma_pozitivnihbr= niz => {
    let suma = 0;
    for (i=0; i<=niz.length; i++){
        if (niz[i]>= 0){
            suma = suma+i;
        }
    }
    return suma;
}

console.log(suma_pozitivnihbr(niz1));
console.log(suma_pozitivnihbr([-4, 7, -4, 7]));


// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let sesnaest = niz => {
    for (i=0; i<=niz.length; i++){
        if (niz[i]%2 !== 0 && i%2 == 0 ){
            niz[i] *= -1;
        }
    }
    return niz;
}

console.log(sesnaest([-1,-2,-3,-4,-5 ]));

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi).Prolaskom kroz niz napraviti neuređenu listu i ispisati je uhtml dokument.

let div = document.getElementById('neuredjenalista');


let funkcija_lista = niz => {
    for (i=0; i<niz.length; i++){
    div.innerHTML += `<li>${niz[i]}</li>`;
    }
}

funkcija_lista(["jedan", "dva", "tri", "cetri"])


// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz nizformirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let sedamnaest= document.getElementById('tabela');


let funkcija_tabela = a => {
    for (i=0; i<a.length; i++){
        sedamnaest.innerHTML += `<tr><td>${a[i]}</td></tr>`;
    }
}

funkcija_tabela(["bla", "bla", "bla"]);