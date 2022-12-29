import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt={product}/>
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={() => onIncreaseQuantity(props.product)}
                    />

                    <img 
                        alt="decrease" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick ={() => onDecreaseQuantity(props.product)}
                    />
                    <img 
                        alt="delete" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/484/484662.png' 
                        onClick ={() => onDeleteProduct(props.product.id)}
                    />
                </div>
            </div>
        </div>
    );
}


const styles={
    image:{
        height:150,
        width:130,
        borderRadius:4,  // We use camel case since border-radius is not valid here
        background:'#ccc'
    }
}

export default CartItem