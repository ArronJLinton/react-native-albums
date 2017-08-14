// Grab the Component method from the react library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// usede to make http requests
import axios from 'axios'; 

class AlbumList extends Component {
	// initializing state
	state = { albums: [] };

	componentWillMount() {
		// inherently asynchronous function
		// asynchronous indicates that this function will take some amount of time
			axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => 
				// modify current state
					this.setState({ albums: response.data })
				);
		}


		renderAlbums() {
			// .map() array helper -
			// called with a single album out of the albums array
			// return text tag with album.title
			// use {} to reference a javaScript varibale in JSX
			return this.state.albums.map(album => <Text>{album.title}</Text>);
		}

	render() {
			console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
			);
		}

	}

export default AlbumList;
