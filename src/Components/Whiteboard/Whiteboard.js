import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Board from './Board';

import './Whiteboard.css';

class Whiteboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <div className="container">
                <Sidebar />

                <div className="whiteboard__board">
                    <div class="tools-section">
                        <div className="color-picker-container">
                            Select Brush Color : &nbsp;
                            <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)} />
                        </div>

                        <div className="brushsize-container">
                            Select Brush Size : &nbsp;
                            <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                                <option> 5 </option>
                                <option> 10 </option>
                                <option> 15 </option>
                                <option> 20 </option>
                                <option> 25 </option>
                                <option> 30 </option>
                            </select>
                        </div>

                    </div>

                    <div class="board-container">
                        <Board color={this.state.color} size={this.state.size}></Board>
                    </div>
                </div>
            </div>
        )
    }
}

export default Whiteboard