import React from "react";

class Controls extends React.Component {

    render() {
        return (
            <div className="controls-container">
                <div className="controls-menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="controls-prev">
                    <i className="fa-solid fa-backward-fast"></i>
                </div>
                <div className="controls-next">
                    <i className="fa-solid fa-forward-fast"></i>
                </div>
                <div className="controls-play-pause">
                    <i className="fa-solid fa-play"></i>
                    <i class="fa-solid fa-pause"></i>
                </div>
                <div className="controls-ok">
                    Select
                </div>
            </div>
        );
    }
}

export default Controls;