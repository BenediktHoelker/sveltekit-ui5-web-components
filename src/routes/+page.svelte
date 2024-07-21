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

	import '@ui5/webcomponents/dist/Button.js';
	import '@ui5/webcomponents/dist/Label.js';

	import '@ui5/webcomponents/dist/Bar.js';
	import '@ui5/webcomponents-fiori/dist/Page.js';

	import '@ui5/webcomponents-icons/dist/home.js';
	import '@ui5/webcomponents-icons/dist/action-settings.js';

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
	<div class="col" slot="midColumn" style="height: 100vh; margin: 0">
		<ui5-page background-design="Solid">
			<ui5-bar design="Header" slot="header">
				<ui5-button design="Transparent" icon="home" tooltip="Go home" slot="startContent"
				></ui5-button>
				<ui5-label slot="startContent">Title</ui5-label>
				<ui5-button
					design="Transparent"
					icon="action-settings"
					tooltip="Go to settings"
					slot="endContent"
				></ui5-button>
			</ui5-bar>
			<div>
				<p class="content-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus
					pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet
					nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus
					purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet
					facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc
					consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc.
				</p>
				<p class="content-paragraph">
					Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros.
					Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra
					tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit.
					Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus
					iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed
					nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus
					integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim
					neque volutpat ac tincidunt vitae semper quis lectus.
				</p>
				<p class="content-paragraph">
					Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.
					Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis
					elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque
					felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam
					sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec
					enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero.
					Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in
					nulla posuere sollicitudin aliquam ultrices.
				</p>
			</div>
			<div slot="footer">
				<ui5-bar design="FloatingFooter">
					<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
					<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
					<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
				</ui5-bar>
			</div>
		</ui5-page>
	</div>
</ui5-flexible-column-layout>
