import React, { MouseEventHandler } from "react";
import { toWords } from "number-to-words";
import Age from "../core/Methods/Age";
import ReactMarkdown from "react-markdown";
import { Button } from "@geist-ui/react";

const Story = (returnClick: MouseEventHandler) => {
  const age = new Age();
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "20rem",
        paddingRight: "20rem",
      }}
    >
      <div
        style={{
          margin: "auto",
          backgroundColor: "#212121",
          borderRadius: "1rem",
          padding: "3rem",
        }}
      >
        <ReactMarkdown source={`# My Story`} />

        <p>
          I'm a {toWords(age.getAge())} year old Entrepreneur, CEO @ Zyndicate,
          CTO @ Safe, Full-Stack Engineer, Writer, Researcher, Podcaster, &
          Designer. I have always believed the best to make an impact in this
          world is by helping others; specifically, as an engineer, by building
          tools that allow that. What I enjoy most about entrepreneurship and
          engineering is the power of journeys: Sprinkled with struggle, hard
          work, and also a bit of fun, they are what make the end result worth
          it.
        </p>
        <div onClick={returnClick}>
          <Button auto type="success-light">
            My Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Story;
