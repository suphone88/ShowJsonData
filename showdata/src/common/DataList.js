import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';
import { Col, Row, List } from 'antd';

class DataList extends React.Component{
    componentDidMount(){
        this.props.fetchshows(this.props.jsonsData);
    }
    render(){        
        const {jsonsData} = this.props;
        if(!jsonsData){
            return <div> No Data List Page!!!</div>
        }else{
            const education = jsonsData[1].education;
            const eduDetail = education.map(edu => {
                return(
                    <div>
                        <ul>
                            <li>{edu.degree}</li>
                            <li>{edu.fromYear}</li>
                            <li>{edu.toYear}</li>
                            <li>{edu.association}</li>
                        </ul>
                    </div>
                );
            });
            const certificate = jsonsData[2].certificate;
            const showCerti = certificate.map(certi => {
                return(
                    <div>
                        <ul>
                            <li>{certi.certificate}</li>
                            <li>{certi.fromDate}</li>
                            <li>{certi.toDate}</li>
                            <li>{certi.association}</li>
                        </ul>
                    </div>
                );
            });
            const workingExperience = jsonsData[3].workingExperience;
            const showWorkExp = workingExperience.map(workExp => {
                return(
                    <div style={{paddingBottom:'2em'}}>
                        <h5 style={{textTransform:'uppercase'}}>{workExp.position}</h5>
                        <h5>{workExp.companyName}</h5>
                        <ul>
                            <li>{workExp.duration}</li>
                            <li>{workExp.fromYear}, {workExp.toYear}</li>
                        </ul>
                        <p> {workExp.rolesAndResponsibilty} </p> 
                    </div>
                );
            })            
            const project = jsonsData[4].project;
            const showProj = project.map(proj => {
                return(
                    <div style={{paddingBottom:'2em'}}>
                        <h5>{proj.projectName}</h5>
                        <p>{proj.details}</p>
                    </div>
                );
            })
            const hobby = jsonsData[5].hobby;
            const hobbies = hobby.map(hob => {
                return(
                    <div>
                        {hob}
                    </div>
                );
            }) 
            return(
                <>
                <Row>
                    <Col span={8}>
                        <div style={{paddingBottom:'2rem'}}>
                            <h3 style={{textTransform:'uppercase',borderBottom:'3px solid #faad14',                           
                            width:'25%'}}>Education</h3>
                            {eduDetail}
                        </div>
                        <div style={{paddingBottom:'2rem'}}>
                            <h3 style={{textTransform:'uppercase',borderBottom:'3px solid #faad14',                           
                            width:'25%'}}>Certificate</h3>
                            {showCerti}
                        </div>
                        <div>
                            <h3 style={{textTransform:'uppercase',borderBottom:'3px solid #faad14',                           
                            width:'15%'}}>Hobby</h3>
                            {hobbies}
                        </div>
                    </Col>
                    <Col span={2} style={{borderLeft:'2px solid #ddd'}}></Col>
                    <Col span={14}>
                        <div style={{paddingBottom:'2rem'}}>
                            <h3 style={{textTransform:'uppercase',borderBottom:'3px solid #faad14',                           
                            width:'25.5%'}}>Work Experience</h3>
                            <List      
                            dataSource={showWorkExp}
                            renderItem={item => <List.Item style={{borderBottom:'0px'}}>{item}</List.Item>}
                            />
                        </div>
                        <div>
                        <h3 style={{textTransform:'uppercase',borderBottom:'3px solid #faad14',                           
                            width:'11%'}}>Project</h3>
                            <List     
                            dataSource={showProj}
                            renderItem={item => <List.Item style={{borderBottom:'0px'}}>{item}</List.Item>}
                            />
                        </div>
                    </Col>
                </Row>               
                </>
            )
        }
        
    }
}

const mapStateToProps = state =>{
    return {jsonsData:Object.values(state.jsonsData)}
}
export default connect(mapStateToProps,{fetchshows})(DataList);