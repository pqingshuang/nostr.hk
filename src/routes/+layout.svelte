<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { waitLocale, locale } from 'svelte-i18n';

	export async function preload() {
		return waitLocale($locale as string);
	}
</script>

<div class="header bg-no-repeat bg-cover bg-center bg-hero-bg min-h-[220px] md:min-h-[500px]">
	<Nav />
	<div
		class="absolute w-full text-center mx-auto break-keep
		top-5 left-1/2 -translate-x-1/2 font-black
		text-black/60 text-[150px] md:text-[360px]"
	>
		香港
	</div>
	<h1
		class="text-5xl md:text-8xl lg:text-9xl italic
		text-center pt-28 md:pt-16 mx-auto md:mt-16 md:mb-20 text-purple-200
		drop-shadow-[6px_6px_0px_rgba(255,64,255,1)]
		font-black spacing-tight"
	>
		>NOSTR_HK
	</h1>
</div>
<div class="prose text-lg md:text-xl dark:prose-invert px-10 break-words mx-auto mt-12">
	<slot />
	<Footer />
</div>
