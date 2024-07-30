<script>
	import '@ui5/webcomponents/dist/Bar.js';
	import '@ui5/webcomponents/dist/Button.js';
	import '@ui5/webcomponents/dist/Input.js';
	import '@ui5/webcomponents/dist/Label.js';
	import '@ui5/webcomponents/dist/Form.js';
	import '@ui5/webcomponents/dist/FormItem.js';

	import '@ui5/webcomponents-fiori/dist/Page.js';

	import '@ui5/webcomponents-icons/dist/AllIcons.js';

	import { enhance } from '$app/forms';

	export let todo = { title: '' };
</script>

<ui5-page background-design="Solid">
	<ui5-bar design="Header" slot="header">
		<ui5-button design="Transparent" icon="home" tooltip="Go home" slot="startContent"></ui5-button>
		<ui5-label slot="startContent">{todo.title}</ui5-label>
		<ui5-button
			design="Transparent"
			icon="action-settings"
			tooltip="Go to settings"
			slot="endContent"
		></ui5-button>
	</ui5-bar>
	<form method="POST" use:enhance>
		<ui5-form header-text="Address" layout="S1 M2 L2 XL2" style="margin-top: 10px;">
			<ui5-form-item>
				<ui5-label slot="labelContent">Title</ui5-label>
				<ui5-input name="title" on:input={(e) => (todo.title = e.target.value)} value={todo.title}
				></ui5-input>
			</ui5-form-item>
		</ui5-form>
	</form>
	<div slot="footer">
		<ui5-bar design="FloatingFooter">
			<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
			<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
			<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	</div>
</ui5-page>
