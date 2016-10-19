  styled.div`

  div > .className + #idName
  /* psedo selectors */
  p::after p::backdrop  p::before p::first-letter p::first-line p::selection
  p:any-link p:before p:checked p:current p:default p:dir p:disabled p:drop
  p:empty p:enabled
  p:first p:first-child p:first-letter p:first-line p:first-of-type p:focus
  p:fullscreen p:hover p:in-range p:indeterminate p:invalid  p:last-child
  p:last-of-type p:left p:link p:only-child p:only-of-type p:optional
  p:out-of-range p:read-only p:read-write p:required p:right p:root p:scope
  p:target p:unresolved p:valid p:visited

  /* functions */
  p:lang(en) p:lang("en")
  p:not(html) p:has(html) p:matches(p,a) p:nth-child(1n+1) p:nth-last-child(1) p:nth-last-of-type(2n) p:nth-of-type(odd)
  [attr][attr=aaa][attr~="_blank" i][attr|="_blank"][attr$="_blank"][attr*="_blank"]
  {
    color: red;
  }

  border:
    /* numeric values */
     -1, +1, -1 -0.e10 1.0001 16/9
    /* units */
    1turn 1rad 1grad 1deg 1kHz 1Hz 1vw 1vmin 1vmax 1vh 1rem 1q 1px 1pt 1pc 1mozmm 1mm 1in 1ex 1em 1cm 1ch
    /* hex */
    #fff #ffffffff
    /* unit after interpolation close */
    ${props.something?1:2}px;
  /* css properties */
  invalid-or-unknown-name:;
  --custom-name:;
  additive-symbols: top yyyyyy;
  all:;
  animation:;
  animation-delay:;
  animation-direction:;
  animation-duration:;
  animation-fill-mode:;
  animation-iteration-count:;
  animation-name:;
  animation-play-state:;
  animation-timing-function:;
  appearance:;
  backface-visibility:;
  background:;
  background-attachment:;
  background-blend-mode:;
  background-clip:;
  background-color:;
  background-image:;
  background-origin:;
  background-position:;
  background-repeat:;
  background-size:;
  bleed:;
  block-size:;
  border:;
  border-block-end:;
  border-block-end-color:;
  border-block-end-style:;
  border-block-end-width:;
  border-block-start:;
  border-block-start-color:;
  border-block-start-style:;
  border-block-start-width:;
  border-bottom:;
  border-bottom-color:;
  border-bottom-left-radius:;
  border-bottom-right-radius:;
  border-bottom-style:;
  border-bottom-width:;
  border-collapse:;
  border-color:;
  border-image:;
  border-image-outset:;
  border-image-repeat:;
  border-image-slice:;
  border-image-source:;
  border-image-width:;
  border-inline-end:;
  border-inline-end-color:;
  border-inline-end-style:;
  border-inline-end-width:;
  border-inline-start:;
  border-inline-start-color:;
  border-inline-start-style:;
  border-inline-start-width:;
  border-left:;
  border-left-color:;
  border-left-style:;
  border-left-width:;
  border-radius:;
  border-right:;
  border-right-color:;
  border-right-style:;
  border-right-width:;
  border-spacing:;
  border-style:;
  border-top:;
  border-top-color:;
  border-top-left-radius:;
  border-top-right-radius:;
  border-top-style:;
  border-top-width:;
  border-width:;
  bottom:;
  box-decoration-break:;
  box-shadow:;
  box-sizing:;
  break-after:;
  break-before:;
  break-inside:;
  caption-side:;
  clear:;
  clip-path:;
  column-count:;
  column-fill:;
  column-gap:;
  column-rule:;
  column-rule-color:;
  column-rule-style:;
  column-rule-width:;
  column-span:;
  column-width:;
  columns:;
  content:;
  counter-increment:;
  counter-reset:;
  cursor:;
  direction:;
  display:;
  empty-cells:;
  fallback:;
  filter:;
  float:;
  font:;
  flex:;
  flex-basis:;
  flex-direction:;
  flex-flow:;
  flex-grow:;
  flex-shrink:;
  flex-wrap:;
  font-family:;
  font-feature-settings:;
  font-kerning:;
  font-language-override:;
  font-size:;
  font-size-adjust:;
  font-stretch:;
  font-style:;
  font-synthesis:;
  font-variant:;
  font-variant-alternates:;
  font-variant-caps:;
  font-variant-east-asian:;
  font-variant-ligatures:;
  font-variant-numeric:;
  font-variant-position:;
  font-weight:;
  grid:;
  grid-area:;
  grid-auto-columns:;
  grid-auto-flow:;
  grid-auto-rows:;
  grid-column:;
  grid-column-end:;
  grid-column-gap:;
  grid-column-start:;
  grid-gap:;
  grid-row:;
  grid-row-end:;
  grid-row-gap:;
  grid-row-start:;
  grid-template:;
  grid-template-areas:;
  grid-template-columns:;
  grid-template-rows:;
  image-orientation:;
  image-rendering:;
  image-resolution:;
  height:;
  hyphens:;
  inline-size:;
  isolation:;
  justify-content:;
  left:;
  letter-spacing:;
  line-break:;
  line-height:;
  list-style:;
  list-style-image:;
  list-style-position:;
  list-style-type:;
  margin:;
  margin-block-end:;
  margin-block-start:;
  margin-bottom:;
  margin-inline-end:;
  margin-inline-start:;
  margin-left:;
  margin-right:;
  margin-top:;
  marks:;
  mask:;
  mask-clip:;
  mask-composite:;
  mask-image:;
  mask-mode:;
  mask-origin:;
  mask-position:;
  mask-repeat:;
  mask-size:;
  mask-type:;
  max-block-size:;
  max-height:;
  max-inline-size:;
  max-width:;
  max-zoom:;
  min-block-size:;
  min-height:;
  min-inline-size:;
  min-width:;
  min-zoom:;
  mix-blend-mode:;
  nav-up:;
  nav-right:;
  nav-left:;
  nav-index:;
  nav-down:;
  negative:;
  object-fit:;
  object-position:;
  offset-block-end:;
  offset-block-start:;
  offset-inline-end:;
  offset-inline-start:;
  opacity:;
  order:;
  orientation:;
  orphans:;
  outline:;
  outline-color:;
  outline-offset:;
  outline-style:;
  outline-width:;
  overflow:;
  overflow-wrap:;
  overflow-x:;
  overflow-y:;
  pad:;
  padding:;
  padding-block-end:;
  padding-block-start:;
  padding-bottom:;
  padding-inline-end:;
  padding-inline-start:;
  padding-left:;
  padding-right:;
  padding-top:;
  page-break-after:;
  page-break-before:;
  page-break-inside:;
  perspective:;
  perspective-origin:;
  pointer-events:;
  position:;
  quotes:;
  prefix:;
  range:;
  resize:;
  revert:;
  right:;
  ruby-align:;
  ruby-merge:;
  ruby-position:;
  scroll-behavior:;
  scroll-snap-coordinate:;
  scroll-snap-destination:;
  scroll-snap-type:;
  shape-image-threshold:;
  shape-margin:;
  shape-outside:;
  size:;
  speak-as:;
  src:;
  suffix:;
  symbols:;
  system:;
  tab-size:;
  table-layout:;
  text-align:;
  text-align-last:;
  text-combine-upright:;
  text-decoration:;
  text-decoration-color:;
  text-decoration-line:;
  text-decoration-style:;
  text-emphasis:;
  text-emphasis-color:;
  text-emphasis-position:;
  text-emphasis-style:;
  text-indent:;
  text-justify:;
  text-orientation:;
  text-overflow:;
  text-rendering:;
  text-size-adjust:;
  text-shadow:;
  text-transform:;
  text-underline-position:;
  top:;
  touch-action:;
  transform:;
  transform-box:;
  transform-origin:;
  transform-style:;
  transition:;
  transition-delay:;
  transition-duration:;
  transition-property:;
  transition-timing-function:;
  unicode-bidi:;
  unicode-range:;
  user-zoom:;
  vertical-align:;
  visibility:;
  volume:;
  white-space:;
  widows:;
  width:;
  will-change:;
  word-break:;
  word-spacing:;
  word-wrap:;
  writing-mode:;
  z-index:;
  zoom:;

  color:
    /* css functions */
    annotation()
    blur()
    attr()
    brightness()
    calc()
    character-variant()
    circle()
    contrast()
    cross-fade()
    cubic-bezier()
    drop-shadow()
    element()
    ellipse()
    fit-content()
    format()
    grayscale()
    hsl()
    hsla()
    hue-rotate()
    image()
    image-set()
    inset()
    invert()
    linear-gradient()
    local()
    matrix()
    matrix3d()
    minmax()
    opacity()
    ornaments()
    perspective()
    polygon()
    radial-gradient()
    rect()
    repeat()
    repeating-linear-gradient()
    repeating-radial-gradient()
    rgb()
    rgba()
    rotate()
    rotate3d()
    rotateX()
    rotateY()
    rotateZ()
    saturate()
    scale()
    scale3d()
    scaleX()
    scaleY()
    scaleZ()
    sepia()
    skew()
    skewX()
    skewY()
    steps()
    stylistic()
    styleset()
    swash()
    symbols()
    translate()
    translate3d()
    translateX()
    translateY()
    translateZ()
    url()
    var();


@media print {
  body { font-size: 10pt }
}
@media screen {
  body { font-size: 13px }
}
@media screen, print {
  body { line-height: 1.2 }
}
@media only screen
  and ( device-aspect-ratio: 480px)
  and ( max-device-width: 480px)
  and ( max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    body { line-height: 1.4 }
}
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"),
  local("HelveticaNeue-Bold"),
  url(MgOpenModernaBold.ttf);
  font-weight: bold;
  font-family: Goudy Bookletter 1911, sans-serif;
  font-family: Red/Black, sans-serif;
  font-family: "Lucida" Grande, sans-serif;
  font-family: Ahem!, sans-serif;
  font-family: test@foo, sans-serif;
  font-family: #POUND, sans-serif;
  font-family: Hawaii 5-0, sans-serif;
}
@font-feature-values Font Two {
  @swash {
    color: 4;
  }
}
@charset "UTF-8";       /* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-859-15'; /* Set the encoding of the style sheet to Latin-9 (Western European languages, with euro sign) */
@charset "UTF-8";      /* Invalid, there is a character (a space) before the at-rule */
@charset UTF-8;         /* Invalid, without ' or ", the charset is not a CSS <string> */
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);

@keyframes important1 {
  from { margin-top: 50px; }
  50%  { margin-top: 150px !important; } /* ignored */
  to   { margin-top: 100px; }
}

@keyframes important2 {
  from { margin-top: 50px;
         margin-bottom: 100px; }
  to   { margin-top: 150px !important; /* ignored */
         margin-bottom: 50px; }
}
/* Default namespace */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Prefixed namespace */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
@page { margin: 2cm } /* All margins set to 2cm */

@page :first {
   margin-top: 10cm    /* Top margin on first page 10cm */
}

@supports ( transform-style: preserve ) or ( -moz-transform-style: preserve ) or
( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  ) {
  margin: 1px;
}
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}
@viewport {
  orientation: landscape;
}
`
