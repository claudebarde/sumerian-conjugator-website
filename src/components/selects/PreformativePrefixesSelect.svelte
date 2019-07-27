<script>
  export let color = "#ffffff";
</script>

<label for="preformative-prefixes">
  <div>Preformative Prefixes:</div>
  <div class="color-tag" style={`background-color:${color}`} />
</label>
<select name="preformative-prefixes" id="preformative-prefixes" on:change>
  <option value="default">Please choose an option</option>
  <option value="a">A</option>
  <option value="i">I</option>
  <option value="u">U</option>
</select>
