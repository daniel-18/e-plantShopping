import { useEffect, useState } from "react";

function useAddedToCart(cartItem){
    const [addedTocart, setAddedToCart] = useState(false)
    useEffect(()=>{
        if(cartItem != undefined){
            if(cartItem.count > 0){
                setAddedToCart(true)
            }
            return
        }
        setAddedToCart(false)
    }, [cartItem])
    return [addedTocart]
}

export default useAddedToCart