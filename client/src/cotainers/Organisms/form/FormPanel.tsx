import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DataType } from '../../../actions/login/loginActions'
import { userState } from '../../../reducers/userReducer'
import * as userAction from '../../../actions/login/loginActions'
import FormPanel from '../../../components/Organisms/Form/FormPanel'

const mapStateToProps = (user : userState) => user

const mapDispatchToProps = (dispatch : Dispatch)  => ({
    createAcount: (data : DataType) => {
        dispatch(userAction.createAcount(data))
    },
    loginAcount: (data : DataType) => {
        dispatch(userAction.loginAcount(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPanel)