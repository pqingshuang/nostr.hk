<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<h2>{$_('join.title')}</h2>
	<p>
		{@html $_('join.p1', {
			values: {
				threadUrl:
					'https://snort.social/e/note134slxdr2np6ml5f459me8cfmzg6cgw46c2agv55mtq55mtdtcgaqu4af4l'
			}
		})}
	</p>
	<p>
		{@html $_('join.p2', {
			values: {
				damusUrl: 'https://apps.apple.com/us/app/damus/id1628663131',
				amethystUrl: 'https://github.com/vitorpamplona/amethyst/releases/latest',
				irisUrl: 'https://iris.to/'
			}
		})}
	</p>
{/if}
