import React from 'react';
import {connect} from 'react-redux';
import { fetchshows } from '../actions';
import { Layout, Col, Row, Divider, List } from 'antd';

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
                <Layout>
                <Row>
                    <Col span={24} className='col24'></Col>
                </Row>
                <Row>                
                    <Col md={2} lg={4}>
                        
                    </Col>
                    <Col lg={4} xl={8} className='colsix'>
                        <div>
                            <h2>{showPersonalName}</h2>
                        </div>
                    </Col>
                    
                    <Col sm={2} md={4} lg={6} xl={8} className='bgheader'>
                        <List      
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                            />
                    </Col>
                    <Col md={2} lg={4}></Col>
                </Row>
                <Row>
                    <Col lg={4} className='bgblack'></Col>
                    <Col lg={14} xl={16} className='bgdivider'>
                        <Divider className='divider'>Web Developer</Divider>
                    </Col>                    
                    <Col lg={4} className='bgblack'></Col>            
                </Row>
                </Layout>
                </>
                
            );
        }
    }
}
const mapStateToProps =(state) =>{
    return {jsonsData:Object.values(state.jsonsData)};
}
export default connect(mapStateToProps,{fetchshows})(Header2);