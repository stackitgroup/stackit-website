import { writable } from 'svelte/store'

// Store compartido para el email entre footer y contact form
export const sharedEmail = writable('')
export const uiStore = $state({
	isContactPanelOpen: false,
	isInHouseDrivePanelOpen: false
})

export function openContactPanel() {
	uiStore.isContactPanelOpen = !uiStore.isContactPanelOpen
	// Set body overflow based on whether any panel is open
	const anyPanelOpen = uiStore.isContactPanelOpen || uiStore.isInHouseDrivePanelOpen
	document.body.style.overflow = anyPanelOpen ? 'hidden' : ''
}

export function openInHouseDrivePanel() {
	uiStore.isInHouseDrivePanelOpen = !uiStore.isInHouseDrivePanelOpen
	// Set body overflow based on whether any panel is open
	const anyPanelOpen = uiStore.isContactPanelOpen || uiStore.isInHouseDrivePanelOpen
	document.body.style.overflow = anyPanelOpen ? 'hidden' : ''
}
