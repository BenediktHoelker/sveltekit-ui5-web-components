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

	export let data;
</script>

<div class="colHeader">
	<ui5-title id="col2title" level="H2" style="min-width: 1px;"></ui5-title>
	<div class="colSubHeader">
		<ui5-button design="Emphasized">Edit</ui5-button>
		<ui5-button design="Transparent" icon="add"></ui5-button>
		<ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen"></ui5-button>
		<ui5-button id="closeMidColumn" icon="decline" design="Transparent"></ui5-button>
	</div>
</div>
<br />
<section style="padding: 1rem 1rem;">
	<ui5-title level="H3">{data.ID}</ui5-title>
	<br />
	<div
		style="display:flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap"
	>
		<div style="display:flex; flex-direction: row; align-items: center;">
			<ui5-avatar
				id="avatar"
				icon="laptop"
				color-scheme="Accent5"
				size="XL"
				style="margin: 0 1rem; min-width: 7rem;"
			>
			</ui5-avatar>
			<div>
				<div class="productInfo">
					<ui5-title level="H5">Product:</ui5-title>
					<ui5-title level="H5" id="lblName"></ui5-title>
				</div>
			</div>
		</div>
		<div class="productInfo" style="align-self: start">
			<ui5-title level="H5">{data.title}</ui5-title>
			<ui5-rating-indicator id="productRating" accessible-name="Hello World" value="3.5"
			></ui5-rating-indicator>
		</div>
		<span></span>
	</div>
	<br /><br /><br />
	<ui5-title level="H3">Suppliers</ui5-title>
	<br />
</section>
