import { writable } from 'svelte/store';

export const schoolClasses = writable(['3a', '2b', '1a', '2a']);

export const subjects = writable(['Deutsch', 'Englisch', 'Mathe', 'Kunst', 'Musik']);
