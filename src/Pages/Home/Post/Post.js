import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import food from "../../../images/food.jpg";

const OurPost = [
  {
    id: 1,
    img: food,
    name: "Travel.fashion",
    description: "Fashion is a form of self-expression and autonomy  ",
  },
  {
    id: 2,
    img: food,
    name: "Travel.food",
    description: "food, substance consisting essentially of protein ",
  },
  {
    id: 3,
    img: food,
    name: "Travel.lifestyle",
    description: "Lifestyle is a way of life established by a society",
  },
];

const Post = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch("https://shielded-meadow-42528.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => {
        const pd = data.slice(0, 3);
        setPosts(pd);
      });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="mt-5 text-center text-title pt-5 pb-5">Featured Blog</h1>
        <div >
          <Row xs={1} md={2} lg={3} className="g-4">
            {posts.map((post) => (
              <Col key={post._id}>
                <Card className="card-recent mb-5">
                  
                  <Card.Img 
                    style={{height: "300px" }}
                    className="p-5"
                    width="100%"
                    src={`data:image/png;base64,${post.image}`}
                  />
                
                  <h4
                    className="card-details p-1 text-center"
                  >
                    {post.title}
                  </h4>
                  <p className="detail-description" style={{ textAlign: "center", marginLeft: "10px" }}>
                    {post.description?.slice(0, 45)}
                  </p>
                  <div className="d-flex justify-content-between p-2 bg-light">
                    <small className="card-foot text">17 july</small>
                    <small className="card-foot text">.8 MINS READ</small>
                    <small className="card-foot text">.12K VIEWS</small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Post;
