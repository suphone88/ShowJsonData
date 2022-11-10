import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';

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
            console.log("error")            
            return <div> Loading... </div>
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
            const education = jsonsData[1].education
            const eduDetail = education.map(edu=>{
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
            const showCerti = certificate.map(certi=>{
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
            const showworkExp = workingExperience.map(workExp=>{
                return(
                    <div>
                        <ul>
                            <li>{workExp.companyName}</li>
                            <li>{workExp.position}</li>
                            <li>{workExp.duration}</li>
                            <li>{workExp.fromYear}</li>
                            <li>{workExp.toYear}</li>
                            <li>{workExp.rolesAndResponsibilty}</li>
                            </ul>
                    </div>
                );
            });
            const project = jsonsData[4].project;
            const showProj = project.map(pro=>{
                return(
                    <div>
                        <ul>
                            <li>{pro.projectName}</li>
                            <li>{pro.details}</li>
                        </ul>
                    </div>
                );
            });
            const hobby = jsonsData[5].hobby;
            const hobbies = hobby.map(hob=>{
                return(
                    <div>
                        {hob}
                    </div>
                );
            }); 
            return(
                <div>
                    <h2>Personal Info</h2>
                    {showPersonalHeader}
                    {showPerDetail} <hr />
                    <h2>Education</h2>
                    {eduDetail} <hr />
                    <h2>Certificate</h2>
                    {showCerti}<hr />
                    <h2>Work Experience</h2>
                    {showworkExp}<hr />
                    <h2>Project</h2>
                    {showProj}<hr />
                    <h2>Hobby</h2>
                    {hobbies}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {    
    console.log('state......',state);
    return {jsonsData:Object.values(state.jsonsData)};
}

export default connect(mapStateToProps,{fetchshows})(ShowJsondata);