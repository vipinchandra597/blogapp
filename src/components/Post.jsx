import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Col,
  Row,
} from "reactstrap";

const Post = (props) => {
  const location = useLocation();
  console.log(location,'location');
 // console.log(location.state, "location.state");

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Col lg="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{location.state.blogTitle}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {location.state.blogCategory}
              </CardSubtitle>
              <CardText>
              {location.state.blogContent}
              </CardText>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
