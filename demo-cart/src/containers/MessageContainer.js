import React from 'react';
import Message from './../components/Message';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class MessageContainer extends React.Component {
    render() {
        let {message} = this.props;
        return (
            <Message message={message}/>
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer);