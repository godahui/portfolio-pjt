import "styled-components";
import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      첫번째: string;
      두번째: string;
    };
  }
}

const Theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    첫번째: "cyan",
    두번째: "magenta",
  },
};

export { Theme };
