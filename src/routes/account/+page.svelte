<script lang="ts">
    import { devalue } from 'devalue'

    /** @type {import('./$types').PageData} */
    export let data;

    const email = devalue(data?.email)
    const username = devalue(data?.username)

</script>

<h1> My Account </h1>
<p>Username: {username}</p>
<p>Email: {email}</p>
