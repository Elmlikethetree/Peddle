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
    "A 3-year-old girl with asthma presents with thirty minutes of worsening shortness of breath.",
    "She was at a restaurant with her family when her lips started swelling and her skin became very itchy and flushed.", 
    "On examination, she is borderline hypotensive and there is diffuse wheeze and inspiratory stridor.",
    "Intramuscular epinephrine is administered and she starts to feel better within 5 minutes.",
    "She is discharged with an epinephrine auto-injector and educated on strict allergen avoidance and emergency management."
  ],
  answer: "Anaphylaxis",
  accepted: ["Anaphylactic reaction"],
  explanation: "Anaphylaxis is an acute, potentially lethal, multisystem syndrome resulting from the sudden release of mast cell- and basophil-derived mediators into the circulation. It is characterized by rapid onset of skin/mucosal involvement, respiratory compromise, hypotension, gastrointestinal symptoms, and/or end organ dysfunction. Epinephrine is the first and most important treatment for anaphylaxis."
},
{
  id: "2026-07-21",
  date: "2026-07-21",
  hints: [
    "A 13-year-old girl presents with headache, dizziness, and difficulty concentrating after her hockey game today.",
    "She reports that she collided with another player and briefly lost consciousness.",
    "She was initially confused after the collision but is now oriented and can recall the events before and after the collision.",
    "Neuro exam is normal with no signs of skull fracture or focal neurological deficits and she does not undergo any head imaging.",
    "She is observed for 4 hours in the ED before being sent home with instructions for physical and cognitive rest and gradual return to activities." 
    ],
  answer: "Concussion",
  accepted: ["Mild traumatic brain injury (TBI)"],
  explanation: "Concussion is a form of TBI induced by biomechanical forces that result in signs and symptoms of neurological impairment that typically resolve spontaneously within 4 weeks of injury. A GCS of 14-15 on exam is classified as a minor TBI (as opposed to moderate or severe). PECARN rules are used to determine whether neuroimaging is required.Management includes relative rest followed by a graded return to normal activities."
},
{
 id: "2026-07-22",
  date: "2026-07-22",
  hints: [
    "A previously healthy 5-year-old boy with a history of a viral upper respiratory tract infection one week ago presents with limp.", 
    "He complains of mild pain in his left hip and low grade fevers but is otherwise well.",
    "On exam, he has slight limitation of hip abduction and internal rotation due to pain.",
    "Bloodwork reports a CRP <20 and ultrasound reports bilateral hip effusions.",
    "His symptoms improve over the next several days with Advil and the family is reassured about the excellent prognosis."
  ],
  answer: "Transient synovitis",
  accepted: ["Toxic synovitis"],
  explanation: "Transient synovitis is characterized by pain and limitation of motion in the hip, arising without clear precipitants and resolving gradually with conservative therapy. It typically occurs in children between the ages of 3 and 8 years. While symptoms are typically unilateral, effusions can be present bilaterally in up to 25% of children. NSAIDs are an effective therapy."
},
  {
  id: "2026-07-23",
  date: "2026-07-23",
  hints: [
    "A 2 year-old-boy is brought in because parents are concerned that he does not respond to his name.", 
    "Parents describe regressions in his speech-language and social skills with minimal joint attention.", 
    "He often repeats phrases from TV and becomes distressed when there are changes to his routine.", 
    "He does not have global developmental delay or visual/auditory concerns.", 
    "Referrals to early individualized interventions and community-based services are completed once the diagnosis is confirmed."
  ],
  answer: "Autism spectrum disorder (ASD)",
  accepted: ["Autism", "ASD"],
  explanation: "ASD is a life-long neurodevelopmental disorder, characterized by impairments in social communication, repetitive, restricted patterns of behaviour, and unusual sensory sensitivities or interests. Diagnosis is clinical and based on a detailed history, physical exam, and observation of characteristic behaviours. Timely diagnosis and referral for intensive behavioural and educational interventions at the earliest age possible may lead to better long-term outcomes."
},
  {
  id: "2026-07-24",
  date: "2026-07-24",
  hints: [
    "A previously healthy 11-year-old girl presents with a one day history of decreased appetite, nausea, vomiting, and periumbilical pain.",
    "The pain is exacerbated by walking, jumping, and coughing.",
    "On exam there is local tenderness in the right lower quadrant with some rigidity of the abdominal wall.",
    "Her bloodwork reports significantly elevated WBC, ANC, and CRP and her abdominal ultrasound confirms the diagnosis.",
    "General surgery is consulted and she is admitted and started on IV antibiotics before definitive management."
  ],
  answer: "Appendicitis",
  accepted: ["Acute appendicitis"],
  explanation: "Acute appendicitis is the most common surgical emergency in children. The classic pattern of clinical findings of appendicitis in adults is less common overall in pediatric patients and may not occur at all in children younger than 5. Delayed diagnosis increases the risk of perforation, peritonitis, and other complications. Most children with uncomplicated appendicitis warrant prompt surgery."
},
{
  id: "2026-07-25",
  date: "2026-07-25",
  hints: [
    "A 5-year-old boy presents with conjunctivitis, rhinitis, and cough after 3 days of fever, malaise, and anorexia.",
    "Parents note white spots on the inside of his mouth that are beginning to slough off and a new rash on his face.",
    "The rash is erythematous, maculopapular, and initially blanching. It spreads to the neck, trunk, and extremities.",
    "He is unimmunized and Public Health is contacted prior to lab results coming back.",
    "NP swab for RT-PCR, urine PCR, and serology confirm the diagnosis and he receives supportive care with Vitamin A supplementation."
  ],
  answer: "Measles",
  accepted: ["Rubeola"],
  explanation: "Measles is a severe and highly contagious airborne viral respiratory infection characterized by fever, malaise, cough, coryza (rhinitis), and conjunctivitis, followed by exanthem. Vitamin A deficiency is linked to delayed recovery and increased complications and the infection itself can induce a Vitamin A deficiency so patients are typically supplemented. Of note, Canada lost its measles elimination status recently - in 2025, Canada reported more than 5000 cases; in comparison, Canada reported 147 cases in 2024."
},
{
  id: "2026-07-26",
  date: "2026-07-26",
  hints: [
    "An otherwise healthy 15-year-old boy presents with yellowing of his eyes during his finals season.",
    "He has had similar episodes over the past year when he doesn’t eat or drink enough before his football games.",
   "He otherwise feels well and denies any abdominal pain, fever, weight loss, or dark urine.",
   "Bloodwork reports unconjugated hyperbilirubinemia on repeated testing with normal CBC, haptoglobin, reticulocyte count, blood smear, ALT, AST, and ALP.",
   "He is reassured that no specific therapy is required."
  ],
  answer: "Gilbert syndrome",
  accepted: ["Gilbert's syndrome"],
  explanation: "Gilbert syndrome is caused by a defect in the AGT1A1 gene and is the most common inherited disorder of bilirubin glucuronidation with a prevalence of 6-14%. Patients are rarely diagnosed prior to puberty and typically present during adolescence when alterations in sex steroid concentrations affect bilirubin metabolism. Aside from intermittent episodes of jaundice, patients are asymptomatic and may actually have lower mortality rates as compared with the general population."
},
  {
  id: "2026-07-27",
  date: "2026-07-27",
  hints: [
    "A previously healthy 8-year-old girl presents with several weeks of worsening polyuria, polydipsia, weight loss, and weakness.",
    "Over the last day she has developed anorexia, nausea, vomiting, and abdominal pain.",
    "On examination, she is neurologically stable but dehydrated, tachycardic, and tachypneic with deep respirations.",
    "Labwork reports hyperglycemia, metabolic acidosis with an elevated anion gap, and moderate ketonuria.",
    "She is admitted for fluid resuscitation, insulin infusion, electrolyte replacement, and monitoring for cerebral edema."
  ],
  answer: "Diabetic ketoacidosis (DKA)",
  accepted: ["DKA"],
  explanation: "DKA can occur in any patient with an absolute or relative insulin deficiency and is the presenting feature of 40-50% of new cases of Type 1 Diabetes. DKA is defined by hyperglycemia, ketosis, and acidosis. Treatment of DKA includes correction of volume depletion, acidosis, electrolyte imbalances, and hyperglycemia. Up to 1% of children with DKA have clinically significant cerebral injury."
},
{
  id: "2026-07-28",
  date: "2026-07-28",
  hints: [
    "A previously healthy 15-year-old boy awakens with sudden severe constant left testicular pain that radiates to his lower abdomen.",
    "He reports nausea and vomiting but denies fever, dysuria, urethral discharge, or recent trauma.",
    "On exam, his left testicle is swollen, firm, exquisitely tender, and slightly elevated.",
    "The cremasteric reflex is absent on the left side.",
    "Urology is consulted immediately and manual detorsion is attempted while awaiting surgery."
  ],
  answer: "Testicular torsion",
  accepted: ["Spermatic cord torsion"],
  explanation: "Testicular torsion is caused by twisting of the spermatic cord which may lead to ischemia of the affected testis. Peak incidence is in adolescence (12-18 years) and the neonatal period. Typical presentation is an abrupt onset of severe testicular pain with nausea and vomiting. Timely diagnosis and surgical treatment are vital for survival of the testis. Colour Doppler ultrasound is helpful when findings are equivocal."
}, 
{
  id: "2026-07-29",
  date: "2026-07-29",
  hints: [
    "An otherwise healthy 14-year-old girl presents with palpitations, chest discomfort, fatigue, and lightheadedness.",
    "She has had similar episodes in the past lasting 10-15 minutes but her current symptoms have been going on for hours.",
    "On exam, she is stable but tachycardic at 200 BPM with a soft blood pressure. She looks slightly pale and diaphoretic.",
    "After several vagal maneuvers are attempted and unsuccessful, she is rapidly administered IV adenosine which resolves her symptoms.",
    "Her ECG afterwards shows short PR intervals (<0.12s) and widened QRS complexes that begin with a slurred, slow upstroke (delta wave)."
  ],
  answer: "Wolff-Parkinson-White syndrome (WPW)",
  accepted: ["Supraventricular tachycardia (SVT)", "Atrioventricular reentrant tachycardia (AVRT)"],
  explanation: "Only a few patients with the Wolff-Parkinson-White (WPW) pattern on ECG go on to have a symptomatic tachyarrhythmia for a diagnosis of WPW syndrome. Patients most commonly present in supraventricular tachycardia (SVT), specifically atrioventricular reentrant tachycardia (AVRT). First line management for stable patients includes vagal maneuvers followed by adenosine if needed. Unstable patients should undergo urgent electrical cardioversion. For recurrent arrhythmias, catheter ablation is typically preferred."
},
  {
  id: "2026-07-30",
  date: "2026-07-30",
  hints: [
    "A 3-year-old boy with several days of URTI symptoms presents with fever, pain with neck extension, drooling, and difficulty swallowing.",
    "He looks ill but does not have signs of an upper airway obstruction.",
    "On labwork, he has a high WBC and ANC and his throat culture eventually comes back positive for Group A Strep.",
    "Lateral neck X-ray reports increased prevertebral space and contrast-enhanced CT confirms the diagnosis.",
    "ENT is consulted urgently and IV antibiotics are started in the ED before the patient is admitted."
  ],
  answer: "Retropharyngeal abscess (RPA)",
  accepted: ["RPA"],
  explanation: "Retropharyngeal abscesses (RPAs) typically occur after a URTI when retropharyngeal lymphadenitis suppurates and forms an abscess. Peak incidence is 2-4 years of age. Early diagnosis and management are essential as RPAs can be associated with significant morbidity and mortality. All patients require admission for IV antibiotics and some will also need surgical drainage."
},
  {
  id: "2026-07-31",
  date: "2026-07-31",
  hints: [
    "A previously healthy 14-year-old girl presents with 2 months of daily low mood, irritability, and decreased interest in her hobbies.",
    "She also reports missing meals, poor concentration at school, and feeling very tired despite sleeping more than usual.",
    "She discloses that she was bullied at school earlier this year and feels like she doesn’t have anyone to talk to.",
    "She denies significant anxiety, intrusive thoughts, hyperactivity, body image concerns, hallucinations, mania, aggression, or substance use.",
    "A suicide risk assessment is completed and she is referred for psychotherapy while starting an SSRI with close follow-up."
  ],
  answer: "Major depressive disorder (MDD)",
  accepted: ["Depression", "Major depression"],
  explanation: "The risk for depression increases during childhood with a prevalence of 7% in adolescents. Major depressive disorder is characterized by >2 weeks of depressed or irritable mood and/or loss of interest accompanied by other depressive symptoms causing functional impairment. Pediatric depression is often comorbid with substance use disorders, anxiety disorders, ADHD, ODD, and conduct disorder. Initial treatment for acute unipolar major depression is pharmacotherapy AND psychotherapy."
},
  {
  id: "2026-08-01",
  date: "2026-08-01",
  hints: [
    "A term newborn male presents with hypotonia and poor Moro reflex on newborn exam.",
    "The mother is 40 years old and did not have any antenatal care prior to delivery.",
    "On exam there are upslanting palpebral fissures, epicanthic folds, brachycephaly, and a harsh systolic murmur.",
    "Fluorescent in situ hybridization (FISH) test and karyotype are done which confirm the diagnosis.",
    "The family is congratulated on the birth of their baby and provided counselling regarding ongoing health supervision and community resources available."
  ],
  answer: "Trisomy 21",
  accepted: ["Down syndrome"],
  explanation: "Trisomy 21 is the most common chromosome abnormality among live births and is usually recognized from the characteristic phenotypic features present in the newborn. Clinical diagnosis should be confirmed with a genetic test and a full karyotype should always be done to detect translocations. Common associated medical problems include hearing/vision problems, obstructive sleep apnea, congenital heart disease, and feeding difficulties. Ongoing health supervision is required throughout childhood."
},
{
  id: "2026-08-02",
  date: "2026-08-02",
  hints: [
    "A 6-week-old term breast-fed infant presents with loose stools containing mucus or streaks of blood.",
    "They are otherwise well, afebrile, not vomiting, and gaining weight appropriately.",
    "Exam is normal with no abdominal distention or anal fissures present. No investigations or imaging is indicated.",
    "Mother is advised to eliminate cow’s milk protein and soy products from her diet if she wants to continue exclusive breastfeeding.",
    "Mother opts to start an extensively hydrolyzed formula instead and the infant’s symptoms resolve within 3 days which confirms the diagnosis."
  ],
  answer: "Food protein-induced allergic proctocolitis (FPIAP)",
  accepted: ["Cow's milk protein allergy (CMPA)"],
  explanation: "FPIAP is the most common allergy among infants and the most common presentation for hematochezia in the neonate. FPIAP is a non-IgE mediated allergic reaction in the rectum and colon. The most common trigger is cow’s milk proteins or soy, although eggs, wheat, rice, and other foods can also be triggers. Treatment consists of complete elimination of cow's milk (and/or other suspected antigens) from the diet. FPIAP almost always resolves by one year of age."
},
  {
  id: "2026-08-03",
  date: "2026-08-03",
  hints: [
    "A 3-year-old child, ex-25 weeker, presents with myopia and strabismus.",
    "Birth weight was <1000g and they were intubated for one week with prolonged periods of hyperoxemia.",
    "Retinal screening exam in the NICU reported extraretinal neovascularization extending into the vitreous with plus disease in Zone I.",
    "Retinal ablative therapy with laser photocoagulation is completed within 72 hours to reduce the risk of retinal detachment.",
    "Regular ophthalmology follow up is done to monitor for the development of long-term vision problems."
  ],
  answer: "Retinopathy of prematurity (ROP)",
  accepted: ["ROP"],
  explanation: "ROP is a proliferative disorder of the developing retinal blood vessels in preterm infants and is classified according to location (zones) and severity of abnormal vascularization (stages). Infants born <31 weeks’ GA, birth weight ≤1250g, or having other risk factors are indications for screening retinal exams. First line treatment therapies for moderate to severe ROP include laser photocoagulation and intravitreal injection of anti-VEGF agents."
},
{
  id: "2026-08-04",
  date: "2026-08-04",
  hints: [
    "A 9-year-old girl recently treated with a course of clindamycin acutely develops profuse watery diarrhea and abdominal cramping.",
    "She has a low grade fever and 6-10 watery stools a day with occasional blood or mucus in the stool. She denies nausea/vomiting.",
    "The white blood cell count and creatinine are normal and there is no significant abdominal tenderness on palpation.",
    "The diagnosis is confirmed with enzyme immunoassay (EIA) for glutamate dehydrogenase (GDH) followed by the toxin EIA.",
    "She is treated with a 10 day course of oral Metronidazole."
  ],
  answer: "Clostridioides difficile infection (CDI)",
  accepted: ["CDI"],
  explanation: "Children are significantly more likely to carry C. difficile asymptomatically, even toxin-producing strains. Antibiotic exposure is the main risk factor but is not present in up to 40% of cases. Mild-to-moderate illness is characterized by watery diarrhea, low-grade fever, and mild abdominal pain. Diagnosis involves either a 2-step method (high sensitivity then high specificity test) or nucleic acid amplification tests (NAAT). Treatment typically involves a course of oral metronidazole or vancomycin."
},
{
  id: "2026-08-05",
  date: "2026-08-05",
  hints: [
    "A previously healthy 4-year-old boy with recent viral infection presents with petechial rash, easy bruising, and mild epistaxis.",
    "He does not have fevers, weight loss, night sweats, or bone pain. He is not on any medications.",
    "He has a platelet count of 13 x 10^9/L with normal hemoglobin, MCV, white blood cell count, and peripheral smear.",
    "On exam he is not actively bleeding and he does not have lymphadenopathy, hepatomegaly, or splenomegaly.",
    "His platelets normalize after 2 months of observation with close monitoring, activity restriction, and avoidance of antiplatelet medications."
  ],
  answer: "Immune thrombocytopenia (ITP)",
  accepted: ["ITP"],
  explanation: "Newly diagnosed primary ITP typically occurs in healthy children and can be triggered by a viral infection. It is characterized by immune-mediated destruction of normal platelets. Most children present with mild bruising and petechiae. The most serious complication is intracranial hemorrhage. Most cases are self-limited and observation is recommended for children without active bleeding. For moderate bleeding, a dose of IVIG or a short course of corticosteroids is recommended."
},
{
id: "2026-08-06",
date: "2026-08-06",
hints: [
"A 16-year-old girl presents with a 2 year history of irregular periods.",
"On exam she is noted to have obesity, moderate hirsutism, acne, and acanthosis nigricans.",
"There is an elevated free and total testosterone and normal beta-hCG, FSH, LH, TSH, 17OHP, DHEAS, and prolactin.",
"An ultrasound is not required to make the diagnosis and she is started on a combination oral contraceptive.",
"She is counselled on lifestyle recommendations and screened for any associated hypertension, diabetes, depression/anxiety, or obstructive sleep apnea."
],
answer: "Polycystic ovary syndrome (PCOS)",
accepted: ["Polyendocrine metabolic ovarian syndrome (PMOS)"],
explanation: "PCOS is defined as the otherwise unexplained combination of hyperandrogenism (clinical or biochemical), oligo-anovulation, and/or polycystic ovary morphology. It is closely associated with obesity and insulin resistance. Ultrasonography of the ovaries is NOT recommended nor required for the diagnosis of PCOS in adolescents. Of note, PCOS is the most common cause of infertility in females. Combination oral contraceptives (COCs) are first-line treatment."
},
{
  id: "2026-08-07",
  date: "2026-08-07",
  hints: [
    "A previously healthy 6-month-old boy presents with 2 days of fever >39.0°C with no apparent source.",
    "He does not have rhinitis, cough, wheezing, rash or diarrhea. He examines well and is uncircumcised.",
    "He is catheterized and the urine dipstick is positive for nitrites and leukocyte esterase and urinalysis reports pyuria.",
    "He starts a 10 day empiric course of Cefixime. Urine culture comes back positive for E.coli the next day.",
    "His fever resolves quickly. As an outpatient, he completes a renal and bladder ultrasound and it is normal."
  ],
  answer: "Urinary tract infection (UTI)",
  accepted: ["UTI"],
  explanation: "In infants and young children, UTI usually presents with nonspecific symptoms and signs. A urinalysis and urine culture should be done for children <3 years of age with a fever with no apparent source. Only urethral catheterization and suprapubic aspiration are reliable for culture in pre-toilet trained children. Children <2 years of age should have a renal and bladder ultrasound (RBUS) after their first febrile UTI. A voiding cystourethrogram is not indicated with a first febrile UTI when the RBUS is normal."
},  
{
  id: "2026-08-08",
  date: "2026-08-08",
  hints: [
    "A 10-year-old girl with Hb SC sickle cell disease presents with several hours of pallor and abdominal pain.",
    "On exam, she is tachycardic and has a markedly enlarged and tender spleen.",
    "On bloodwork, she has a Hb 80 g/L (baseline 115 g/L), reticulocytosis, and mild thrombocytopenia.",
    "Hematology is consulted and she is admitted where she is cautiously transfused packed RBCs.",
    "Her symptoms resolve but over the next few years she has recurrent episodes and ultimately undergoes a surgical splenectomy."
  ],
  answer: "Splenic sequestration",
  accepted: ["Splenic sequestration crisis"],
  explanation: "Splenic sequestration is a complication of sickle cell disease characterized by a rapidly enlarging spleen and an acute drop >20g/L in hemoglobin that commonly occurs before age 5 but can happen at any age, particularly in children with HbSC and HbSBThal+. The mortality rate is as high as 10-15%. The main treatment is cautious blood transfusion because of the risk of hyperviscosity and volume overload due to autotransfusion. Up to half of patients who survive will have a recurrent episode."
},
  {
  id: "2026-08-09",
  date: "2026-08-09",
  hints: [
    "A 2-year-old girl presents with 2 months of morning limp and swelling of her bilateral knees and left ankle.",
    "She is not vocalizing pain and there is no history of injury or illness. There is no family history of psoriasis.",
    "On exam there is no fever, rash, erythema, nail changes, lymphadenopathy, or hepatosplenomegaly.",
    "On bloodwork, ANA is positive. CRP and ESR are mildly elevated. CBC, ENA panel, RF, and anti-CCP antibodies are negative.",
    "She is referred to rheumatology and ophthalmology and started on methotrexate, folic acid, intraarticular steroid injections, and NSAIDs for pain."
  ],
  answer: "Oligoarticular juvenile idiopathic arthritis (JIA)",
  accepted: ["JIA"],
  explanation: "Oligoarticular JIA is defined by ≤4 peripheral joints during the first 6 months of disease. It is the most common JIA subtype with a peak incidence between 2-3 years. Many patients present with limping rather than pain. Labwork findings are non-specific but help exclude other diagnoses, establish a baseline, and assess for poor prognostic factors. Patients with a positive ANA are at the highest risk of anterior uveitis, which is frequently asymptomatic, so ophthalmological screening is essential."
},
  {
  id: "2026-08-10",
  date: "2026-08-10",
  hints: [
    "A term newborn develops severe progressive cyanosis and tachypnea that does not respond to supplemental oxygen in the first hour of life.",
    "On exam, there are no prominent murmurs or diminished pulses. Aside from tachypnea, there are no signs of respiratory distress.",
    "Chest X-ray and ECG are largely normal. Echocardiogram confirms the diagnosis.",
    "An IV infusion of prostaglandin E1 is started before the patient is transferred out to a tertiary cardiac care centre.",
    "The patient undergoes an arterial switch operation within the first 2 weeks of life."
  ],
  answer: "Dextro-transposition of the great arteries (D-TGA)",
  accepted: ["TGA"],
  explanation: "Dextro-transposition of the great arteries (D-TGA) is a cyanotic congenital heart defect in which the aorta arises from the right ventricle and the pulmonary artery arises from the left ventricle creating parallel circulations. D-TGA is difficult to detect prenatally by fetal ultrasound and many infants present postnatally. Of note, the classic radiographic “egg-on-a-string” sign is typically not seen right after birth. Prostaglandin infusion is essential to maintain patency of the ductus arteriosus."
},
  {
  id: "2026-08-11",
  date: "2026-08-11",
  hints: [
    "A previously healthy 4-year-old boy presents with several weeks of fatigue, intermittent fever, weight loss, and bone pain.",
    "On exam he has mild pallor, petechial rash, cervical lymphadenopathy, and hepatosplenomegaly. Neuro exam is normal.",
    "Bloodwork reports anemia, thrombocytopenia, and neutropenia with normal WBC. There are blasts on peripheral smear.",
    "A bone marrow aspirate confirms the diagnosis. The event free survival rate is ~90%.",
    "He is admitted to pediatric oncology and started on a targeted multi-agent induction chemotherapy."
  ],
  answer: "Acute lymphoblastic leukemia/lymphoblastic lymphoma (ALL/LBL)",
  accepted: ["ALL"],
  explanation: "Acute lymphoblastic leukemia (ALL) is often grouped with lymphoblastic lymphoma (LBL) as they are overlapping clinical presentations of the same disease. ALL/LBL is the most common cancer in children and of those cases, 85% of them are B-cell lineage. The most common symptoms result from the proliferation of leukemic blasts in the bone marrow, preventing normal production of RBCs, platelets, and neutrophils. Morphologic analysis and flow cytometry are used to evaluate the bone marrow for diagnosis."
},
  {
  id: "2026-08-12",
  date: "2026-08-12",
  hints: [
    "A 14-year-old girl presents with short stature and amenorrhea.",
    "As a child, she had a history of poor growth and recurrent ear infections.",
    "On exam she has a short broad neck with webbing, micrognathia, dental malocclusion, kyphosis, and short limbs.", 
    "Bloodwork reports FSH, LH, and estradiol levels in keeping with gonadal failure. Karyotype confirms the diagnosis.",
    "Her initial work up includes a kidney ultrasound and a referral to cardiology and endocrinology."
  ],
  answer: "Turner syndrome (TS)",
  accepted: ["45,X syndrome"],
  explanation: "TS is a sex chromosome disorder that affects phenotypic female individuals who have one intact X chromosome and complete or partial absence of the second sex chromosome. The clinical manifestations include characteristic facial appearance, neck webbing, peripheral lymphedema, short stature, pubertal delay, early sensorineural hearing loss, distinctive congenital cardiovascular, skeletal and renal anomalies, and a particular neurodevelopmental profile. Karyotype is the gold standard for diagnosis."
},
];
