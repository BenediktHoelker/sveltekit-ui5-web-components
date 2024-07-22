<script>
	import '@ui5/webcomponents/dist/Bar.js';
	import '@ui5/webcomponents/dist/Button.js';
	import '@ui5/webcomponents/dist/Label.js';

	import '@ui5/webcomponents-fiori/dist/Page.js';

	import '@ui5/webcomponents-icons/dist/home.js';
	import '@ui5/webcomponents-icons/dist/action-settings.js';

	export let todo = { title: '' };
</script>

<ui5-page background-design="Solid">
	<ui5-bar design="Header" slot="header">
		<ui5-button design="Transparent" icon="home" tooltip="Go home" slot="startContent"></ui5-button>
		<ui5-label slot="startContent">Title</ui5-label>
		<ui5-button
			design="Transparent"
			icon="action-settings"
			tooltip="Go to settings"
			slot="endContent"
		></ui5-button>
	</ui5-bar>
	<div>
		<p class="content-paragraph">{todo.title}</p>
	</div>
	<div slot="footer">
		<ui5-bar design="FloatingFooter">
			<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
			<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
			<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	</div>
</ui5-page>
