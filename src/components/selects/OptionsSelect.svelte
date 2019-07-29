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

  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    top: 5px;
    left: 0;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>

<div class="row">
  <div>
    <label class="container" for="ventive">
      <input
        type="checkbox"
        id="ventive"
        name="ventive"
        on:change={event => dispatch('ventive', event.target.checked)} />
      <span class="checkmark" />
      Ventive
    </label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.ventive}`} />
</div>
<div class="row">
  <div>
    <label class="container" for="middle-marker">
      <input
        type="checkbox"
        id="middle-marker"
        name="middle-marker"
        on:change={event => dispatch('middleMarker', event.target.checked)} />
      <span class="checkmark" />
      Middle Marker
    </label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.middleMarker}`} />
</div>
<div class="row">
  <div>
    <label class="container" for="reduplicated-stem">
      <input
        type="checkbox"
        id="reduplicated-stem"
        name="reduplicated-stem"
        on:change={event => dispatch('reduplicated', event.target.checked)} />
      <span class="checkmark" />
      Reduplicated Stem
    </label>
  </div>
  <div class="color-tag" style={`background-color:${COLORS.reduplicated}`} />
</div>
