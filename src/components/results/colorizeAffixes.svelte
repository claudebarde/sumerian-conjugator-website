<script>
  export let verb = undefined;
  export let COLORS;

  const affixesStyle = "font-weight:bold,font-size:1.2rem";
  let coloredPrefixes = [].fill("", 0, 10);
  let coloredSuffixes = [].fill("", 0, 2);

  $: if (verb) {
    // we loop through the affixes in order
    verb.affixes.forEach(item => {
      if (item.type === "prefix") {
        switch (item.function) {
          case "proclitic":
            coloredPrefixes[0] = `<span style="${affixesStyle};color:${
              COLORS.proclitic
            }" title="proclitic">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "preformative":
            coloredPrefixes[1] = `<span style="${affixesStyle};color:${
              COLORS.preformative
            }" title="preformative">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "ventive":
            coloredPrefixes[2] = `<span style="${affixesStyle};color:${
              COLORS.ventive
            }" title="ventive">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "middle marker":
            coloredPrefixes[3] = `<span style="${affixesStyle};color:${
              COLORS.middleMarker
            }" title="middle marker">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "indirect object":
            coloredPrefixes[4] = `<span style="${affixesStyle};color:${
              COLORS.indirectObject
            }" title="indirect object">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "initial person prefix":
            coloredPrefixes[5] = `<span style="${affixesStyle};color:${
              COLORS.initialPersonPrefix
            }" title="initial person prefix">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "dimensional prefix":
            coloredPrefixes[6] = `<span style="${affixesStyle};color:${
              COLORS.dimensionalPrefix
            }" title="dimensional prefix">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "oblique object":
            coloredPrefixes[7] = `<span style="${affixesStyle};color:${
              COLORS.obliqueObject
            }" title="oblique object">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "transitive direct object":
            coloredPrefixes[8] = `<span style="${affixesStyle};color:${
              COLORS.directObject
            }" title="transitive direct object">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
          case "transitive subject":
            coloredPrefixes[9] = `<span style="${affixesStyle};color:${
              COLORS.subject
            }" title="transitive subject">${item.form ||
              "Ø"}</span><span style="${affixesStyle}">-</span>`;
            break;
        }
      } else if (item.type === "suffix") {
        switch (item.function) {
          case "intransitive subject":
          case "transitive subject":
            coloredSuffixes[0] = `<span style="${affixesStyle}">-</span><span style="${affixesStyle};color:${
              COLORS.subject
            }" title="${item.function}">${item.form || "Ø"}</span>`;
            break;
          case "transitive direct object":
            coloredSuffixes[1] = `<span style="${affixesStyle}">-</span><span style="${affixesStyle};color:${
              COLORS.directObject
            }" title="${item.function}">${item.form || "Ø"}</span>`;
            break;
        }
      }
    });
  }
</script>

<style>

</style>

<div>
  {@html coloredPrefixes
    .filter(el => !!el)
    .concat([`<span style="${affixesStyle}" title="stem">${verb.stem}</span>`])
    .concat(coloredSuffixes.filter(el => !!el))
    .join('')}
</div>
