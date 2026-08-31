/* ═══════════════════════════════════════════════════════════
   MTH1W COURSE DATA — this is the only file you edit.

   Each day looks like:
     {d:1, iso:"2026-09-01", topic:"Types of Numbers", num:"1.1",
      note:"", ans:"", extras:[]}

   - note: paste the URL of the blank note & practice problems.
           Empty "" shows a greyed-out link with "Coming soon".
   - ans:  paste the URL of the answers. Empty "" is greyed out
           with "Coming soon"; once filled it goes live with the
           ☠︎ "do not look" hover.
   - num:  the note number shown to students ("1.7 Blank Note &
           Practice Problems"). Days with no note (tests, quizzes,
           work periods) just leave num out. noteLabel overrides
           the whole label when a day has no clean number.
   - flag: "quiz" | "pquiz" | "test" tints the row. Quiz days
           use noteLabel/ansLabel for custom link names.
   - extras: [ ["Title","https://…","kind"], … ]
           kind = "doc" (worksheet/handout), "ans" (solutions,
           shows the ☠︎ warning), "vid" (video), "eqao" (the
           day's EQAO companion sheet — dark blue, ✎ icon).

   D(id) is shorthand for a Google Drive link — paste either a
   full URL or D("fileId"), both work.

   KEYS: where a KEY pdf already exists in Drive, its id is
   stashed in a comment right after ans:"" — after class, move
   it into the ans field.
   ═══════════════════════════════════════════════════════════ */

const D = id => `https://drive.google.com/file/d/${id}/view`;

