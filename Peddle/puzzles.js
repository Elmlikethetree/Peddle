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
},
{
  id: "2026-07-15",
  date: "2026-07-15",
  hints: [
    "A previously healthy 15-month-old girl with a one day history of cough and congestion presents to the ED after a convulsive episode.",
    "The episode was in keeping with a generalized tonic-clonic seizure and lasted 3 minutes.",
    "After the episode, the patient was drowsy for 5 minutes and then returned to her baseline.",
    "At triage she has a temperature of 39.5°C and her neurological exam is normal.",
    "No neuroimaging, EEG, or lumbar puncture is indicated and her parents are reassured about the excellent prognosis."
  ],
  answer: "Simple febrile seizure",
  accepted: ["Febrile seizure"],
  explanation: "Simple febrile seizures commonly occur in children between 6 months and 5 years of age and is characterized by a generalized seizure that last less than 15 minutes, occur without focal features, are followed by a brief postictal period, and do not recur in a 24-hour period. The risk of developing future epilepsy is approximately 1 to 2 percent, which is only slightly higher than the risk for children without febrile seizures."
},
{
  id: "2026-07-16",
  date: "2026-07-16",
  hints: [
    "A 9-month-old girl with a history of dry skin presents with a recurrent intensely itchy rash characterized by red, scaly, crusted lesions.",
    "The rash is present on her face, neck, scalp, and extensor surfaces. There is sparing of the diaper area.",
    "There is a strong family history of asthma, allergic rhinitis, and food allergies.",
    "She is otherwise well, afebrile, and there are no signs of infection.",
    "The mainstay of treatment is frequent application of emollients and intermittent topical corticosteroids during flares."
  ],
  answer: "Atopic dermatitis (AD)",
  accepted: ["Eczema"],
  explanation: "Diagnostic criteria include a chronic or relapsing history of pruritic eczematous dermatitis with facial, neck, and extensor involvement in infants and children and flexoral lesions in any age group. Regular emollients are generally sufficient to maintain remission in mild disease but patients with moderate to severe dermatitis rarely clear without topical corticosteroids."
},
{
  id: "2026-07-17",
  date: "2026-07-17",
  hints: [
    "An otherwise healthy 7-year-old boy presents with a one year history of recurrent episodes of severe headache.",
    "Prior to the headaches, he does not have any visual, sensory, motor, or other auras.",
    "The headaches last 1-2 days and are bifrontal, throbbing, and often associated with nausea.",
    "When you go to examine him, he is laying still in bed with the lights turned off. His neurological exam is completely normal.",
    "First line management includes avoiding triggers and taking Advil/Tylenol at the onset of headache."
  ],
  answer: "Migraine without aura",
  accepted: ["Migraine headache"],
  explanation: "Migraine is a primary headache disorder occurring in children and adolescents that is characterized by headache that is often bifrontal/bitemporal/generalized and throbbing in character and accompanied by symptoms such as photophobia, phonophobia, nausea, vomiting, and movement sensitivity. Prior to puberty, females and males are affected equally. Initial treatment for mild migraine is acetaminophen or ibuprofen at onset of symptoms."
},
{
  id: "2026-07-18",
  date: "2026-07-18",
  hints: [
    "A previously healthy 7-year-old boy presents with a 2 month history of a minimally painful right limp.",
    "He complains of morning stiffness as well as pain in his groin and right knee with physical activity.",
    "There is no history of trauma, fever, or other systemic signs or symptoms.",
    "On exam, he has decreased internal rotation and abduction of the right hip.",
    "Xray of the right hip reports flattening and fragmentation of the femoral head due to avascular necrosis.",
  ],
  answer: "Legg-Calvé-Perthes disease (LCP)",
  accepted: ["Idiopathic avascular necrosis of the hip"],
  explanation: "Legg-Calvé-Perthes disease (LCP) is a syndrome of idiopathic osteonecrosis (avascular necrosis) of the hip. It typically presents as hip pain and/or limp in children between the ages of 3 and 12 years. LCP disease is self-limited, as the femoral head eventually revascularizes and heals. Initial treatment involves activity restriction, NSAIDs, physiotherapy, and if needed, casting or bracing."
},
{
  id: "2026-07-19",
  date: "2026-07-19",
  hints: [
    "A previously healthy 10-month-old girl presents with 4 days of high fevers that abruptly defervesced.",
    "She then develops a rash that is blanching, non-pruritic, and macular/maculopapular.",
    "The rash started on her neck and trunk and then spread to the face and limbs. It completely resolved after a day and half.",
    "On exam, she has small erythematous papules on her soft palate and uvula. She is otherwise well and playful.",
    "Her parents are reassured that no labwork is necessary as the illness is self-limited and treatment is supportive."
  ],
  answer: "Roseola infantum",
  accepted: ["Exanthem subitum", "HHV-6 infection", "Sixth disease"],
  explanation: "Roseola is a benign, self-limited illness most commonly caused by human herpesvirus 6 (HHV-6) infection with a peak prevalence between 7 and 13 months of age. The clinical course of roseola is characteristic: 3-5 days of fever that resolves abruptly and is followed by development of a rash. Most children recover spontaneously without sequelae."
},
{
  id: "2026-07-20",
  date: "2026-07-20",
  hints: [
    "A 6-year-old boy develops widespread hives and facial swelling within minutes of eating a cookie containing peanuts.",
    "He soon complains of throat tightness, difficulty breathing, and dizziness.",
    "On examination, he is tachycardic, hypotensive, and has diffuse wheezing with inspiratory stridor.",
    "Intramuscular epinephrine is administered immediately into the lateral thigh, followed by supportive care.",
    "His family is discharged with an epinephrine auto-injector and educated on strict allergen avoidance and emergency management."
  ],
  answer: "Anaphylaxis",
  accepted: ["Anaphylactic reaction"],
  explanation: "Anaphylaxis is a life-threatening systemic hypersensitivity reaction characterized by rapid onset of airway compromise, respiratory distress, hypotension, or involvement of multiple organ systems after exposure to an allergen. Intramuscular epinephrine is the first-line treatment and should never be delayed."
},
{
  id: "2026-07-21",
  date: "2026-07-21",
  hints: [
    "A 15-year-old boy is brought to the emergency department after colliding with another player during a hockey game.",
    "He did not lose consciousness but is now complaining of headache, dizziness, and nausea.",
    "His coach reports that he seemed confused immediately after the collision and repeatedly asked the same questions.",
    "His neurological examination is otherwise normal and there are no signs of skull fracture or focal neurological deficits.",
    "He is advised to undergo a period of relative physical and cognitive rest followed by a gradual return-to-learn and return-to-play protocol."
  ],
  answer: "Concussion",
  accepted: ["Mild traumatic brain injury", "mTBI"],
  explanation: "Concussion is a mild traumatic brain injury resulting from biomechanical forces to the head or body. Common symptoms include headache, dizziness, nausea, confusion, and memory impairment. Neuroimaging is not routinely indicated unless red flag features are present. Management includes relative rest followed by a graded return to normal activities."
},
{
  id: "2026-07-22",
  date: "2026-07-22",
  hints: [
    "A previously healthy 4-year-old boy presents with one day of fever and refusal to bear weight on his right leg.",
    "His parents deny any history of trauma, but they note that he cries whenever his hip is moved.",
    "On examination, he is febrile and his right hip is held in slight flexion with markedly limited passive range of motion.",
    "Bloodwork demonstrates elevated inflammatory markers, and ultrasound reveals a hip joint effusion.",
    "Urgent joint aspiration confirms the diagnosis, and he is treated with intravenous antibiotics and surgical drainage."
  ],
  answer: "Septic arthritis",
  accepted: ["Septic joint", "Bacterial septic arthritis"],
  explanation: "Septic arthritis is an orthopedic emergency caused by bacterial infection of a joint, most commonly affecting the hip or knee in children. It typically presents with fever, inability to bear weight, severe pain with passive joint movement, and elevated inflammatory markers. Prompt joint aspiration, intravenous antibiotics, and surgical drainage are essential to prevent permanent joint damage."
},
{
  id: "2026-07-23",
  date: "2026-07-23",
  hints: [
    "A 3-year-old boy is referred because he speaks only a few single words and rarely points to share interests with others.",
    "His parents report that he prefers to play alone and becomes very distressed when his daily routine changes.",
    "During the visit, he avoids eye contact, does not respond consistently to his name, and repeatedly spins the wheels of a toy car.",
    "His hearing assessment is normal and there is no history of developmental regression.",
    "Early intensive behavioral intervention and speech-language therapy are recommended to optimize long-term developmental outcomes."
  ],
  answer: "Autism spectrum disorder",
  accepted: ["Autism", "ASD"],
  explanation: "Autism spectrum disorder is a neurodevelopmental disorder characterized by persistent deficits in social communication and interaction, along with restricted, repetitive patterns of behavior, interests, or activities. Symptoms typically become apparent in early childhood. Early diagnosis and intervention improve developmental and functional outcomes."
},
{
  id: "2026-07-24",
  date: "2026-07-24",
  hints: [
    "A previously healthy 11-year-old boy presents with abdominal pain that began around his umbilicus earlier that day.",
    "Over several hours, the pain migrates to the right lower quadrant and becomes progressively more severe.",
    "He has nausea, one episode of vomiting, and refuses to eat.",
    "On examination, he has localized tenderness with guarding over McBurney's point and pain when hopping.",
    "He is admitted for surgical consultation and receives intravenous antibiotics before definitive management."
  ],
  answer: "Appendicitis",
  accepted: ["Acute appendicitis"],
  explanation: "Acute appendicitis is the most common surgical cause of abdominal pain in children. The classic presentation includes migration of pain from the periumbilical region to the right lower quadrant, anorexia, nausea or vomiting, and localized tenderness. Prompt diagnosis and surgical management reduce the risk of perforation."
},
{
  id: "2026-07-25",
  date: "2026-07-25",
  hints: [
    "A 5-year-old unvaccinated boy presents with four days of high fever, cough, runny nose, and red eyes.",
    "His parents notice several tiny bluish-white lesions on the inside of his cheeks opposite the molars.",
    "One day later, he develops a red maculopapular rash that begins on his face and spreads downward to involve his trunk and extremities.",
    "He appears ill, and examination reveals generalized conjunctivitis but no evidence of bacterial superinfection.",
    "Public health authorities are notified, and he receives supportive care along with vitamin A supplementation."
  ],
  answer: "Measles",
  accepted: ["Rubeola"],
  explanation: "Measles (rubeola) is a highly contagious viral illness characterized by the prodrome of fever, cough, coryza, and conjunctivitis, followed by Koplik spots and a cephalocaudal spreading maculopapular rash. Vitamin A is recommended for children with measles because it reduces morbidity and mortality."
},
];
