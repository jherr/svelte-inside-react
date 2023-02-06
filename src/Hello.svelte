<script>
export let extraText = "default text";
export let onClick = () => {};
</script>

<div class="text-3xl font-bold" on:click={onClick}>
  Hello from Svelte! {extraText}
</div>