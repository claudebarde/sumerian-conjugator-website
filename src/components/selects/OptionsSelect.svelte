<script>
  export let selectOptions;
  let options = {
    ventive: false,
    middleMarker: false,
    reduplicatedStem: false
  };
  export let COLORS;

  const updateOptions = (type, value) => {
    const newOptions = { ...options, [type]: value };
    // we update the options
    options = { ...newOptions };
    // we pass the new options to parent component
    selectOptions(options);
  };
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  label {
    margin-left: 10px;
  }
</style>

<div class="row">
  <div>
    <input
      type="checkbox"
      id="ventive"
      name="ventive"
      on:change={event => updateOptions('ventive', event.target.checked)} />
    <label for="ventive">Ventive</label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.ventive}`} />
</div>
<div class="row">
  <div>
    <input
      type="checkbox"
      id="middle-marker"
      name="middle-marker"
      on:change={event => updateOptions('middleMarker', event.target.checked)} />
    <label for="middle-marker">Middle Marker</label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.middleMarker}`} />
</div>
<div class="row">
  <div>
    <input
      type="checkbox"
      id="reduplicated-stem"
      name="reduplicated-stem"
      on:change={event => updateOptions('reduplicatedStem', event.target.checked)} />
    <label for="reduplicated-stem">Reduplicated Stem</label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.reduplicated}`} />
</div>
