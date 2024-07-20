<script>
	import '@ui5/webcomponents/dist/Title.js';
	import '@ui5/webcomponents/dist/Table.js';
	import '@ui5/webcomponents/dist/TableHeaderRow.js';
	import '@ui5/webcomponents/dist/TableHeaderCell.js';
	import '@ui5/webcomponents/dist/Label.js';

	export let data;
</script>

<ui5-table id="table" overflow-mode="Popin">
	<ui5-table-header-row slot="headerRow">
		<ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>
		<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>
		<ui5-table-header-cell id="dimensionsCol">Dimensions</ui5-table-header-cell>
		<ui5-table-header-cell id="weightCol">Weight</ui5-table-header-cell>
		<ui5-table-header-cell id="priceCol">Price</ui5-table-header-cell>
	</ui5-table-header-row>

	{#each data.todos as { ID, title }}
		<ui5-table-row>
			<ui5-table-cell><ui5-label><b>{title}</b><br />{ID}</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>{title}</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>{title}</ui5-label></ui5-table-cell>
			<ui5-table-cell
				><ui5-label style="color: #2b7c2b"><b>{title}</b> KG</ui5-label></ui5-table-cell
			>
			<ui5-table-cell><ui5-label><b>{title}</b> EUR</ui5-label></ui5-table-cell>
		</ui5-table-row>
	{/each}
</ui5-table>
