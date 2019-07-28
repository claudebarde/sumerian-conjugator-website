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
  let resultsWidth;

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

    // sets results width because of fixed position
    resultsWidth = document.getElementById("results-col").offsetWidth;
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
      reduplicated: options.reduplicatedStem
    };
  };

  //$: console.log(verb);
</script>

<style>
  main {
    margin-top: 1rem;
  }
  .conjugator {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .col {
    padding: 10px;
    width: 35%;
    /*border: solid 1px grey;*/
  }

  .left-col {
    margin-right: 20px;
    height: 75vh;
    overflow: auto;
  }
  .left-col::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .right-col {
    margin-left: 20px;
  }

  .row {
    padding: 3px;
  }

  .tip-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px 5px 10px 5px;
  }

  .tip {
    border: solid 1px #e8e8e8;
    background-color: #e8e8e8;
    padding: 8px;
    border-radius: 5px;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      margin-top: 6rem;
      overflow: auto;
    }

    .col {
      padding: 4px;
      width: 90%;
    }

    .conjugator {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .left-col {
      margin: 4px;
      height: 100%;
      overflow: visible;
      border-bottom: solid 1px #ccc;
    }

    .right-col {
      margin: 4px;
      height: 100%;
    }

    .tip {
      font-size: 0.6rem;
    }
  }
</style>

<main>
  <div class="tip-container">
    <div class="tip">
      You must install a cuneiform font to use the conjugator, for example
      <a href="http://users.teilar.gr/~g1951d/Akkadian.zip" target="_blank">
        here
      </a>
    </div>
  </div>
  <div class="conjugator">
    <!-- Options Selection -->
    <div class="col left-col">
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
        <SubjectSelect on:change={selectSubject} color={COLORS.subject} />
      </div>
      <div class="row">
        <DirectObjectSelect
          on:change={selectDirectObject}
          color={COLORS.directObject} />
      </div>
      <div class="row">
        <IndirectObjectSelect
          on:change={selectIndirectObject}
          color={COLORS.indirectObject} />
      </div>
      <div class="row">
        <ObliqueObjectSelect
          on:change={selectObliqueObject}
          color={COLORS.obliqueObject} />
      </div>
      <div class="row">
        <DimensionalPrefixesSelect
          on:change={selectDimensionalPrefix}
          color={COLORS.dimensionalPrefix} />
      </div>
      <div class="row">
        <InitialPersonPrefixesSelect
          on:change={selectInitialPersonPrefix}
          color={COLORS.initialPersonPrefix} />
      </div>
      <div class="row">
        <PreformativePrefixesSelect
          on:change={selectPreformative}
          color={COLORS.preformative} />
      </div>
      <div class="row">
        <ProcliticsSelect
          on:change={selectProclitic}
          color={COLORS.proclitic} />
      </div>
      <div class="row">
        <OptionsSelect
          on:ventive={value => (verb = { ...verb, ventive: value.detail })}
          on:middleMarker={value => (verb = { ...verb, middleMarker: value.detail })}
          on:reduplicated={value => (verb = { ...verb, reduplicated: value.detail })}
          COLORS={{ ventive: COLORS.ventive, middleMarker: COLORS.middleMarker, reduplicated: COLORS.reduplicated }} />
      </div>
    </div>
    <!-- Results -->
    <div class="col right-col" id="results-col">
      <Results
        {verb}
        defaultVerbs={sumerianVerbs}
        resultsWidth={resultsWidth - 20 + 'px'}
        {COLORS} />
    </div>
  </div>
</main>
