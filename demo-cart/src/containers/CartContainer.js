import React from 'react';
import Cart from './../components/Cart'
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem'
import CartResult from '../components/CartResult';


class CartContainer extends React.Component {
	render() {
        let {cart} = this.props;
		return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>

		);
    }
    
    showCartItem = (cart) => {
        let result = <tr>
                        <td> {Message.MSG_CART_EMPTY} </td>
                    </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={this.props.onDeleteProductInCart}
                        onChangeMessage={this.props.onChangeMessage}
                        onUpdateProductInCart = {this.props.onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rateting: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.deleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.updateProductInCart(product, quantity))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
