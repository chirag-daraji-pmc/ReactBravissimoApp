import React, { Component } from 'react'

export class Bag extends Component {
    TotalPrice(products) {
        var priceArray = products.map(function (a) { return a.price.substring(1, a.price.length - 1); });
        let sum = 1;//Working on this didn't get enoguh time to finish this logic;        
    }
    render() {

        const produtInBag = this.props.productsInBag;
        console.log("bagProduects:" + produtInBag)
        if (produtInBag.length > 0) {
            return (

                <div>
                    <h1>Bag</h1>
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name </th>
                                <th>Price </th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtInBag.map((product, i) => <tr key={product.id}>
                                <td>{product.id} </td>
                                <td>{product.title} </td>
                                <td>{product.price} </td>
                                <td><button onClick={() => this.props.handleRemoveFromBagClick(product)}>remove</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                    <div><h3>Total Price : {this.TotalPrice(produtInBag)}</h3></div>
                </div>);
        }
        else {
            return (<div> <h2>Your Bag is empty</h2></div>);
        }


    }

}