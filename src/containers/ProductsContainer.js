import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import {actAddToCart,actChangeMessage} from '../actions/index';
import PropTypes from 'prop-types'
class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        // Trả cho phần products một cái props.childrend để hiển thị ds
        return ( 
        <Products>  
            {this.showProducts(products)}
        </Products>
        );
    }
    // Sử dụng container để lấy các state trên store và dispatch action 
    showProducts=(products)=>{
        var result='';
        var {onAddToCard, onChangeMessage} = this.props;
        if(products.length>0){
            result=products.map((product,index)=>{
                return <Product 
                        onAddToCard={onAddToCard} 
                        key={index} 
                        product={product} 
                        onChangeMessage={onChangeMessage}
                        />
            })
        }
        return result;
    }
}
//  Kiểm tra dữ liệu đầu ra của state
ProductsContainer.propTypes={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            description:PropTypes.string.isRequired,
        })
    ).isRequired,

    onChangeMessage:PropTypes.func.isRequired,
    onAddToCard:PropTypes.func.isRequired,
    
}
const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps =(dispatch,props)=>{
    return{
        onAddToCard : (product) =>{
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message))
        }
    } 

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);