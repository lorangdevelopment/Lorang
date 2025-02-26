<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen w-full bg-[var())] text-[var())]">
	<div class="flex w-full flex-1 flex-col items-center justify-center gap-2">
		<span class="text-base">
			{page.status} - Siden du leder efter findes ikke...
		</span>
		<ul class="flex gap-2">
			<li class="text-sm underline decoration-[0.5px] underline-offset-[2px]">
				<a href="/">Vend hjem</a>
			</li>
			<li class="text-sm underline decoration-[0.5px] underline-offset-[2px]">
				<a href="mailto:">Rapporter et problem</a>
			</li>
		</ul>
	</div>
</div>
