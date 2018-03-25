import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

obj_text = 'Go to {obj}'
powerup_text = 'Use {powerup}'

class SideButtons extends Component {
	render() {
		vtmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column'}}>
				<Button
					onPress={vtmpBtn}
					title='Them Vault'
					color='darkblue'
				/>

				<Button
					onPress={vtmpBtn}
					title='Them Boost'
					color='green'
				/>

				<Button
					onPress={vtmpBtn}
					title='Them Force'
					color='darkgreen'
				/>

				<Button
					onPress={vtmpBtn}
					title='Us Vault'
					color='darkred'
				/>
			</View>
		);
	}
}

class TripleButtons extends Component {
	render() {
		tmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column', justifyContent: 'space-between'}}>

				<Text>Far Switch</Text>
				<View style={{flexDirection: 'row'}}>
					<Button
						onPress={tmpBtn}
						title='Us'
						color='red'
					/>

					<Button
						onPress={tmpBtn}
						title='Balanced'
						color='grey'
					/>

					<Button
						onPress={tmpBtn}
						title='Them'
						color='blue'
					/>
				</View>

				<Text>Scale</Text>
				<View style={{flexDirection: 'row'}}>
					<Button
						onPress={tmpBtn}
						title='Us'
						color='red'
					/>

					<Button
						onPress={tmpBtn}
						title='Balanced'
						color='grey'
					/>

					<Button
						onPress={tmpBtn}
						title='Them'
						color='blue'
					/>
				</View>

				<Text>Near Switch</Text>
				<View style={{flexDirection: 'row'}}>
					<Button
						onPress={tmpBtn}
						title='Us'
						color='red'
					/>

					<Button
						onPress={tmpBtn}
						title='Balanced'
						color='grey'
					/>

					<Button
						onPress={tmpBtn}
						title='Them'
						color='blue'
					/>
				</View>

			</View>
		);
	}
}

class BottonButtons extends Component {
	render() {
		btmpBtn = () => {}

		return (
			<View style={{flexDirection: 'row'}}>
					<View style={{backgroundColor: 'violet'}}>
						<Text>{obj_text}</Text>
					</View>
					<Button
						onPress={tmpBtn}
						title='Reset'
						color='black'
					/>
					<View style={{backgroundColor: 'violet'}}>
						<Text>{powerup_text}</Text>
					</View>
			</View>
		);
	}
}

export default class LotsOfGreetings extends Component {
	render() {
		return (
			<View style={{flexDirection: 'column', flex:1}}>
				<View style={{flexDirection: 'row'}}>
					<SideButtons/>
					<TripleButtons/>
				</View>

				<BottonButtons/>
			</View>
		);
	}
}
