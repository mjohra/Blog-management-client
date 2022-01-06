import React from "react";

const DashboardHome = () => {
  return (
    <div id="destination">
      <div className="covered">
        <div className="content text-center">
          <h1 className="text-title">
            Blog
          </h1>
          <h1 className="title-header text-center mb-5">
            Blogging is a conversation, not a code
          </h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center title-header">
          <div className="rect">
            <h1>
            <i class="fas fa-cocktail"></i>
            </h1>
            <h5>LifeStyle</h5>
          </div>
          <div className="rect">
            <h1>
            <i class="fas fa-utensils"></i>
            </h1>
            <h5>Food</h5>
          </div>
          <div className="rect">
            <h1>
            <i class="fas fa-globe-asia"></i>
            </h1>
            <h5>Travel</h5>
          </div>
          <div className="rect">
            <h1>
            <i class="fas fa-palette"></i>
            </h1>
            <h5>DIY</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
