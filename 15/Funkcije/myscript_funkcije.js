// function zdravoSvete()
// {
//     console.log("Zdravo svete");
// }

// zdravoSvete();
// console.log("***")



// for (let i=1; i<=10; i++)
// {
//     zdravoSvete();
// }

// Funkcija sa prosledjenim jednim parametrom

function ispisi(tekst)
{
    console.log(tekst);
}
ispisi("Blablabla");
ispisi("Javascript");
let ime = "Ana";
ispisi(ime);
ispisi(17.3);


// Ime Prezime Godiste

function korisnik(ime, prezime, godinarodjenja)
{
    console.log(`Korisnik ${ime} ${prezime} je rodjen ${godinarodjenja}. godine`);
}
korisnik("Stefan", "Petrovic", 1994);

let korisnikIme="Mika";
let korisnikPrezime="Mikic";
let korisnikGodRodj=1992;
korisnik(korisnikIme, korisnikPrezime, korisnikGodRodj);

// Ispis zbira dva broja

function zbir(a, b)
{
    let c=a+b;
    console.log(c);
}

zbir(14, 17);
zbir("2", "5");
zbir("sest", "6");

// Digitron  plus je karker tako da se gleda ko string

function Digitron(a, b, o){
        if (o == "+")
        {
            rez= a+b;
        }
        else if (o == "-")
        {
            rez= a-b;
        }
        else if (o == "*")
        {
            rez= a*b;
        }
        else {
        
                if (b ==0)
                {rez = "Nije dozovljeno deliti nulom";}

                else {rez= a/b;}
            }
            console.log(rez);
}

Digitron(3, 5,"*");
Digitron(3, 5,"-");
Digitron(3, 5,"+");
Digitron(3, 5,"/");
Digitron(3, 0,"/");

function saberi(a, b)
{
    let rez = a+b;
     rez = a+b;
    return rez;
}
    let rezultat = saberi (5, 17);
    console.log(rezultat);
    let pom= rezultat+1;
    console.log(pom);

    let pom1=saberi(3,4)+saberi(6,7);

console.log(pom1);

let zbir1=saberi(4,5);
let zbir2=saberi(6,9);
let zbir3=zbir1+zbir2;

console.log(`${zbir1}+${zbir2}=${zbir3}`)

let zbir33=saberi(zbir1, zbir2);

console.log(zbir33);

