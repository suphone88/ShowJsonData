import React from 'react';
import {connect} from 'react-redux';
import { fetchshows } from '../actions';
import { Layout, Col, Row, Divider, List } from 'antd';
//import {HomeOutlined, MediumOutlined,GoogleOutlined} from '@ant-design/icons';

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
            //console.log(perDetail);            
            const data = Object.values(perDetail);
            const showPersonalName= <div>
            {personalInfo[1].name}
            </div>    

            return(                
                <>
                <Layout>
                <Row>
                    <Col span={24} className='col24'>  </Col>
                </Row>
                <Row>                                 
                    <Col md={2} lg={4} className='bgper'></Col>
                    <Col xl={8} className='bgcol'>
                        <div className='bgname'>
                            <h2>{showPersonalName}</h2>
                        </div>
                    </Col>
                    
                    <Col lg={6} xl={8} className='coliconlist'>
                        <div>
                        {/* {console.log("Data is ", data)} */}
                        <List
                            dataSource={data}
                            renderItem={item =>
                            <List.Item className='iconlist'>                                
                                {item}
                                {/* {console.log("Item is ",item)} */}
                                </List.Item>                               
                                }
                        />
                        </div>
                    </Col>
                    <Col md={2} lg={4} className='bgper'></Col>
                </Row>
                <Row>
                    <Col xl={4} className='bgper'></Col>
                    <Col lg={14} xl={16} className='bgdivider'>
                        <Divider className='divider'>Web Developer</Divider>
                    </Col>                    
                    <Col xl={4} className='bgper'></Col>            
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