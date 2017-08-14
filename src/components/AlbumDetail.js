import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album}) => {

// refactoring
	const { title, artist, thumbnail_image } = album;
	const { headerContent, thumbnailStyle, thumbnailContainer, headerText } = styles;

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
		</Card>
		);
	};


const styles = {
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {

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
	}
};

export default AlbumDetail;
