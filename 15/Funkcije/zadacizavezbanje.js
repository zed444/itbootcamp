

// 4.Zadatak pod a

function maks2 (a, b)
{ if (a > b)
    {return a;
    }
    else 
    {return b;}

}

let maksimalni2 = maks2(2,5);
console.log(maksimalni2);

// 4.Zadatak pod b


function maks4 (a, b, c, d)
{ let m1=maks2(a, b);
    let m2=maks2(c, d);
    let m3 = maks2(m1, m2);

    return m3;

}

let maksimalni4=maks4 (3,7,17,1);
console.log(maksimalni4);


// Zadatak 3

function neparan(n)
{
    
    if(n%2 == 1)
      { return true;}
      else {return false;}
}
let parnepar= neparan(9);
console.log(parnepar);

let parepar = neparan(12);

if (parepar == true)
{
    console.log("Broj je neparan")
}
else {console.log("Broj je paran")}


function sedmiDan (dan)
{
    let pomdan=dan % 7;

    switch(pomdan)
    {
        case 0:
            return "Nedelja";
        break;

        case 1:
            return "Ponedeljak";
        break;

        case 2:
            return "Utorak";
        break;

        case 3:
            return "Sreda";
        break;

        case 4:
            return "Cetrvtak";
        break;

        case 5:
            return "Petak";
        break;

        case 6:
            return "Subota";
        break;

        default:
            return "Los Unos";
    }
}

let danunedelji = sedmiDan(24);
console.log(danunedelji);