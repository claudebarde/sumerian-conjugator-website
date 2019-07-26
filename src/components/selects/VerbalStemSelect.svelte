<script>
  import { onMount } from "svelte";

  let sumerianVerbs = [];

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
      } catch (err) {
        alert("Unable to fetch Sumerian Verbs!");
      }
    }
  });
</script>

<label for="verbal-stem">Verbal Stem:</label>
<select name="verbal-stem" id="verbal-stem">
  <option value="default">Please choose a verb</option>
  {#each sumerianVerbs as verb, index (verb.index)}
    <option value={verb.index}>
      {`${verb.value.toUpperCase()} (${verb.cuneiform})`}
    </option>
  {/each}
</select>
