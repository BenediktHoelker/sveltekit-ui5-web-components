<script>
	import '@ui5/webcomponents/dist/Title.js';
	import '@ui5/webcomponents/dist/Input.js';
	import '@ui5/webcomponents/dist/Table.js';
	import '@ui5/webcomponents/dist/TableHeaderRow.js';
	import '@ui5/webcomponents/dist/TableHeaderCell.js';
	import '@ui5/webcomponents/dist/Label.js';

	export let data;

	let inputVal;
	function handleInput(e) {
		inputVal = e.target.value;
	}
</script>

<ui5-table>
	<ui5-table-header-row slot="headerRow">
		<ui5-table-header-cell><span>Product</span></ui5-table-header-cell>
		<ui5-table-header-cell>Supplier</ui5-table-header-cell>
		<ui5-table-header-cell>Dimensions</ui5-table-header-cell>
		<ui5-table-header-cell>Weight</ui5-table-header-cell>
		<ui5-table-header-cell>Price</ui5-table-header-cell>
	</ui5-table-header-row>

	{#each data.todos as { ID, title }}
		<ui5-table-row>
			<ui5-table-cell><ui5-label><b>{title}</b><br />{ID}</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-input on:input={handleInput} value={title}></ui5-input></ui5-table-cell>
			<ui5-table-cell><ui5-label>{title}</ui5-label></ui5-table-cell>
			<ui5-table-cell
				><ui5-label style="color: #2b7c2b"><b>{title}</b> KG</ui5-label></ui5-table-cell
			>
			<ui5-table-cell><ui5-label><b>{title}</b> EUR</ui5-label></ui5-table-cell>
		</ui5-table-row>
	{/each}
</ui5-table>
