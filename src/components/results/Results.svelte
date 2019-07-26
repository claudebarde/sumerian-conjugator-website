<script>
  import sumerianConjugator from "../../sumerian-conjugator/sumerian-conjugator.js";

  export let verb = {};
  export let defaultVerbs = [];
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
</script>

<style>
  h4 img {
    vertical-align: middle;
    float: right;
  }

  .container {
    border-bottom: solid 1px #d9d9d9;
    padding: 10px;
  }

  .noborder {
    border: none;
  }
</style>

<div>
  {#if results}
    <div class="container">
      <h4>
        Verb Chain
        <img src="images/link.svg" alt="chain" />
      </h4>
      <p>{results.conjugatedVerb} ({displayVerbMeanings()})</p>
    </div>
    <div class="container">
      <h4>
        Cuneiforms
        <img src="images/hash.svg" alt="hash" />
      </h4>
      <p>{results.cuneiforms ? results.cuneiforms.chain : 'No cuneiforms'}</p>
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
          <p>- {note}</p>
        {/each}
      </div>
    {/if}
  {:else}No results to show!{/if}
</div>
