<script>
  export let color = "#ffffff";
</script>

<label for="proclitics">
  <div>Proclitics:</div>
  <div class="color-tag" style={`background-color:${color}`} />
</label>
<select  name="proclitics" id="proclitics" on:change>
  <option value="default" disabled selected>Please choose an option</option>
  <option value="ha">HA</option>
  <option value="nu">NU</option>
  <option value="nan">NAN</option>
  <option value="ga">GA</option>
  <option value="bara">BARA</option>
</select>
