<script>
  export let value = undefined;
</script>

<label for="aspect">
  <div>
    <span style="color:red;">*</span>
    Aspect:
  </div>
</label>
<select name="aspect" id="aspect" on:change>
  <option value="default" disabled selected>Please choose an option</option>
  <option value="perfective" selected={value === 'perfective'}>
    Perfective
  </option>
  <option value="imperfective" selected={value === 'imperfective'}>
    Imperfective
  </option>
</select>
