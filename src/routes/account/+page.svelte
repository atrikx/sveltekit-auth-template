<script lang="ts">
    // Components
    import Button from '$lib/components/Button.svelte';
    import CenterLayout from '$lib/components/CenterLayout.svelte';
    import Card from '$lib/components/Card.svelte';

    // SvelteKit
    import { devalue } from 'devalue'

    /** @type {import('./$types').PageData} */
    export let data;

    const email = devalue(data?.email)
    const username = devalue(data?.username)

</script>

<CenterLayout>
    <Card title={"My Account"}>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <a href="/logout"> <Button buttonWidth={"80%"} text={'logout'}/> </a>
    </Card>
</CenterLayout>

