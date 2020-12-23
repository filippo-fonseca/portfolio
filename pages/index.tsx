import React, { useState } from "react";
import Head from "next/head";
import {
  Page,
  Text,
  Card,
  Note,
  Code,
  Spacer,
  Row,
  Col,
  Button,
  Grid,
  Badge,
  Link,
  useTheme,
} from "@geist-ui/react";

import { toWords } from "number-to-words";
import Age from "../core/Methods/Age";
import { TextShadowDiv } from "../styles";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const age = new Age();
  const theme = useTheme();
  return (
    <>
      <Page>
        <Head>
          <title>Filippo Fonseca</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            height: "100vh",
            verticalAlign: "middle",
          }}
        >
          <Row style={{ marginBottom: "15px" }}>
            <Col>
              <img
                height="20%"
                src="https://i.ibb.co/BqKZznj/personalprofilepicture.png"
              />
              <TextShadowDiv>
                <Text h1>👋 Hi there! I'm Filippo Fonseca.</Text>
              </TextShadowDiv>
              <Text h3 style={{ color: "gray" }}>
                I'm a {toWords(age.getAge())} year old Entrepreneur, CEO @{" "}
                <a
                  href="https://www.zyndicate.app"
                  style={{ color: "#b8b8b8", textDecoration: "none" }}
                >
                  Zyndicate
                </a>
                , CTO @{" "}
                <a
                  href="https://www.safelabs.app"
                  style={{ color: "#b8b8b8", textDecoration: "none" }}
                >
                  Safe
                </a>
                , Full-Stack Engineer, Writer, Researcher, Podcaster, &
                Designer.
              </Text>
              <Button auto type="success-light" style={{ marginTop: "1rem" }}>
                My Story
              </Button>
              <div className={styles.grid}>
                <a href="/" className={styles.card}>
                  <h3>🧪 Programming &rarr;</h3>
                  <p>My stack, experience, & Full-Stack developer portfolio.</p>
                </a>

                <a href="/" className={styles.card}>
                  <h3>🧠 Learning &rarr;</h3>
                  <p>
                    My learning journey (from engineering to microbiology and
                    physics.)
                  </p>
                </a>

                <a href="/" className={styles.card}>
                  <h3>⚡️ Companies &rarr;</h3>
                  <p>
                    My current startups & large projects that fuel me every day.
                  </p>
                </a>

                <a href="/" className={styles.card}>
                  <h3>✏️ Blog &rarr;</h3>
                  <p>
                    My thoughts on books, psychology, programming, etc. (really
                    anything).
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Page>
    </>
  );
};

export default Home;
