import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: null,
			square: null,
			nextUserInput: "X",
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
		const newState = {};
		newState[cellId] = this.state.nextUserInput;

		if (this.state[cellId] === "") {
			this.setState(newState);
			this.setState({
				nextUserInput: this.state.nextUserInput === "X" ? "O" : "X"
			});
		}
	};

	render() {
		return (
			<div className="text-center mt-5">
				<div className="game-row">
					<div
						className="cell"
						onClick={() => this.handleClick("cell1")}>
						{this.state.cell1}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell2")}>
						{this.state.cell2}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell3")}>
						{this.state.cell3}
					</div>
				</div>
				<div className="game-row">
					<div
						className="cell"
						onClick={() => this.handleClick("cell4")}>
						{this.state.cell4}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell5")}>
						{this.state.cell5}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell6")}>
						{this.state.cell6}
					</div>
				</div>
				<div className="game-row">
					<div
						className="cell"
						onClick={() => this.handleClick("cell7")}>
						{this.state.cell7}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell8")}>
						{this.state.cell8}
					</div>
					<div
						className="cell"
						onClick={() => this.handleClick("cell9")}>
						{this.state.cell9}
					</div>
				</div>
			</div>
		);
	}
}
