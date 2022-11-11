import React from 'react';
import { connect } from 'react-redux';
import { fetchshows } from '../actions';

class List extends React.Component{
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
                    <div>
                        <ul>
                            <li>{workExp.position}</li>
                            <li>{workExp.companyName}</li>
                            <li>{workExp.duration}</li>
                            <li>{workExp.fromYear}</li>
                            <li>{workExp.toYear}</li>
                        </ul>
                    </div>
                );
            })
            const project = jsonsData[4].project;
            const showProj = project.map(proj => {
                return(
                    <div>
                        <ul>
                            <li>{proj.projectName}</li>
                            <li>{proj.details}</li>
                        </ul>
                    </div>
                );
            })
            const hobby = jsonsData[5].hobby;
            const hobbies = hobby.map(hob => {
                return(
                    <div>
                        <ul>
                            <li>{hob}</li>
                        </ul>
                    </div>
                );
            }) 
            return(
                <div>
                    <h2>Education</h2>
                    {eduDetail}
                    <h2>Certificate</h2>
                    {showCerti}
                    <h2>Work Experience</h2>
                    {showWorkExp}
                    <h2>Project</h2>
                    {showProj}
                    <h2>Hobby</h2>
                    {hobbies}
                </div>
            )
        }
        
    }
}

const mapStateToProps = state =>{
    return {jsonsData:Object.values(state.jsonsData)}
}
export default connect(mapStateToProps,{fetchshows})(List);