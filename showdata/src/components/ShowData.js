import React from 'react';
import {connect} from 'react-redux';
import {showsData} from '../actions';


class ShowData extends React.Component{  
    componentDidMount(){        
        this.props.showsData();
    }; 

    render(){ 
        console.log(this.props.datas);   
        return <div> Show Data List </div>
    }
}

const mapStateToProps = state =>{
    //console.log(state);
    return {datas:Object.values(state.datas)};
}
export default connect(mapStateToProps,{showsData})(ShowData);