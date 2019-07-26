<script>
  export let selectOptions;
  let options = {
    ventive: false,
    middleMarker: false,
    reduplicatedStem: false
  };

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
  }

  label {
    margin-left: 10px;
  }
</style>

<div>
  <input
    type="checkbox"
    id="ventive"
    name="ventive"
    on:change={event => updateOptions('ventive', event.target.checked)} />
  <label for="ventive">Ventive</label>
</div>
<div>
  <input
    type="checkbox"
    id="middle-marker"
    name="middle-marker"
    on:change={event => updateOptions('middleMarker', event.target.checked)} />
  <label for="middle-marker">Middle Marker</label>
</div>
<div>
  <input
    type="checkbox"
    id="reduplicated-stem"
    name="reduplicated-stem"
    on:change={event => updateOptions('reduplicatedStem', event.target.checked)} />
  <label for="reduplicated-stem">Reduplicated Stem</label>
</div>
