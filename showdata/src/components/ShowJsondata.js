import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';
import Header2 from '../common/Header2';
import DataList from '../common/DataList';

class ShowJsondata extends React.Component{     
    componentDidMount(){
        this.props.fetchshows();
    } 
    render(){
        console.log("Render",this.props.jsonsData)
        const {jsonsData} = this.props;
        if( jsonsData.length === 0 ||
            jsonsData === '' ||
            jsonsData === undefined ||
            jsonsData === null
        ){        
            return <div> Loading... </div>
        }else{
            return(
                <div>
                    <Header2 jsonsData={jsonsData}/>
                    <DataList jsonsData={jsonsData}/>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {    
    //console.log('state......',state);
    return {jsonsData:Object.values(state.jsonsData)};
}

export default connect(mapStateToProps,{fetchshows})(ShowJsondata);