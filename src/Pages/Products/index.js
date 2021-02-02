import React, { Component } from 'react';
import Airtime from '../../layout-components/Products/Airtime'
import Data from '../../layout-components/Products/Data'
import Cable from '../../layout-components/Products/Cable'
import Deposits from '../../layout-components/Products/Deposits'
import Electric from '../../layout-components/Products/Electric'
import Transfer from '../../layout-components/Products/Transfer'
import Water from '../../layout-components/Products/Water'
import Container from '@material-ui/core/Container';

class Products extends Component {
  render() {
    return (
      <Container className="p-4 bg-white">
        <Electric />
        <hr className="mb-5 pb-5" />
        <Airtime/>
        <hr className="mb-5 pb-5"/>
        <Data />
        <hr className="mb-5 pb-5"/>
        <Cable />
        <hr className="mb-5 pb-5"/>
        <Deposits />
        <hr className="mb-5 pb-5"/>
        <Transfer />
        <hr className="mb-5 pb-5"/>
        <Water />
      </Container>
    );
  }
}

export default Products;