<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let COLORS;
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
      on:change={event => dispatch('ventive', event.target.checked)} />
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
      on:change={event => dispatch('middleMarker', event.target.checked)} />
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
      on:change={event => dispatch('reduplicated', event.target.checked)} />
    <label for="reduplicated-stem">Reduplicated Stem</label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.reduplicated}`} />
</div>
