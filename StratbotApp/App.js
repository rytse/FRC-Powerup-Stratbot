import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

const US = 1;
const NEUTRAL = 0;
const THEM = -1;

export default class StratbotUI extends Component {
	constructor(props) {
		super(props);

		this.state = {
			far_switch: NEUTRAL,
			scale: NEUTRAL,
			near_switch: NEUTRAL,
			obj_text: 'Go to {obj}',
			powerup_text: 'Use {powerup}'
		}
	}

	them_vault() {
	}
	them_boost() {
	}
	them_force() {
	}
	us_vault() {
	}

	fs_u() {
		powerup_text = 'tmp';
	}
	fs_n() {
	}
	fs_t() {
	}

	s_u() {
	}
	s_n() {
	}
	s_t() {
	}

	ns_u() {
	}
	ns_n() {
	}
	ns_t() {
	}


	render() {
		tmpBtn = () => {}
		btmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column', flex:1}}>
				<View style={{flexDirection: 'row'}}>

					<View style={{flexDirection: 'column'}}>
						<Button
							onPress={this.them_vault}
							title='Them Vault'
							color='darkblue'
						/>

						<Button
							onPress={this.them_boost}
							title='Them Boost'
							color='green'
						/>

						<Button
							onPress={this.them_force}
							title='Them Force'
							color='darkgreen'
						/>

						<Button
							onPress={this.us_vault}
							title='Us Vault'
							color='darkred'
						/>
					</View>

					<View style={{flexDirection: 'column', justifyContent: 'space-between'}}>

						<Text>Far Switch</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.fs_u}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.fs_n}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.fs_t}
								title='Them'
								color='blue'
							/>
						</View>

						<Text>Scale</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.s_u}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.s_n}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.s_t}
								title='Them'
								color='blue'
							/>
						</View>

						<Text>Near Switch</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.ns_u}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.ns_n}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.ns_t}
								title='Them'
								color='blue'
							/>
						</View>
					</View>
				</View>

				<View style={{flexDirection: 'row'}}>
						<View style={{backgroundColor: 'violet'}}>
							<Text>{this.state.obj_text}</Text>
						</View>
						<Button
							onPress={tmpBtn}
							title='Reset'
							color='black'
						/>
						<View style={{backgroundColor: 'violet'}}>
							<Text>{this.state.powerup_text}</Text>
						</View>
				</View>
			</View>
		);
	}
}
