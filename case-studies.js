// Sample type-specific case study data
const caseStudyData = {
    blood: [
        {
            id: 1,
            title: "Sepsis Detection in Emergency Care",
            description: "Critical blood culture analysis revealed multi-drug resistant Staphylococcus aureus in a 67-year-old patient with fever and confusion",
            category: "Emergency Medicine",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/NEONATAL_SEPTICAEMIA_cyuyf6.jpg"
        },
        {
            id: 2,
            title: "Anemia Investigation",
            description: "Complete blood count revealed severe iron-deficiency anemia in a 45-year-old woman with chronic fatigue and pale complexion",
            category: "Hematology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516765/DR.SUJEESH_k6dxru.jpg"
        },
        {
            id: 3,
            title: "Leukemia Screening",
            description: "Abnormal white blood cell count led to bone marrow biopsy confirming acute lymphoblastic leukemia in pediatric patient",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516766/ESKAPE_INFECTIONS_uhnh9b.jpg"
        },
        {
            id: 4,
            title: "Diabetes Monitoring",
            description: "HbA1c blood test showed excellent glucose control in type 2 diabetic patient following lifestyle modifications",
            category: "Endocrinology",
            severity: "Normal",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR_JAYESH_N_DESAI_yfecky.jpg"
        },
        {
            id: 5,
            title: "Cardiac Enzyme Assessment",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg"
        }
    ],
    'sterile-fluids': [
        {
            id: 1,
            title: "Peritonitis Diagnosis",
            description: "Peritoneal fluid analysis revealed bacterial peritonitis in dialysis patient with abdominal pain and fever",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/SCRUB_TYPHUS_kmjde9.jpg"
        },
        {
            id: 2,
            title: "Pleural Effusion Analysis",
            description: "Thoracentesis fluid examination identified malignant cells indicating metastatic lung cancer in 72-year-old smoker",
            category: "Pulmonology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR.PRADEEP_bphj7b.jpg"
        },
        {
            id: 3,
            title: "Synovial Fluid Investigation",
            description: "Joint fluid analysis confirmed septic arthritis with Streptococcus pneumoniae in immunocompromised patient",
            category: "Rheumatology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg"
        },
        {
            id: 4,
            title: "Ascites Evaluation",
            description: "Abdominal fluid analysis ruled out spontaneous bacterial peritonitis in cirrhotic patient with ascites",
            category: "Gastroenterology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516762/DR.MAHAESH_orydme.jpg"
        },
        {
            id: 5,
            title: "Pericardial Fluid Study",
            description: "Pericardiocentesis revealed inflammatory pericarditis with no evidence of malignancy in cardiac tamponade case",
            category: "Cardiology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516763/DR_AMOL-_Roseomonas_mucosa_p4pxxe.jpg"
        }
    ],
    urine: [
        {
            id: 1,
            title: "Kidney Stone Prevention",
            description: "24-hour urine collection revealed elevated calcium oxalate levels, leading to dietary modifications and successful stone prevention",
            category: "Urology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516762/DR.KIRAN_RAJAGOPAL_xggw12.jpg"
        },
        {
            id: 2,
            title: "UTI in Elderly Patient",
            description: "Urine culture identified E. coli with antibiotic resistance, requiring targeted therapy in 82-year-old woman",
            category: "Geriatrics",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR_ouohcu.png"
        },
        {
            id: 3,
            title: "Proteinuria Investigation",
            description: "Persistent protein in urine led to kidney biopsy confirming focal segmental glomerulosclerosis in young adult",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR.GANESH_ovicd5.jpg"
        },
        {
            id: 4,
            title: "Pregnancy Monitoring",
            description: "Routine urinalysis detected preeclampsia markers, enabling early intervention and successful pregnancy outcome",
            category: "Obstetrics",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/NEONATAL_SEPTICAEMIA_cyuyf6.jpg"
        },
        {
            id: 5,
            title: "Drug Screening Case",
            description: "Workplace accident investigation revealed presence of controlled substances, leading to appropriate treatment referral",
            category: "Occupational Health",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/SCRUB_TYPHUS_kmjde9.jpg"
        }
    ],
    bal: [
        {
            id: 1,
            title: "Pneumocystis Pneumonia Detection",
            description: "BAL fluid analysis confirmed PCP infection in HIV-positive patient with respiratory failure and hypoxemia",
            category: "Infectious Disease",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg"
        },
        {
            id: 2,
            title: "Pulmonary Alveolar Proteinosis",
            description: "BAL showed characteristic milky appearance and PAS-positive material confirming rare lung disorder diagnosis",
            category: "Pulmonology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757519716/DR.SHAMIM_AKHTAR_1_ybfd7j.jpg"
        },
        {
            id: 3,
            title: "Lung Cancer Staging",
            description: "BAL cytology revealed adenocarcinoma cells, providing crucial staging information for treatment planning",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757519716/DR._SUMEET_1_ociaqv.jpg"
        },
        {
            id: 4,
            title: "Hypersensitivity Pneumonitis",
            description: "BAL cell differential showed increased lymphocytes confirming occupational lung disease in factory worker",
            category: "Occupational Medicine",
            severity: "Moderate",
            backgroundImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Ventilator-Associated Pneumonia",
            description: "BAL culture identified multi-drug resistant Pseudomonas in ICU patient requiring targeted antimicrobial therapy",
            category: "Critical Care",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    csf: [
        {
            id: 1,
            title: "Bacterial Meningitis Emergency",
            description: "CSF analysis revealed elevated white cells and low glucose, confirming Streptococcus pneumoniae meningitis in pediatric patient",
            category: "Emergency Neurology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516766/ESKAPE_INFECTIONS_uhnh9b.jpg"
        },
        {
            id: 2,
            title: "Multiple Sclerosis Diagnosis",
            description: "CSF showed oligoclonal bands and elevated IgG index supporting MS diagnosis in 28-year-old with neurological symptoms",
            category: "Neurology",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Subarachnoid Hemorrhage",
            description: "Lumbar puncture revealed xanthochromia and elevated red blood cells confirming SAH despite negative CT scan",
            category: "Neurosurgery",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1582560469781-1960832d2c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Viral Encephalitis Investigation",
            description: "CSF PCR testing identified HSV-1 encephalitis in young adult with altered mental status and seizures",
            category: "Infectious Neurology",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Normal Pressure Hydrocephalus",
            description: "CSF drainage trial showed significant improvement in gait and cognition, confirming NPH diagnosis in elderly patient",
            category: "Geriatric Neurology",
            severity: "Moderate",
            backgroundImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    swab: [
        {
            id: 1,
            title: "COVID-19 Outbreak Investigation",
            description: "Nasopharyngeal swab PCR testing identified SARS-CoV-2 variants during workplace outbreak, enabling contact tracing",
            category: "Public Health",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg"
        },
        {
            id: 2,
            title: "Influenza A Detection",
            description: "Rapid viral testing confirmed H3N2 influenza strain in elderly nursing home resident during seasonal outbreak",
            category: "Geriatrics",
            severity: "Moderate",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "RSV in Pediatric Patient",
            description: "Throat swab identified respiratory syncytial virus in 6-month-old infant with bronchiolitis and breathing difficulties",
            category: "Pediatrics",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1582560469781-1960832d2c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Strep Throat Diagnosis",
            description: "Oropharyngeal swab culture confirmed Group A Streptococcus infection in school-age child with sore throat",
            category: "Family Medicine",
            severity: "Moderate",
            backgroundImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Pertussis Outbreak Control",
            description: "PCR testing of nasopharyngeal swabs identified Bordetella pertussis in several family members during whooping cough outbreak",
            category: "Infectious Disease",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    aspirate: [
        {
            id: 1,
            title: "VAP Prevention Success",
            description: "Serial endotracheal aspirates showed successful clearance of Acinetobacter baumannii following targeted antibiotic therapy",
            category: "Critical Care",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516765/DR.SUJEESH_k6dxru.jpg"
        },
        {
            id: 2,
            title: "Multi-Drug Resistant Pneumonia",
            description: "ET aspirate revealed carbapenem-resistant Klebsiella pneumoniae requiring combination antimicrobial therapy",
            category: "Infectious Disease",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Fungal Pneumonia Detection",
            description: "Endotracheal aspirate microscopy identified Aspergillus fumigatus in immunocompromised patient with respiratory failure",
            category: "Pulmonology",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1582560469781-1960832d2c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Post-Operative Monitoring",
            description: "ET aspirate cultures remained negative following cardiac surgery, confirming effective infection prevention protocols",
            category: "Cardiac Surgery",
            severity: "Normal",
            backgroundImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Viral Pneumonia Investigation",
            description: "PCR testing of endotracheal aspirate identified influenza A virus in mechanically ventilated ICU patient",
            category: "Critical Care",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    // Cardiology case studies
    'ECG (Electrocardiogram)': [
        {
            title: "Case Study: Irregular Heartbeat Detection",
            description: "A 45-year-old patient experiencing palpitations and dizziness. ECG revealed atrial fibrillation requiring immediate treatment.",
            category: "Arrhythmia",
            severity: "Moderate"
        },
        {
            title: "Case Study: Heart Attack Diagnosis",
            description: "Emergency case where ECG showed ST-elevation indicating acute myocardial infarction. Quick diagnosis saved patient's life.",
            category: "Cardiac Emergency",
            severity: "Critical"
        },
        {
            title: "Case Study: Routine Health Screening",
            description: "Annual health check for a 35-year-old athlete. Normal ECG confirmed excellent cardiovascular health.",
            category: "Preventive Care",
            severity: "Normal"
        }
    ],
    'Echocardiogram': [
        {
            title: "Case Study: Heart Valve Assessment",
            description: "Patient with shortness of breath. Echo revealed mitral valve regurgitation requiring surgical intervention.",
            category: "Valve Disease",
            severity: "Moderate"
        },
        {
            title: "Case Study: Heart Function Evaluation",
            description: "Post-heart attack patient monitoring. Echo showed reduced ejection fraction, adjusted medication accordingly.",
            category: "Heart Function",
            severity: "Moderate"
        },
        {
            title: "Case Study: Congenital Heart Disease",
            description: "Young adult with exercise intolerance. Echo detected previously undiagnosed septal defect.",
            category: "Congenital",
            severity: "Moderate"
        }
    ],
    'Stress Test': [
        {
            title: "Case Study: Chest Pain Investigation",
            description: "Patient with recurring chest pain during exercise. Stress test revealed coronary artery blockage.",
            category: "Coronary Disease",
            severity: "High"
        },
        {
            title: "Case Study: Pre-Surgery Assessment",
            description: "Elderly patient requiring major surgery. Stress test confirmed heart can handle surgical stress.",
            category: "Pre-operative",
            severity: "Normal"
        },
        {
            title: "Case Study: Exercise Capacity Assessment",
            description: "Cardiac rehabilitation patient. Stress test showed significant improvement in exercise tolerance.",
            category: "Rehabilitation",
            severity: "Improving"
        }
    ],
    'Lipid Panel': [
        {
            title: "Case Study: High Cholesterol Management",
            description: "Patient with family history of heart disease. Lipid panel showed elevated cholesterol requiring lifestyle changes.",
            category: "Preventive Care",
            severity: "Moderate"
        },
        {
            title: "Case Study: Diabetes Monitoring",
            description: "Diabetic patient's routine monitoring. Lipid levels showed good control with current medication regimen.",
            category: "Diabetes Care",
            severity: "Controlled"
        },
        {
            title: "Case Study: Medication Effectiveness",
            description: "Patient on statin therapy. Follow-up lipid panel showed significant improvement in cholesterol levels.",
            category: "Treatment Response",
            severity: "Improving"
        }
    ],

    // Dermatology case studies
    'Skin Biopsy': [
        {
            title: "Case Study: Melanoma Detection",
            description: "Suspicious mole changes in a 50-year-old patient. Biopsy confirmed early-stage melanoma, successful treatment followed.",
            category: "Cancer Detection",
            severity: "High"
        },
        {
            title: "Case Study: Inflammatory Skin Condition",
            description: "Chronic skin rash unresponsive to treatment. Biopsy revealed psoriasis, leading to targeted therapy.",
            category: "Inflammatory Disease",
            severity: "Moderate"
        },
        {
            title: "Case Study: Benign Growth Confirmation",
            description: "Elderly patient worried about skin growth. Biopsy confirmed benign seborrheic keratosis, no treatment needed.",
            category: "Benign Lesion",
            severity: "Low"
        }
    ],
    'Dermoscopy': [
        {
            title: "Case Study: Early Skin Cancer Detection",
            description: "Routine skin check revealed suspicious patterns. Dermoscopy guided biopsy location for accurate diagnosis.",
            category: "Cancer Screening",
            severity: "Moderate"
        },
        {
            title: "Case Study: Mole Monitoring",
            description: "Patient with multiple moles. Dermoscopy established baseline for future comparison and monitoring.",
            category: "Preventive Care",
            severity: "Normal"
        },
        {
            title: "Case Study: Pigmented Lesion Analysis",
            description: "Child with changing birthmark. Dermoscopy confirmed benign nature, reducing family anxiety.",
            category: "Pediatric Care",
            severity: "Normal"
        }
    ],

    // Generic case studies for other tests
    'default': [
        {
            title: "Case Study: Diagnostic Success",
            description: "Complex medical case where this test provided crucial diagnostic information leading to successful treatment.",
            category: "Diagnostic",
            severity: "High"
        },
        {
            title: "Case Study: Preventive Care",
            description: "Routine screening that detected early-stage condition, enabling preventive treatment and better outcomes.",
            category: "Preventive",
            severity: "Moderate"
        },
        {
            title: "Case Study: Treatment Monitoring",
            description: "Follow-up testing that showed positive response to treatment, confirming therapeutic approach.",
            category: "Follow-up",
            severity: "Normal"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const testDescription = document.getElementById('test-description');
    const caseStudiesContainer = document.getElementById('case-studies-container');
    const backToTestsBtn = document.getElementById('back-to-tests-btn');
    
    // Set description text only if element exists
    if (testDescription) {
        testDescription.textContent = 'Explore our comprehensive case studies collection';
    }
    
    // Load case studies
    displayCaseStudies(null);
    
    // Back button functionality is now handled by navigation bar
});

function displayCaseStudies(test) {
    const caseStudiesContainer = document.getElementById('case-studies-container');
    caseStudiesContainer.innerHTML = '';
    
    // Get selected sample type from localStorage
    const selectedSampleType = localStorage.getItem('selectedSampleType') || 'blood';
    const caseStudies = caseStudyData[selectedSampleType] || caseStudyData.blood;
    
    caseStudies.forEach((caseStudy, index) => {
        const caseStudyCard = document.createElement('div');
        caseStudyCard.className = 'case-study-card-new';
        
        caseStudyCard.innerHTML = `
            <div class="case-study-background" style="background-image: url('${caseStudy.backgroundImage}')"></div>
            <div class="case-study-overlay"></div>
            <div class="case-study-content-wrapper">
                <div class="case-study-number">CASE STUDY ${caseStudy.id}</div>
                <h3 class="case-study-title">${caseStudy.title}</h3>
                <p class="case-study-description">${caseStudy.description}</p>
            </div>
        `;
        
        // Add click event to show PDF details
        caseStudyCard.addEventListener('click', function() {
            // Store both test and case study data for PDF viewer
            localStorage.setItem('selectedCaseStudy', JSON.stringify(caseStudy));
            window.location.href = 'pdf-viewer.html';
        });
        
        caseStudiesContainer.appendChild(caseStudyCard);
    });
}

function getSeverityClass(severity) {
    switch(severity.toLowerCase()) {
        case 'critical':
        case 'high':
            return 'severity-high';
        case 'moderate':
            return 'severity-moderate';
        case 'normal':
        case 'low':
        case 'controlled':
        case 'improving':
            return 'severity-low';
        default:
            return 'severity-moderate';
    }
}