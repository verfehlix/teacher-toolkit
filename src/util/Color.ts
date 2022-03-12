export type ColorName =
	| 'Hyper'
	| 'Oceanic'
	| 'Cotton_Candy'
	| 'Gotham'
	| 'Sunset'
	| 'Mojave'
	| 'Beachside'
	| 'Gunmetal'
	| 'Peachy'
	| 'Seafoam'
	| 'Pumpkin'
	| 'Pandora'
	| 'Valentine'
	| 'Hawaii'
	| 'Lavender'
	| 'Wintergreen'
	| 'Huckleberry'
	| 'Blue_Steel'
	| 'Arendelle'
	| 'Spearmint'
	| 'Minnesota'
	| 'Bombpop'
	| 'Acadia'
	| 'Sonora'
	| 'Paradise'
	| 'Sierra_Mist'
	| 'Creamsicle'
	| 'Midnight'
	| 'Borealis'
	| 'Strawberry'
	| 'Flamingo'
	| 'Burning_Sunrise'
	| 'Apple'
	| 'Watermelon'
	| 'Flare'
	| 'Rasta'
	| 'Lust'
	| 'Sublime'
	| 'Witch'
	| 'Powerpuff'
	| 'Solid_Blue'
	| 'Ice'
	| 'Sky'
	| 'Horizon'
	| 'Morning'
	| 'Space'
	| 'Earth'
	| 'Picture'
	| 'Messenger'
	| 'Sea'
	| 'Payment'
	| 'Video'
	| 'Passion'
	| 'Flower'
	| 'Cool_Sunset'
	| 'Pink_Neon'
	| 'Blue_Sand'
	| 'Emerald'
	| 'Relaxed_Rose'
	| 'Purple_Haze'
	| 'Silver'
	| 'Orange_Coral'
	| 'Blue_Coral'
	| 'Purple_Beam'
	| 'Island_Waves'
	| 'Big_Sur'
	| 'Oahu'
	| 'Salem';

export interface Color {
	css: string;
	textColor: 'light' | 'dark';
}

