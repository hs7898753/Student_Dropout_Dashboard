import "./index.css";
import { Avatar, Space } from "antd";
import institute from "./institute.png";
import dropout from "./dropout.png";
import student from "./student.png";
import React, { useState } from "react";

export default function Overview() {
  return <Home />;
}

function Home() {
  return (
    <>
      <div className="home">
        <div className="one">
          <Space className="spaceCard" direction="horizontal" size={30}>
            <Caard
              headone={"Number of"}
              headtwo={"Schools"}
              headimg={institute}
              Typeone={"Government"}
              Typetwo={"Private"}
              totalone={1.54}
              totaltwo={"1.32"}
              bgcolor1={"rgba(0, 126, 165, 1)"}
              bgcolor2={"rgba(0, 175, 199, 1)"}
            />
            <Caard
              headone={"Number of"}
              headtwo={"Students"}
              headimg={student}
              Typeone={"Female"}
              Typetwo={"Male"}
              totalone={1.54}
              totaltwo={"1.32"}
              bgcolor1={"rgba(225, 102, 6, 1)"}
              bgcolor2={"rgba(255, 112, 0, 1)"}
            />
            <Caard
              headone={"Number of"}
              headtwo={"Dropouts"}
              headimg={dropout}
              Typeone={"Female"}
              Typetwo={"Male"}
              totalone={1.54}
              totaltwo={"1.32"}
              bgcolor1={"rgba(187, 72, 77, 1)"}
              bgcolor2={"rgba(241, 86, 93, 1)"}
            />
          </Space>
        </div>
        <div className="two"></div>
      </div>
    </>
  );
}

function Caard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    height: isHovered ? "52vh" : "50vh",
    width: isHovered ? "26vw" : "25vw",
    borderRadius: "20px",
    transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
    cursor: "pointer", // Add a pointer cursor on hover
  };
  return (
    <>
      <div
        style={cardStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="head"
          style={{
            backgroundColor: "white",
            height: "21vh",
            borderRadius: "20px 20px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>
              {props.headone}
              <p style={{ color: props.bgcolor2 }}>
                <em>{props.headtwo}</em>
              </p>
            </span>
            <Avatar
              shape="square"
              size={100}
              src={props.headimg}
              style={{ color: "gray" }}
            />
          </Space>
        </div>
        <div
          className="type"
          style={{
            backgroundColor: props.bgcolor1,
            height: "8vh",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>{props.Typeone}</span>
            <span>{props.Typetwo}</span>
          </Space>
        </div>
        <div
          className="total"
          style={{
            backgroundColor: props.bgcolor2,
            height: "14vh",
            borderRadius: "0 0 20px 20px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>
              {props.totalone} <p style={{ fontSize: "15px" }}>in Lakhs</p>
            </span>
            <span>
              {props.totaltwo} <p style={{ fontSize: "15px" }}>in Lakhs</p>
            </span>
          </Space>
        </div>
      </div>
    </>
  );
}
