const htmlContext = {
	htmlProjects: [
		{
			img: '/subpages/webDev/projects/wineFestival/wineFestival.jpg',
			href: '/subpages/webDev/projects/wineFestival/wineFestival.html',
			btn: 'Wine Festival',
			description: 'This is a simple codecademy excerise in HTML, using many of the basic elements, with a particular focus on the table element.',
			
			Rimg: '/subpages/webDev/projects/davieBurger/davieBurger.jpg',
			Rhref: '/subpages/webDev/projects/davieBurger/davieBurger.html',
			Rbtn: "Davie's Burgers",
			Rdescription: 'A fictional restaraurant exercise designed to build fluency in CSS, using a range of  rules and descriptors via the block method.'
		},
		{
			img: '/subpages/webDev/projects/broadway/broadway.png',
			href: '/subpages/webDev/projects/broadway/broadway.html',
			btn: 'Broadway',
			description: 'A project intented to build familiarity with CSS display and positioning rules.',
			
			Rimg: '/subpages/webDev/projects/paintStore/paintStore.png',
			Rhref: '/subpages/webDev/projects/paintStore/paintStore.html',
			Rbtn: "Paint Store",
			Rdescription: 'A project for a theoretical paint store that was used to demonstrate the use of CSS colour rules, with hsl, rgba and hex codes being used to demonstrate this.'
		}
	]
};

const htmlTemplateElement = document.getElementById('htmlTemplate');
const htmlTemplateSource =  htmlTemplateElement.innerHTML;
const htmlTemplate = Handlebars.compile(htmlTemplateSource);
const htmlCompiledHtml = htmlTemplate(htmlContext);
document.getElementById('htmlCss').innerHTML = htmlCompiledHtml;

const javascriptContext = {
	javascriptProjects: [
		{
			img: '/subpages/webDev/projects/choreDoor/choreDoor.jpeg',
			href: '/subpages/webDev/projects/choreDoor/choreDoor.html',
			btn: 'Chore Door',
			description: 'A simple game written in javascript using a number of functions and conditional statements. The game logic is as follows: there are three doors, and behind one of them is chorebot, a robot who makes you do chores. If you are able to open two doors to fun locations before you find chorebot, you win. If you find chorebot before opening two doors, you lose.',
			
			Rimg: '/subpages/webDev/projects/randomColor/randomColor.jpeg',
			Rhref: '/subpages/webDev/projects/randomColor/randomColor.html',
			Rbtn: "Random Colour Picker",
			Rdescription: "A project to use javascript to pick a random colour. This project focuses on using DOM events, string concatination and mouse events to add functionality to HTML elements. The 'Pick A Colour' should provide a random colour upon clicking, and the 'Mystery Colour' Should proivde a colour when moused over."
		},
		{
			img: '/subpages/webDev/projects/pianoKeys/pianoKeys.jpg',
			href: '/subpages/webDev/projects/pianoKeys/pianoKeys.html',
			btn: 'Piano Keys',
			description: "An interactive webpage that allows the user to display the lyrics and piano notes to the song 'Happy Birthday', and interact with a virtual piano to 'play' the song. This project has a very heavy emphasis on DOM selectors and events.",
			
			Rid: 'squareGame',
			Rimg: '/subpages/webDev/projects/squareGame/squareGame.jpg',
			Rhref: '/subpages/webDev/projects/squareGame/squareGame.html',
			Rbtn: "Sqaure Game",
			Rdescription: 'A project primarily focusing using the rendering capabilities of the canvas element to create a simple, interactive video game, where the goal is to use WASD to move a red square into a bigger square.'
		},
		{
			img: '/subpages/webDev/projects/music/musicon.jpg',
			href: '/subpages/webDev/projects/music/musicon.html',
			btn: 'Musicon',
			description: "This is an exercise using a fictional music store to demonstrate the use of handlebar templates.",
			
			Rimg: '/subpages/webDev/projects/fontPreview/fontPreview.jpeg',
			Rhref: '/subpages/webDev/projects/fontPreview/fontPreview.html',
			Rbtn: "Font Preview",
			Rdescription: 'A project where jQuery is used to add functionality to a static website. The functionality in this case is to modify the font type, font weight and font size of user-inputted text.'
		},
		{
			img: '/subpages/webDev/projects/gameboard/gameboard.jpeg',
			href: '/subpages/webDev/projects/gameboard/gameboard.html',
			btn: 'Gameboard',
			description: "An exercise in using jQuery to access DOM elements according to their relative position and relation to parent and sibling elements, allowing the clickable 'more', 'share' and bell items to have functionality.",
			
			Rimg: '/subpages/webDev/projects/wanderlust/wanderlust.jpeg',
			Rhref: '/subpages/webDev/projects/wanderlust/wanderlust.html',
			Rbtn: "Wanderlust",
			Rdescription: 'A simple javascript app that uses fetch, async and await keywoards to request information from the Foursqaure and APIXU APIs to display the weather and top attractions for a searched City or location.'
		},
		{
			img: '/subpages/webDev/projects/ravenous/ravenous.jpeg',
			href: 'https://jrobson68.github.io/ravenous/',
			btn: 'Ravenous',
			description: "#",
			
			Rimg: '#',
			Rhref: '/#',
			Rbtn: "#",
			Rdescription: '#'
		},
	]
};

const templateElement = document.getElementById('javascriptTemplate');
const templateSource =  templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(javascriptContext);
document.getElementById('javascript').innerHTML = compiledHtml;