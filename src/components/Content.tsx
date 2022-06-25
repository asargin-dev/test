import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import slipper_1 from "../files/images/sarace_001.jpeg";
import "../App.css";

export default function Main() {
  return (
    <ImageList cols={1}>
      <ImageListItem rows={1}>
        <img src={slipper_1} loading="lazy" className="slipper-animate" />
      </ImageListItem>
    </ImageList>
  );
}