const COURSE = {
  code: "MTH1W",
  title: "Mathematics 9",
  sub: "Grade 9 · De-streamed",
  units: [

  /* ── UNIT 1 ─────────────────────────────────────────────── */
  {name:"Number Sense", days:[
    {d:1, iso:"2026-09-01", topic:"Course Intro  ·  Types of Numbers", num:"1.1",
      note:D("1AkFkTVzwaaACbwa_q3uSKyrjDKyfKV7E"),
      ans:"", /* key: D("1LC8Vtia_nr1Z-rQDesgz7UIiKk88XMP0") */
      extras:[["EQAO Questions", D("1Nw-RQXt8XvlKaCjpaRujeHmmYWj1bF4X"), "eqao"]]},
    {d:2, iso:"2026-09-02", topic:"Sets and Subsets", num:"1.2",
      note:D("1wUomT5kNm4Dw2FE48UIkBLxmzLznc16O"),
      ans:"", /* key: D("1xWuDTDyT3hx0plvRWqIq0AMU0ZvJMCTd") */
      extras:[["EQAO Questions", D("1XfUyLtHsYkjOjabexhZuhB541SBo0UiN"), "eqao"]]},
    {d:3, iso:"2026-09-03", topic:"Integers in Context", num:"1.3",
      note:D("15TB3_NNd056LKA7_rhyiyAz42CsNMQ_0"),
      ans:"", /* key: D("10hoDPfUTW4ovBahyhi8Ij1cXd8iwy8Od") */
      extras:[["EQAO Questions", D("1QaKfSgWg8a1pMO7A5Hpdyrh_suX-p-pJ"), "eqao"]]},
    {d:4, iso:"2026-09-04", topic:"Fractions and Unit Fractions", num:"1.4",
      note:D("1_2YOHAyFxMYs-x4TB42obmtI-YmuUprr"),
      ans:"", /* key: D("1TevnPQRs3pCwlC9cT5E9fvtO4a1WBhTz") */
      extras:[["EQAO Questions", D("158YA_J8FUjFwfjd-L_ncjGNQUvLM8HOM"), "eqao"]]},
    {d:5, iso:"2026-09-08", topic:"Adding and Subtracting Fractions", num:"1.5",
      note:D("1UYndNGYDBdA441ja2sS26zkzEXvWcKxS"),
      ans:"", /* key: D("1tfD-ZvRE1DxzFLpval360pxPLkpHpRP8") */
      extras:[["EQAO Questions", D("1biR8qOlJ2I4cIUZ-elC3Gn-8vRCl_wTX"), "eqao"]]},
    {d:6, iso:"2026-09-09", topic:"Multiplying and Dividing Fractions", num:"1.6",
      note:D("1k0vHaQYkJGPG9tbyMYV4Bfh9aIj6eiRx"),
      ans:"", /* key: D("1NqZg-Zkij7bH-sO_SdbLX9RmcMwvpq5A") */
      extras:[["EQAO Questions", D("1E8mz00WeuB3vSgaqNFLqgT3jdHb-uUk8"), "eqao"]]},
    {d:7, iso:"2026-09-10", topic:"Current Topics  &  Integer and Fraction Operations", flag:"quiz",
      extras:[]},
    {d:8, iso:"2026-09-11", topic:"Powers", num:"1.7",
      note:D("1pAZikafnnL7u9MO0wigZ8iJyD_N5uSEE"),
      ans:"", /* key: D("1k3tgceplF03fxJvhjhGJtNygMWsfjgiY") */
      extras:[["EQAO Questions", D("1FiwS4bLGpA_zr0ygD1r2V5ED6VHD649c"), "eqao"]]},
    {d:9, iso:"2026-09-14", topic:"Scientific Notation", num:"1.8",
      note:D("1vC594m_1UIvvolgahz1MHGTyPJJBECn4"),
      ans:"", /* key: D("1qulWkf-0pfyPmrzmb4TGiKHvK1MqH1oH") */
      extras:[["EQAO Questions", D("13DR7UNqbEa6CgLWwwGgcn_0r2uLAbRmd"), "eqao"]]},
    {d:10, iso:"2026-09-15", topic:"Coding 1 · Variables and Output", num:"1.9",
      note:D("1Oj6QQ4J5tG53_vDRXZpGTgMG56EVgJBd"),
      ans:"", /* key: D("1skQbfL5sYNhn3kaMnETqcMmWLLYjvumQ") */
      extras:[["EQAO Questions", D("16KJPAKAJPW31wqneSbTE2OC-Coe0iMJM"), "eqao"]]},
    {d:11, iso:"2026-09-16", topic:"Density, Infinity and Limits", num:"1.10",
      note:D("1BN1NSVvln-wFvLTJDuPdX10Aw7e24oGC"),
      ans:"", /* key: D("1KCHccdvZpF1WwxI5GFOikDgVLWJw0-8W") */
      extras:[["EQAO Questions", D("1Xm-_6jcRAd4N7CGm5FmOKu3mm4rw1SD5"), "eqao"]]},
    {d:12, iso:"2026-09-17", topic:"Ratios, Rates and Proportions", num:"1.11",
      note:D("1070Eg0sLMYC_8i3eOb41b-iM3n60JmF-"),
      ans:"", /* key: D("1QhZetFnS7ajcwW-vt0C4AgDCJ0hXewD6") */
      extras:[["EQAO Questions", D("1KWWMZpwfH07g5ELDkHa-IqepymGO-6Xv"), "eqao"]]},
    {d:13, iso:"2026-09-18", topic:"Current Topics  &  Function Operations", flag:"quiz",
      extras:[]},
    {d:14, iso:"2026-09-21", topic:"Review", extras:[]},
    {d:15, iso:"2026-09-22", topic:"Unit 1 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 2 ─────────────────────────────────────────────── */
  {name:"Algebra", days:[
    {d:16, iso:"2026-09-23", topic:"Algebraic Expressions", num:"2.1",
      note:D("1Vj3FB9JTvftt7Qk_Xdwuh-yaxKi_eWRG"),
      ans:"", /* key: D("1c6VAc3b1MfMYMAjHxLg5cNl2Qf6jSr-1") */
      extras:[["EQAO Questions", D("1NsWFWZLg1xj-Zbkt6OxeCZDiMsm7_f-V"), "eqao"]]},
    {d:17, iso:"2026-09-24", topic:"Coding 2 · Input and Pseudocode", num:"2.2",
      note:D("1Xv8ybKK5rHTQhVYaO_NL0d_uiaGEI0TE"),
      ans:"", /* key: D("1Anx0z7QkvP6-wP-QRfc2ixCQu5Rw9taN") */
      extras:[["EQAO Questions", D("1O-lVhQouEJdpijAEnELQkos30rsBh9-g"), "eqao"]]},
    {d:18, iso:"2026-09-25", topic:"Collecting Like Terms", num:"2.3",
      note:D("1b-XS_es2YeXxQuYAFAZnUslEbA48X25X"),
      ans:"", /* key: D("1ik0IoSRj0VHKrHpBr8h9NlHi8NVYcHUW") */
      extras:[["EQAO Questions", D("1vqPIqJTk8pWvMDphVPJ1xUBHNwmIAi5k"), "eqao"]]},
    {d:19, iso:"2026-09-28", topic:"Equivalent Expressions", num:"2.4",
      note:D("10kyfDCK4bc-nJbXpj7ePbW9BnFd9N_bN"),
      ans:"", /* key: D("1FQZvqRF3iXl2e-X36Fy36DnVTAibxnRr") */
      extras:[["EQAO Questions", D("155A8msqLtwmIetV14w36Zg12VQizv4ZH"), "eqao"]]},
    {d:20, iso:"2026-09-29", topic:"Adding and Subtracting Polynomials", num:"2.5",
      note:D("19imA5a3tuS9lH5C5yTrjcw6nFwfy0401"),
      ans:"", /* key: D("16OXJLgbERpuiEvOz15D2ilReb7gHMHwm") */
      extras:[["EQAO Questions", D("1b12y0ENTEIMPT1efb53iE0AaAxFXaGH8"), "eqao"]]},
    {d:21, iso:"2026-09-30", topic:"Current Topics  &  Fraction Operations", flag:"quiz",
      extras:[]},
    {d:22, iso:"2026-10-01", topic:"Powers with the Same Base", num:"2.6",
      note:D("1h1nUMYQcox_hIeJkAkn3HvW9C2PfzgDe"),
      ans:"", /* key: D("10hioQwgK-GMAJSRBha-ARXFUZcwW1nt1") */
      extras:[["EQAO Questions", D("1TqP-1BG9SzbvTjPYsDkTAHAsV-arhvmL"), "eqao"]]},
    {d:23, iso:"2026-10-05", topic:"Powers of Powers", num:"2.7",
      note:D("1wfqKeWALwtVqYBUYSdfZiHkaoWx5cRHp"),
      ans:"", /* key: D("1utsen4Y4k9CvhEuiyCwTivyQOZlOQCBU") */
      extras:[["EQAO Questions", D("1z72US5rvBvmmp-Aa87xSLk6MhPOcuxk4"), "eqao"]]},
    {d:24, iso:"2026-10-06", topic:"Multiplying and Dividing Monomials", num:"2.8",
      note:D("10jZD63n3g49NleMtKK6_sBT2GJ-_z8RI"),
      ans:"", /* key: D("1ntnxTl6EIixVDL3YwGQSOtwfvWQGHPXr") */
      extras:[["EQAO Questions", D("12jstp468azBigIcTBmzmyEjKDs-FJrN7"), "eqao"]]},
    {d:25, iso:"2026-10-07", topic:"Multiplying a Monomial by a Polynomial", num:"2.9",
      note:D("1LmUt8One4rBTaMemrKJ3Lnz9KrFpqSJU"),
      ans:"", /* key: D("1LNRmESPkecDXGnj_-pA-c_ZjDtJRVyYK") */
      extras:[["EQAO Questions", D("1ez_ObwmrxNr81Qv5P5PVeq3VrJeemxxH"), "eqao"]]},
    {d:26, iso:"2026-10-08", topic:"Solving One-Step and Two-Step Equations", num:"2.10",
      note:D("1Tc0lVBtGZQ6a0YsQi2rU-zcA9HD3Jeu0"),
      ans:"", /* key: D("1FJgAMIWa59pEP-QzuSGNmf5lWHiX7lAU") */
      extras:[["EQAO Questions", D("1lonBLMyYvxFWUUxes-j5IuElH99EJoB1"), "eqao"]]},
    {d:27, iso:"2026-10-09", topic:"Solving with Variables on Both Sides", num:"2.11",
      note:D("1iU3UqovrFKqF5zpY4_4gNtuO-ikHGoWW"),
      ans:"", /* key: D("1L5r3Rm9G2Cx6TMO3rpFnIGDl97gTVSxH") */
      extras:[["EQAO Questions", D("1V8qGQSmLTqaTDnKhN-IKPTBh8ti9MrGc"), "eqao"]]},
    {d:28, iso:"2026-10-13", topic:"Coding 3 · Word Problems and Checking", num:"2.12",
      note:D("1vytWnAL2XWxeEw4IMhoHzWF0zEpwi486"),
      ans:"", /* key: D("1KGijohkv5Tg7CDDI41RuMiofWuZQLW1q") */
      extras:[["EQAO Questions", D("12xEHCYC2WUeiSaX29_tm2cXNGsMSXpPX"), "eqao"]]},
    {d:29, iso:"2026-10-14", topic:"Current Topics  &  Scientific Notation", flag:"quiz",
      extras:[]},
    {d:30, iso:"2026-10-15", topic:"Review", extras:[]},
    {d:31, iso:"2026-10-16", topic:"Unit 2 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 3 ─────────────────────────────────────────────── */
  {name:"Linear Relations", days:[
    {d:32, iso:"2026-10-19", topic:"Rates of Change", num:"3.1",
      note:D("1J4IWaTzS8WyATpElDgKxXaDcVX2c94k0"),
      ans:"", /* key: D("14-I6bLHE-BFyn96s3Ta2TVmtB2VW971G") */
      extras:[["EQAO Questions", D("1fCSC2pBe8ZXtXWXXoxGNo-WgaZRsrPAX"), "eqao"]]},
    {d:33, iso:"2026-10-20", topic:"Linear and Non-Linear Relations", num:"3.2",
      note:D("1mk_Oys2hHn4PynS00i6DtLezlm50pdge"),
      ans:"", /* key: D("12VjXYvY-6hun8pNKJllNare0JVIAZ607") */
      extras:[["EQAO Questions", D("15osF2FTEVbhVQP9kERHTvTYWN9U70-Bh"), "eqao"]]},
    {d:34, iso:"2026-10-21", topic:"Connecting Representations", num:"3.3",
      note:D("1r9kXTXwdcJAAr2d8kff2uYhM-gKjNCMJ"),
      ans:"", /* key: D("1_bUWH3pr3YlipWzZxTu_Go9NxMQpDjyG") */
      extras:[["EQAO Questions", D("1-rsTT_qLLZexxYKmFTzWY4FDoFwHjUN0"), "eqao"]]},
    {d:35, iso:"2026-10-22", topic:"Current Topics  &  Like terms and Polynomial Operations", flag:"quiz",
      extras:[]},
    {d:36, iso:"2026-10-23", topic:"Slope", num:"3.4",
      note:D("1ayoshLHx2OuaPLqHMvNC8X25ObDikv-_"),
      ans:"", /* key: D("1vzKI8I3WeWkA7i5xSWGSdsPNNjZoL98p") */
      extras:[["EQAO Questions", D("1d_U3drnkVnJ9go2TKPQCorcUXcwT-04Z"), "eqao"]]},
    {d:37, iso:"2026-10-26", topic:"y = mx + b", num:"3.5",
      note:D("1R_TtmARjdijhIjQ8KUo0Ywkm61mb7TPU"),
      ans:"", /* key: D("1uMvoWo86e8x51SbzCAqfjxyeRkA_QDYQ") */
      extras:[["EQAO Questions", D("1iOwPLVqj4qTLqCsul7Vw7OnXCk_LcN7z"), "eqao"]]},
    {d:38, iso:"2026-10-27", topic:"Coding 4 · The Repeat Loop", num:"3.6",
      note:D("1t9fARx0gmbJQ1J3bDSs_T9r7LigKjd6B"),
      ans:"", /* key: D("16sMaJrhxG7LtwohKrlHhFHl7AEN-gf6s") */
      extras:[["EQAO Questions", D("1qJ4e-JXb1tsCsqHYkTSNr-DNLeWz3pld"), "eqao"]]},
    {d:39, iso:"2026-10-28", topic:"Equations from a Slope and a Point", num:"3.7",
      note:D("1-8Gszhofqq52p_UZRzlasbfG0NkExUFo"),
      ans:"", /* key: D("1DDvwd8-Gg_5P3yIVzuA-HXH5P0LGm14W") */
      extras:[["EQAO Questions", D("10S8VX7CzDd8sbiv3rOdH7-ipSpsO5m_Q"), "eqao"]]},
    {d:40, iso:"2026-10-29", topic:"Equations from Two Points", num:"3.8",
      note:D("1Sh-JxzCZGX8jA470SwZx2Z-qSr42w6sW"),
      ans:"", /* key: D("1rJsxz3Tzr2wg28PTAaJEgl-8sP-PrcaN") */
      extras:[["EQAO Questions", D("1TWEl4RjnbfY31L71cHfuNn8bTOycPDFs"), "eqao"]]},
    {d:41, iso:"2026-10-30", topic:"Problem Solving with Linear Relations", num:"3.9",
      note:D("1h12hrWIDXcgcXo9yhKOF8W2ViBxbTwsu"),
      ans:"", /* key: D("10dKX8nDuVJoUPQXhyBLP4ehZisLzLmTk") */
      extras:[["EQAO Questions", D("1oedUszxDLPtaXQiaBS7hO011B-NHgf5y"), "eqao"]]},
    {d:42, iso:"2026-11-02", topic:"Review", extras:[]},
    {d:43, iso:"2026-11-03", topic:"Unit 3 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 4 ─────────────────────────────────────────────── */
  {name:"Characteristics of Relations", days:[
    {d:44, iso:"2026-11-04", topic:"Take Your Kid to Work Day · No Grade 9 Class",
      extras:[]},
    {d:45, iso:"2026-11-05", topic:"Ordered Pairs, Plotting, and Satisfying a Relation", num:"4.1",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1i5eqqLbNcTNsjtTJ1ak1nDiLZwx7VUYv"), "eqao"]]},
    {d:46, iso:"2026-11-06", topic:"Intercepts and Equations ax + by = k", num:"4.2",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1ulkdfqBN7yXcJ9CMRraL4h1YDeH9--gj"), "eqao"]]},
    {d:47, iso:"2026-11-09", topic:"Translations and Reflections of Lines", num:"4.3",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1Yw7KBlFqi5Rxz7J0DltY-3t5jZMKNiCy"), "eqao"]]},
    {d:48, iso:"2026-11-10", topic:"Rotations of Lines about the Origin", num:"4.4",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1RuAIQccFfMvROZ448g4bb8_c3YuLYmYS"), "eqao"]]},
    {d:49, iso:"2026-11-11", topic:"Non-Linear Relations: xy = k and Quadratic Shapes", num:"4.5",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1bsX-f1xieKIcUiDatL10fN8eOVObR5KA"), "eqao"]]},
    {d:50, iso:"2026-11-12", topic:"Coding 5 · If/Else: On, Above or Below the Line?", num:"4.6",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1K-4aJ5cnqggDe_haa5XsMEc-RpTLjE14"), "eqao"]]},
    {d:51, iso:"2026-11-13", topic:"Current Topics  &  Solving, Slope, and y = mx + b", flag:"quiz",
      extras:[]},
    {d:52, iso:"2026-11-16", topic:"Review", extras:[]},
    {d:53, iso:"2026-11-17", topic:"Unit 4 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 5 ─────────────────────────────────────────────── */
  {name:"Data and Modelling", days:[
    {d:54, iso:"2026-11-18", topic:"How Data Is Collected", num:"5.1",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1wRUQIOl-3DC4KxdkC9o0m5MjjiVX94zR"), "eqao"]]},
    {d:55, iso:"2026-11-19", topic:"One-Variable Data", num:"5.2",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1MvU-sI2Y5Qs-yW3sqL3twGLxVGJSgd6t"), "eqao"]]},
    {d:56, iso:"2026-11-20", topic:"Two-Variable Data: Scatter Plots and Lines of Best Fit", num:"5.3",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1J_yGuMA5o0t8bIoAisXEi9rNWsuFt6S0"), "eqao"]]},
    {d:57, iso:"2026-11-24", topic:"Coding 6 · The Accumulator: Totals and Means", num:"5.4",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1Uo9r8PLGSRtXJAmXXj-Uorq-GViSJTrk"), "eqao"]]},
    {d:58, iso:"2026-11-25", topic:"The Modelling Process: Understanding the Situation", num:"5.5",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1sj77ZNBuOWOFsQ13_EDUUOC4Tebxsn-V"), "eqao"]]},
    {d:59, iso:"2026-11-26", topic:"Current Topics  &  y = mx + b Substitution", flag:"quiz",
      extras:[]},
    {d:60, iso:"2026-11-27", topic:"Modelling: Creating the Model", num:"5.6",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1hFcEY9BaH8IM1KVkihGB0uuUhncdF_QM"), "eqao"]]},
    {d:61, iso:"2026-11-30", topic:"Modelling: Analysing and Assessing the Model", num:"5.7",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1uaVdKh2XcB959qHTh5DJibXwUFZoUy3G"), "eqao"]]},
    {d:62, iso:"2026-12-01", topic:"Modelling: Reflecting, Refining and Reporting", num:"5.8",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1CZ22cxDbCmrNa32J0DgsdKxUdle-IDwS"), "eqao"]]},
    {d:63, iso:"2026-12-02", topic:"Modelling Project · Presentations", extras:[]},
  ]},

  /* ── UNIT 6 ─────────────────────────────────────────────── */
  {name:"Geometry and Measurement", days:[
    {d:64, iso:"2026-12-03", topic:"Measurement Systems, Units and Conversion", num:"6.1",
      note:"", ans:"",
      extras:[["EQAO Questions", D("14f2Q3fPZFl4Kb9kj6homCfbQfqPhSeiX"), "eqao"]]},
    {d:65, iso:"2026-12-04", topic:"Perimeter and Area in 2D · Composite Shapes", num:"6.2",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1EMImB44s9SGBk9WoI13FCtgE1ouwSDVH"), "eqao"]]},
    {d:66, iso:"2026-12-07", topic:"Designing to a Constraint", num:"6.3",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1cFCwt9Sc6unrni38VTiJaTFrSGNX8cBG"), "eqao"]]},
    {d:67, iso:"2026-12-08", topic:"The Pythagorean Relationship", num:"6.4",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1EszQfJVxrODyrc41N74z5mGE7kLaJHqK"), "eqao"]]},
    {d:68, iso:"2026-12-09", topic:"Current Topics  &  Solving Equations and Proportional Reasoning", flag:"quiz",
      extras:[]},
    {d:69, iso:"2026-12-10", topic:"Angle Relationships: Interior and Exterior Angles", num:"6.5",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1RZdQfxpVUqMGx4kMvyaASxAsR2tlGW9K"), "eqao"]]},
    {d:70, iso:"2026-12-11", topic:"Triangle and Circle Relationships", num:"6.6",
      note:"", ans:"",
      extras:[["EQAO Questions", D("11nd0y9wpaoVUgowQUb_9V1F-2eZOk28r"), "eqao"]]},
    {d:71, iso:"2026-12-14", topic:"Volume: Prisms, Pyramids, Cylinders and Cones", num:"6.7",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1EoDIANXOfGErgrbvN_ubuirtG3rLGDlL"), "eqao"]]},
    {d:72, iso:"2026-12-15", topic:"Calculations in 3D · Surface Area", num:"6.8",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1cAEx77sg7KJJ6n5_B1gQsf7D-3aXjIb5"), "eqao"]]},
    {d:73, iso:"2026-12-16", topic:"Review", extras:[]},
    {d:74, iso:"2026-12-17", topic:"Unit 6 Test", flag:"test", extras:[]},
    {d:75, iso:"2026-12-18", topic:"Volume, Slope, and Like Terms", flag:"pquiz", extras:[]},
  ]},

  /* ── UNIT 7 ─────────────────────────────────────────────── */
  {name:"Financial Literacy", days:[
    {d:76, iso:"2027-01-04", topic:"Financial Situations, Systems and Context", num:"7.1",
      note:"", ans:"",
      extras:[["EQAO Questions", D("19rpctfn9ReSTKnaPUaH3BQIWMYqhQP7L"), "eqao"]]},
    {d:77, iso:"2027-01-05", topic:"Budgeting", num:"7.2",
      note:"", ans:"",
      extras:[["EQAO Questions", D("13HqJ0PnpEHYI65oDLhNmrw986SQl4VcZ"), "eqao"]]},
    {d:78, iso:"2027-01-06", topic:"Percent in Financial Contexts", num:"7.3",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1En384h33RK3GrQVP787QiB6uagP0r-i_"), "eqao"]]},
    {d:79, iso:"2027-01-07", topic:"Appreciation and Depreciation", num:"7.4",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1himGckX4voizUDMCZ9V58JwxtpN1hJok"), "eqao"]]},
    {d:80, iso:"2027-01-08", topic:"Simple and Compound Interest", num:"7.5",
      note:"", ans:"",
      extras:[["EQAO Questions", D("13XbGJ0rRDoRr1Dt4Q0dMgD4yF2ktqcnU"), "eqao"]]},
    {d:81, iso:"2027-01-11", topic:"Coding 7 · Comparing Two Financial Options", num:"7.6",
      note:"", ans:"",
      extras:[["EQAO Questions", D("1L7LKSA-FgHlmPT9pM8IKbibqDaIGQnyY"), "eqao"]]},
    {d:82, iso:"2027-01-12", topic:"Current Topics  &  Exponent Laws and Percentages", flag:"quiz",
      extras:[]},
    {d:83, iso:"2027-01-13", topic:"Review", extras:[]},
    {d:84, iso:"2027-01-14", topic:"Unit 7 Test", flag:"test", extras:[]},
  ]},

  /* ── EQAO REVIEW ────────────────────────────────────────── */
  {name:"EQAO Review", noNumber:true, days:[
    {d:85, iso:"2027-01-15", topic:"EQAO Review · Number and Algebra", extras:[]},
    {d:86, iso:"2027-01-18", topic:"EQAO Review · Relations and Data", extras:[]},
    {d:87, iso:"2027-01-19", topic:"EQAO Review · Geometry, Measurement and Finance", extras:[]},
    {d:88, iso:"2027-01-20", topic:"EQAO Format Practice · The Sample Assessment", extras:[]},
    {d:89, iso:"2027-01-21", topic:"Timed Full-Length Practice · Last Day", extras:[]},
  ]},

]};
