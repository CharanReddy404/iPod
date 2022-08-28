import React from "react";
import Screan from "./Screan";
import Controls from "./Controls";

class App extends React.Component {

    render() {
        return (
            <div className="ipod-container">
                <Screan />
                <Controls />
            </div>
        );
    }
}

export default App;