import React from 'react';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'




class ProductsContainer extends React.Component {
	render() {
		let {products} = this.props;
		return (
            <Products>
                {this.showProduct(products)}
            </Products>
		);
    }
    
    showProduct(products) {
        let result = null;
        if(products.length > 0) {
           result = products.map((product, index) => {
               return <ProductItem 
                                    key={index} 
                                    product={product} 
                                    onAddToCart={this.props.onAddToCart}
                                    onChangeMessage={this.props.onChangeMessage}
                        />
            })
        }

        return result;
    }

}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rateting: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
