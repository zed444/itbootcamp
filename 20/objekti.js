let blog1 = {
    title: 'Blog 1',
    content: 'Tekst 1',
    likes: 30,
    dislikes: 5
};

console.log(blog1);

let blog2 = {
    title: 'Blog 2',
    content: 'Tekst 2',
    likes: 130,
    dislikes: 50
};

console.log(blog2);

let blog3 = {
    title: 'Blog 3!',
    content: 'Tekst 3',
    likes: 250,
    dislikes: 150
};
console.log(blog3);

let user = {
    username: 'JohnDod',
    age:30,
    blogs:['Title 1', 'Title 2', 'Title 3'],
    // Metod
    login: function(){
    console.log('Ulogovani ste')
    },
    logBlogs:function(){
    this.blogs.forEach(b =>{
        console.log(b);
    });
}
}

// Da bi pristupio podacima unutar bloga , moram da svativ this
// Poziv metoda

user.login();
user.logBlogs();
console.log(this);

let arrBlogs = user.blogs;
for (let i=0; i<arrBlogs.length; i++){
    console.log(`Naslov bloga je: ${arrBlogs[i]}`)
};

// naziv niza.forEach(blog => { 
//     console.log(blog);
// });

// Ispis niza blogova forEach petljom, forEach je metod i stavim male zagrade, za svaki metod se stave male zagrade 


arrBlogs.forEach( blog =>{
    console.log(`Naslov bloga je ${blog}`);
});

// Metod je u objektu 

// Funkcija se pravi izvan ovjekta 


// Niz objekata

let blogovi = [blog1, blog2, blog3];

// Iteracija for petljom (console.log(blogovi[i]['']);)  - drugi nacin za ispisivanje

for(let i=0; i<blogovi.length; i++){
    console.log(blogovi[i].title);
}

// Iteeracija foeach nizom objekta

blogovi.forEach(blog =>{
    console.log(blog);
});

// Iteracija foreach nizom objekata - ispisivanje naslova
console.log(blog1.title);

blogovi.forEach( blog =>{
    console.log(blog.title);
});

// 1. Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova


let ukupnoLajkova = blogovi =>{
    let ukupno = 0;

    blogovi.forEach(blog =>{
        ukupno += blog.likes;
    });
    return ukupno;
};

console.log(ukupnoLajkova(blogovi));

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosecnoLajkova = niz =>{
    let uL = ukupnoLajkova(blogovi);
    let prosek = uL/(niz.length);
    return prosek;
};

console.log(prosecnoLajkova(blogovi));

// 3. Napraviti arrow funkciju kojoj se prosleđuje nizobjekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let visePozitivnih = niz =>{
niz.forEach(elem => {
    let poz = elem.likes;
    let neg = elem.dislikes;
    if (poz>neg){
console.log(elem.title);
}
});
};

visePozitivnih(blogovi)

// 4. Proverava da li se naslov zavrsava sa uzvicnikom

let uzvicnik = blogs =>{
    blogs.forEach(blog=>{
    let naslov=blog.title;
    if (naslov.endsWith('!')){
        console.log(naslov);
        return true;
    }
    else {return false;}
});
};

console.log(uzvicnik(blogovi));


let user1 = {
    username: 'StefanPetrovic',
    age:25,
    blogs: [blog1, blog2, blog3],

    logBlogs: function (){
        this.blogs.forEach(b=>{
            console.log(b);
        });
    },

    logTittleBlogs: function(){
        this.blogs.forEach(b =>{
            console.log(b.title);
        });
    }
};

console.log(user1);
user1.logBlogs();
user1.logTittleBlogs();

let user2 = {
    username: 'Vince Neil',
    age:17,
    blogs: [blog1, blog2]
};

let user3 = {
    username: 'Nikki Sixx',
    age:61,
    blogs: [blog1, blog2]
};

let user4 = {
    username: 'Mick Mars',
    age:14,
    blogs: [blog1, blog3]
}

let users = [user1, user2, user3, user4];


// Ispisati imena onih autora koji imaju manje od 18 godina

let manjeodOsamnaest = niz => {
users.forEach(elem => {
    let gov = elem.age;
    if (gov <18){
        console.log(elem.username);
        }
    });
};

manjeodOsamnaest(users);


let popularniBlogovi = niz =>{
    niz.forEach(k =>{
        let nizBlogova = k.blogs;
            nizBlogova.forEach( b =>{
                let lajkovi = b.likes;
                if (lajkovi > 50){
                    console.log(b.title);
                }
            });
        });
}

popularniBlogovi(users);

// Ispisati sve blogeove autora ciji je username 'Nikki Sixx'


// let MC1981= (korisnici, ime) =>{
//     korisnici.forEach(k =>{
//         if (k.username == ime){
//             let nizBlogova = k.blogs;
//             nizBlogova.forEach( b=>{
//                 console.log(b.title);
//             });
//         }
//     });
// };

// MC1981(users,'Mick Mars');

// let popularniAutori = autori => {
//     autori.forEach(a=>{
//         let nizBlogova = a.blogs;
//         let sumLikes = 0; 
//         nizBlogova.forEach(b=>{
//             sumLikes += b.likes;
//         });
//         if (sumLikes > 100){
//             console.log(a.username);
//         }
//     });
// };

// popularniAutori(users);


// let blabla = autori =>{
// autori.forEach(a=> { 
//     let nizBlogova = a.blogs;
//     let sumLikes = ukupnoLajkova(nizBlogova);
//     if (sumLikes > 50){
//         console.log(autori.username);
//     }
// });
// };

// blabla(users);


// Ispisati nasolove onih blogova koji imaju natprosecan broj inegativnih ocena 


let superBlog = niz =>{
    let sumDis=0;
    let sum = 0; //suma lajkova svih blogova
    let br = 0;  // broj svih blogova
    niz.forEach(a=> {
        let nizBlogova=a.blogs;
        nizBlogova.forEach(b=>{
            b++;
            sum=sum+b.likes;
            sumDis=sumDis+b.likes;
        });

    });

    let avgLikes = sum / br;
    let avgDislikes = sumDis/br;

    niz.forEach(a=>{
        let nizBlogova=a.blogs;
        nizBlogova.forEach(b => {
            if(avgLikes < b.likes && avgDislikes > b.dislikes){
                console.log(b.title);
            }
        });

    });
};

superBlog(users);