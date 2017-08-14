import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album}) => {

// refactoring
	const { title, artist, thumbnail_image, image } = album;
	const { 
		headerContent, 
		thumbnailStyle, 
		thumbnailContainer, 
		headerText, 
		albumCover 
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
						<Image 
							style={thumbnailStyle} 
							source={{ uri: thumbnail_image }}
						/>
				</View>
				<View style={headerContent}>
					<Text style={headerText}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
					<Image 
						style={albumCover}
						source={{ uri: image }}
					/>
			</CardSection>
		</Card>
		);
	};


const styles = {
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 18
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumCover: {
		height: 300,
		// allows image to take full width of the device
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
