<script>
  import { fade, fly } from "svelte/transition";
  import sumerianConjugator from "../../sumerian-conjugator/sumerian-conjugator.js";
  import ColorizedVerb from "./colorizeAffixes.svelte";
  import AffixesTable from "./AffixesTable.svelte";

  export let verb = {};
  export let defaultVerbs = [];
  export let COLORS;
  export let resultsWidth;
  let results;
  let visibleCuneiforms = false;
  let visibleVerbChain = false;

  // we get the data about the verb
  $: if (verb) {
    // cuneiforms transition animation
    visibleCuneiforms = false;
    visibleVerbChain = false;

    setTimeout(() => {
      results = sumerianConjugator(verb);
      visibleCuneiforms = true;
      visibleVerbChain = true;
    }, 200);
  }
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
    overflow: auto;
    height: 80%;
  }

  .results::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .cuneiforms {
    font-size: 2rem;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    .results {
      position: relative;
    }

    .cuneiforms {
      font-size: 1.3rem;
    }
  }
</style>

<div class="results" id="results-div">
  {#if results}
    <div transition:fly={{ y: 100, duration: 500 }}>
      <div class="container">
        <h4>
          Verb Chain
          <img src="images/link.svg" alt="chain" />
        </h4>
        {#if visibleVerbChain}
          <div
            in:fade={{ delay: 250, duration: 300 }}
            out:fade={{ delay: 250, duration: 300 }}>
            <p>
              {results.conjugatedVerb}
              <span style="color:#bfbfbf;">({displayVerbMeanings()})</span>
            </p>
            <p>
              <ColorizedVerb {COLORS} verb={results} />
            </p>
          </div>
        {/if}
      </div>
      <div class="container">
        <h4>
          Cuneiforms
          <img src="images/hash.svg" alt="hash" />
        </h4>
        {#if results.cuneiforms}
          {#if visibleCuneiforms}
            <p in:fade out:fly={{ x: 100, duration: 300 }} class="cuneiforms">
              {results.cuneiforms.chain}
            </p>
          {/if}
        {:else}
          <p>No cuneiforms</p>
        {/if}
      </div>
      <div class="container">
        <h4>
          Affixes
          <img src="images/grid.svg" alt="grid" />
        </h4>
        <AffixesTable affixes={results.affixes} />
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
    </div>
  {:else}
    <div class="container noborder">No results to show!</div>
  {/if}
</div>
