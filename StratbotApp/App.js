import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class VaultButtons extends Component {
	render() {
		vtmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column', justifyContent: 'center'}}>
				<Button
					onPress={vtmpBtn}
					title='Them Vault'
					color='green'
				/>
				<Button
					onPress={vtmpBtn}
					title='Us Vault'
					color='green'
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

export default class LotsOfGreetings extends Component {
	render() {
		return (
			<View style={{flexDirection: 'row', justifyContent: 'center'}}>
				<VaultButtons/>
				<TripleButtons/>
			</View>
		);
	}
}
