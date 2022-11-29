import React from "react";
import { connect } from "react-redux";
import { fetchshows } from "../actions";
import { Layout, Col, Row, Divider, List } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";

class Header2 extends React.Component {
  componentDidMount() {
    this.props.fetchshows(this.props.jsonsData);
  }
  render() {
    const { jsonsData } = this.props;
    if (!jsonsData) {
      return <div> No Personal Info Data !!!</div>;
    } else {
      const personalInfo = jsonsData[0].personalInfo;
      //const showPersonalHeader = personalInfo[0].resumeObjective;
      const perDetail = personalInfo[2];
      //const data = Object.values(perDetail);
      const showPersonalName = <div>{personalInfo[1].name}</div>;
      return (
        <>
          <Layout>
            <Row>
              <Col xl={24} className="firstcol24"></Col>
            </Row>
            <Row>
              <Col lg={2} xl={4} className="bgper"></Col>
              <Col lg={8} xl={10} className="bgcol">
                <div className="bgname">
                  <h2>{showPersonalName}</h2>
                </div>
              </Col>
              <Col lg={4} xl={6} className="coliconlist">
                <div>
                  {/* {console.log("Data is ", [perDetail])} */}
                  <List
                    dataSource={[perDetail]}
                    locale
                    renderItem={(item, i) => (
                      <List.Item description={item.toString()}>
                        <List.Item.Meta
                          description={item.phoneNo}
                          avatar={<PhoneOutlined />}
                        />
                        <List.Item.Meta
                          description={item.email}
                          avatar={<MailOutlined />}
                        />
                        <List.Item.Meta
                          description={item.nationality}
                          avatar={<HomeOutlined />}
                        />{" "}
                        {}
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
              <Col lg={2} xl={4} className="bgper"></Col>
            </Row>
            <Row>
              <Col lg={2} xl={4} className="bgper"></Col>
              <Col lg={14} xl={16} className="bgdivider">
                <Divider className="divider">Web Developer</Divider>
              </Col>
              <Col lg={2} xl={4} className="bgper"></Col>
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
export default connect(mapStateToProps, { fetchshows })(Header2);
