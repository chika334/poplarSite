import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";

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

  getData = () => {
    // console.log(this.props.transactions);
    setTimeout(() => {
      this.props.transactions === null
        ? console.log("bad")
        : this.setState({
            pageCount: Math.ceil(
              this.props.transactions.length / this.state.perPage
            ),
            orgtableData: this.props.transactions,
            tableData: this.props.transactions.slice(
              this.state.offset,
              this.state.offset + this.state.perPage
            ),
          });
    }, 2000);
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        {/* <div className="responsive-container">
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
        </div> */}

        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header pr-2">
            <div className="card-header--title">All Transactions</div>
            <div className="card-header--actions">
              <Tooltip title="Refresh">
                <Button size="small" className="btn-neutral-primary">
                  <FontAwesomeIcon icon={["fas", "cog"]} spin />
                </Button>
              </Tooltip>
            </div>
          </div>
          <CardContent>
            <div className="table-responsive-md">
              <Table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">id</th>
                    <th className="text-center">System Id</th>
                    <th className="text-center">full name</th>
                    <th className="text-center">account number</th>
                    <th className="text-center">Payment type name</th>
                    <th className="text-center">Phone number</th>
                    <th className="text-center">title</th>
                    <th className="text-center">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Ikenye daniel
                      </div>
                    </td>
                    <td className="text-center">
                      <div>01232344323</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Divine saviour
                      </div>
                    </td>
                    <td className="text-center">
                      <div>01232344323</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Abule samuel
                      </div>
                    </td>
                    <td className="text-center">
                      <div>87291212</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transaction,
  authUser: state.authUser.isAuthenticated,
});

export default connect(mapStateToProps)(withStyles(styles)(TranxReport));
