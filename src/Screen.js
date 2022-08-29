import React from 'react';
import Menu from './Screens/Menu';
import Game from './Screens/Games';
import Setting from './Screens/Setting';
import Coverflow from './Screens/Coverflow';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen-container">
                <Menu
                    selectedOption={this.props.selectedOption}
                    optionsInMenu={this.props.optionsInMenu}
                />
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Game /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Coverflow /> : ''}


            </div>
        );
    }

}

export default Screen;