import { h } from "preact";
import Game from "../islands/Game.tsx";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Game</title>
        {/* Link to your style.css file located in /static */}
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div id="center-game-display">
          <Game />
        </div>
      </body>
    </html>
  );
}
