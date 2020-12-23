import React, { useState } from "react";
import {
  GeistProvider,
  CssBaseline,
  Badge,
  useTheme,
  Button,
} from "@geist-ui/react";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("dark");
  const [url, setUrl] = useState("https://i.ibb.co/HBF7596/moon.png");

  const switchThemes = () => {
    setThemeType((lastThemeType) =>
      lastThemeType === "dark" ? "light" : "dark"
    );

    if (themeType == "dark") {
      setUrl("https://i.ibb.co/tQJJGKb/sun.png");
    } else {
      setUrl("https://i.ibb.co/HBF7596/moon.png");
    }
  };

  const theme = useTheme();
  return (
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "2rem",
            marginLeft: "2rem",
            flex: 1,
          }}
        >
          <img
            onClick={switchThemes}
            src={url}
            style={{
              width: "1.5rem",
              marginRight: "1rem",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
          />
          <Badge.Anchor style={{ verticalAlign: "middle" }}>
            <Badge
              style={{ backgroundColor: theme.palette.violet }}
              size="medium"
            >
              🌳
            </Badge>
            <Button size="small" auto>
              Growing
            </Button>
          </Badge.Anchor>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <a href="https://www.github.com/filippo-fonseca" target="_blank">
            <img
              style={{
                width: "1.5rem",
                marginTop: "2rem",
                marginRight: "0.8rem",
              }}
              src="https://i.ibb.co/Nsdr73C/github-2.png"
            />
          </a>
          <a href="https://twitter.com/FilippoFonseca" target="_blank">
            <img
              style={{ width: "1.5rem", marginRight: "0.8rem" }}
              src="https://i.ibb.co/nb5cF4h/twitter.png"
            />
          </a>
          <a href="https://www.instagram.com/filippo_fonseca" target="_blank">
            <img
              style={{ width: "1.5rem", marginRight: "0.8rem" }}
              src="https://i.ibb.co/ggb3yxk/insta.png"
            />
          </a>
          <a
            href="https://open.spotify.com/playlist/6PfyInvebm97mva5graYqV?si=zIMWmbiOR7-9txsspi1SbA"
            target="_blank"
          >
            <img
              style={{ width: "1.5rem", marginRight: "0.8rem" }}
              src="https://i.ibb.co/vk4Z96V/Spotify-Logo.png"
            />
          </a>
          <a href="mailto:filifonsecacagnazzo@gmail.com" target="_blank">
            <img
              style={{ width: "1.5rem", marginRight: "2rem" }}
              src="https://i.ibb.co/FB5PR40/mail.png"
            />
          </a>
        </div>
      </div>
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
