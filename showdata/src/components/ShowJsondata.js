import React from "react";
import { connect } from "react-redux";
import { fetchshows } from "../actions";
import Header2 from "../header/Header2";
import DataList from "../list/DataList";
import LeftImage from "../images/LeftImage";
import RightImage from "../images/RightImage";
import { Col, Row } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

class ShowJsondata extends React.Component {
  componentDidMount() {
    this.props.fetchshows();
  }
  render() {
    //console.log("Render",this.props.jsonsData)
    const { jsonsData } = this.props;
    if (
      jsonsData.length === 0 ||
      jsonsData === "" ||
      jsonsData === undefined ||
      jsonsData === null
    ) {
      return (
        <>
          <div class="loader"></div>
          <div>
            <h1> Loading ..... </h1>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Layout>
            <Content>
              <Row>
                <Col lg={2} xl={4}>
                  <Row></Row>
                  <LeftImage />
                </Col>
                <Col lg={14} xl={16} className="mainspan16">
                  <Header2 jsonsData={jsonsData} />
                  <DataList jsonsData={jsonsData} />
                </Col>
                <Col lg={2} xl={4}>
                  <RightImage />
                </Col>
              </Row>
            </Content>
          </Layout>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  //console.log('state......',state);
  return { jsonsData: Object.values(state.jsonsData) };
};

export default connect(mapStateToProps, { fetchshows })(ShowJsondata);
