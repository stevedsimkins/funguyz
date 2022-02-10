import { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    min-height: 100vh;
    overflow: hidden;
  }

  body {
    font-family: "Open Sans", sans-serif;
    color: white;
  }

  .logo {
    font-size: 90px;
    font-family: "Lobster Two", cursive;
  }
  
  h1 {
    font-size: 67px;
    font-family: "Lobster Two", cursive;
  }

  h2 {
    font-size: 50px;
    font-family: "Lobster Two", cursive;
  }

  h3 {
    font-size: 38px;
    font-weight: bold;
  }

  h4 {
    font-size: 28px;
    font-weight: bold;
  }

  h5 {
    font-size: 21px;
  }

  p {
    font-size: 16px;
  }

  .comment {
    font-size: 12px;
  }

  .color1 {
    color: #6687E7;
  }

  .color2 {
    color: #69B2F1;
  }

  .color3 {
    color: #69C3DB;
  }

  .color4 {
    color: #6AF1EA;
  }

  .color5 {
    color: #63E8B9;
  }

 .gradient1 {
    background: linear-gradient(109.25deg, #6687E7 0.04%, #69B2F1 30.92%, #69C3DB 64.81%, #6AF1EA 95.7%);
 } 

 .gradientText {
  @supports (--css: variables) {
   background: linear-gradient(109.25deg, #6687E7 0.04%, #69B2F1 30.92%, #69C3DB 64.81%, #6AF1EA 95.7%); 
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  }
 }

 .gradient2 {
    background: radial-gradient(41.06% 60.82% at 30.76% 58.94%, rgba(99, 232, 185, 0.78) 0%, rgba(99, 232, 185, 0) 100%),
linear-gradient(108.73deg, #6687E7 31.33%, #6AF1EA 92.6%);
 }

  .gradient3 {
    background: linear-gradient(64.25deg, #6687E7 0.04%, #69B2F1 30.92%, #69C3DB 64.81%, #6AF1EA 95.7%);
  }

`
export default GlobalStyle;
