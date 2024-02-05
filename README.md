	
# Lab 5 - Translation and Rotation

*Move the origin point to a new location on the canvas and rotate the image*

In P5, if you want to rotate an image, you actually have to rotate the *entire* canvas. All rotation in P5 happens relative to the "origin point," also known as coordinate point (0, 0). If you call the P5 ```rotate()``` function without doing anything else, everything on the canvase will rotate around the top left corner. That may not be the effect you were looking for.

If instead you want to rotate an image in the middle of the canvas around its own center, you can do this by first moving the origin point to a _new location_ on the p5 canvas with the P5 function ```translate()```, and then drawing your image relative to (0, 0)

In this lab, there is a complex shape already drawn for you. Your job is to move it to the middle of the canvas and then rotate it when the mouse is pressed. The shape is drawn relative to (0, 0), so changing the arguments to ```translate()``` will shift the origin point, and therefore the image to a new location.

### Instructions:

1. modify the **arguments** to ```translate()``` in **line 15** so that the image appears in the **center** of the canvas.
2. add a **conditional statement** (```if()``` statement) that will execute when the mouse is pressed.
3. In your ```if()``` statement. use the ```rotate()``` function to turn the image around the (0, 0) point.
4. Pass an **argument** to ```rotate()``` that equals one quarter of a full rotation.
5. Remember that ```rotate()``` takes its arguments in **"radians"** by default. '```PI```' (~ 3.14 ...) is 180 degrees. '```TWO_PI```' is full circle (~ 6.28). A value of 1 will rotate by just less that 1/6 of a circle.

The image should appear to tip over when you press the mouse.

### When you are done ...
* Commit your changes on GitHub as "Lab 5 Submitted"
* Download a .zip archive of your completed lab and submit it to Sakai (Assignments -> Lab 5) 
* include a link to the GitHub repository in the comments

The starter template file (.js and .html) are attached in the Sakai assignment for your convenience (in case you need to start over).
  