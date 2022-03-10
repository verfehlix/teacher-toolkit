import { writable } from 'svelte/store';

// TODO: make datastructure like so:
/*
    classes = [
        {
            name: "3a",
            subjects: ["Mathe", "Deutsch"],
            students: ["Max", "Jerome", ...]
        }
    ]

*/
export const schoolClasses = writable(['3a', '2b', '1a', '2a']);

export const subjects = writable(['Deutsch', 'Englisch', 'Mathe', 'Kunst', 'Musik']);
