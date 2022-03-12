import { writable } from 'svelte/store';
import type { ColorName } from './util/Color';

enum Subject {
	DEUTSCH = 'Deutsch',
	MATHE = 'Mathe',
	ENGLISCH = 'Englisch',
	KUNST = 'Kunst',
	MUSIK = 'Musik'
}

interface Student {
	name: string;
}

export interface SchoolClass {
	name: string;
	colorName: ColorName;
	subjects: Subject[];
	students: Student[];
}

export const schoolClasses = writable<SchoolClass[]>([
	{
		name: '3a',
		colorName: 'Oceanic',
		students: [],
		subjects: []
	},
	{
		name: '4b',
		colorName: 'Pink_Neon',
		students: [],
		subjects: []
	}
]);
