import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
class MessageContainer extends Component {
    render() {
        var {message}=this.props;
        // Trả cho phần products một cái props.childrend để hiển thị ds
        return ( 
            <Message message={message}></Message>
        );
    }
}
// Check 123
MessageContainer.propTypes={
    message:PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps, null)(MessageContainer);