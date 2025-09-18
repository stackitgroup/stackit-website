import { writable } from 'svelte/store'

// Store compartido para el email entre footer y contact form
export const sharedEmail = writable('')
