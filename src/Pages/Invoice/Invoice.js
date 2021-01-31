import React, { Component } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Container } from '@material-ui/core';

class BuyToken extends Component {
  render() {
    return (
      <>
        <PerfectScrollbar>
          <div className="m-4 card-header rounded-0 bg-white px-5 py-4 border-bottom">
            <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                INVOICE
              </div>
            </Container>
          </div>
        </PerfectScrollbar>
      </>
    );
  }
}

export default BuyToken;
