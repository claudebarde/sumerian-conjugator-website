<script>
  import VerbalStemSelect from "../selects/VerbalStemSelect.svelte";
  import TransitivitySelect from "../selects/TransitivitySelect.svelte";
  import AspectSelect from "../selects/AspectSelect.svelte";
  import SubjectSelect from "../selects/SubjectSelect.svelte";
  import DirectObjectSelect from "../selects/DirectObjectSelect.svelte";
  import IndirectObjectSelect from "../selects/IndirectObjectSelect.svelte";
  import ObliqueObjectSelect from "../selects/ObliqueObjectSelect.svelte";
  import DimensionalPrefixesSelect from "../selects/DimensionalPrefixesSelect.svelte";
  import InitialPersonPrefixesSelect from "../selects/InitialPersonPrefixesSelect.svelte";
  import PreformativePrefixesSelect from "../selects/PreformativePrefixesSelect.svelte";
  import ProcliticsSelect from "../selects/ProcliticsSelect.svelte";
  import OptionsSelect from "../selects/OptionsSelect.svelte";

  let verb = {
    verbID: 0,
    stem: undefined,
    aspect: undefined,
    transitive: undefined,
    subject: undefined,
    directObject: undefined,
    obliqueObject: undefined,
    dimensionalPrefix: [{ prefix: undefined, initialPersonPrefix: undefined }],
    indirectObject: undefined,
    ventive: undefined,
    middleMarker: undefined,
    preformative: undefined,
    proclitic: undefined,
    reduplicated: undefined,
    defaultVerbs: undefined
  };
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin: 0px 20px;
  }

  .col {
    padding: 10px;
    justify-self: center;
    align-self: center;
  }
</style>

<main>
  <div class="grid">
    <!-- First row -->
    <div class="col">
      <VerbalStemSelect />
    </div>
    <div class="col">
      <TransitivitySelect />
    </div>
    <div class="col">
      <AspectSelect />
    </div>
    <!-- Second row -->
    <div class="col">
      <SubjectSelect />
    </div>
    <div class="col">
      <DirectObjectSelect />
    </div>
    <div class="col">
      <IndirectObjectSelect />
    </div>
    <!-- Third row -->
    <div class="col">
      <ObliqueObjectSelect />
    </div>
    <div class="col">
      <DimensionalPrefixesSelect />
    </div>
    <div class="col">
      <InitialPersonPrefixesSelect />
    </div>
    <!-- Fourth row -->
    <div class="col">
      <PreformativePrefixesSelect />
    </div>
    <div class="col">
      <ProcliticsSelect />
    </div>
    <div class="col">
      <OptionsSelect />
    </div>
  </div>
</main>
