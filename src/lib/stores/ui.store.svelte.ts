import { writable } from 'svelte/store'

// Store compartido para el email entre footer y contact form
export const sharedEmail = writable('')
export const uiStore = $state({
	isContactPanelOpen: false
})

export function openContactPanel() {
	uiStore.isContactPanelOpen = !uiStore.isContactPanelOpen
	document.body.style.overflow = uiStore.isContactPanelOpen ? 'hidden' : ''
}
