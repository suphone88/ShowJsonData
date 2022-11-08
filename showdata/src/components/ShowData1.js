import React from 'react';
import {connect} from 'react-redux';

class ShowData extends React.Component{   

    render(){
        const data = this.props.datas;        
        const personalInfo=data[0].personalInfo;        
        const showPersonalHeader=personalInfo[0].resumeObjective;        
        const education=data[1].education;        
        const certificate=data[2].certificate;        
        const workingExperience = data[3].workingExperience;        
        const project = data[4].project;        
        const hobby = data[5].hobby;        
        const showPersonalDetail=<div>
                {personalInfo[1].name} ,
                {personalInfo[1].nationality} ,
                {personalInfo[1].phoneNo} ,
                {personalInfo[1].email}
                </div>;           
        const educationDetail= education.map(function(item,i){
            return(
                <div>
                    <ul key={i}>
                        <li key={i++}>{item.degree}</li>
                        <li key={i++}>{item.fromYear}</li>
                        <li key={i++}>{item.toYear}</li>
                        <li key={i++}>{item.association}</li>
                    </ul>
                    <hr/>
                </div>
            );
        });
        const certificateDetail=certificate.map(function(certi,k){
            return(
                <div>
                    <ul key={k}>
                        <li kye={k}>{certi.certificate}</li>
                        <li key={k}>{certi.fromDate}</li>
                        <li key={k}>{certi.toDate}</li>
                        <li key={k}>{certi.association}</li>
                    </ul>
                    <hr/>
                </div>
            );
        });        
        let workingExperienceDetail = workingExperience.map((workEx)=>{
            return (
                <div>
                    <ul>
                        <li>{workEx.companyName}</li>
                        <li>{workEx.position}</li>
                        <li>{workEx.duration}</li>
                        <li>{workEx.fromYear}</li>
                        <li>{workEx.toYear}</li>
                        <li>{workEx.rolesAndResponsibilty}</li>
                    </ul>
                    <hr />
                </div>
            );
        });
        let projectDetail = project.map((proj)=>{
            return(
                <div>
                    <ul>
                        <li>{proj.projectName}</li>
                        <li>{proj.details}</li>
                    </ul>
                    <hr />
                </div>
            );
        });
        let hobbies= hobby.map((hob)=>{
            return(
                <div>
                    {hob}
                </div>
            );
        });
        
        return (
            <div className="ui container">
                
                <h3> PersonalInfo </h3><hr />
                <h4>{showPersonalHeader}</h4>
                <div>{showPersonalDetail}</div> <hr />                
                <h3>Eductation</h3>
                {educationDetail}
                <h3>Certificate</h3>
                {certificateDetail}
                <h3>WorkingExperience</h3>
                {workingExperienceDetail}
                <h3>Project</h3>
                {projectDetail}
                <h3>Hobby</h3>
                {hobbies}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    //console.log(state);
    return {datas:state.datas};
}
export default connect(mapStateToProps)(ShowData);