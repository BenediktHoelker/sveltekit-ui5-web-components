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
</script>

<ui5-flexible-column-layout id="fcl" class="fcl">
	<div class="col" slot="startColumn">
		<ui5-shellbar
			primary-title="Smart Store, New York"
			notifications-count="4"
			show-notifications
			show-product-switch
		>
			<ui5-toggle-button icon="sap-icon://da" slot="assistant"></ui5-toggle-button>
			<ui5-shellbar-item icon="disconnected" text="Disconnect"></ui5-shellbar-item>
		</ui5-shellbar>
		<br /><br />
		<ui5-list id="col1list" header-text="Products (13)" selection-mode="Single">
			{#each data.todos as { ID, title }}
				<ui5-li description={title}>{ID}</ui5-li>
			{/each}
		</ui5-list>
	</div>
	<div class="col" slot="midColumn">
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
			<ui5-title level="H3">General Information</ui5-title>
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
						<br />
						<div class="productInfo">
							<ui5-title level="H5">Description:</ui5-title>
							<ui5-title level="H5" id="lblDesc"></ui5-title>
						</div>
						<br />
						<div class="productInfo">
							<ui5-title level="H5">Supplier:</ui5-title>
							<ui5-title level="H5" id="lblSupplier"><b>Titanium</b></ui5-title>
						</div>
					</div>
				</div>
				<div class="productInfo" style="align-self: start">
					<ui5-title level="H5">Rating:</ui5-title>
					<ui5-rating-indicator id="productRating" accessible-name="Hello World" value="3.5"
					></ui5-rating-indicator>
				</div>
				<span></span>
			</div>
			<br /><br /><br />
			<ui5-title level="H3">Suppliers</ui5-title>
			<br />
		</section>
	</div>
</ui5-flexible-column-layout>
