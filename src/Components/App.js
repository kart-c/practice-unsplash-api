import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };

	SearchSubmitHandler = async (e) => {
		const response = await unsplash.get('https://api.unsplash.com/search/photos', {
			params: {
				query: e,
			},
			headers: {
				Authorization: 'Client-ID wkqqkZYZlKZvcOCVkV7_tyl2-W1NQyaUz8ESh3nci24',
			},
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSeachSubmit={this.SearchSubmitHandler} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
