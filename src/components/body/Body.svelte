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
  import Results from "../results/Results.svelte";

  import { onMount } from "svelte";

  let sumerianVerbs = [];

  const COLORS = {
    subject: "#597ef7",
    directObject: "#73d13d",
    indirectObject: "#ff7a45",
    obliqueObject: "#9254de",
    dimensionalPrefix: "#f759ab",
    initialPersonPrefix: "#ffd6e7",
    preformative: "#ff4d4f",
    proclitic: "#ffa940",
    ventive: "#36cfc9",
    middleMarker: "#ff4d4f",
    reduplicated: "#b7eb8f"
  };

  // fetches default verbs
  onMount(async () => {
    const syncSumerianVerbs = [];
    // checks if verbs are already saved
    if (window.sessionStorage.getItem("sumerianVerbs")) {
      const sumerianVerbsStorage = JSON.parse(
        window.sessionStorage.getItem("sumerianVerbs")
      );
      Object.keys(sumerianVerbsStorage).forEach(key =>
        syncSumerianVerbs.push(sumerianVerbsStorage[key])
      );
      sumerianVerbs = [...syncSumerianVerbs];
      verb.defaultVerbs = [...sumerianVerbs];
    } else {
      // fetches sumerian verbs
      try {
        const newSumerianVerbs = await fetch(
          "https://api.jsonbin.io/b/5d3ac5b4db7cf8472fffc6ca"
        );
        const sumerianVerbsJSON = await newSumerianVerbs.json();
        // sets item in session storage
        window.sessionStorage.setItem(
          "sumerianVerbs",
          JSON.stringify(sumerianVerbsJSON["sumerian_verbs"])
        );
        // we push verbs into sumerianVerbs variable
        Object.keys(sumerianVerbsJSON["sumerian_verbs"]).forEach(key =>
          syncSumerianVerbs.push(sumerianVerbsJSON["sumerian_verbs"][key])
        );
        sumerianVerbs = [...syncSumerianVerbs];
        verb.defaultVerbs = [...sumerianVerbs];
      } catch (err) {
        alert("Unable to fetch Sumerian Verbs!");
      }
    }
  });

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

  let selectedVerb = {};

  // select verb
  const selectVerb = event => {
    const id = event.target.value;
    if (id && id !== "default") {
      // find verb
      const selection = sumerianVerbs.filter(verb => verb.id === id)[0];
      selectedVerb = { ...selection };
      if (selectedVerb) {
        // verb stem is different for perfective and imperfective
        let stem = undefined;
        if (verb.aspect === "perfective") {
          stem = selection.value;
        } else if (verb.aspect === "imperfective") {
          stem = selection.imperfective.form;
        } else {
          // no aspect selected yet
          stem = selection.value;
        }
        verb = {
          ...verb,
          verbID: selection.id,
          stem,
          transitive: selection.transitive,
          aspect: "perfective"
        };
      }
    } else {
      return undefined;
    }
  };
  // select transitivity
  const selectTransitivity = event => {
    verb = {
      ...verb,
      transitive: event.target.value === "transitive" ? true : false
    };
  };
  // select aspect
  const selectAspect = event => {
    const aspect = event.target.value;
    verb = {
      ...verb,
      aspect,
      stem:
        aspect === "perfective"
          ? selectedVerb.value
          : selectedVerb.imperfective.form
    };
  };
  // select subject
  const selectSubject = event => {
    const subject =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, subject };
  };
  // select direct object
  const selectDirectObject = event => {
    const directObject =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, directObject };
  };
  // select indirect object
  const selectIndirectObject = event => {
    const indirectObject =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, indirectObject };
  };
  // select oblique object
  const selectObliqueObject = event => {
    const obliqueObject =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, obliqueObject };
  };
  // select dimensional prefix
  const selectDimensionalPrefix = event => {
    // dimensionalPrefix: [{ prefix: undefined, initialPersonPrefix: undefined }],
    const prefix =
      event.target.value === "default" ? undefined : event.target.value;
    verb = {
      ...verb,
      dimensionalPrefix: [{ ...verb.dimensionalPrefix[0], prefix }]
    };
  };
  // select initial person prefix
  const selectInitialPersonPrefix = event => {
    const initialPersonPrefix =
      event.target.value === "default" ? undefined : event.target.value;
    verb = {
      ...verb,
      dimensionalPrefix: [
        {
          ...verb.dimensionalPrefix[0],
          initialPersonPrefix
        }
      ]
    };
  };
  // select preformative
  const selectPreformative = event => {
    const preformative =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, preformative };
  };
  // select proclitic
  const selectProclitic = event => {
    const proclitic =
      event.target.value === "default" ? undefined : event.target.value;
    verb = { ...verb, proclitic };
  };
  // select options
  const selectOptions = options => {
    //options = { ventive: true/false, middleMarker: true/false, reduplicatedStem: true/false }
    verb = {
      ...verb,
      ventive: options.ventive,
      middleMarker: options.middleMarker,
      reduplicated: options.reduplicated
    };
  };

  //$: console.log(verb);
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr 1fr 0.5fr;
    grid-template-rows: auto;
    margin: 0px 20px;
  }

  .col {
    padding: 10px;
    justify-self: left;
    align-self: top;
  }

  .row {
    padding: 3px;
  }
</style>

<main>
  <div class="grid">
    <!-- Empty Column-->
    <div class="col" />
    <!-- Options Selection -->
    <div class="col">
      <div class="row">
        <VerbalStemSelect {sumerianVerbs} on:change={selectVerb} />
      </div>
      <div class="row">
        <TransitivitySelect
          on:change={selectTransitivity}
          value={verb.transitive} />
      </div>
      <div class="row">
        <AspectSelect on:change={selectAspect} value={verb.aspect} />
      </div>
      <div class="row">
        <SubjectSelect on:change={selectSubject} />
      </div>
      <div class="row">
        <DirectObjectSelect on:change={selectDirectObject} />
      </div>
      <div class="row">
        <IndirectObjectSelect on:change={selectIndirectObject} />
      </div>
      <div class="row">
        <ObliqueObjectSelect on:change={selectObliqueObject} />
      </div>
      <div class="row">
        <DimensionalPrefixesSelect on:change={selectDimensionalPrefix} />
      </div>
      <div class="row">
        <InitialPersonPrefixesSelect on:change={selectInitialPersonPrefix} />
      </div>
      <div class="row">
        <PreformativePrefixesSelect on:change={selectPreformative} />
      </div>
      <div class="row">
        <ProcliticsSelect on:change={selectProclitic} />
      </div>
      <div class="row">
        <OptionsSelect {selectOptions} />
      </div>
    </div>
    <!-- Empty Column-->
    <div class="col" />
    <!-- Results -->
    <div class="col">
      <Results {verb} defaultVerbs={sumerianVerbs} />
    </div>
    <!-- Empty Column-->
    <div class="col" />
  </div>
</main>
