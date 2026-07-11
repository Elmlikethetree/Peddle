// ============================================================
// DIAGNOSES.JS — the searchable list of diagnoses shown in the
// autocomplete box. Add anything you like here; it's fine to
// include far more than your puzzle answers so guessing isn't
// trivially narrowed down. Every puzzle's "answer" and "accepted"
// values should ideally also appear somewhere in this list.
// ============================================================

const DIAGNOSIS_BANK = [
  "Reactive arthritis", "Rheumatoid arthritis", "Gout", "Pseudogout", "Septic arthritis",
  "Psoriatic arthritis", "Ankylosing spondylitis", "Systemic lupus erythematosus",
  "Idiopathic pulmonary fibrosis", "Pulmonary sarcoidosis", "Hypersensitivity pneumonitis",
  "Chronic obstructive pulmonary disease", "Congestive heart failure", "Pulmonary embolism",
  "Community-acquired pneumonia", "Asthma exacerbation", "Bronchiectasis",
  "Kawasaki disease", "Scarlet fever", "Measles", "Rheumatic fever", "Toxic shock syndrome",
  "Henoch-Schonlein purpura", "Juvenile idiopathic arthritis",
  "Subarachnoid hemorrhage", "Subdural hematoma", "Epidural hematoma", "Ischemic stroke",
  "Meningitis", "Migraine with aura", "Temporal arteritis", "Idiopathic intracranial hypertension",
  "Wernicke encephalopathy", "Hepatic encephalopathy", "Alcohol withdrawal delirium",
  "Central pontine myelinolysis", "Normal pressure hydrocephalus", "Delirium tremens",
  "Infectious mononucleosis", "Streptococcal pharyngitis", "Acute HIV infection",
  "Cytomegalovirus infection", "Toxoplasmosis", "Lymphoma",
  "Inferior ST-elevation myocardial infarction", "Anterior ST-elevation myocardial infarction",
  "Unstable angina", "Aortic dissection", "Pericarditis", "Myocarditis", "Stable angina",
  "Type 1 diabetes mellitus", "Type 2 diabetes mellitus", "Diabetic ketoacidosis",
  "Hyperosmolar hyperglycemic state", "Addisonian crisis", "Thyroid storm", "Myxedema coma",
  "Cushing syndrome", "Pheochromocytoma", "Primary hyperparathyroidism",
  "Acute appendicitis", "Acute cholecystitis", "Acute pancreatitis", "Peptic ulcer disease",
  "Diverticulitis", "Bowel obstruction", "Mesenteric ischemia", "Inflammatory bowel disease",
  "Irritable bowel syndrome", "Celiac disease",
  "Pyelonephritis", "Nephrolithiasis", "Acute kidney injury", "Chronic kidney disease",
  "Nephrotic syndrome", "Nephritic syndrome", "Urinary tract infection",
  "Deep vein thrombosis", "Peripheral artery disease", "Compartment syndrome",
  "Guillain-Barre syndrome", "Multiple sclerosis", "Myasthenia gravis",
  "Amyotrophic lateral sclerosis", "Parkinson disease", "Bell palsy",
  "Sickle cell crisis", "Iron deficiency anemia", "Vitamin B12 deficiency",
  "Hemolytic uremic syndrome", "Thrombotic thrombocytopenic purpura", "Disseminated intravascular coagulation",
  "Anaphylaxis", "Serum sickness", "Contact dermatitis", "Stevens-Johnson syndrome",
  "Cellulitis", "Necrotizing fasciitis", "Erysipelas",
  "Ectopic pregnancy", "Ovarian torsion", "Pelvic inflammatory disease", "Preeclampsia",
  "Placental abruption", "Endometriosis",
  "Testicular torsion", "Epididymitis", "Benign prostatic hyperplasia", "Poopy butt syndrome (PBS)", "SUPER poopy butt syndrome (S-PBS)"
];
