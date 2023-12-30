// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const [color_code, setColor_code] = useState("");
    function change_color() {
        let colorCode = `rgba(${Math.round(Math.random() * 255)},${Math.round(
            Math.random() * 255
        )},${Math.round(Math.random() * 255)},${Math.random().toFixed(2)})`;
        setColor_code(colorCode);
    }
    const styles = {
        backgroundColor: color_code,
    };
    useEffect(() => {
        change_color();
    }, []);

    return (
        <>
            <div className="full_bg" style={styles}>
                <h1>
                    color code is <span>{color_code}</span>
                </h1>
                <button onClick={change_color} style={styles}>
                    click me!
                </button>
            </div>
        </>
    );
};

export default App;
