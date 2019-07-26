<script>
  export let sumerianVerbs = [];
</script>

<label for="verbal-stem">Verbal Stem:</label>
<select name="verbal-stem" id="verbal-stem" on:change>
  <option value="default">Please choose a verb</option>
  {#each sumerianVerbs as verb, index (verb.index)}
    <option value={verb.id}>
      {`${verb.value.toUpperCase()} (${verb.cuneiform})`}
    </option>
  {/each}
</select>
