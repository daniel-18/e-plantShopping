import { useState } from "react"
import products from "./product.module.css"
import { addItem, removeItem } from "../CartSlice";
import { useDispatch } from "react-redux";

function Product(props){
    const [addedToCart, setAddedToCart] = useState(false);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(addItem({index: props.index, item: props.plant, count: 0}))
        setAddedToCart(true)

    }

    const removeFromCart = ()=>{
        dispatch(removeItem({index: props.index, item: props.plant}))
        setAddedToCart(false)
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
            {
                (!addedToCart)?
                <div className={products.action_add} onClick={addToCart}>
                    <div className="btn">add to cart</div>
                </div>:
                <div className={products.action_remove} onClick={removeFromCart}>
                    <div className="btn">remove</div>
                </div>
            }
        </div>
    )
}

export default Product