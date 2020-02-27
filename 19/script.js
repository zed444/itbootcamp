
// 17.Zadatak

let niz_timova = ["Tim A", "Tim B", "Tim C"];

let tabela = "<table>";
for (let i=0; i<niz_timova.length; i++){
    tabela += `<tr><td>${niz_timova[i]}</td><tr>`;
}
tabela +="</table>";

let div_tabela = document.getElementById('tabela');
div_tabela.innerHTML = tabela; 

    // U tabeli u istom redu 

let tabela2 = "<table><tr>";
for (let i=0; i<niz_timova.length; i++){
    tabela2 += `<td>${niz_timova[i]}</td>`;
}
tabela2 +="</tr></table>";

let div_tabela2 = document.getElementById('tabela2');
div_tabela.innerHTML += tabela2; 



    /* <table>
    <tr><td>Tim A</td><tr>
    <tr><td>Tim B</td><tr>
    <tr><td>Tim C</td><tr>
</table> */


// 18.Zadatak

// let niz_slika = ["0.png", "1.jpg", "2.jpg"];
// let slike ="";

// for (let i=0; i<niz_slika.length; i++){
//     slike +=`<img src=${niz_slika[i]}><br>`
// }

// let div = document.getElementById('slikeh');
// div.innerHTML = slike;



// Stringovi i njihovi metodi 

let str = 'Zdravo svete!';

// Duzina stringa 

console.log(str.length);

// Da li sadrzi neki karakter - includes

console.log(str.includes('v'));

if (str.includes('o')){
    console.log("String sadrzi slovo o");
}
else {console.log("String ne sadrzi slovo o");}

// Da li sadrzi karakter na specifiranoj poziciji 

console.log(str.includes("Z", 0));

// Prvi indeks unetog slova - indexOf

console.log(str.indexOf('e'));

// Poslednji indeks unetog slova - lastIndexoOF 

console.log(str.lastIndexOf('e'));

// Prvo slovo reci - starstwith

console.log(str.startsWith('Z'));

// Poslednje slovo reci - endswith 

console.log(str.endsWith('?'));

// slice - odakle poceti (od koje pozicije) podstring, gde zavrsiti podstring (do koje pozicije)

console.log(str.slice(0,6));

// substr - odakle poceti (od koje pozicije) podstring, koliko elemenata  od te pozicije na dalje uzeti 

console.log(str.substr(3,4));

// replace - zameniti  

console.log(str.replace('e','w'));

// push dodaj na kraj niza 
// c.push

// pop uzmi sa kraja 

// slovo.toUpperCase() - za pretvranje slova u veliko slovo 
// slovo.toLowerCase() - za pretvaranje slova u malo slovo 

            // 

// 19. Ispisati duzinu svakog elementa u nizu stringova

let niz_stringova = ["Dallas", "Sacramento","LA Lakers"];

for (i=0; i<niz_stringova.length;i++){
    let duzReci = niz_stringova[i].length;
    console.log(duzReci);
    // console.log(niz_stringova[i].length)s
}

// 20.Odrediti elemen u nizu stringova sa najvecom duzinom
let najduzaRec = niz_stringova => {
let max = niz_stringova[0].length;
let maxRec = niz_stringova[0];

for (i=1; i<niz_stringova.length; i++){
    if (niz_stringova[i].length > max){
        max = niz_stringova[i].length;
        maxRec = niz_stringova[i];
    }
}
return maxRec;
}

console.log(najduzaRec(niz_stringova));

// 21. Prosecan broj slova u nizu reci

let srbr_slova = niz =>{
suma = 0;
    for (i=0; i<niz.length; i++){
        suma+= niz[i].length;
    }
    let prosek = suma/niz.length;
    return prosek;
}

console.log(srbr_slova(niz_stringova));

// 22. Ispisati natprosecno dugacke reci 

let ND = niz => {
    let avr = srbr_slova(niz);
    let br =0;
    for (i=0; i<niz.length; i++){
        if (niz[i].length > avr){
             br = br+1;
             console.log(niz_stringova[i]);
        }
    }
    return br;
}

console.log(ND(niz_stringova));

// 23. Odrediti broj stringova koji u nizu sadrze slovo 'a'

let sadrzeA = (niz, slovo) =>{
    let br = 0;
    for (i=0; i<niz.length; i++){
        if (niz[i].includes(slovo)){
            br = br+1;
        }
    }
    return br;
}

console.log(sadrzeA(niz_stringova, "D"));

// 24. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.


let pocinjeA = (niz,slovo) =>{
    let br= 0;
    for (let i=0; i<niz.length; i++){
        if (niz[i].startsWith(slovo.toLowerCase()) || niz[i].startsWith(slovo.toUpperCase())){
            br = br + 1;
        }
    }
    return br;
}

console.log(pocinjeA(niz_stringova, 'd'));

// 25. Dati su nizovi 

let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let c = []; 

//  mora da se ubaci koja je tip elementa u promenjivoj kada je prazan za string "", za niz []
// Obrati paznju na <= - MORA samo i<a.length 

for (let i=0; i<a.length; i++){
    c.push(a[i]);
    c.push(b[i]);
}

console.log(c);
console.log(c.pop());
console.log(c);

//26. Data su dva niza a i b napravi novi niz d kojem su elementi proizvodi a*b


let proizvodElementa = (a, b)=> {

let d=[];

for (i=0; i<a.length; i++){
    d[i]=a[i]*b[i];
}

console.log(d);}

proizvodElementa(a,b);

// 27. 



let funkcija = (a) => {
    let b = [];
    let n = a.length/2;
    for(i=0; i<a.length; i++){
    b.push((a[i]+a[a.length-i-1])/2)
    }
    return b;
}

console.log(funkcija(a));




