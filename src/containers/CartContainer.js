import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartResult from './../components/CartResult';
import CartItem from './../components/CartItem';
import {actRemoveProductInCart,actChangeMessage, actUpdateProductInCart} from './../actions/index';
import * as Message from './../constants/Message';
class CartContainer extends Component {
    render() {
        var {cart}=this.props;       
            // Trả cho phần products một cái props.childrend để hiển thị ds
            return ( 
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            );
        }
        // Sử dụng container để lấy các state trên store và dispatch action 
        showCartItem = (cart)=>{
            var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart}=this.props
            var result= <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
            if(cart.length>0){
                result= cart.map((item,index)=>{
                    return <CartItem  
                                item={item} 
                                key={index}
                                onDeleteProductInCart={onDeleteProductInCart}
                                onChangeMessage={onChangeMessage}
                                onUpdateProductInCart={onUpdateProductInCart}
                            />
                })
            }
            return result;
        }

        showTotalAmount=(cart) =>{
            var result=null;
            if(cart.length>0){
                result= <CartResult cart={cart} />
            }
            return result;
        }
}


//  Kiểm tra dữ liệu đầu ra của state
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                description:PropTypes.string.isRequired,
            }).isRequired,
            quantity:PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onUpdateProductInCart:PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProductInCart: (product)=>{
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);