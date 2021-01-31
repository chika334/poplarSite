import React from "react";
import { fundWallets } from '../../_actions/wallet'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { clearErrors } from "../../_actions/errorAction";
import axios from "axios";

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: 250
    }
  },
  buttonField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
    backgroundColor: "red",
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      amount: "",
      redirect: false,
      reference: "",
      data: null,
      error: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSelect = (e) => {
    this.setState({ source: e.target.value });
    // console.log(this.state.source);
    // console.log(props);
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "FUND_WALLET_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.setState({ redirect: true });
      this.sendRedirect();
      // this.props.history.push("/profile/dashboard");
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  componentDidMount() {
    axios
      .get(`http://www.blacksillicon.com/fastpayr/api/v1/fundsource`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  clickSubmit = (e) => {
    e.preventDefault();
    const { source, amount, reference } = this.state;
    const fundWallet = {
      source,
      amount,
      reference
    };

    this.props.fundWallets(fundWallet)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="" className={classes.title}>
              Fund Wallet
            </Typography>
            <FormControl className={classes.textField}>
              <InputLabel id="demo-simple-select-label">Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.source || ""}
                onChange={this.handleSelect}
              >
                {this.state.data === null
                  ? ""
                  : this.state.data.map((allData) => (
                      <MenuItem key={allData.sourceType} value={allData.id}>{allData.sourceName}</MenuItem>
                    ))}
              </Select>
            </FormControl>{" "}
            <br />
            <TextField
              id="reference"
              label="Reference"
              type="number"
              className={classes.textField}
              value={this.state.reference || ""}
              onChange={this.handleChange("reference")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="amount"
              label="Amount"
              type="number"
              className={classes.textField}
              value={this.state.amount || ""}
              onChange={this.handleChange("amount")}
              margin="normal"
            />{" "}
            <br />
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  error
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              type="button"
              variant="contained"
              onClick={this.clickSubmit}
              className={classes.submit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors, fundWallets })(
  withStyles(styles)(Wallet)
);