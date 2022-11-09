import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';

class ShowJsondata extends React.Component{     
    componentDidMount(){
        this.props.fetchshows();
    }
    render(){
        console.log("in Render",this.props.jsonsData)
        return<div> Show JsonData List </div>
    }
}

const mapStateToProps = (state) => {    
    console.log('state......',state);
    return {jsonsData:Object.values(state.jsonsData)};
}

export default connect(mapStateToProps,{fetchshows})(ShowJsondata);