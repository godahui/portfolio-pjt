import "styled-components";
import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius1: string;
    borderRadius2: string;

    boxShadow: string;

    colors: {
      primary: string;
      secondary: string;
    };
  }
}

const Theme: DefaultTheme = {
  borderRadius1: "93px 0px",
  borderRadius2: "0px 93px",

  boxShadow:
    "-10px -10px 5px rgba(255, 255, 255, 0.2), -2px 10px 30px rgba(191, 187, 210, 0.32)",

  colors: {
    primary: "#361E5C",
    secondary: "#5100D6",
  },
};

export { Theme };
