<script>
  export let color = "#ffffff";
</script>

<label for="indirect-object">
  <div>Indirect Object:</div>
  <div class="color-tag" style={`background-color:${color}`} />
</label>
<select name="indirect-object" id="indirect-object" on:change>
  <option value="default" disabled selected>Please choose an option</option>
  <optgroup label="Singular">
    <option value="firstSingular">First person</option>
    <option value="secondSingular">Second person</option>
    <option value="thirdSingularAnimate">Third person animate</option>
    <option value="thirdSingularInanimate">Third person inanimate</option>
  </optgroup>
  <optgroup label="Plural">
    <option value="firstPlural">First person</option>
    <option value="secondPlural">Second person</option>
    <option value="thirdPluralAnimate">Third person animate</option>
    <option value="thirdPluralInanimate">Third person inanimate</option>
  </optgroup>
</select>
