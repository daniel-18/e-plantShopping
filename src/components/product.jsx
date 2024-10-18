function Product(props){
    return(
        <div className="product-item">
            <div className="image">
                <img src={props.plant.image} alt={props.plant.name} srcset="" />
            </div>
            <div className="name">{props.plant.name}</div>
            <div className="description">{props.plant.description}</div>
            <div className="cost">{props.plant.cost}</div>
        </div>
    )
}

export default Product