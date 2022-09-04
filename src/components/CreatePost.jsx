import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, Container, Row } from "reactstrap";

const CreatePost = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogDetails, setBlogDetails] = useState([]);
  const navigate=useNavigate();

  const createPost = (event) => {
    event.preventDefault();
    if(blogContent.length<250){
      console.log(blogContent.length);
      alert("Articel should be logner than 250 character length")
    }
   else{
    console.log(blogContent.length);

    localStorage.setItem("blogs", JSON.stringify(blogDetails));
    setBlogTitle("");
    setBlogCategory("");
    setBlogContent("");
    navigate("/")
   }
  };

  useEffect(() => {
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    if (!blogs) {
      setBlogDetails([{ blogTitle, blogCategory, blogContent }]);
    } else {
      setBlogDetails([...blogs, { blogTitle, blogCategory, blogContent }]);
    }
    // setBlogDetails([...blogs,{ blogTitle, blogCategory, blogContent }]);
  }, [blogTitle, blogContent, blogCategory]);

  return (
    <Container className="mt-5">
      <Row className="mt-5"><Form onSubmit={(event) => createPost(event)}>
        <FormGroup>
          <Label for="blogTitle">Title</Label>
          <Input
            id="blogTitle"
            name="blogTitle"
            placeholder="Title for the blog"
            type="text"
            required
            value={blogTitle}
            onChange={(event) => {
              const title = event.target.value.split(" ");
              const newtitle = title
                .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                .join()
                .replaceAll(",", " ");

              console.log(newtitle);
              setBlogTitle(newtitle);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="blogCategory">Category</Label>
          <Input
            id="blogCategory"
            name="blogCategory"
            type="select"
            required
            value={blogCategory}
            onChange={(event) => setBlogCategory(event.target.value)}
          >
            <option></option>
            <option value="Tech">Tech</option>
            <option vlaue="Entertainment">Entertainment</option>
            <option vlaue="Comunity">Community</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="blogContent">Content</Label>
          <Input
            id="blogContent"
            name="blogContent"
            type="textarea"
            rows="10"
            required
            value={blogContent}
            onChange={(event) =>
            { 
               setBlogContent(
                event.target.value.charAt(0).toUpperCase() +
                  event.target.value.slice(1)
              )}
            }
          />
        </FormGroup>
        <Button type="submit">Post blog</Button>
      </Form></Row>
    </Container>
  );
};

export default CreatePost;
