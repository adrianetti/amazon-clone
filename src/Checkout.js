import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();


    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

    }

    return (

        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>

                <h2 className="checkout__title">
                    Your shopping basket
                </h2>

                {basket.map((basket) => (
                    <div className="checkout__product">
                        <img src={basket.image} alt=""/>

                        <div className="checkout__productInfo">
                            <h3>
                                {basket.title}
                            </h3>

                            <p>
                                <small>$</small><strong>{basket.price}</strong>
                            </p>

                            <div className="checkout__productRating">
                            {Array(basket.rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                            </div>

                            <button onClick={() => removeFromBasket(basket.id)}>Delete</button>
                        </div>

                    </div>
                ))}

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
