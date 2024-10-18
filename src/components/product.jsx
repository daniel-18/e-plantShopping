import products from "./product.module.css"

function Product(props){

    const addToCart = ()=>{

    }

    const removeFromCart = ()=>{

    }
    
    return(
        <div className={products.product_item}>
            <div className={products.image}>
                <img src={props.plant.image} width={250} height={300} alt={props.plant.name} srcset="" />
            </div>
            <div className={products.details}>
                <div className={products.name}>{props.plant.name}</div>
                <div className={products.description}>{props.plant.description}</div>
                <div className={products.cost}>{props.plant.cost}</div>
            </div>
            <div className={products.action}>
                <div className="btn">add to cart</div>
            </div>
        </div>
    )
}

export default Product