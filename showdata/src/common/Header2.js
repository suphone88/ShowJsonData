import React from 'react';
import {connect} from 'react-redux';
import { fetchshows } from '../actions';
import { Col, Row, Divider, List } from 'antd';

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
            //const showPersonalHeader = personalInfo[0].resumeObjective;
            const perDetail = personalInfo[1];                 
            //const showPerDetail = <div></div>;
            const phone = perDetail.phoneNo;
            const nat = perDetail.nationality;
            const email = perDetail.email;
            const data = [
                phone,
                nat,
                email
            ];      
            const showPersonalName= <div>
            {personalInfo[1].name}
            </div>    

            return(
                <>
                <Row style={{paddingTop:'2rem'}}>
                    <Col span={12} style={{textTransform:'uppercase'}}>
                        <h1 style={{borderLeft:'1rem solid #faad14',paddingLeft:'0.5rem'}}>{showPersonalName}</h1>
                    </Col>
                    <Col span={12} style={{borderBottom:'0px'}}>
                        <List                       
                        dataSource={data}    
                        renderItem={(item) => 
                        <List.Item style={{borderBottom:'0px',padding:'0.2rem 0rem',justifyContent:'right'}}>
                            {item}
                        </List.Item>}
                        /> 
                    </Col>
                </Row>
                <Row style={{margin:'3rem'}}>
                    <Divider style={{lineHeight:'0px',textTransform:'uppercase'}}>Web Developer</Divider>            
                </Row>
                </>
            );
        }
    }
}
const mapStateToProps =(state) =>{
    return {jsonsData:Object.values(state.jsonsData)};
}
export default connect(mapStateToProps,{fetchshows})(Header2);