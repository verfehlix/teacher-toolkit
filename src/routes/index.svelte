<!-- Redirect to /home Page -->
<script context="module">
	export async function load() {
		return {
			status: 302,
			redirect: '/rate'
		};
	}
</script>
