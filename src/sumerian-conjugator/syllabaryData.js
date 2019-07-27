const CONSONANTS = [
  "b",
  "d",
  "g",
  "h",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "sh",
  "t",
  "z",
  "ĝ",
  "gh"
];

export const SYLLABARY = {
  A: "\u{12000}",
  AB: "\u{1200A}",
  AD: "\u{1201C}",
  AG: ["none", "proposal", "\u{122C3}", "e3234"],
  AGH: "none",
  AK: "\u{1201D}",
  AH: ["\u{12134}", "proposal", "\u{122C0}"],
  AL: "\u{12020}",
  AM: "\u{12120}",
  AN: "\u{1202D}",
  AP: "none",
  AR: "\u{12148}",
  AS: "none",
  ASH: "\u{12038}",
  AT: "none",
  AZ: "\u{1228D}",
  AĜ: ["none", "proposal", "\u{12258}"],
  BA: "\u{12040}",
  BE: ["none", "proposal", "\u{12041}"],
  BI: "\u{12049}",
  BU: "\u{1204D}",
  DA: "\u{12055}",
  DE: ["\u{1207A}", "comment", `switched "du" for "de"`],
  DI: "\u{12072}",
  DU: ["\u{12195}", "comment", `switched "de" for "du"`],
  E: "\u{1208A}",
  EB: "none",
  ED: ["none", "proposal", "\u{12001}"],
  EG: "\u{1208A}",
  EGH: "none",
  EK: "none",
  EH: "none",
  EL: "\u{12096}",
  EM: "none",
  EN: "\u{12097}",
  EP: "none",
  ER: ["none", "proposal", "\u{1209F}", "e1388"],
  ES: "none",
  ESH: "\u{12408}",
  ET: "none",
  EZ: "none",
  EĜ: "none",
  GA: "\u{120B5}",
  GE: "\u{12079}",
  GHA: "none",
  GHE: "none",
  GHI: "none",
  GHU: "none",
  GI: "\u{12100}",
  GU: "\u{12116}",
  HA: "\u{12129}",
  HE: "none",
  HI: "\u{1212D}",
  HU: "\u{12137}",
  I: "\u{1213F}",
  IB: "\u{12141}",
  ID: ["\u{121C9}", "creation"],
  IG: "\u{12145}",
  IGH: "none",
  IK: "none",
  IH: "none",
  IL: "\u{1214B}",
  IM: "\u{1214E}",
  IN: "\u{12154}",
  IP: "none",
  IR: "\u{12155}",
  IS: "none",
  ISH: "none",
  IT: ["\u{12009}", "creation", ""],
  IZ: "none",
  IĜ: "none",
  KA: "\u{12157}",
  KE: "none",
  KI: "\u{121A0}",
  KU: "\u{121AA}",
  LA: "\u{121B7}",
  LE: "none",
  LI: ["\u{121F7}", "simplification", ["\u{1224C}", "e3304"]],
  LU: "\u{121FB}",
  MA: "\u{12220}",
  ME: "\u{12228}",
  MI: "\u{1222A}",
  MU: "\u{1222C}",
  NA: "\u{1223E}",
  NE: "\u{12248}",
  NI: "\u{1224C}",
  NU: "\u{12261}",
  PA: "\u{1227A}",
  PE: "none",
  PI: "\u{1227F}",
  PU: "none",
  RA: "\u{1228F}",
  RE: "none",
  RI: "\u{12291}",
  RU: "\u{12292}",
  SA: "\u{12293}",
  SE: ["\u{1214A}", "creation", "e4821"],
  SHA: "\u{122AD}",
  SHE: "\u{122BA}",
  SHI: "\u{12146}",
  SHU: "\u{122D7}",
  SI: "\u{122DB}",
  SU: "\u{122E2}",
  TA: "\u{122EB}",
  TE: "\u{122FC}",
  TI: "\u{122FE}",
  TU: ["\u{12305}", "simplification", []],
  U: "\u{1230B}",
  UB: "\u{12312}",
  UD: "\u{12313}",
  UG: "\u{1228C}",
  UGH: "none",
  UK: "none",
  UH: "none",
  UL: "\u{1230C}",
  UM: "\u{1231D}",
  UN: ["\u{120A1}", "creation", "e6128"],
  UP: ["\u{121E5}", "creation", "e5878"],
  UR: "\u{12328}",
  US: ["\u{12351}", "creation", "e6258"],
  USH: ["\u{12300}", "creation", "e6292"],
  UT: "none",
  UZ: ["\u{1235A}", "creation", "e6357"],
  UĜ: "\u{12326}",
  ZA: "\u{1235D}",
  ZE: "none",
  ZI: ["\u{12363}", "simplification", []],
  ZU: "\u{1236A}",
  ĜA: "\u{120B7}",
  ĜE: "none",
  ĜI: "none",
  ĜU: ["\u{12128}", "creation", "e2244"]
};

export const syllabaryData = CONSONANTS.map((consonant, index) => {
  consonant = consonant.toUpperCase();

  return {
    key: index + 1,
    consonant,
    a: [
      `${consonant}A`,
      SYLLABARY[`${consonant}A`],
      `A${consonant}`,
      SYLLABARY[`A${consonant}`]
    ],
    e: [
      `${consonant}E`,
      SYLLABARY[`${consonant}E`],
      `E${consonant}`,
      SYLLABARY[`E${consonant}`]
    ],
    i: [
      `${consonant}I`,
      SYLLABARY[`${consonant}I`],
      `I${consonant}`,
      SYLLABARY[`I${consonant}`]
    ],
    u: [
      `${consonant}U`,
      SYLLABARY[`${consonant}U`],
      `U${consonant}`,
      SYLLABARY[`U${consonant}`]
    ]
  };
});

export const syllabaryDataMobile = CONSONANTS.map((consonant, index) => {
  consonant = consonant.toUpperCase();

  return {
    a: [
      `${consonant}A`,
      SYLLABARY[`${consonant}A`],
      `A${consonant}`,
      SYLLABARY[`A${consonant}`]
    ],
    e: [
      `${consonant}E`,
      SYLLABARY[`${consonant}E`],
      `E${consonant}`,
      SYLLABARY[`E${consonant}`]
    ],
    i: [
      `${consonant}I`,
      SYLLABARY[`${consonant}I`],
      `I${consonant}`,
      SYLLABARY[`I${consonant}`]
    ],
    u: [
      `${consonant}U`,
      SYLLABARY[`${consonant}U`],
      `U${consonant}`,
      SYLLABARY[`U${consonant}`]
    ]
  };
});
