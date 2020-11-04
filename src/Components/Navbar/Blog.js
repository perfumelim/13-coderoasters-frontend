import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownList from "./DropdownListData";
import "./DropdownContent.scss";

class Blog extends Component {
  render() {
    return (
      <div className="dropdownBlog">
        <ul className="dropdownListContent">
          <li>
            <span>Top Posts</span>
          </li>
          {DropdownList.blogPost.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{item}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>Categories</span>
          </li>
          {DropdownList.blogCategory.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{item}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>All Blogs</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Blog;
