<script>
	import '@ui5/webcomponents/dist/Avatar.js';
	import '@ui5/webcomponents/dist/Button.js';
	import '@ui5/webcomponents/dist/List.js';
	import '@ui5/webcomponents/dist/ListItemStandard.js';
	import '@ui5/webcomponents/dist/Title.js';

	import '@ui5/webcomponents-fiori/dist/ShellBar.js';
	import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
	import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';

	import '@ui5/webcomponents-icons/dist/AllIcons.js';
	import DetailPage from './DetailPage.svelte';

	export let data;
	export let selectedTodo;

	const onItemClick = (event) => {
		const selectedKey = event.detail.item.getAttribute('data-key');
		selectedTodo = data.todos.find((todo) => todo.ID === selectedKey);
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

	<div class="col" slot="midColumn" style="height: 100vh; margin: 0">
		<DetailPage todo={selectedTodo} />
	</div>
</ui5-flexible-column-layout>
