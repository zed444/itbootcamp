let blog = {
    title: 'Moj blog',
    content: 'Tekst...',
    author: 'SP'
};

console.log(blog.title);
console.log(blog['content']);

console.log(blog);

blog.title = 'Moj prvi blog'
blog.content = 'Promenjeni sadrzaj'
blog ['author'] = 'Stefan Petrovic'

console.log(blog);
console.log(typeof blog);
console.log(typeof 5);
console.log(typeof Stefan);
console.log(typeof true);


//  typeof mozemo da vidimo kog je tipa podatak 