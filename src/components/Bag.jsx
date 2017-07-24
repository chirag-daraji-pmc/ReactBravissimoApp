import React, { Component } from 'react'

export class Bag extends Component {

    render() {

        const produtInBag = this.props.productList;
        console.log("bagProduects:"+produtInBag)
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
                        {/*{produtInBag.map((product, i) => <tr key={product.id}>
                            <td>{product.id} </td>
                            <td>{product.title} </td>
                            <td>{product.price} </td>
                            <td><button onClick={() => this.handleAddToBagClick(product)}>remove</button></td>
                        </tr>)}*/}
                    </tbody>
                </table>
            </div>
        );
    }

}