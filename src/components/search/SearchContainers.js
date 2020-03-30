import Search from './Search';
import { connect } from 'react-redux';
import { changeInputAC } from '../../store/action'

const mapStateToProps = (state) => ({
    searchName: state.searchName
})

const mapDispatchToProps = (dispatch) => ({
    changeInput: data => {dispatch(changeInputAC(data))}
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;