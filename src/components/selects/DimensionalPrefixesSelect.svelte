<script>
  export let color = "#ffffff";
</script>

<label for="dimensional-prefixes">
  <div>Dimensional Prefixes:</div>
  <div class="color-tag" style={`background-color:${color}`} />
</label>
<select name="dimensional-prefixes" id="dimensional-prefixes" on:change>
  <option value="default" disabled selected>Please choose an option</option>
  <option value="with">DA</option>
  <option value="from">TA</option>
  <option value="towards">SHI</option>
  <option value="in">NI</option>
  <option value="on">E</option>
</select>
