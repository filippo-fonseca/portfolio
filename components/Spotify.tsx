import React from "react";
import { useLastFM } from "use-last-fm";
import { Music } from "react-feather";
import { Text } from "@geist-ui/react";

const Spotify = () => {
  const lastFM = useLastFM(
    "filippofonseca",
    "87cbd22caf50d21cd7ee53262523f85f"
  );

  if (lastFM.status !== "playing") {
    return (
      <div className={"music-container"}>
        <Music />
        <p>&nbsp;Not listening to anything</p>
      </div>
    );
  }

  return (
    <div className={"music-container"} style={{ marginTop: "2rem" }}>
      <Music />
      <div style={{ marginTop: "-0.5rem" }}>
        <Text p>
          &nbsp;Listening to {lastFM.song.name} by {lastFM.song.artist}
        </Text>
      </div>
    </div>
  );
};

export default Spotify;
