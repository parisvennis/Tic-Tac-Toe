import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: null,
			square: null,
			lastValueToUser: "O",
			cell1: "",
			cell2: "",
			cell3: "",
			cell4: "",
			cell5: "",
			cell6: "",
			cell7: "",
			cell8: "",
			cell9: ""
		};
	}

	handleClick = cellId => {
		if (cellId === 1) this.setState({ cell1: "x" });
	};

	render() {
		return (
			<div className="text-center mt-5">
				<div className="game-row">
					<div className="cell" onClick={() => this.handleClick(1)}>
						{this.state.cell1}
					</div>
					<div className="cell" onClick={() => this.handleClick(2)}>
						{this.state.cell2}
					</div>
					<div className="cell" onClick={() => this.handleClick(3)}>
						{this.state.cell3}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.handleClick(4)}>
						{this.state.cell4}
					</div>
					<div className="cell" onClick={() => this.handleClick(5)}>
						{this.state.cell5}
					</div>
					<div className="cell" onClick={() => this.handleClick(6)}>
						{this.state.cell6}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.handleClick(7)}>
						{this.state.cell7}
					</div>
					<div className="cell" onClick={() => this.handleClick(8)}>
						{this.state.cell8}
					</div>
					<div className="cell" onClick={() => this.handleClick(9)}>
						{this.state.cell9}
					</div>
				</div>
			</div>
		);
	}
}
