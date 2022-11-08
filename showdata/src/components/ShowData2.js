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
        const showPersonalDetail=<div className="ui container right aligned padding">
                <div className="ui list">
                    <div className="item">
                        <div className="content">
                            {personalInfo[1].phoneNo}<i class="phone square icon"></i>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            {personalInfo[1].email}<i class="envelope icon"></i>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content">
                        {personalInfo[1].address}<i class="address book icon"></i>
                        </div>
                    </div>
                </div>                
            </div>;
        const showPersonalName= <div>
            {personalInfo[1].name}
        </div>           
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
                        <li>{workEx.position}</li>
                        <li>{workEx.companyName}</li>
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
            <div className="ui container grid">
                <div className="row">
                    <div class="eight wide column header-name">
                        <h1 className="head-font">{showPersonalName}</h1>
                    </div>
                    <div class="eight wide column header-name">
                        <p>{showPersonalDetail}</p>
                    </div>
                </div>
                <h4 class="ui horizontal divider">
                    Web Devloper
                </h4>
                <div className="row">
                    <div className="six wide column" >
                        <h3 className="head-font">Skills</h3>
                        <ul className="ui list">
                            <li className="item"> Graphic Design </li>
                            <li className="item"> Web Development </li>
                            <li className="item"> Responsive Design </li>
                            <li className="item"> Graphic Design </li>
                            <li className="item"> Web Development </li>
                            <li className="item"> Responsive Design </li>
                        </ul>
                    </div>
                    <div className="ten wide column">
                        <div className="row">
                            <h3 className="head-font">Profile</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, banged
                            </p>
                        </div>
                        <div className="row">
                            <h3 className="head-font">Experience</h3>
                            {workingExperienceDetail}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    //console.log(state);
    return {datas:state.datas};
}
export default connect(mapStateToProps)(ShowData);