export const colors: Record<ColorName, Color> = {
	['Hyper']: {
		css: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
		textColor: 'light'
	},
	['Oceanic']: {
		css: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
		textColor: 'light'
	},
	['Cotton_Candy']: {
		css: 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
		textColor: 'dark'
	},
	['Gotham']: {
		css: 'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
		textColor: 'light'
	},
	['Sunset']: {
		css: 'bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100',
		textColor: 'dark'
	},
	['Mojave']: {
		css: 'bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500',
		textColor: 'dark'
	},
	['Beachside']: {
		css: 'bg-gradient-to-r from-yellow-200 via-green-200 to-green-500',
		textColor: 'dark'
	},
	['Gunmetal']: {
		css: 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600',
		textColor: 'dark'
	},
	['Peachy']: {
		css: 'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200',
		textColor: 'light'
	},
	['Seafoam']: {
		css: 'bg-gradient-to-r from-green-200 via-green-300 to-blue-500',
		textColor: 'light'
	},
	['Pumpkin']: {
		css: 'bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700',
		textColor: 'dark'
	},
	['Pandora']: {
		css: 'bg-gradient-to-r from-green-200 via-green-400 to-purple-700',
		textColor: 'light'
	},
	['Valentine']: {
		css: 'bg-gradient-to-r from-red-200 to-red-600',
		textColor: 'light'
	},
	['Hawaii']: {
		css: 'bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300',
		textColor: 'dark'
	},
	['Lavender']: {
		css: 'bg-gradient-to-r from-indigo-300 to-purple-400',
		textColor: 'light'
	},
	['Wintergreen']: {
		css: 'bg-gradient-to-r from-green-200 to-green-500',
		textColor: 'light'
	},
	['Huckleberry']: {
		css: 'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800',
		textColor: 'light'
	},
	['Blue_Steel']: {
		css: 'bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800',
		textColor: 'light'
	},
	['Arendelle']: {
		css: 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500',
		textColor: 'light'
	},
	['Spearmint']: {
		css: 'bg-gradient-to-r from-green-200 via-green-400 to-green-500',
		textColor: 'light'
	},
	['Minnesota']: {
		css: 'bg-gradient-to-r from-purple-400 to-yellow-400',
		textColor: 'light'
	},
	['Bombpop']: {
		css: 'bg-gradient-to-r from-red-400 via-gray-300 to-blue-500',
		textColor: 'light'
	},
	['Acadia']: {
		css: 'bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500',
		textColor: 'light'
	},
	['Sonora']: {
		css: 'bg-gradient-to-r from-yellow-200 to-yellow-500',
		textColor: 'dark'
	},
	['Paradise']: {
		css: 'bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300',
		textColor: 'dark'
	},
	['Sierra_Mist']: {
		css: 'bg-gradient-to-r from-yellow-200 via-green-200 to-green-300',
		textColor: 'dark'
	},
	['Creamsicle']: {
		css: 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400',
		textColor: 'dark'
	},
	['Midnight']: {
		css: 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900',
		textColor: 'light'
	},
	['Borealis']: {
		css: 'bg-gradient-to-r from-green-300 to-purple-400',
		textColor: 'light'
	},
	['Strawberry']: {
		css: 'bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400',
		textColor: 'dark'
	},
	['Flamingo']: {
		css: 'bg-gradient-to-r from-pink-400 to-pink-600',
		textColor: 'light'
	},
	['Burning_Sunrise']: {
		css: 'bg-gradient-to-r from-yellow-600 to-red-600',
		textColor: 'light'
	},
	['Apple']: {
		css: 'bg-gradient-to-r from-green-500 to-green-700',
		textColor: 'light'
	},
	['Watermelon']: {
		css: 'bg-gradient-to-r from-red-500 to-green-500',
		textColor: 'light'
	},
	['Flare']: {
		css: 'bg-gradient-to-r from-orange-600 to-orange-500',
		textColor: 'light'
	},
	['Rasta']: {
		css: 'bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600',
		textColor: 'dark'
	},
	['Lust']: {
		css: 'bg-gradient-to-r from-rose-700 to-pink-600',
		textColor: 'light'
	},
	['Sublime']: {
		css: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
		textColor: 'light'
	},
	['Witch']: {
		css: 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900',
		textColor: 'light'
	},
	['Powerpuff']: {
		css: 'bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400',
		textColor: 'light'
	},
	['Solid_Blue']: {
		css: 'bg-gradient-to-r from-blue-500 to-blue-600',
		textColor: 'light'
	},
	['Ice']: {
		css: 'bg-gradient-to-r from-rose-100 to-teal-100',
		textColor: 'dark'
	},
	['Sky']: {
		css: 'bg-gradient-to-b from-sky-400 to-sky-200',
		textColor: 'light'
	},
	['Horizon']: {
		css: 'bg-gradient-to-b from-orange-500 to-yellow-300',
		textColor: 'light'
	},
	['Morning']: {
		css: 'bg-gradient-to-r from-rose-400 to-orange-300',
		textColor: 'light'
	},
	['Space']: {
		css: 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r',
		textColor: 'light'
	},
	['Earth']: {
		css: 'bg-gradient-to-r from-teal-200 to-lime-200',
		textColor: 'dark'
	},
	['Picture']: {
		css: 'bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400',
		textColor: 'light'
	},
	['Messenger']: {
		css: 'bg-gradient-to-r from-sky-400 to-blue-500',
		textColor: 'light'
	},
	['Sea']: {
		css: 'bg-gradient-to-r from-cyan-200 to-cyan-400',
		textColor: 'light'
	},
	['Payment']: {
		css: 'bg-gradient-to-r from-sky-400 to-cyan-300',
		textColor: 'light'
	},
	['Video']: {
		css: 'bg-gradient-to-r from-red-500 to-red-800',
		textColor: 'light'
	},
	['Passion']: {
		css: 'bg-gradient-to-r from-rose-500 via-red-400 to-red-500',
		textColor: 'light'
	},
	['Flower']: {
		css: 'bg-gradient-to-r from-violet-300 to-violet-400',
		textColor: 'light'
	},
	['Cool_Sunset']: {
		css: 'bg-gradient-to-r from-orange-300 to-rose-300',
		textColor: 'light'
	},
	['Pink_Neon']: {
		css: 'bg-gradient-to-r from-fuchsia-600 to-pink-600',
		textColor: 'light'
	},
	['Blue_Sand']: {
		css: 'bg-gradient-to-r from-slate-500 to-yellow-100',
		textColor: 'dark'
	},
	['Emerald']: {
		css: 'bg-gradient-to-r from-emerald-500 to-lime-600',
		textColor: 'light'
	},
	['Relaxed_Rose']: {
		css: 'bg-gradient-to-r from-rose-300 to-rose-500',
		textColor: 'light'
	},
	['Purple_Haze']: {
		css: 'bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800',
		textColor: 'light'
	},
	['Silver']: {
		css: 'bg-gradient-to-r from-gray-100 to-gray-300',
		textColor: 'dark'
	},
	['Orange_Coral']: {
		css: 'bg-gradient-to-r from-orange-400 to-rose-400',
		textColor: 'light'
	},
	['Blue_Coral']: {
		css: 'bg-gradient-to-r from-blue-400 to-emerald-400',
		textColor: 'light'
	},
	['Purple_Beam']: {
		css: 'bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900',
		textColor: 'light'
	},
	['Island_Waves']: {
		css: 'bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300',
		textColor: 'dark'
	},
	['Big_Sur']: {
		css: 'Pastel bg-gradient-to-tr from-violet-500 to-orange-300',
		textColor: 'light'
	},
	['Oahu']: {
		css: 'bg-gradient-to-t from-orange-400 to-sky-400',
		textColor: 'light'
	},
	['Salem']: {
		css: 'bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600',
		textColor: 'light'
	}
};
