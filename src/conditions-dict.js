// will have to make this a generated dict for multiple codes per condition/icon

const conditionsDict = {};

var n;	// variable for id

// ids 200 - 232
for (n = 200; n <= 232; n++) {
	conditionsDict[n] = {
		iconURL: "icons/004-storm.svg",
		main: "Thunderstorm",
	}
}

// ids 300 - 321
for (n = 300; n <= 321; n++) {
	conditionsDict[n] = {
		iconURL: "icons/002-rain.svg",
		main: "Drizzle",
	}
}

// ids 500 - 504
for (n = 500; n <= 504; n++) {
	conditionsDict[n] = {
		iconURL: "icons/049-rain.svg",
		main: "Rain",
	}
}

conditionsDict[511] = {
	iconURL: "icons/036-snowflake",
	main: "Rain"
}

// ids 520 - 531
for (n = 520; n <= 531; n++) {
	conditionsDict[n] = {
		iconURL: "icons/002-rain.svg",
		main: "Rain"
	}
}

// ids 600 - 622
for (n = 600; n <= 622; n++) {
	conditionsDict[n] = {
		iconURL: "icons/036-snowflake",
		main: "Snow"
	}
}

conditionsDict[701] = {
	iconURL: "icons/038-fog.svg",	// technically not "mist"
	main: "Mist"
}

conditionsDict[711] = {
	iconURL: "icons/038-fog.svg",	// technically not "smoke"
	main: "Smoke"
}

conditionsDict[721] = {
	iconURL: "icons/038-fog.svg",	// technically not "haze"
	main: "Haze"
}

conditionsDict[731] = {
	iconURL: "icons/warning.svg",	// technically not "dust"
	main: "Dust"
}

conditionsDict[741] = {
	iconURL: "icons/038-fog.svg",	// this one's actually accurate
	main: "Fog"
}

conditionsDict[751] = {
	iconURL: "icons/warning.svg",	// technically not "sand"
	main: "Sand"
}

conditionsDict[761] = {
	iconURL: "icons/warning.svg",	// technically not "dust"
	main: "Dust"
}

conditionsDict[762] = {
	iconURL: "icons/warning.svg",	// technically not "dust"
	main: "Ash"
}

conditionsDict[771] = {
	iconURL: "icons/025-cloudy.svg",	// actually accurate
	main: "Squall"
}

conditionsDict[800] = {
	iconURL: "icons/022-sun.svg",
	main: "Clear"
}

conditionsDict[801] = {
	iconURL: "icons/033-sun.svg",
	main: "Clouds"
}

conditionsDict[802] = {
	iconURL: "icons/003-cloud.svg",
	main: "Clouds"
}

conditionsDict[803] = {
	iconURL: "icons/001-cloudy.svg",
	main: "Clouds"
}

conditionsDict[804] = {
	iconURL: "icons/001-cloudy.svg",
	main: "Clouds"
}



export default conditionsDict;