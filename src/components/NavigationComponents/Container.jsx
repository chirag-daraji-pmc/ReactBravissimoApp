import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProductList } from '../../components/ProductList.jsx'
import { Bag } from '../../components/Bag.jsx'
import { ProductAPI } from '../../API/ProductAPI.jsx'


export class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: ProductAPI.getAllProducts(),
            productsInBag: []
        }
        this.handleAddToBagClick = this.handleAddToBagClick.bind(this);

    }

    handleAddToBagClick(product) {
        console.log(product);
        var newBagProducts = this.state.productsInBag;
        newBagProducts.push(product);
        this.setState({ productsInBag: newBagProducts });
        console.log(this.state.productsInBag);
    }
    render() {
        return (

            <Switch>
                <Route exact path='/' render={(props) => (<ProductList productList={this.state.productList} handleAddToBagClick={this.handleAddToBagClick} />)} />
                <Route path='/bag' render={(props) => (<Bag productsInBag={this.state.productsInBag} />)} />
            </Switch>

        );
    }
}
