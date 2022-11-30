import React from "react";
import { connect } from "react-redux";
import { fetchshows } from "../actions";
import { Layout, Col, Row, List } from "antd";
import DList from "./DList";

class DataList extends React.Component {
  componentDidMount() {
    this.props.fetchshows(this.props.jsonsData);
  }
  render() {
    const { jsonsData } = this.props;
    if (!jsonsData) {
      return <div> No Data List Page!!!</div>;
    } else {
      const education = jsonsData[1].education;
      const certificate = jsonsData[2].certificate;
      const workingExperience = jsonsData[3].workingExperience;
      const showWorkExp = workingExperience.map((workExp, index) => {
        return (
          <div className="workexp" key={index}>
            <h4>{workExp.position}</h4>
            <h4>{workExp.companyName}</h4>
            <ul>
              <li>{workExp.duration}</li>
              <li>
                {workExp.fromYear}, {workExp.toYear}
              </li>
            </ul>
            <p> {workExp.rolesAndResponsibilty} </p>
          </div>
        );
      });
      const project = jsonsData[4].project;
      const showProj = project.map((proj, index) => {
        return (
          <div className="project" key={index}>
            <h4>{proj.projectName}</h4>
            <p>{proj.details}</p>
          </div>
        );
      });
      const hobby = jsonsData[5].hobby;
      const hobbies = hobby.map((hob, index) => {
        return (
          <div key={index}>
            <p>{hob}</p>
          </div>
        );
      });
      return (
        <>
          <Layout>
            <Row>
              <Col lg={8} xl={10} className="colsix">
                <div className="bgcolsix">
                  <h3 className="titlefont">Education</h3>
                  <DList edu={education} />
                </div>
                <div className="bgcolsix">
                  <h3 className="titlefont">Certificate</h3>
                  <DList edu={certificate} />
                </div>
                <div className="bgcolsix">
                  <h3 className="hptitle">Hobby</h3>
                  {hobbies}
                </div>
              </Col>
              <Col lg={12} xl={14} className="workexp">
                <div className="mainworkexp">
                  <h3 className="worktitle">WorkExperience</h3>
                  <List
                    dataSource={showWorkExp}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </div>
                <div className="mainworkexp">
                  <h3 className="hptitle">Project</h3>
                  <List
                    dataSource={showProj}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </div>
              </Col>
            </Row>
          </Layout>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { jsonsData: Object.values(state.jsonsData) };
};
export default connect(mapStateToProps, { fetchshows })(DataList);
