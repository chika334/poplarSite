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
  Container,
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
      <div>
        <Container>
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
                <Table className="table table-borderless table-hover">
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
                    {this.state.tableData.map((tdata, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="text-center">
                          {tdata.response.fastrId}
                        </td>
                        <td className="text-center">
                          {tdata.response.paymentRequestid.fullname}
                        </td>
                        <td className="text-center">
                          <div>
                            {tdata.response.paymentRequestid.accountNumber}
                          </div>
                        </td>
                        <td className="text-center">
                          <div>
                            {
                              tdata.response.paymentRequestid.serviceproviderId
                                .paymentTypeid.paymentTypeName
                            }
                          </div>
                        </td>
                        <td className="table-text text-center">
                          {
                            tdata.response.paymentRequestid.serviceproviderId
                              .manager.phone
                          }
                        </td>
                        <td className="table-text text-center">
                          {tdata.response.paymentRequestid.productCode.title}
                        </td>
                        <td className="table-text text-center">
                          {tdata.response.paymentRequestid.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transaction,
  authUser: state.authUser.isAuthenticated,
});

export default connect(mapStateToProps)(withStyles(styles)(TranxReport));
