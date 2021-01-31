import {combineReducers} from 'redux'
import content from './Content'
import authUser from './userReducer.js'
import error from './error.js'
import countryId from './countryId'
import buyToken from './buyToken_Reducer'
import transactions from './transaction_Reducer'
import forgot from './forgotPassword_Reducer'
import changepassword from './changePasswords'
import wallet from './walletReducer'
import query from './QueryTranx'
import loading from './loading'
import modal from './modal'
import modalRegister from './registerModal'

export default combineReducers({
	content,
	modalRegister,
	modal,
	authUser,
	error,
	countryId,
	buyToken,
	query,
	transactions,
	forgot,
	changepassword,
	wallet,
  loading
})