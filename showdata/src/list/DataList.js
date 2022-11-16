import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';
import { Layout, Col, Row, List } from 'antd';


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
            const eduDetail = education.map((edu,e)=>{
                return(
                    <div>
                        <ul key={e}>
                            <li>{edu.degree}</li>
                            <li>{edu.fromYear}</li>
                            <li>{edu.toYear}</li>
                            <li>{edu.association}</li>
                        </ul>
                    </div>
                );
            });
            const certificate = jsonsData[2].certificate;
            const showCerti = certificate.map((certi,i)=>{
                return(
                    <div>
                        <ul key={i}>
                            <li>{certi.certificate}</li>
                            <li>{certi.fromDate}</li>
                            <li>{certi.toDate}</li>
                            <li>{certi.association}</li>
                        </ul>
                    </div>
                );
            });
            const workingExperience = jsonsData[3].workingExperience;
            const showWorkExp = workingExperience.map((workExp)=>{
                return(
                    <div className='workexp'>
                        <h4>{workExp.position}</h4>
                        <h4>{workExp.companyName}</h4>
                        <ul>
                            <li>{workExp.duration}</li>
                            <li>{workExp.fromYear}, {workExp.toYear}</li>
                        </ul>
                        <p> {workExp.rolesAndResponsibilty} </p> 
                    </div>
                );
            })            
            const project = jsonsData[4].project;
            const showProj = project.map((proj) => {
                return(
                    <div className='project'>
                        <h4>{proj.projectName}</h4>
                        <p>{proj.details}</p>
                    </div>
                );
            })
            const hobby = jsonsData[5].hobby;
            const hobbies = hobby.map((hob) =>{
                return(
                    <div>
                        <p>{hob}</p>
                    </div>
                );
            }) 
            return(
            <>
            <Layout>                
                <Row>
                    <Col xl={4} className='alllogobg'>
                        <div className='mainimg'>                            
                            <p><img src="images/123.png" className='img' alt="microsoftlogo" /></p>
                            <p><img src="images/excel.png" className='img' alt="excellogo" /></p>
                            <p><img src="images/pdfimg.png" className="img" alt="pdflogo" /></p>
                            <p><img src="images/pwimg.png" className="img" alt="powerpointlogo" /></p>
                        </div>
                    </Col>                
                    <Col lg={4} xl={6} className='colsix'>
                        <div className='bgcolsix'>
                            <h3 className='titlefont'>Education</h3>
                            {eduDetail}
                        </div>
                        <div className='bgcolsix'>
                            <h3 className='titlefont'>Certificate</h3>
                            {showCerti}
                        </div>
                        <div className='bgcolsix'>
                            <h3 className='hptitle'>Hobby</h3>
                            {hobbies}
                        </div>
                    </Col>
                    <Col span={2} className='col2'></Col>
                    
                    <Col lg={6} xl={8} className='colsix'>
                        <div className='mainworkexp'>
                            <h3 className='worktitle'>WorkExperience</h3>
                            <List      
                            dataSource={showWorkExp}
                            renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </div>
                        <div className='mainworkexp'>
                        <h3 className='hptitle'>Project</h3>
                            <List     
                            dataSource={showProj}
                            renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </div>
                    </Col>
                    <Col xl={4} className='alllogobg'>
                        <div className=''>
                            <p><img src="images/bgpen.png" className="rightimg" alt="Pen" /></p>
                        </div>
                        <div></div>
                        <div className='mainrightplant'>
                        {/* <p><img src="images/00.jpg" alt="plants" /></p> */}
                        </div>
                    </Col>
                </Row>
            </Layout>
            </>
            );
        }
    }
}

const mapStateToProps = state =>{
    return {jsonsData:Object.values(state.jsonsData)}
}
export default connect(mapStateToProps,{fetchshows})(DataList);