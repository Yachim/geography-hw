import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<p class="text-red-500">Test</p>
	);
});

export const head: DocumentHead = {
	title: "Výlet do Paříže",
};
