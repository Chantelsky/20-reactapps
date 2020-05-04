import { useState, useEffect } from "react";

const useMovement = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState("right");

  //event listener
  useEffect(() => {
    window.addEventListener("keydown", handlekeyDown);

    function handlekeyDown(e) {
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowRight") move("right");
    }

    return () => window.removeEventListener("keydown", handlekeyDown);
  }, []);

  function move(dir) {
    setDirection(dir);

    if (dir === "up") setY((y) => y - 20);
    if (dir === "left") setX((x) => x - 20);
    if (dir === "down") setY((y) => y + 20);
    if (dir === "right") setX((x) => x + 20);
  }

  return { x, y, direction, move };
};

export default useMovement;
