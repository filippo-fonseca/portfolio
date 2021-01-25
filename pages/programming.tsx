import React from "react";
import { Card, Text, Image, Link, Spacer, Note } from "@geist-ui/react";
import ComplexCard from "../components/ComplexCard";
import Head from "next/head";

const Programming = () => {
  return (
    <>
      <Head>
        <title>Programming - Filippo Fonseca</title>
      </Head>
      <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
        <div style={{ marginLeft: "3.5rem" }}>
          <Text h1>Programming</Text>
          <div style={{ marginTop: "-0.75rem", marginBottom: "2rem" }}>
            <Text p>
              I'm in love with statically-typed languages. My stack ranges from
              web and mobile development to data science and machine learning.
            </Text>
            <Note type="secondary">Lists are in no particular order.</Note>
          </div>
          <Text h3>Languages, Frameworks, & Libraries</Text>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "3.5rem",
            maxWidth: "100%",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/m00Bd3H/ts.png"
              header="TypeScript"
              description="Web & mobile development with React. World-class experience in production-grade environments and applications."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
              header="React + React Native"
              description="Usage with TypeScript/JavaScript for production-grade apps and smaller projects. Main frontend tool."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/mqF0RQK/python.png"
              header="Python"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "3.5rem",
            maxWidth: "15rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/tbGMJ5H/dart.png"
              header="Dart"
              description="Mobile development with Flutter. Production-level experience."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/x77Scpy/flutter.png"
              header="Flutter"
              description="Experience building scalable applications in production with Dart. Main alternative to React Native for mobile development."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>

          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/2nBq6Rm/js.png"
              header="JavaScript"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "3.5rem",
            maxWidth: "15rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/drzJfMh/nodejs.png"
              header="NodeJS"
              description="Experience building scalable applications in production with Dart. Main alternative to React Native for mobile development."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/s5wszK7/graphql.png"
              header="GraphQL"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/hmvYn31/postgresql.png"
              header="PostgreSQL"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "3.5rem",
            maxWidth: "15rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://i.ibb.co/tbGMJ5H/dart.png"
              header="ExpressJS"
              description="Mobile development with Flutter. Production-level experience."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              header="MongoDB"
              description="Experience building scalable applications in production with Dart. Main alternative to React Native for mobile development."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>

          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              header="ThreeJS"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
        </div>
        <div style={{ marginTop: "2rem", marginLeft: "3.5rem" }}>
          <Text h4>🧠 Currently learning/refining...</Text>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "3.5rem",
            maxWidth: "15rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              header="Java"
              description="Experience building scalable applications in production with Dart. Main alternative to React Native for mobile development."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              header="Golang"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <ComplexCard
              imageURL="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              header="Elixir"
              description="General purpose algorithms, AI, data science, and deep learning models. Experience integrating with TensorFlow and Keras."
              linkText="View projects"
              linkURL="https://www.github.com/filippo-fonseca"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programming;
