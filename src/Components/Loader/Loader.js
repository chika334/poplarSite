import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Loader.css'

class Loader extends Component {
  state = {};
  render() {
    const { loading } = this.props.loading;
    if (!loading) return null;

    return (
      <div className="loading-container">
        <div className="loading">
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loading: state.loading });

export default connect(mapStateToProps)(Loader);
