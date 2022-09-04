import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const Posts = () => {
  let blogs = JSON.parse(localStorage.getItem("blogs"));
  const [category, setCategory] = useState("All");
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (category === "All") {
      setBlogList(blogs);
    } else {
      const updateBlogList = blogs.filter(
        (item) => item.blogCategory === category
      );
      setBlogList(updateBlogList);
    }
  }, [category]);

  return (
    <Container className="mt-5">
      <Row className="d-flex align-items-center mb-5 mt-5 ">
        <Col className="justift-content-space-between fixed">
          <span
            style={{ cursor: "pointer"  }}
            onClick={() => {
              setCategory("All");
            }}
            className={`align-items-center ${(category==='All')?"spanActive":" "}`}
          >
            All
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("Tech");
            }}
            className={`align-items-center mx-2 ${(category==='Tech')?"spanActive":" "}`}          >
            Tech
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("Entertainment");
            }}
            id="Entertainment"
            className={`align-items-center mx-1 ${(category==='Entertainment')?"spanActive":" "}`}          >
            Entertainment
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setCategory("Community");
            }}
            id="Community"
            className={`align-items-center mx-2 ${(category==='Community')?"spanActive":" "}`}          >
            Community
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-top align-items-top mt-3">
        {blogs ? (
          blogList.map((item, index, array) => {
            // console.log(item, "item\n", index, "index\n", array, "array");
            return (
              <Col key={index} className="mb-4" lg="4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5"> {item.blogTitle}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {item.blogCategory}
                    </CardSubtitle>
                    <CardText>{item.blogContent.slice(0, 250)}</CardText>
                    <Button onClick={() => navigate("/post", { state: item })}>
                      Read more...
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col lg="12 " className="justify-content-center">
            No Blogs uploaded yet !
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Posts;
