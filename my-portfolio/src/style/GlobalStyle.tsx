import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root{
    width: 100vw;
    height: 100vh;

    
    --color-cursor: 220, 90, 90;
    --cursor-outline-shade: 0.3;
    --cursor-size: 10px;
    --cursor-outline-size: 12px;
  }

  *{
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #e0e0e0;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #6969dd;
    }
    &::-webkit-scrollbar-track {
      background-color: #e0e0e0;
      border-radius: 50px;
    }
  }

  html,
  body{
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    line-height: 1.5;
    letter-spacing: -0.4px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    min-width: 320px;
  }
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
   margin:0;
   padding:0;
   border:0;
   font-size:100%;
   font:inherit;
   vertical-align:baseline;
   word-break:keep-all
  }
  html {
   line-height:1.15;
   -ms-text-size-adjust:100%;
   -webkit-text-size-adjust:100%
  }
  article,
  aside,
  footer,
  header,
  nav,
  section {
   display:block
  }
  figcaption,
  figure,
  main {
   display:block
  }
  hr {
   box-sizing:content-box;
   height:0;
   overflow:visible
  }
  pre {
   font-family:monospace, monospace;
   font-size:1em
  }
  a {
   background-color:transparent;
  }
  ol,
  ul {
   list-style:none
  }
  abbr[title] {
   border-bottom:none;
   text-decoration:underline;
   text-decoration:underline dotted
  }
  b,
  strong {
   font-weight:inherit
  }
  b,
  strong {
   font-weight:bolder
  }
  code,
  kbd,
  samp {
   font-family:monospace, monospace;
   font-size:1em
  }
  dfn {
   font-style:italic
  }
  mark {
   background-color:#ff0;
   color:#000
  }
  sub,
  sup {
   line-height:0;
   position:relative;
   vertical-align:baseline
  }
  sub {
   bottom:-0.25em
  }
  sup {
   top:-0.5em
  }
  audio,
  video {
   display:inline-block
  }
  audio:not([controls]) {
   display:none;
   height:0
  }
  svg:not(:root) {
   overflow:hidden
  }
  input,
  textarea {
   -webkit-appearance:none;
  }
  .cke_dialog_open input,
  .cke_dialog_open textarea {
   -webkit-appearance:auto
  }
  input:-webkit-autofill {
   -webkit-text-fill-color:#000
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
   transition:background-color 5000s ease-in-out 0s;
  }
  select {
   -webkit-appearance:none;
   -moz-appearance:none;
   border-radius:0
  }
  button,
  input,
  optgroup,
  select,
  textarea {
   margin:0;
   padding:0
  }
  button,
  input {
   overflow:visible;
   border-radius:0
  }
  button,
  select {
   text-transform:none
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style:none;
    padding:0;
  }
  legend {
    box-sizing:border-box;
    color:inherit;
    display:table;
    max-width:100%;
    padding:0;
    white-space:normal;
  }
  progress {
    display:inline-block;
    vertical-align:baseline;
  }
  textarea {
    overflow:auto;
    border-radius:0;
  }
  input::-ms-clear {
    display:none;
  }
  input[type='password']::-ms-reveal {
    display:none;
    width:0;
    height:0;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing:border-box;
    padding:0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height:auto;
  }
  [type="search"] {
    outline-offset:-2px;
  }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance:none;
  }
  ::-webkit-file-upload-button {
    font:inherit;
  }
  details,
  menu {
    display:block;
  }
  summary {
    display:list-item;
  }
  canvas {
    display:inline-block;
  }
  template {
    display:none;
  }
  [hidden] {
    display:none;
  }
  table:not([cellspacing]) {
    border-collapse:collapse;
    border-spacing:0;
    word-break:keep-all;
  }
  a,
  a:hover,
  a:focus {
    color:inherit;
    text-decoration:none;
  }
  * {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
  }
  img {
    display:inline-block;
    max-width:100%;
    height:auto;
    border-style:none;
    vertical-align:bottom;
  }
  input,
  button,
  select,
  textarea {
    font-family:inherit;
    font-size:inherit;
    line-height:inherit;
    outline:none;
  }  button {
    background-color:transparent;
    border:none;
    border-radius:0;
    outline:none;
    cursor: pointer;
  }
  select::-ms-expand {
    display:none;
  }

  #cursor-dot,
  #cursor-dot-outline {
    z-index: 999;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  #cursor-dot {
    width: var(--cursor-size);
    height: var(--cursor-size);
    background-color: rgba(var(--color-cursor), 1);
  }

  #cursor-dot-outline {
    width: var(--cursor-outline-size);
    height: var(--cursor-outline-size);
    background-color: rgba(var(--color-cursor), var(--cursor-outline-shade));
  }
`;
export default GlobalStyle;
