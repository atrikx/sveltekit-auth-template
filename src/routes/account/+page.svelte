<script lang="ts">
    // Components
    import Button from '$lib/components/Button.svelte';
    import CenterLayout from '$lib/components/CenterLayout.svelte';
    import Card from '$lib/components/Card.svelte';
    import FormEnhanced from '$lib/components/FormEnhanced.svelte';

    // SvelteKit
    import { devalue } from 'devalue'

    /** @type {import('./$types').PageData} */
    export let data;

    const email = devalue(data?.email)
    const username = devalue(data?.username)

</script>

<svelte:head>
	<title>My Account</title>
</svelte:head>

<CenterLayout>
    <Card title={"My Account"}>
        <FormEnhanced action={"?/logout"}>
            <h2>Username: {username.replace(/"/g, "")}</h2>
            <h2>Email: {email.replace(/"/g, "")}</h2>
            <Button buttonWidth={"80%"} text={'logout'}/>
        </FormEnhanced>

    </Card>
</CenterLayout>

