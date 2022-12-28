import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty: 1,
            img:' '
        }
    }
    render(){
        const {price,title,qty,img} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div>{title}</div>
                    <div style={{color:'gray'}}>Rs {price}</div>
                    <div style={{fontWeight:800}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                        />

                        <img 
                            alt="decrease" 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                        />

                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/484/484662.png' 
                        />
                    </div>
                </div>
            </div>
        );
    }
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