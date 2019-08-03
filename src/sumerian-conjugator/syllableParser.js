// replaces glottal stops for first person singular
const glottalStopReplace = new RegExp("([aeiu])\\'", "g");
// identifies 2 adjacent consonants
const consonantRegex = new RegExp(
  "([bdghklmnprstzšĝ])([bdghklmnprstzšĝ])",
  "g"
);
// identifies 2 adjacent vowels
const vowelRegex = new RegExp("([aeiu])([aeiu])", "g");
// identifies VCV syllable
const VCVregex = new RegExp("\\|([aeiu])([bdghklmnprstzšĝ])([aeiu])");
// identifies CV syllable followed by other CV syllables
const CVCVregex = new RegExp(
  "\\|([bdghklmnprstzšĝ][aeiu]){2,}[^bdghklmnprstzšĝ]",
  "g"
);
// identifies CVCVC syllables
const CVCVCregex = new RegExp(
  "([bdghklmnprstzšĝ][aeiu]){2,}([bdghklmnprstzšĝ]||)",
  "g"
);

const splitString = stringWithDelimiters => {
  let matches = [];
  // tests for adjacent consonants
  stringWithDelimiters = stringWithDelimiters.replace(consonantRegex, "$1|$2");
  // tests for adjacent vowels
  stringWithDelimiters = stringWithDelimiters.replace(vowelRegex, "$1|$2");
  // test for VCV at initial position
  stringWithDelimiters = stringWithDelimiters.replace(VCVregex, "|$1|$2$3");
  // test for CVCV
  matches = stringWithDelimiters.match(CVCVregex);
  if (matches) {
    matches.forEach(match => {
      // makes it easier to slice the string
      let rawString = match.replace(/\|/g, "");
      let string = "";
      // slice the string
      for (let i = 0; i < rawString.length; i++) {
        // replace each CV by CV|
        if (i % 2 === 0) {
          string += rawString.slice(i, i + 2) + "|";
        }
      }
      // sets final delimiter
      stringWithDelimiters = stringWithDelimiters.replace(match, "|" + string);
    });
  }
  // test for CVCVC
  matches = stringWithDelimiters.match(CVCVCregex);
  if (matches) {
    matches.forEach(match => {
      let string = "";
      // keeps last CVC syllable for the end
      let finalSyllable = match.slice(-3);
      for (let i = 0; i < (match.length - 3) / 2; i++) {
        // replace each CV by CV|
        string += match.slice(i * 2, i * 2 + 2) + "|";
      }
      stringWithDelimiters = stringWithDelimiters.replace(
        match,
        string + finalSyllable
      );
    });
  }

  return stringWithDelimiters;
};

module.exports = ({ word, stem }) => {
  word = word.replace(/sh/g, "š");
  stem = stem.replace(/sh/g, "š");
  word = word.toLowerCase().replace(glottalStopReplace, "$1$1");
  // if there are 2 occurence of the same syllable for the stem
  // the second one has more chance to be the stem
  const firstOccurrence = word.indexOf(stem);
  const secondOccurence = word.indexOf(stem, firstOccurrence + stem.length);
  let prefixes, suffixes;
  if (secondOccurence !== -1) {
    // if the stem appears also in the prefixes or suffixes
    prefixes = `|${word.slice(0, secondOccurence)}|`;
    suffixes = `|${word.slice(secondOccurence + stem.length)}|`;
  } else {
    const affixes = word.split(stem);
    prefixes = `|${affixes[0]}|`;
    suffixes = `|${affixes[1]}|`;
  }
  const splitPrefixes = splitString(prefixes);
  const splitSuffixes = splitString(suffixes);

  /*console.log(
    "prefixes:",
    splitPrefixes.split("|").filter(e => e),
    "suffixes:",
    splitSuffixes.split("|").filter(e => e)
  );*/

  return {
    prefixes: splitPrefixes
      .replace(/š/g, "sh")
      .split("|")
      .filter(e => e),
    suffixes: splitSuffixes
      .replace(/š/g, "sh")
      .split("|")
      .filter(e => e)
  };
};

/*
const consonants = "[bdghklmnprstzšĝ]";
const corpus = ["šum", "ba", "murandašumšum", "baakeden", "ibaakedenden", "šešĝua", 
                "šube", "murabdaasar", "numuraasar", "numurabsareden", "igi", "emeĝirzu", 
                "nupadedam", "kituš", "hursaĝ", "imraaĝen"];
// identifies 2 adjacent consonants
const consonantRegex = new RegExp("([bdghklmnprstzšĝ])([bdghklmnprstzšĝ])", "g");
// identifies 2 adjacent vowels
const vowelRegex = new RegExp("([aeiu])([aeiu])", "g");
// identifies VCV syllable
const VCVregex = new RegExp("\\|([aeiu])([bdghklmnprstzšĝ])([aeiu])");
// identifies CV syllable followed by other CV syllables
const CVCVregex = new RegExp("\\|([bdghklmnprstzšĝ][aeiu]){2,}[^bdghklmnprstzšĝ]", "g");
// identifies CVCVC syllables
const CVCVCregex = new RegExp("([bdghklmnprstzšĝ][aeiu]){2,}([bdghklmnprstzšĝ]|\|)", "g")

corpus.forEach(word => {
  let stringWithDelimiters = `|${word.toLowerCase()}|`;
  let matches = [];
  // tests for adjacent consonants
  stringWithDelimiters = stringWithDelimiters.replace(consonantRegex, "$1|$2");
  // tests for adjacent vowels
  stringWithDelimiters = stringWithDelimiters.replace(vowelRegex, "$1|$2");
  // test for VCV at initial position
  stringWithDelimiters = stringWithDelimiters.replace(VCVregex, "|$1|$2$3");
  // test for CVCV
  matches = stringWithDelimiters.match(CVCVregex);
  if(matches){
    matches.forEach(match => {
      // makes it easier to slice the string
      let rawString = match.replace(/\|/g, "");
      let string = "";
      // slice the string
      for(i = 0; i < rawString.length; i++){
        // replace each CV by CV|
        if(i % 2 === 0){
          string += rawString.slice(i, i + 2) + "|";
        }
      }
      // sets final delimiter
      stringWithDelimiters = stringWithDelimiters.replace(match, "|" + string);
    })
  }
  // test for CVCVC
  matches = stringWithDelimiters.match(CVCVCregex)
  if(matches){
    matches.forEach(match => {
      let string = "";
      // keeps last CVC syllable for the end
      let finalSyllable = match.slice(-3);
      for(i = 0; i < (match.length - 3) / 2; i++){
        // replace each CV by CV|
        string += match.slice(i * 2, i * 2 + 2) + "|";
      }
      stringWithDelimiters = stringWithDelimiters.replace(match, string + finalSyllable)
    })
  }
  
  
  console.log(stringWithDelimiters);
}); */
