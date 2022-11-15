import React, { useState } from "react";
import "./App.css";

type TPoint = {
    x: number;
    y: number;
};

function App() {
    const [points, setPoints] = useState<TPoint[]>([]);
    const [popped, setPopped] = useState<TPoint[]>([]);

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
        const newPoints = [...points];
        const poppedPoint = newPoints.pop();
        if (!poppedPoint) return;
        setPopped([...popped, poppedPoint]);
        setPoints(newPoints);
    }

    function handleRedo() {
        const newPopped = [...popped];
        const newPoints = [...points];
        const poppedPoint = newPopped.pop();
        if (!poppedPoint) return;
        newPoints.push(poppedPoint);
        setPoints(newPoints);
        setPopped(newPopped);
    }

    return (
        <>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
            <div className="App" onClick={handlePlaceCirlce}>
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
        </>
    );
}

export default App;
