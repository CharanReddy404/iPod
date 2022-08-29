import React from "react";

class Options extends React.Component {
    render() {
        return (
            <div className="options-container">
                <div className="option-menu options" style={{}}>iPod</div>
                <div className="options">Games</div>
                <div className="options">Music</div>
                <div className="options">Settings</div>
                <div className="options" style={{ borderRadius: '0 0 0 16px' }}>CoverFlow</div>
            </div>
        )
    }
}

export default Options;