<script>
	import '@ui5/webcomponents/dist/Avatar.js';
	import '@ui5/webcomponents/dist/Button.js';
	import '@ui5/webcomponents/dist/List.js';
	import '@ui5/webcomponents/dist/ListItemStandard.js';
	import '@ui5/webcomponents/dist/Title.js';
	import '@ui5/webcomponents/dist/RatingIndicator.js';
	import '@ui5/webcomponents/dist/Tab.js';
	import '@ui5/webcomponents/dist/TabContainer.js';
	import '@ui5/webcomponents/dist/TabSeparator.js';
	import '@ui5/webcomponents/dist/ToggleButton.js';

	import '@ui5/webcomponents-fiori/dist/ShellBar.js';
	import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
	import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';

	import '@ui5/webcomponents-icons/dist/da.js';
	import '@ui5/webcomponents-icons/dist/da-2.js';
	import '@ui5/webcomponents-icons/dist/incoming-call.js';
	import '@ui5/webcomponents-icons/dist/disconnected.js';
	import '@ui5/webcomponents-icons/dist/camera.js';
	import '@ui5/webcomponents-icons/dist/laptop.js';
	import '@ui5/webcomponents-icons/dist/desktop-mobile.js';
	import '@ui5/webcomponents-icons/dist/responsive.js';
	import '@ui5/webcomponents-icons/dist/print.js';
	import '@ui5/webcomponents-icons/dist/iphone.js';
	import '@ui5/webcomponents-icons/dist/ipad.js';
	import '@ui5/webcomponents-icons/dist/menu2.js';
	import '@ui5/webcomponents-icons/dist/menu.js';
	import '@ui5/webcomponents-icons/dist/slim-arrow-right.js';

	export let data;

	const onItemClick = (event) => {
		const selectedKey = event.detail.item.getAttribute('data-key');
		window.location.href = '/' + selectedKey;
	};
</script>

<ui5-flexible-column-layout id="fcl" layout="TwoColumnsMidExpanded" disable-resizing="true">
	<div slot="startColumn">
		<ui5-shellbar
			primary-title="Smart Store, New York"
			notifications-count="4"
			show-notifications
			show-product-switch
		>
			<ui5-toggle-button icon="sap-icon://da" slot="assistant"></ui5-toggle-button>
			<ui5-shellbar-item icon="disconnected" text="Disconnect"></ui5-shellbar-item>
		</ui5-shellbar>
		<ui5-list
			id="col1list"
			header-text="Products (13)"
			selection-mode="Single"
			on:item-click={onItemClick}
		>
			{#each data.todos as { ID, title }}
				<ui5-li data-key={ID}>{title}</ui5-li>
			{/each}
		</ui5-list>
	</div>
	<div class="col" slot="midColumn"></div>
</ui5-flexible-column-layout>
