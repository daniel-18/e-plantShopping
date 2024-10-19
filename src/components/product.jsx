import { useState } from "react"
import products from "./product.module.css"

import { useDispatch, useSelector } from "react-redux";
import useAddedToCart from "../hooks/addedToCart";


function Product(props){


    return(
        <div className={(props.isCart)?products.product_item_flex_row:products.product_item}>
            <div className={products.image}>
                <img src={props.plant.image} width={250} height={300} alt={props.plant.name} srcset="" />
            </div>
            <div className={products.details}>
                <div className={products.name}>{props.plant.name}</div>
                <div className={products.description}>{props.plant.description}</div>
                <div className={products.cost}>{props.plant.cost}</div>
            </div>
        </div>
    )
}

export default Product