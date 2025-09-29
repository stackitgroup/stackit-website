import { writable } from 'svelte/store'

// Store compartido para el email entre footer y contact form
export const sharedEmail = writable('')
export const uiStore = $state({
	isContactPanelOpen: false,
	isInHouseDrivePanelOpen: false
})

export function openContactPanel() {
	uiStore.isContactPanelOpen = !uiStore.isContactPanelOpen
	document.body.style.overflow = uiStore.isContactPanelOpen ? 'hidden' : ''
}

export function openInHouseDrivePanel() {
	uiStore.isInHouseDrivePanelOpen = !uiStore.isInHouseDrivePanelOpen
	document.body.style.overflow = uiStore.isInHouseDrivePanelOpen ? 'hidden' : ''
}
