import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth'
import { GoogleLoginButton  } from "react-social-login-buttons";

export const LogInPage = ({startLogin}) => {
        return(
            <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__tittle">Expensify</h1>
                <p className="box-layout__p">It's time to get your expenses in check</p>
                <GoogleLoginButton  onClick={startLogin}/>
            </div>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined,mapDispatchToProps)(LogInPage);