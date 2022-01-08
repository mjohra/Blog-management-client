import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddBlog.css";
import NearMeIcon from '@mui/icons-material/NearMe';

const AddBlog = () => {
  const { register, reset } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("date", currDate);
    formData.append("time", currTime);

    fetch("https://shielded-meadow-42528.herokuapp.com/blog", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Container className="center add-blog pt-5">
        <h1 className="text-title text-center pb-5">Add blog</h1>
        <Container>
          <div className="pb-5">
            <form onSubmit={handleSubmit}>
              <input
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                // defaultValue={user.displayName}
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                className="drop"
                {...register("category", { required: true })}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="DIY">DIY</option>
              </select>
              <input
                accept="image/*"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                {...register("title", { required: true })}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                {...register("description")}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              
  
              <input 
                className="btn-submit fs-4 pb-1 NearMeIcon rounded-1 fw-bold"
                type= "submit" 
              />
            </form>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default AddBlog;
