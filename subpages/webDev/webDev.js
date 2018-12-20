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

const templateElement = document.getElementById('htmlTemplate');
const templateSource =  templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(htmlContext);
document.getElementById('htmlCss').innerHTML = compiledHtml;