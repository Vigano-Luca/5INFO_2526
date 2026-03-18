<script>
    export let data;

</script>


<h1 class="Title">Welcome to SvelteKit</h1>

<div class="container">
    <form>
        <input type="text" id="idroba" name="roba" placeholder="Roba da fare">   
        <label for="priorita"> Priorità </label>
        <select name="Prior" id="priorita">
            <option value="bassa">Bassa</option>
            <option value="medio">Medio</option>
            <option value="alta">Alta</option>
        </select>
        <input type="submit">
    </form>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Cognome</td>
                <td>Età</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        </thead>
        <tbody>
            {#each data.utenti as utente}
            <tr>
                <td>{utente.ID}</td>
                <td>{utente.Nome}</td>
                <td>{utente.Cognome}</td>
                <td>{utente.eta}</td>
                <td>
                    <button class="fatto">Fatto</button>
                </td>

                <td>
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={utente.ID} />
                        <button class="remove">Remove</button>
                    </form>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<hr>

<style>
    .Title{
        color: red;
        display:flex;
        justify-content: center;
        font-weight: bolder;
    }
    .container{
        width: 100%;
        display:flex;
        justify-content: center;
    }
</style>