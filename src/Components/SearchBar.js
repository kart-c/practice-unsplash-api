import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	formSubmitHandler = (e) => {
		e.preventDefault();

		this.props.onSeachSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.formSubmitHandler}>
					<div className="field">
						<label>Image Search </label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => {
								this.setState({ term: e.target.value });
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
