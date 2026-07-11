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
    id: "2026-07-05",
    date: "2026-07-05",
    hints: [
      "A 24-year-old woman presents with a 3-day history of a painful, swollen right knee.",
      "She reports a similar episode in her left ankle two weeks ago that resolved on its own.",
      "She had an episode of urethral discharge about a month ago that she did not seek treatment for.",
      "Exam reveals conjunctivitis in both eyes.",
      "HLA-B27 testing returns positive."
    ],
    answer: "Reactive arthritis",
    accepted: ["reiter syndrome", "reiter's syndrome"],
    explanation: "The triad of arthritis, conjunctivitis, and urethritis following a genitourinary infection, in an HLA-B27-positive patient, is classic for reactive arthritis."
  },
  {
    id: "2026-07-06",
    date: "2026-07-06",
    hints: [
      "A 68-year-old man presents with progressive shortness of breath over 6 months.",
      "He describes a dry cough and notes he has lost his taste for hiking, which he used to do weekly.",
      "Fine bibasilar 'Velcro' crackles are heard on lung auscultation.",
      "Clubbing is noted on his fingers.",
      "High-resolution CT of the chest shows a 'honeycombing' pattern with basal and peripheral predominance."
    ],
    answer: "Idiopathic pulmonary fibrosis",
    accepted: ["ipf", "pulmonary fibrosis"],
    explanation: "Basal, peripheral honeycombing with Velcro crackles and clubbing is the classic radiologic/clinical picture of IPF, a diagnosis of exclusion after ruling out other causes of fibrosis."
  },
  {
    id: "2026-07-07",
    date: "2026-07-07",
    hints: [
      "A 5-year-old boy is brought in with a 5-day fever unresponsive to antipyretics.",
      "His mother notes his lips are cracked and his tongue looks like a strawberry.",
      "Exam shows bilateral non-purulent conjunctival injection.",
      "There is a polymorphous rash on his trunk and swelling of his hands and feet.",
      "A single, tender, enlarged cervical lymph node is palpated."
    ],
    answer: "Kawasaki disease",
    accepted: ["kawasaki syndrome"],
    explanation: "Five days of fever plus at least four of: conjunctivitis, oral changes, rash, extremity changes, and cervical lymphadenopathy meets criteria for Kawasaki disease — important to catch early because of the risk of coronary artery aneurysms."
  },
  {
    id: "2026-07-08",
    date: "2026-07-08",
    hints: [
      "A 32-year-old woman presents with sudden, severe unilateral headache described as 'the worst of her life.'",
      "She vomited once on the way to the hospital.",
      "There is nuchal rigidity on exam.",
      "Non-contrast CT of the head shows hyperdensity in the basal cisterns.",
      "Lumbar puncture, performed after a negative CT, shows xanthochromia."
    ],
    answer: "Subarachnoid hemorrhage",
    accepted: ["sah", "aneurysmal subarachnoid hemorrhage"],
    explanation: "Thunderclap headache with xanthochromia on LP (even after a negative CT) is the textbook presentation of subarachnoid hemorrhage, most often from a ruptured berry aneurysm."
  },
  {
    id: "2026-07-09",
    date: "2026-07-09",
    hints: [
      "A 55-year-old man with a long history of heavy alcohol use presents with confusion.",
      "His wife says he has been unsteady on his feet for the past two days.",
      "On exam, you notice he cannot look laterally with either eye.",
      "He is disoriented to time and place but otherwise cooperative.",
      "Symptoms improve dramatically after IV thiamine is administered."
    ],
    answer: "Wernicke encephalopathy",
    accepted: ["wernicke's encephalopathy", "wernicke encephalopathy"],
    explanation: "The classic triad of confusion, ataxia, and ophthalmoplegia in a patient with alcohol use disorder points to thiamine deficiency — always give thiamine before glucose in these patients."
  },
  {
    id: "2026-07-10",
    date: "2026-07-10",
    hints: [
      "A 17-year-old college student presents with sore throat and fatigue for a week.",
      "He also reports low-grade fevers and feeling 'too tired to go to class.'",
      "Exam shows tonsillar exudates and prominent posterior cervical lymphadenopathy.",
      "There is mild splenomegaly on abdominal exam.",
      "A monospot test comes back positive."
    ],
    answer: "Infectious mononucleosis",
    accepted: ["mono", "ebv infection", "epstein-barr virus infection"],
    explanation: "Posterior cervical lymphadenopathy, splenomegaly, and a positive monospot in a young adult are classic for EBV-driven mononucleosis — splenomegaly is why contact sports are restricted during recovery."
  },
{
  id: "2026-07-11",
  date: "2026-07-11",
  hints: [
    "A previously healthy 2-year-old boy presents with a 3-day history of fever followed by a barking cough.",
    "His parents report noisy breathing that becomes worse when he cries.",
    "On examination, he has inspiratory stridor at rest and mild intercostal retractions.",
    "His oxygen saturation is 97% on room air, and lung auscultation is otherwise clear.",
    "He improves after receiving nebulized epinephrine and a dose of dexamethasone."
  ],
  answer: "Croup",
  accepted: [
    "croup",
    "laryngotracheitis",
    "viral croup",
    "acute laryngotracheitis"
  ],
  explanation: "Croup is a viral laryngotracheitis, most commonly caused by parainfluenza virus. It classically presents in children aged 6 months to 3 years with a barking cough, inspiratory stridor, and hoarseness. Treatment includes dexamethasone for all severities and nebulized epinephrine for moderate to severe disease."
},

];
