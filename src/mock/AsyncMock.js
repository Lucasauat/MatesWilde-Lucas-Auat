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
    {
        id:'05',
        name:'Bombilla de Acero con Resorte',
        description:'Bombilla de acero inoxidable con resorte: práctica y resistente, incluye un sistema de resorte desmontable en la base que facilita la limpieza y asegura una mejor filtración de la yerba. Ideal para quienes buscan comodidad y durabilidad en su mate.',
        category:'nuevos',
        stock:10,
        price:7500,
        img:'https://i.postimg.cc/cLYTScmG/Bombilla-de-acero-con-resorte-2.jpg',
    },
    {
        id:'06',
        name:'Mate de cuero Marron Cincelado',
        description:'Mate de cuero marrón cincelado: artesanal y resistente, recubierto en cuero trabajado a mano con detalles cincelados que le otorgan un estilo único y tradicional. Ideal para quienes buscan un mate auténtico y duradero.',
        category:'nuevos',
        stock:10,
        price:22000,
        img:'https://i.postimg.cc/s2fJFCHb/Whats-App-Image-2025-06-10-at-19-02-51.jpg',
    },
    {
        id:'07',
        name:'Bombilla de Aplaca',
        description:'Bombilla de alpaca elegante y duradera, fabricada en aleación de cobre, níquel y zinc. No se oxida, mantiene el sabor natural del mate y ofrece un diseño tradicional con excelente resistencia.',
        category:'mas vendidos',
        stock:18,
        price:9500,
        img:'https://i.postimg.cc/QdVSy3BC/bombilla-de-alpaca.png',
    },
    {
        id:'08',
        name:'Combo de Yerba',
        description:'Llevate dos clásicos del mate en un solo pack. Yerba Baldo, suave y equilibrada, combinada con Canarias, de sabor intenso y duradero. Ideal para quienes disfrutan de distintos estilos de yerba.',
        category:'ofertas',
        stock:15,
        price:15500,
        img:'https://i.postimg.cc/9FC0Yd8F/Chat-GPT-Image-2-sept-2025-02-03-04-p-m-1.png',
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