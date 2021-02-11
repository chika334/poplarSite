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
import axios from "axios";
// import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "auto",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
});

export class TranxReport extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  // getData() {
  //   axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
  //     var data = res.data;

  //     var slice = data.slice(
  //       this.state.offset,
  //       this.state.offset + this.state.perPage
  //     );

  //   this.setState({
  //     pageCount: Math.ceil(data.length / this.state.perPage),
  //     orgtableData: res.data,
  //     tableData: slice,
  //   });
  // });
  // }

  getData() {
    this.props.transactions === null
      ? console.log("bad")
      : // : this.props.transactions.map((allData) => {
        //     // console.log(allData);
        //     var slice = allData.slice(
        //       this.state.offset,
        //       this.state.offset + this.state.perPage
        //     );

        //     this.setState({
        //       pageCount: Math.ceil(allData.length / this.state.perPage),
        //       orgtableData: allData,
        //       tableData: slice,
        //     });
        //   });
        this.setState({
          pageCount: Math.ceil(
            this.props.transactions.length / this.state.perPage
          ),
          orgtableData: this.props.transactions,
          tableData: this.props.transactions.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          ),
        });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="responsive-container">
          <h2 className={classes.title}>Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>System Id</th>
                <th>full name</th>
                <th>account number</th>
                <th>Payment type name</th>
                <th>Phone number</th>
                <th>title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((tdata, index) => (
                <tr key={index}>
                  <td data-title="id">{index}</td>
                  <td data-title="Fastr Id">{tdata.response.fastrId}</td>
                  <td data-title="Full Name">
                    {tdata.response.paymentRequestid.fullname}
                  </td>
                  <td data-title="Account Number">
                    {tdata.response.paymentRequestid.accountNumber}
                  </td>
                  <td data-title="Payment type name">
                    {
                      tdata.response.paymentRequestid.serviceproviderId
                        .paymentTypeid.paymentTypeName
                    }
                  </td>
                  <td data-title="Phone number">
                    {
                      tdata.response.paymentRequestid.serviceproviderId.manager
                        .phone
                    }
                  </td>
                  <td data-title="title">
                    {tdata.response.paymentRequestid.productCode.title}
                  </td>
                  <td data-title="Amount">
                    {tdata.response.paymentRequestid.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transaction,
});

export default connect(mapStateToProps)(withStyles(styles)(TranxReport));
