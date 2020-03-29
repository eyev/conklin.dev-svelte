import { writable } from 'svelte/store';
export const webumeStore = writable({
  firstName: '',
  lastName: '',
  title: '',
  currentLocation: '',
  social: [],
  experience: [],
  technologies: {
    languages: [],
    frameworks: [],
  },
  projects: [],
});
