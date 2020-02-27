
let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 11.4, 4.5, 2.4];

let dan = {
datum: "2020/02/24",
kisa:   false,
sunce:  true,
oblacno: true,
temperature : [-2, 3, 17, 2, 11, 6, 2, -1],

// Metoda vraca prosecnu temperaturu za dan
prosek: function() {
    let temp = this.temperature;
    let suma = 0;
    temp.forEach(x => {
        suma = suma + x;
    });
    let p = suma/temp.length;
    return p;
},

// Prebrojava koliko je bilo merenja sa natprosecnom temperaturom
brojNatprosek : function (){
    let p = this.prosek();
    let temp = this.temperature;
    let br = 0;
    temp.forEach(y =>{
        if (y > p){
            br=br+1;
        }
    });
    return br;
},

// Prebrojava koliko je bilo merenja sa maksimalnom temperaturom
brojMaksimalnih: function(){
    let temp = this.temperature;
    let max = temp[0];
    for (i=1; i<temp.length; i++){
        if (temp[i] > max){
            max = temp[i];
        }
    }      
    let broj = 0;
    temp.forEach(t=> {
        if (t == max){
            broj++;
        }
    });
    return broj;      
},

// Prima dva parametra koji predstavljaju dve temperature, a koja broji koliko merenja je bilo izmedju ove dve granice 

brojIzmedju : function (t1, t2){
    if (t1 > t2){
        let a =t1;
         t1= t2;
         t2 = a;
    }
    let temp = this.temperature;
    let broj = 0;
    temp.forEach(t=>{
        if (t1<=t && t<=t2){
            broj=broj+1;
        }
    });
    return broj;
},

// Proverava da li je u većini dana temperatura bila iznad proseka ili ne.

ispodIznad : function (){
    let br_iznad = 0;
    let br_ispod = 0;
    let prosek = this.prosek();
    let temp = this.temperature;

    temp.forEach(x=>{
        if (x>= prosek){
            br_iznad++;
        }
        else {
            br_ispod++;
        }
        
    });

    if (br_iznad>br_ispod){
        return true;
    }
    else {
        return false;
    }
},

// Proverava da li je dan bio leden. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni.

// ledeniDan2 : function (){
//     let temp = this.temperature;
//     let provera=0;
//     temp.forEach(t =>{
//         if (t>= 0){
//             provera=provera+1;
//         }
//     });
//     if (provera !==0){
//         return false; }   
//         else {
//             return true;
//         }
// },

// ledeniDan3 : function(){
//     let x;
//     let temp = this.temperature;
//     temp.forEach(t=> {
//         if  (t>=0){
//             return false;
//             x = 0;
//         }
//     });
//     if (x == 0)
//     return true;
// },

ledeniDan : function(){
    let temp = this.temperature;
    for (let i= 0; i< temp.length; i++){
        if (temp[i] >= 0){
            console.log(temp[i]);
            return false;
        }
    }
    
    return true;
},

// Proverava da li je dan bio tropski. 
// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena.


tropskiDan : function (){
    let temp = this.temperature;
    let tropski = true;
    temp.forEach(t=>{
        if (t <24){
            tropski = false;
        }
    });   
   return tropski;
},

// Proverava da li je dan bio nepovoljan za meteropate. 
// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.

nepovoljan : function (){
    let temp = this.temperature;
    for (let i=0; i<=temp.length-1; i++){
        if (Math.abs(temp[i+1]-temp[i])> 8)
    {
        return true;
    }
}
 return false;
},

// Proverava da li je dan bio neuobičajen.
//  Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, 
//  ili je bilo i kišovito i oblačno i sunčano.

neuobicajan : function(){
    let p_kisa= this.kisa;
    let p_oblacno = this.oblacno;
    let p_temp = this.temperature;
    let p_sunce= this.sunce;
    let ok = false;

    temp.forEach(t=>{
            if (t<-5 && p_kisa == true){
                ok = true;
            }

            if(p_oblacno && t>25){
                ok = true;
            }
            if (p_oblacno==true && p_kisa==true && p_sunce==true){
                ok = true;
            }
        });
        return ok;
    },

    iznadProsekZaMesec: function(){
        let mesecString = this.datum.substr(5,2);
        let mesecCeoBoj = parseInt(mesecString);
        // pretvara string u broj
        // console.log(mesecCeoBoj);

        let p = prosek[mesecCeoBoj-1];
        let x = this.prosek();

        if (x > p){
            return true;
        }
        else{
            false
        }

    }

};


let dan1 = {
    datum: "2020/02/05",
    kisa: false,
    oblacno: true,
    sunce: true,
    temperature: [-2, 1, 3, 7, 11, 11, 5]
};

let dan2 = {
    datum: "2020/04/04",
    kisa: false,
    oblacno: false,
    sunce: true,
    temperature: [6, 14, 16, 13, 12, 10, 7, 5, 4]
};

let dan3 = {
    datum: "2020/03/06",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [-2, 5, 7, 3, 2, 1, 5, 7, 6]
};

let merenjaDani = [dan1, dan2, dan3];

// prvi dan u kome ima najvise merenja

let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;

    dani.forEach((dan, i) => {
        if (dan.temperature.length > max){
            max = dan.temperature.length 
            index = i;
        }
    });
    console.log(dani[index].datum);

}

// poslednji u kome ima najvise merenja

let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;

    dani.forEach((dan, i) => {
        if (dan.temperature.length >= max){
            max = dan.temperature.length 
            index = i;
        }
    });
    console.log(dani[index].datum);

}
poslednjiNajviseMerenja(merenjaDani);
prviNajviseMerenja(merenjaDani);


console.log(dan.temperature);
console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(4,9));
console.log(dan.brojIzmedju(12,5));
console.log(dan.ispodIznad());
console.log(dan.ledeniDan());
// console.log(dan.ledeniDan3());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());
console.log(dan.iznadProsekZaMesec());
//  kod for petlje moze da se desi prekid petlje kod for each ne moze


console.log("druga test poruka")