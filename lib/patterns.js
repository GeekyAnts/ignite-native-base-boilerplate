const constants = {
	PATTERN_IMPORTS: "imports",
	PATTERN_ROUTES: "routes",
};

module.exports = {
	constants,
	[constants.PATTERN_IMPORTS]: `import[\\s\\D]*from\\s+('|")react-navigation('|");?`,
	[constants.PATTERN_ROUTES]: "const NavigationDrawer",
};
