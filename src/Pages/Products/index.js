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
      <Container>
        <Electric />
        <Airtime/>
        <Data />
        <Cable />
        <Deposits />
        <Transfer />
        <Water />
      </Container>
    );
  }
}

export default Products;