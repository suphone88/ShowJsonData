import React from 'react';
import { connect } from 'react-redux';
import { showJson } from '../actions';

class ShowJsondata extends React.Component{
    componentDidMount(){
        this.props.showJson();
    }
    render(){
        console.log(this.props.jsonsData);
        return<div> Show JsonData List </div>
    }
}

const mapStateToProps = state => {    
    console.log('stae......',state);
    return {jsonsData:Object.values(state.jsonsData)};
}

export default connect(mapStateToProps,{showJson})(ShowJsondata);