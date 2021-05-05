import { connect } from 'react-redux'
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated || localStorage.token ? 
    <Component {...props} />
    :
    <Redirect to={{
        pathname: `${process.env.REACT_APP_URL}/protect`,
      }}
    />
  )}
  />
)

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute)