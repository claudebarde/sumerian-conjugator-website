<script>
  export let value = undefined;
</script>

<label for="aspect">Aspect:</label>
<select name="aspect" id="aspect" on:change>
  <option value="default" selected={value === undefined}>
    Please choose an option
  </option>
  <option value="perfective" selected={value === 'perfective'}>
    Perfective
  </option>
  <option value="imperfective" selected={value === 'imperfective'}>
    Imperfective
  </option>
</select>
