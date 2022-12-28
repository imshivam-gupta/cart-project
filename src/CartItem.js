import React from 'react';
class CartItem extends React.Component{
    
    increaseQty = () =>{
        this.setState({qty:this.state.qty+1});
    }

    decreaseQty = () =>{
        const {qty}=this.state;
        if(qty===0) return;
        this.setState({qty:this.state.qty-1});
    }
    
    render(){
        const {price,title,qty,img} = this.props.product;
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
                            onClick={this.increaseQty}
                        />

                        <img 
                            alt="decrease" 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick ={this.decreaseQty}
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