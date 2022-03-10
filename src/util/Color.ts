export enum Color {
	RED = 'RED',
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	ROSE = 'ROSE'
}

export const mapColorToCss = (color: Color) => {
	switch (color) {
		case Color.RED:
			return 'from-pink-500 via-red-500 to-yellow-500';
		case Color.BLUE:
			return 'from-green-300 via-blue-500 to-purple-600';
		case Color.GREEN:
			return 'from-green-200 to-green-500';
		case Color.ROSE:
			return 'from-pink-300 via-purple-300 to-indigo-400';
	}
};
