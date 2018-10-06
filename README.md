## Mortal Clicky Kombat

### Summary:
* Mortal Clicky Kombat is an interactive game created with React App.
* Select a fighter to earn points, but do not click on any more than once or else you lose!
* Try to see if you can get the Top Score!

### Key Features:
* This application uses the React App framework so each element is divided into their own respective components.
* On the initial load, an array of fighters provided through a json file are rendered as images ordered randomly using the Fisher-Yates Shuffle method.
* Each time a fighter is selected they earn a point and the state is saved. The fighter images are shuffled randomly and available for selection again. Now, the array of fighter is filtered removing the previously selected fighter. The player is able to choose again, if they guess correctly, the score increases. If the player guesses incorrectly, they lose and the score will reset to zero.
* If the score is greater than the current Top Score, it will be replaced and the new Top Score state will be saved.

### Built With:
- [x] React
- [x] JavaScript
- [x] Yarn

### Deployment:
See Mortal Clicky Kombat in action at: https://dtwelve89.github.io/clicky-game/