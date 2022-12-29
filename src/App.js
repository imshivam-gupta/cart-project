import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { getFirestore,query, onSnapshot, collection,getDocs, setDoc, addDoc, deleteDoc,doc} from "firebase/firestore"


class App extends React.Component {

    constructor () {
        super();
        this.state = 
        { 
            products: [] ,
            loading: true
        };
    }
    
    handleIncreaseQuantity = (product) => {
        const db = getFirestore();
        const dbRef = collection(db, "product");
        const { products } = this.state;
        const index = products.indexOf(product);

        setDoc(doc(db,"product",products[index].id),{
            qty:products[index].qty+1,
            img:products[index].img,
            title:products[index].title,
            price:products[index].price
        });


        // products[index].qty += 1;
        this.setState({ products })
    }

    handleDecreaseQuantity = (product) => {
        const db = getFirestore();
        const dbRef = collection(db, "product");
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0) { return; }
        setDoc(doc(db,"product",products[index].id),{
            qty:products[index].qty-1,
            img:products[index].img,
            title:products[index].title,
            price:products[index].price
        });
        // products[index].qty -= 1;
        this.setState({ products })
    }

    handleDeleteProduct = (id) => {
        const db = getFirestore();
        const dbRef = collection(db, "product");
        deleteDoc(doc(db,"product",id));
        // const { products } = this.state;
        // const items = products.filter((item) => item.id !== id); 
        // this.setState({ products: items })
    }

    getCartCount = () => {
        const { products } = this.state;
        let count = 0;
        products.forEach((product) => {
          count += product.qty;
        })
        return count;
    }

    getCartTotal = () => {
        const { products } = this.state;
        let cartTotal = 0;
        products.forEach((product) => {
            cartTotal += product.qty*product.price;
        })
        return cartTotal;
    }

    addProduct = () => {
        const db = getFirestore();
        const dbRef = collection(db, "product");

        addDoc(dbRef,{
            img:' ',
            price:900,
            qty:3,
            title:'washer'
        }).catch(err => console.error(err))
    }

    componentDidMount(){
        const db = getFirestore();
        const dbRef = collection(db, "product");
        
        onSnapshot(dbRef, (docsSnap) => { 
            const products=[];

            docsSnap.forEach((doc) => {
                const top = doc.data();
                top['id']=doc.id;
                // console.log(doc.data()['id']);
                products.push(top);
            })
            
            console.log(products)
            this.setState( {
                products,
                loading:false
            } )
        });
    }

    render (){
        const { products,loading } = this.state;
        return (
            <div className="App">

                <Navbar count={this.getCartCount()} />
                
                <button onClick={this.addProduct}>Add a product</button>

                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />
                
                {loading && <h1>Loading... </h1>}
                <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>

            </div>
        );
    }
}

export default App;
