import React from 'react';
import {connect} from 'react-redux';
import { showJson } from '../actions';

class ShowData extends React.Component{
    componentDidMount(){
        this.props.showJson();
        //console.log('did',this.props)
    }
    // renderList(){
    //     return this.props.jsonsData.map(data =>{
    //         return(
    //           <div key={data.id}>
    //             {data[0].personalInfo}
    //           </div>  
    //         );
    //     })
    // }
    
    render(){
        //console.log(this.props.jsonsData);
        return <div> Show Data List </div>
        //return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state =>{
    console.log('stae......',state);
    return {jsonsData:Object.values(state.jsonsData)};
}
export default connect(mapStateToProps,{ showJson })(ShowData);