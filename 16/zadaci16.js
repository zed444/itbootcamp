function suma(n, m){
    let s=0;
    if (n >m){
        return 0;
    }
    for(let i=n; i <= m; i++){
        s +=i;
    }
    return s;
    // Ne moze posle returna jer return prekida tok izvrsenja funkcije 
    console.log("blabla");
}

let p= suma(1, 9);
console.log(p);


console.log(suma(22, 18));

// Pomnozi sve broje od n do m

function mnozi(n, m){
    let p=1;
    for(i=n; i<=m; i++){
        p=p*i;
        }
        return p;
}


console.log(mnozi(3,6));

// Aritmeticka sredina

function aritmeticka(n, m){
    let zbir=0;
    let br=0;
    let ars;
        for (i=n; i<=m; i++){
            zbir=zbir+i;
            br=br+1;
            ars=zbir/br;
        }
        return ars;
}

console.log(aritmeticka(5, 144));

// Aritmeticka sredina brojeva koji su deljivi sa 3 od n do m

function kompleksna(n, m){
let br=0;
let zbir=0;
let ars;
            for(i=n; i<=m; i++)
            {
                if(i%10 == 3)
                {
                    zbir+=i;
                    br+=1;
                    ars=zbir/br;
                }

            }
            if (br>0) {
            return ars;
            }

            else {
                return 0;
            }
}

console.log(kompleksna(6,9));

// Zadatak 10 

function deljiviSaTri (n, m){
    let br=0;
    for (i=n; i<=m; i++){
        if (i%3 == 0){
            console.log(i);
            br=br+1;
        }
    }
    return br;
}
deljiviSaTri(5, 14);
console.log(`Broj brojeva deljivih sa tri je ${deljiviSaTri(5, 14)}`);
// Ako bi ubacio console.log pre ovoga onda bi mi ispisao undefined


function slika(putanja){
    // return "<img src='" + putanja + "' alt='blabla'>"
    return `<img src='${putanja}' alt='Blabla'>`;
}

let elem = document.getElementById('blabla');
elem.innerHTML = slika('pokretna.gif');

console.log(elem.innerHTML);

elem.innerHTML += slika('pokretna2.gif');


function paragraf(boja){
    return `<p style='color: ${boja}'>Neki tekst</p>`;

} 
elem.innerHTML +=paragraf('red');
elem.innerHTML +=paragraf('blue');

function paragraf2(boja, tekst){
    return `<p style='color: ${boja}'>${tekst}</p>`
}

elem.innerHTML += paragraf2('green', 'Lorem ipsum...');
elem.innerHTML += paragraf2('yellow', 'Zuta...');


function paragraf3 (velicina, tekst){
    return `<p style='font-size: ${velicina}px'>${tekst}</p>`;
}

elem.innerHTML +=paragraf3(25,'Ovo je paragraf velicine 25piksela')
elem.innerHTML +=paragraf3(46,'Ovo je paragraf velicine 46piksela')


// 

function pisiPet(){
    let res="";
    for(i=10; i<=50; i=i+10)
    {
        res = res + `<p style='font-size:${i}'>Neki tekst</p>`;
    }
    return res;
}

elem.innerHTML += pisiPet();

