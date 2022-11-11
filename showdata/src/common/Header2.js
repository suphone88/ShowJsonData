import React from 'react';
import {connect} from 'react-redux';
import { fetchshows } from '../actions';

class Header2 extends React.Component {
    componentDidMount(){
        this.props.fetchshows(this.props.jsonsData)
    }
    render(){
        const {jsonsData} = this.props;        
        if(!jsonsData){            
            return <div> No Personal Info Data !!!</div>;
        }else{
            const personalInfo = jsonsData[0].personalInfo;        
            const showPersonalHeader = personalInfo[0].resumeObjective;
            const perDetail = personalInfo[1];                 
            const showPerDetail = <div>
                <table className='ui very basic collapsing celled table'>
                    <tr>
                        <td>{perDetail.name}</td>
                        <td>{perDetail.nationality}</td>
                        <td>{perDetail.phoneNo}</td>
                        <td>{perDetail.email}</td>
                    </tr>                    
                </table>
            </div>
            return(
                <div>
                    <h2>Personal Info</h2>
                    {showPersonalHeader}
                    {showPerDetail}
                </div>
            );
        }
    }
}
const mapStateToProps =(state) =>{
    return {jsonsData:Object.values(state.jsonsData)};
}
export default connect(mapStateToProps,{fetchshows})(Header2);