import React, { useState } from "react";
import "./App.css";

type TPoint = {
    x: number;
    y: number;
};

function App() {
    const [points, setPoints] = useState<TPoint[]>([]);

    function handlePlaceCirlce(e: React.MouseEvent<HTMLDivElement>) {
        console.log(e);
        const { clientX, clientY } = e;
        setPoints([
            ...points,
            {
                x: clientX,
                y: clientY,
            },
        ]);
    }

    function handleUndo() {
      //TODO: remove the last point added to the array
    }

    return (
        <div className="App" onClick={handlePlaceCirlce}>
          <button onClick={handleUndo}>Undo</button>
            {points.map((point) => (
                <div
                    className="point"
                    style={{
                        left: point.x - 5 + "px",
                        top: point.y - 5 + "px",
                    }}
                ></div>
            ))}
        </div>
    );
}

export default App;
