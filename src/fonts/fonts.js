import { createGlobalStyle } from "styled-components";

import NotoSansTCRegular from "./NotoSansTC-Regular.otf";
import NotoSansTCMedium from "./NotoSansTC-Medium.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'NotoSansTC';
    src: local('NotoSansTC'), local('NotoSansTC'),
    url(${NotoSansTCRegular}) format('otf'),
    url(${NotoSansTCMedium}) format('otf'),
    font-weight: 300;
    font-style: normal;
  }
`;
