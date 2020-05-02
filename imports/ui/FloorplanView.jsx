import React from 'react';
import './FloorplanView.css';
import Corridor from './Corridor.jsx';
import Room from './Room.jsx';

class FloorplanView extends React.Component {	
	constructor(props) {
		super(props);

		this.state = {
			tempValues : this.props.tempValues,
		};
		
		
	}

	findRoomColours = (tempValues) => {
		var sortedTemp = new Map([...tempValues.entries()].sort((a,b) => a[1] - b[1]));
		var tempColours = ["#01365F", "#01579B", "#0288D1", "#4FC3F7", "#6BC8FA", "#B3E5FC", "#BEEBFF"];
		
		let index = 0;
		for(let [key,value] of sortedTemp ) {
			sortedTemp.set(key, tempColours[index]);
			index++;
		}
		return sortedTemp;
		

	}

	render() { 	

		var roomColours = this.findRoomColours(this.state.tempValues);
		var tempDashboardState = this.props.tempDashboardState;

		return ( 
			// might wanna consider writing a loop here if time permit
			<div className="floorplan">
				<Room 
				roomNum={0}
				colour={(tempDashboardState.room0.toString() == 'selected') ? roomColours.get('r0') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room0')}/>
				<Corridor name={""}/>
				<Corridor name={"floorplan"}/>
				<Room roomNum={1}
				colour={(tempDashboardState.room1.toString() == 'selected') ? roomColours.get('r1') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room1')}/>
				<Room roomNum={2} 
				colour={(tempDashboardState.room2.toString() == 'selected') ? roomColours.get('r2') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room2')}/>
				<Room roomNum={3} 
				colour={(tempDashboardState.room3.toString() == 'selected') ? roomColours.get('r3') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room3')}/>
				<Room roomNum={4} 
				colour={(tempDashboardState.room4.toString() == 'selected') ? roomColours.get('r4') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room4')}/>
				<Room roomNum={5} 
				colour={(tempDashboardState.room5.toString() == 'selected') ? roomColours.get('r5') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room5')}/>
				<Room roomNum={6} 
				colour={(tempDashboardState.room6.toString() == 'selected') ? roomColours.get('r6') : "#ffffff"} 
				onClick={(event) => this.props.onRoomClick(event, 'room6')}/>	
			</div>
		);
	}
}

export default FloorplanView;