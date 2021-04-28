> ## transform property

transform property in css it allows revisitting with alternative ways to size, position, and change elements,
also it applies a 2D or 3D transformation to an element.
### Transform Syntax

```css
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}

```

![](https://www.htmldog.com/figures/transform.png)


### 2D Rotate
he rotate() method rotates an element clockwise or counter-clockwise according to a given degree.

The following example rotates the `<div>` element clockwise with 20 degrees

```css
.box-1 {
  transform: rotate(20deg);
}
.box-2 {
  transform: rotate(-55deg);
}

```

![](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/compound_transform.png)


### The scale() Method
increases or decreases the size of an element (according to the parameters given for the width and height).
![](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale()/scale.png)

```css
.box-1 {
  transform: scale(.75);
}
.box-2 {
  transform: scale(1.25);
}

```


**2D Cube Demo**
```css
.cube {
  position: relative;
}
.side {
  height: 95px;
  position: absolute;
  width: 95px;
}
.top {
  background: #9acc53;
  transform: rotate(-45deg) skew(15deg, 15deg);
}
.left {
  background: #8ec63f;
  transform: rotate(15deg) skew(15deg, 15deg) translate(-50%, 100%);
}
.right {
  background: #80b239;
  transform: rotate(-15deg) skew(-15deg, -15deg) translate(50%, 100%);
}
```

change properties with these steps 

1 - **Fade in** 

It’s a great way to emphasize functionality or draw attention to a call to action.

Fade in effects are coded in two steps: first, you set the initial state; next, you set the change.

```css
.fade
{
        opacity:0.5;
}
.fade:hover
{
        opacity:1;
}
```

2- **Change color**

```css
.color:hover
{
        background:#53a7ea;
}
```

3- **Grow & Shrink**
```css
.grow:hover
{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}
```
4 - **Rotate elements**
```css
.rotate:hover
{
        -webkit-transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);
}
```

