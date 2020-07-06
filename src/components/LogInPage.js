import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth'

export const LogInPage = ({startLogin}) => {
        return(
            <div>
                <h1>Log In Page</h1>
                <button onClick={startLogin}>Log In</button>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined,mapDispatchToProps)(LogInPage);