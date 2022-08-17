// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      developer: string;
      designer: string;
      ProjectManager: string;
      whiteText: string;
      blackText: string;
      iconBaseColor: string;
    };
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
  }
}
