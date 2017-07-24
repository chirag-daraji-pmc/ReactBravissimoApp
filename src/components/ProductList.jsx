import React, { Component } from 'react'


export class ProductList extends Component {
    
    render() {
        const productList = this.props.productList;

        return (

            <div>
                <h1>Product List </h1> <butoon >View Bag</butoon>
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
                        {productList.map((product, i) => <tr key={product.id}>
                            <td>{product.id} </td>
                            <td>{product.title} </td>
                            <td>{product.price} </td>
                            <td><button onClick={() => this.props.handleAddToBagClick(product)}>Add to Bag</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

}