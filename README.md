# A2 - Multi-Platform Interactions


## Installation

Run the following two commands

```bash
npm init -y 
```
```bash
node app.js
```

## Overview of what you did (i.e., what are the controls? Why this design?)

I created an A-Frame JS project with wasd controls for desktop and touch controls for mobile devices. The scene features a duck vending machine that generates a new duck when clicked. The duck can then be animated towards an inflatable pool by clicking on it. To enhance the immersive experience, ambient, vending machine, and duck sounds have been added to support the scene. The design of the controls was selected to provide a seamless experience for desktop and mobile users. The wasd controls offer a familiar and intuitive way to navigate the scene for desktop users, while touch controls provide a more natural experience for mobile users. The touch controls allow mobile navigation by touching different areas in the scene to move forward and looking down and touching the scene to move backwards.

## What was challenging?

While creating the A-Frame JS project, my biggest challenge was enabling touch/grabbing and physics. I initially intended for the user to be able to grab the duck from the vending machine and drop it in the inflatable pool. However, I encountered difficulties implementing this feature due to outdated physics and grabbing components that I added to the project. Despite my efforts, I could not resolve the errors and make the touch/grabbing and physics functional. 

## What went well (i.e., how did you solve the above challenges?).

In my A-Frame JS project, I created 3D models for a duck vending machine and inflatable pool, added wasd controls for desktop and touch controls for mobile devices, and implemented ambient and duck sounds. Despite challenges with touch/grabbing and physics, I solved the issue by animating the ducks instead and adding custom components for instantiating ducks and adding them to the pool. The sound effects, such as quacking when clicking on the ducks, added to the overall experience and made the project successful.

## GitHub Repository
https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A2

## Demo
![](https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A2/blob/main/public/assets/demo-1.gif)
![](https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A2/blob/main/public/assets/demo-2.gif)



## License

[MIT](https://choosealicense.com/licenses/mit/)
