// ============================================================
// PUZZLES.JS — this is the only file you need to touch to
// publish new cases. Add one object per case. The game picks
// whichever entry has the latest date <= today as "today's case",
// and everything with an earlier date automatically becomes part
// of the Archive.
//
// FIELDS:
//   id        — unique string, just use the date "YYYY-MM-DD"
//   date      — "YYYY-MM-DD", the day this case should go live
//   hints     — array of strings, revealed one at a time in order
//   answer    — the "canonical" diagnosis name shown on reveal
//   accepted  — array of strings that also count as correct
//               (abbreviations, synonyms, alternate phrasing)
//   explanation — a couple sentences shown after the case ends
//
// Dates in the future are invisible until that day arrives, so
// you can write a whole month of cases in one sitting.
// ============================================================

const PUZZLES = [
  {
    id: "2026-07-11",
    date: "2026-07-11",
    hints: [
      "A 5-year-old boy is brought in with a 5-day fever unresponsive to antipyretics.",
      "His mother notes his lips are cracked and his tongue has prominent, bumpy taste buds.",
      "Exam shows bilateral non-purulent conjunctival injection.",
      "There is a polymorphous rash on his trunk and swelling of his hands and feet.",
      "A single, tender, enlarged cervical lymph node is palpated."
    ],
    answer: "Kawasaki disease",
    accepted: ["kawasaki syndrome", "Kawasaki's"],
    explanation: "Five days of fever plus at least four of: bilateral conjunctivitis, oral mucous membrane changes, polymorphous rash, peripheral extremity changes, and cervical lymphadenopathy meets criteria for Kawasaki disease — important to catch early because of the risk of coronary artery aneurysms."
  },
  {
    id: "2026-07-12",
    date: "2026-07-12",
    hints: [
      "A 17-year-old highschool student presents with sore throat and fatigue for a week.",
      "He also reports low-grade fevers and feeling 'too tired to go to class.'",
      "Exam shows tonsillar exudates and prominent posterior cervical lymphadenopathy.",
      "There is mild splenomegaly on abdominal exam.",
      "A monospot test comes back positive."
    ],
    answer: "Infectious mononucleosis",
    accepted: ["mono", "ebv infection", "epstein-barr virus infection"],
    explanation: "Infectious mononucleosis is characterized by fever, pharyngitis, fatigue, and cervical lymphadenopathy. Some patients may also have splenomegaly and pharyngeal inflammation with tonsillar exudates and/or palatal petechiae. Common laboratory findings include lymphocytosis, atypical lymphocytes, and elevated aminotransferases. Positive EBV-specific antibodies or heterophile antibodies confirm the diagnosis in the appropriate clinical context."
  },
{
  id: "2026-07-13",
  date: "2026-07-13",
  hints: [
    "A previously healthy 2-year-old boy with a 36 hour history of nasal congestion and rhinorrhea now presents with fever and hoarseness.",
    "His parents report frequent barky coughing and noisy breathing that becomes worse when he cries.",
    "On examination, he has inspiratory stridor at rest and moderate intercostal retractions.",
    "His oxygen saturation is 97% on room air and on auscultation the lungs sound clear aside from some transmitted upper airway sounds.",
    "He improves after receiving nebulized epinephrine and a dose of dexamethasone."
  ],
  answer: "Croup",
  accepted: ["Acute laryngotracheitis"],
  explanation: "Croup is a respiratory illness characterized by inspiratory stridor, barking cough, and hoarseness resulting from inflammation in the larynx and subglottic airway, most commonly caused by parainfluenza virus. It occurs mostly in fall/early winter in children ≤6 years old, with a peak incidence between 6 months to 3 years of age. Treatment includes dexamethasone for all severities and nebulized epinephrine for moderate to severe disease."
},
{
  id: "2026-07-14",
  date: "2026-07-14",
  hints: [
    "A previously healthy 4-year-old boy presents with swelling around his eyes when he wakes up in the morning.",
    "Over the course of the day, the periorbital edema improves but he progressively develops soft pitting edema in his lower extremities.",
    "His blood pressure is within normal range and he does not have gross hematuria.",
    "Urinalysis shows 4+ protein and bloodwork shows normal kidney function and complement levels but markedly decreased serum albumin.",
    "He responds rapidly to glucocorticoid therapy and does not require a kidney biopsy or genetic testing."
  ],
  answer: "Minimal change disease (MCD)",
  accepted: ["Nephrotic syndrome"],
  explanation: "Minimal change disease is the most common cause of nephrotic syndrome in children, especially between 1 to 12 years of age. It's characterized by nephrotic-range proteinuria, hypoalbuminemia, and edema."
}
{
  id: "2026-07-15",
  date: "2026-07-15",
  hints: [
    "A previously healthy 15-month-old girl with a one day history of cough and congestion presents to ED for a convulsive episode.",
    "The episode was in keeping with a generalized tonic-clonic seizure and lasted 3 minutes.",
    "After the episode, the patient was drowsy for 5 minutes and then returned to her baseline.",
    "At triage she has a temperature of 39.5°C and her neurological exam is normal."
    "No neuroimaging, EEG, or lumbar puncture is indicated and her parents are reassured about the excellent prognosis."
  ],
  answer: "Simple febrile seizure",
  accepted: ["Febrile seizure"],
  explanation: "Simple febrile seizures commonly occur in children between 6 months and 5 years of age and is characterized by a generalized seizure that last less than 15 minutes, occur without focal features, are followed by a brief postictal period, and do not recur in a 24-hour period. The risk of developing future epilepsy is approximately 1 to 2 percent, which is only slightly higher than the risk for children without febrile seizures."
}
{
  id: "2026-07-16",
  date: "2026-07-16",
  hints: [
    "A 9-month-old girl with a history of dry skin presents with a recurrent intensely itchy rash characterized by red, scaly, crusted lesions.",
    "The rash is present on her face, neck, scalp, and extensor surfaces. There is sparing of the diaper area.",
    "There is a strong family history of asthma and seasonal allergies.",
    "She is otherwise well, afebrile, and there are no signs of infection.",
    "The mainstay of treatment is frequent application of emollients and intermittent topical corticosteroids during flares."
  ],
  answer: "Atopic dermatitis (AD)",
  accepted: ["Eczema"],
  explanation: "Diagnostic criteria include a chronic or relapsing history of pruritic eczematous dermatitis with facial, neck, and extensor involvement in infants and children and flexoral lesions in any age group. Regular emollients are generally sufficient to maintain remission in mild disease but patients with moderate to severe dermatitis rarely clear without topical corticosteroids."
}
{
  id: "2026-07-17",
  date: "2026-07-17",
  hints: [
    "A 14-year-old girl presents with recurrent episodes of severe headache that have been occurring for the past year.",
    "The headaches are unilateral, throbbing, and are associated with nausea, photophobia, and phonophobia.",
    "She reports seeing flashing lights in her vision shortly before some of the episodes begin.",
    "Her neurological examination is completely normal and the headaches resolve after several hours of rest.",
    "She is advised to avoid known triggers and is prescribed an abortive medication to take at the onset of future episodes."
  ],
  answer: "Migraine",
  accepted: ["Migraine headache"],
  explanation: "Migraine is a common primary headache disorder characterized by recurrent unilateral, pulsatile headaches associated with nausea, vomiting, photophobia, and phonophobia. Some patients experience an aura, such as visual disturbances, before the headache begins. Neuroimaging is generally not indicated when the history is typical and the neurological examination is normal."
},
{
  id: "2026-07-18",
  date: "2026-07-18",
  hints: [
    "A 7-year-old boy presents with a several-month history of a painless limp that worsens with physical activity.",
    "His parents have noticed that he occasionally complains of pain in his groin and knee despite no history of trauma.",
    "On examination, he has decreased internal rotation and abduction of the affected hip.",
    "Plain radiographs demonstrate flattening and fragmentation of the femoral head due to avascular necrosis.",
    "Management focuses on maintaining hip range of motion and preserving the shape of the femoral head while it heals."
  ],
  answer: "Legg-Calvé-Perthes disease",
  accepted: ["Perthes disease", "Leg Calve Perthes disease", "Legg Perthes disease"],
  explanation: "Legg-Calvé-Perthes disease is idiopathic avascular necrosis of the femoral head, typically affecting children between 4 and 8 years of age. It presents with an insidious limp, hip or referred knee pain, and restricted hip motion. Early diagnosis and management aim to preserve femoral head sphericity and optimize long-term hip function."
},
{
  id: "2026-07-19",
  date: "2026-07-19",
  hints: [
    "A previously healthy 11-month-old girl is brought to clinic after three days of high fever reaching 40°C.",
    "Despite the fever, she remained playful and continued drinking fluids with no localizing signs of infection.",
    "The fever resolves abruptly, and within hours she develops a diffuse pink maculopapular rash that begins on her trunk and spreads to her neck and extremities.",
    "She is otherwise well appearing, and the rash is non-pruritic and blanches with pressure.",
    "Her parents are reassured that the illness is self-limited and requires only supportive care."
  ],
  answer: "Roseola",
  accepted: ["Roseola infantum", "Exanthem subitum", "HHV-6 infection"],
  explanation: "Roseola (exanthem subitum) is most commonly caused by human herpesvirus 6 (HHV-6) and typically affects children between 6 months and 2 years of age. It classically presents with several days of high fever followed by abrupt defervescence and the appearance of a blanching maculopapular rash that begins on the trunk. Management is supportive, and the prognosis is excellent."
}
];
