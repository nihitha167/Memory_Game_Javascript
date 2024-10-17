# Memory_Game_Javascript

Overview
This is a simple Memory Match game implemented in JavaScript. The game presents a grid of tiles, each with a color. The objective is to find and match pairs of tiles with the same color.

Features
Tiles are represented as div elements.
Clicking a tile reveals its color.
Players can match pairs of tiles.
The game alerts the player when all pairs have been matched.

Code Explanation
HTML Structure: The tiles are contained within a div with the class .tiles.

Color Array: An array of colors is created and duplicated to ensure pairs.

Game State Variables:

revealedCount: Counts how many tiles have been correctly matched.
activeTile: Tracks the currently revealed tile for matching.
awaitingEndOfMove: Prevents further clicks until the current move ends.
Tile Creation:

Each tile is created as a div with a click event listener.
When clicked, the tile color is revealed, and if two tiles match, they remain revealed.
If they do not match, both tiles are hidden after a brief delay.

Technologies Used
HTML
CSS (for styling, not included in this snippet)
JavaScript
