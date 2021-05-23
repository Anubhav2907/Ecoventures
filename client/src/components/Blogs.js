import React from "react";
import "./Blogs.css";
function Blogs() {
  return (
    <div className="blogsSection">
      <div className="gotBlog">
        <div className="BlogColor"></div>
        <p className="BlogText">Blog Section</p>
      </div>
      <div class="row1">
        <div class="example-2 blogCard">
          <div
            class="wrapper"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1546580594-a64816022c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')`,
            }}
          >
            <div class="header">
              <ul class="menu-cntnt">
                <li>
                  <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-heart-o">
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-comment-o">
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="data">
              <div class="cntnt">
                <span class="author">Jane Doe</span>
                <h1 class="title">
                  <a href="#">Scenerio of Urban Gardening Services</a>
                </h1>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo elit ultricies nibh sodales tempor id sed nisi.
                </p>
                <a href="#" class="button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="example-2 blogCard">
          <div
            class="wrapper"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515335837773-962a93674d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')`,
            }}
          >
            <div class="header">
              <ul class="menu-cntnt">
                <li>
                  <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-heart-o">
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-comment-o">
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="data">
              <div class="cntnt">
                <span class="author">Jane Doe</span>
                <h1 class="title">
                  <a href="#">Scenerio of Urban Gardening Services</a>
                </h1>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo elit ultricies nibh sodales tempor id sed nisi.
                </p>
                <a href="#" class="button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="example-2 blogCard">
          <div
            class="wrapper"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')`,
            }}
          >
            <div class="header">
              <ul class="menu-cntnt">
                <li>
                  <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-heart-o">
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-comment-o">
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="data">
              <div class="cntnt">
                <span class="author">Jane Doe</span>
                <h1 class="title">
                  <a href="#">Scenerio of Urban Gardening Services</a>
                </h1>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo elit ultricies nibh sodales tempor id sed nisi.
                </p>
                <a href="#" class="button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
