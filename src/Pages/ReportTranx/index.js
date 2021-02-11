// import React, { useState, useEffect } from "react";
// import { withStyles } from "@material-ui/core/styles";
// // import Paper from "../component/Paper/Paper";
// // import PropTypes from "prop-types";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Typography from "@material-ui/core/Typography";
// import { connect, useSelector } from "react-redux";
// import "../WalletTranx/report.css";
// import { List, ListItem } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
// import { showLoader } from "../../_actions/loading";
// import { getTransactions } from "../../_actions/transactions";
// import axios from "axios";
// import { tokenConfig } from "../../_actions/userAction";

// const styles = (theme) => ({
//   root: {
//     width: "100%",
//   },
//   title: {
//     margin: "auto",
//     height: 80,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: theme.palette.text.secondary,
//   },
// });

// const Report = (props) => {
//   // const [tranx, setTranx] = useState(null);
//   // const [perPage, setperPage] = useState(10);
//   const [values, setValues] = useState({
//     tranx: [],
//     perPage: 10,
//     offset: 0,
//     orgtableData: [],
//     currentPage: 0,
//     // pageCount: null,
//   });

//   const { offset, orgtableData, currentPage, tranx, perPage } = values;

//   const transactions = useSelector((state) => state.transactions.transaction);
//   const user = useSelector((state) => state.authUser);
//   const { classes } = props;

//   useEffect(() => {
//     getData();
//   }, [transactions]);

//   const getData = () => {
//     return transactions === null
//       ? null
//       : transactions.map((result, index) => {
//           // setTranx(result)

//           const slice = result.slice(offset, offset + perPage);
//           setValues({
//             ...values,
//             tranx: result,
//             pageCount: Math.ceil(result.length / perPage),
//             orgtableData: result,
//             tableData: slice
//           });
//         });
//   };

//   console.log(values);
//   return (
// <div className="hero-wrapper bg-composed-wrapper bg-light">
//   <div className="header-top-section">
//     <MessengerHeader />
//   </div>
//   <div className="responsive-container">
//     <h2 className={classes.title}>Transactions</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>System Id</th>
//               <th>full name</th>
//               <th>account number</th>
//               <th>Payment type name</th>
//               <th>Phone number</th>
//               <th>title</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions === null
//               ? null
//               : transactions.map((result, index) => {
//                   return (
//                     <tr key={index}>
//                       <td data-title="id">{index}</td>
//                       <td data-title="Fastr Id">{result.response.fastrId}</td>
//                       <td data-title="Full Name">
//                         {result.response.paymentRequestid.fullname}
//                       </td>
//                       <td data-title="Account Number">
//                         {result.response.paymentRequestid.accountNumber}
//                       </td>
//                       <td data-title="Payment type name">
//                         {
//                           result.response.paymentRequestid.serviceproviderId
//                             .paymentTypeid.paymentTypeName
//                         }
//                       </td>
//                       <td data-title="Phone number">
//                         {
//                           result.response.paymentRequestid.serviceproviderId
//                             .manager.phone
//                         }
//                       </td>
//                       <td data-title="title">
//                         {result.response.paymentRequestid.productCode.title}
//                       </td>
//                       <td data-title="Amount">
//                         {result.response.paymentRequestid.amount}
//                       </td>
//                     </tr>
//                   );
//                 })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default connect(null, { showLoader })(withStyles(styles)(Report));

import React, { PureComponent } from "react";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
import { List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Transactions from './Transactions'

export class Report extends PureComponent {
  state = {
    data: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      data: e.target.value
    })
    // console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <div className="hero-wrapper bg-composed-wrapper bg-light">
          <div className="header-top-section">
            <MessengerHeader />
          </div>
        </div>
        <div className="mt-5 d-flex align-content-center justify-content-center">
          <select onClick={(e) => this.handleChange(e)}>
            <option>Select Option</option>
            <option value="allTransactionPagination">daniel</option>
            <option value="filterByDate">daniel</option>
            <option value="chika">daniel</option>
          </select>
        </div>
        {this.state.data === "allTransactionPagination" ? <Transactions /> : console.log("bad")}
      </div>
    );
  }
}

export default Report;
