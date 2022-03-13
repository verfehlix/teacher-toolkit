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
	id: string;
	name: string;
	colorName: ColorName;
	subjects: Subject[];
	students: Student[];
}

export const schoolClasses = writable<SchoolClass[]>([
	{
		id: 'class-3a',
		name: '3a',
		colorName: 'Oceanic',
		students: [],
		subjects: []
	},
	{
		id: 'class-4b',
		name: '4b',
		colorName: 'Pink_Neon',
		students: [],
		subjects: []
	}
]);

// TODO: save store to localStorage/indexedDB via https://dexie.org/docs/Tutorial/Svelte oder https://github.com/MacFJA/svelte-persistent-store
