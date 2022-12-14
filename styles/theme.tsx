import { DefaultTheme } from "styled-components";

const breakPoints = {
  mobile: "600px",
  tablet: "960px",
  laptop: "1280px",
  desktop: "1920px",
};

const colors = {
  main: "#4dd290",
  background: "#f5f5f5",
  developer: "#4dd290",
  designer: "#ffb65a",
  ProjectManager: "#fc9557",
  whiteText: "#ffffff",
  blackText: "#000000",
  iconBaseColor: "#868686",
};

const theme: DefaultTheme = {
  colors,
  mobile: `(max-width: ${breakPoints.mobile})`,
  tablet: `(max-width: ${breakPoints.tablet})`,
  laptop: `(max-width: ${breakPoints.laptop})`,
  desktop: `(max-width: ${breakPoints.desktop})`,
};

export default theme;
