import React from 'react'
import {useShoppingCart} from 'use-shopping-cart'

function Success(){
    const {clearCart} = useShoppingCart();
    React.useEffect(() =>  {
        clearCart()
    }, [clearCart])
    return <h1>You have sucessfuly bout a product! Thank you.</h1>
}

export default Success;