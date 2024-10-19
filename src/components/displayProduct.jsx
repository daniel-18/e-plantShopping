import useAddedToCart from "../hooks/addedToCart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem} from "../CartSlice";
import Product from "./product"
import styles from "./displayproduct.module.css"
/**
 * this function will display the product in the cart view 
 * and will only have updateCartItem as method
 * @param {*} propps 
 */

function DisplayproductItem(props){

    const CartItem = useSelector((state)=> state.cart.items.find((item)=> item.item.name == props.plant.name))
    const [isAdded] = useAddedToCart(CartItem);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(addItem({item: props.plant, count: 1}))
        

    }
    const removeFromCart = ()=>{
        dispatch(removeItem({item: props.plant}))
        
    }

    return(
        <div className="display_product_container">
            <Product key={props.plant.name} plant={props.plant} isCart={false}/>
            {
                (!isAdded)?
                <div className={styles.action_add} onClick={addToCart}>
                    <div className="btn">add to cart</div>
                </div>:
                <div className={styles.action_modifier} >
                    <div className={styles.action_remove} onClick={removeFromCart}>remove</div>
                </div>
            }
        </div>
    )
}

export default DisplayproductItem