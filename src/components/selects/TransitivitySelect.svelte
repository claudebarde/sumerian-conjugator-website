<script>
  export let value = undefined;
</script>

<label for="transitivity">
  <div>
    <span style="color:red;">*</span>
    Transitivity:
  </div>
</label>
<select name="transitivity" id="transitivity" on:change>
  <option value="default" selected={value === undefined}>
    Please choose an option
  </option>
  <option value="transitive" selected={value === true}>Transitive</option>
  <option value="intransitive" selected={value === false}>Intransitive</option>
</select>
