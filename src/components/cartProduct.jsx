import useAddedToCart from "../hooks/addedToCart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateQuantity} from "../CartSlice";
import Product from "./product"
import styles from "./cartproduct.module.css"
/**
 * this function will have as function to display the product as well as the add and 
 * remove from cart methods.
 * note that props.plant is a cart item structure as {item: plant Objec, count: number added to cart}
 * @param {} props 
 */

function CartProductItem(props){
    const CartItem = useSelector((state)=> state.cart.items.find((item)=> item.item.name == props.plant.item.name))
    const dispatch = useDispatch()
    const [isAdded] = useAddedToCart(CartItem)

        // Calculate total cost based on quantity for an item
    const calculateTotalCost = () => {
        console.log(props.plant)
        return (CartItem)?props.plant.count*Number(props.plant.item.cost.replace("$","")):0
    };

    const updateItemQuantity = (actionType)=> {
        dispatch(updateQuantity({name: props.plant.item.name, actionType: actionType}))
    }

    return (
        <div className="cartProductContainer">
            <Product key={props.plant.name} plant={props.plant.item} isCart={false}/>
            {
                (props.isCart)?
                    <span>Total: {calculateTotalCost()} $</span>
                :null
            }
            <div className={styles.modifier_container}>
                <div className={styles.action_decrement} onClick={()=> updateItemQuantity("dec")}>
                    <span>-</span>
                </div>
                    {
                        (CartItem)?<span>{CartItem.count}</span>: <span>0</span>
                    }
                <div className={styles.action_increment} onClick={()=> updateItemQuantity("inc")}>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}


export default CartProductItem