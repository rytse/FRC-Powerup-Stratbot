import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class SideButtons extends Component {
	render() {
		vtmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column', justifyContent: 'center'}}>
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
			<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<Button
						onPress={tmpBtn}
						title='Objective'
						color='violet'
					/>

					<Button
						onPress={tmpBtn}
						title='Powerup'
						color='violet'
					/>
			</View>
		);
	}
}

export default class LotsOfGreetings extends Component {
	render() {
		return (
			<View style={{flexDirection: 'column'}}>
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<SideButtons/>
					<TripleButtons/>
				</View>

				<BottonButtons/>
			</View>
		);
	}
}
