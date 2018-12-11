var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;

door1.onclick = () => {
	doorImage1.src = botDoorPath;
}

door2.onclick = () => {
	doorImage2.src = beachDoorPath;
}

door3.onclick = () => {
	doorImage3.src = spaceDoorPath;
}

const randomChoreDoorGenerator = () => {
	var choreDoor = Math.floor(Math.random() * numClosedDoors);
	
	if(choreDoor === 0) {
		
	} else if(choreDoor === 1) {
		
	} else {
		
	}
}