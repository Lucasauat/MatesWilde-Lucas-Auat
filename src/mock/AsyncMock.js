const productos = [
    {
        id:'01',
        name:'Mate 1',
        description:'lorem lorem',
        category:'nuevito',
        stock:10,
        price:10000,
        img:'https://i.postimg.cc/J426wDbD/mate-camio.jpg',
    },
    {
        id:'02',
        name:'Mate 2',
        description:'lorem lorem',
        category:'oferta',
        stock:7,
        price:1000,
        img:'https://i.postimg.cc/DzqBbxRL/mate-imperial-r.jpg',
    },
    {
        id:'03',
        name:'Mate 3',
        description:'lorem lorem',
        category:'oferta',
        stock:10,
        price:1500,
        img:'https://i.postimg.cc/d1wnR8KX/mate-torpedo.jpg',
    },
    {
        id:'04',
        name:'Yerba',
        description:'mas vendidos',
        category:'nuevito',
        stock:100,
        price:15000,
        img:'https://i.postimg.cc/Hxzz6VYL/canarias.jpg',
    },
]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('hubo un error, intenta mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}