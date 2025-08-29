const productos = [
    {
        id:'01',
        name:'Mate Tradicional',
        description:'Mate tradicional hecho en madera natural, ideal para quienes valoran la esencia y calidez del mate clásico. Su diseño artesanal ofrece un sabor auténtico y una experiencia tradicional en cada cebada. Resistente y cómodo para el uso diario.',
        category:'nuevos',
        stock:10,
        price:10000,
        img:'https://i.postimg.cc/J426wDbD/mate-camio.jpg',
    },
    {
        id:'02',
        name:'Mate Camionero',
        description:'Mate estilo camionero de gran capacidad, ideal para quienes disfrutan de cebadas largas. Fabricado con calabaza forrada en cuero, con virola de aluminio decorada. Cómodo, resistente y con excelente terminación artesanal.',
        category:'ofertas',
        stock:7,
        price:1000,
        img:'https://i.postimg.cc/DzqBbxRL/mate-imperial-r.jpg',
    },
    {
        id:'03',
        name:'Mate Torpedo',
        description:'Mate torpedo tradicional, de calabaza forrada en cuero con base y virola de aluminio. Su forma robusta y redondeada brinda una excelente estabilidad y una experiencia de cebado cómoda y duradera. Artesanal y de gran estilo.',
        category:'mas vendidos',
        stock:10,
        price:1500,
        img:'https://i.postimg.cc/d1wnR8KX/mate-torpedo.jpg',
    },
    {
        id:'04',
        name:'Yerba Canarias',
        description:'Yerba Mate Canarias 1kg. De origen brasilero, reconocida por su sabor intenso y duradero. Elaborada con palo, es la preferida por los consumidores que buscan una mateada fuerte y rendidora. Ideal para los que disfrutan del sabor tradicional y auténtico.',
        category:'nuevos',
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

export const getItem = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((item)=> item.id ===id)
            resolve(prod)
        },2000)
    })
}