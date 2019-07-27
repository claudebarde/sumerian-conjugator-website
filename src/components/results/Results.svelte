<script>
  import sumerianConjugator from "../../sumerian-conjugator/sumerian-conjugator.js";
  import ColorizedVerb from "./colorizeAffixes.svelte";

  export let verb = {};
  export let defaultVerbs = [];
  export let COLORS;
  export let resultsWidth;
  let results;

  // we get the data about the verb
  $: results = sumerianConjugator(verb);
  // displays verb meanings
  $: displayVerbMeanings = () => {
    const result = defaultVerbs.filter(item => item.id === verb.verbID);
    if (!result) return undefined;

    return Object.keys(result[0].meaning)
      .map(meaning => `to ${meaning} ;`)
      .join(" ")
      .trim()
      .slice(0, -2);
  };

  $: if (resultsWidth) {
    const el = document.getElementById("results-div");
    if (el) {
      el.style.width = resultsWidth;
    }
  }
</script>

<style>
  h4 img {
    vertical-align: middle;
    float: right;
  }

  p {
    margin: 4px 0px;
    padding: 4px;
  }

  .container {
    border-bottom: solid 1px #d9d9d9;
    padding: 10px;
  }

  .noborder {
    border: none;
  }

  .results {
    position: fixed;
    min-width: 100px;
  }

  .cuneiforms {
    font-size: 2rem;
  }
</style>

<div class="results" id="results-div">
  {#if results}
    <div class="container">
      <h4>
        Verb Chain
        <img src="images/link.svg" alt="chain" />
      </h4>
      <p>
        {results.conjugatedVerb}
        <span style="color:#bfbfbf;">({displayVerbMeanings()})</span>
      </p>
      <p>
        <ColorizedVerb {COLORS} verb={results} />
      </p>
    </div>
    <div class="container">
      <h4>
        Cuneiforms
        <img src="images/hash.svg" alt="hash" />
      </h4>
      <p class="cuneiforms">
        {results.cuneiforms ? results.cuneiforms.chain : 'No cuneiforms'}
      </p>
    </div>
    <div class="container">
      <h4>
        Affixes
        <img src="images/grid.svg" alt="grid" />
      </h4>
      {#each results.affixes as affix}
        <p>{`${affix.function} => ${affix.form} (${affix.rawForm})`}</p>
      {/each}
    </div>
    {#if results.notes.length > 0}
      <div class="container noborder">
        <h4>
          Notes
          <img src="images/edit-3.svg" alt="notes" />
        </h4>
        {#each results.notes as note}
          <p class="notes">- {note}</p>
        {/each}
      </div>
    {/if}
  {:else}
    <div class="container noborder">No results to show!</div>
  {/if}
</div>
