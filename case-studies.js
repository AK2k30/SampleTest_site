// Sample type-specific case study data
const caseStudyData = {
    blood: [
        {
            id: 1,
            title: "Rickettsia typhi",
            description: "Critical blood culture analysis revealed multi-drug resistant Staphylococcus aureus in a 67-year-old patient with fever and confusion",
            category: "Emergency Medicine",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/NEONATAL_SEPTICAEMIA_cyuyf6.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_DR.SUJEESH_-_CASE_STIDY_-_EMAILER_V2_compressed_mvnbhe.pdf"
        },
        {
            id: 2,
            title: "Rickettsia slovaca",
            description: "Complete blood count revealed severe iron-deficiency anemia in a 45-year-old woman with chronic fatigue and pale complexion",
            category: "Hematology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516765/DR.SUJEESH_k6dxru.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757576171/INFEXN_-_DR.GANESH_-pdf_compressed_c9irnu.pdf"
        },
        {
            id: 3,
            title: "Roseomonas mucosa",
            description: "Abnormal white blood cell count led to bone marrow biopsy confirming acute lymphoblastic leukemia in pediatric patient",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516766/ESKAPE_INFECTIONS_uhnh9b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757584484/mlu1odcd2ooemyhro22f.pdf"
        },
        {
            id: 4,
            title: "Actinomadura pelletieri",
            description: "HbA1c blood test showed excellent glucose control in type 2 diabetic patient following lifestyle modifications",
            category: "Endocrinology",
            severity: "Normal",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR_JAYESH_N_DESAI_yfecky.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_MYCETOMA_compressed_j06et0.pdf"
        },
        {
            id: 5,
            title: "Enterococcus faecium",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566455/INFEXN_-NEONATAL_SEPTICAEMIA_compressed_ozj3in.pdf"
        },
        {
            id: 6,
            title: "Orientia tsutsugamushi",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566455/INFEXN_-NEONATAL_SEPTICAEMIA_compressed_ozj3in.pdf"
        },
        {
            id: 7,
            title: "Klebsiella pnemoniae, Candida albican and more....",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        },
        {
            id: 8,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
        {
            id: 9,
            title: "Influenza A H3N2",
            description: "Elevated troponin levels confirmed myocardial infarction in 58-year-old male with chest pain and shortness of breath",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757576683/INFEXN_-_CASE_STUDY_-_DR.MAHESH_n9oyib.pdf"
        },
    ],
    'sterile-fluids': [
        {
            id: 1,
            title: "Parvimonas micra",
            description: "Peritoneal fluid analysis revealed bacterial peritonitis in dialysis patient with abdominal pain and fever",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/SCRUB_TYPHUS_kmjde9.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566452/INFEXN_-_DR._SUMEET_-_CASE_STUDY_-_EMAILER_REMOVE_BUTTON_compressed_jg2u85.pdf"
        },
        {
            id: 2,
            title: "Burkholderia pseudomallei",
            description: "Thoracentesis fluid examination identified malignant cells indicating metastatic lung cancer in 72-year-old smoker",
            category: "Pulmonology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR.PRADEEP_bphj7b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757585015/Case_Study_6_m52uxt.pdf"
        },
        {
            id: 3,
            title: "Actinomadura pelletieri",
            description: "Joint fluid analysis confirmed septic arthritis with Streptococcus pneumoniae in immunocompromised patient",
            category: "Rheumatology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_MYCETOMA_compressed_j06et0.pdf"
        },
        {
            id: 4,
            title: "Streptococcus pneumoniae",
            description: "Abdominal fluid analysis ruled out spontaneous bacterial peritonitis in cirrhotic patient with ascites",
            category: "Gastroenterology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516762/DR.MAHAESH_orydme.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757579104/INFEXN_-_CASE_STUDY_-_ESKAPE_INFECTIONS_compressed_vfsxqk.pdf"
        },
        {
            id: 5,
            title: "Klebsiella pnemoniae, Candida albican and more....",
            description: "Pericardiocentesis revealed inflammatory pericarditis with no evidence of malignancy in cardiac tamponade case",
            category: "Cardiology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516763/DR_AMOL-_Roseomonas_mucosa_p4pxxe.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        }
    ],
    urine: [
        {
            id: 1,
            title: "E. coli, E. faecalis ",
            description: "24-hour urine collection revealed elevated calcium oxalate levels, leading to dietary modifications and successful stone prevention",
            category: "Urology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516762/DR.KIRAN_RAJAGOPAL_xggw12.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566452/INFEXN_-_DR_JAYESH_N_DESAI_-_CASE_STUDY_-_EMAILER_compressed_e4vnww.pdf"
        },
        {
            id: 2,
            title: "Klebsiella pnemoniae(blood), Candida albican and more....",
            description: "Urine culture identified E. coli with antibiotic resistance, requiring targeted therapy in 82-year-old woman",
            category: "Geriatrics",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR_ouohcu.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        },
        {
            id: 3,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "Persistent protein in urine led to kidney biopsy confirming focal segmental glomerulosclerosis in young adult",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR.GANESH_ovicd5.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
    ],
    'bal-endotracheal': [
        {
            id: 1,
            title: "Influenza, Klebsiella pneumoniae",
            description: "BAL fluid analysis confirmed PCP infection in HIV-positive patient with respiratory failure and hypoxemia",
            category: "Infectious Disease",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_DR.SHAMIM_AKHTAR_-_CASE_STUDY_EMAILER_REMOVE_BUTTON_compressed_cmt1jg.pdf"
        },
        {
            id: 2,
            title: "Klebsiella pneumoniae",
            description: "BAL showed characteristic milky appearance and PAS-positive material confirming rare lung disorder diagnosis",
            category: "Pulmonology",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757579104/INFEXN_-_CASE_STUDY_-_ESKAPE_INFECTIONS_compressed_vfsxqk.pdf"
        },
        {
            id: 3,
            title: "Staphylococcus haemolyticus",
            description: "BAL cytology revealed adenocarcinoma cells, providing crucial staging information for treatment planning",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1582560469781-1960832d2c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757584484/mlu1odcd2ooemyhro22f.pdf"
        },
        {
            id: 4,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "BAL cell differential showed increased lymphocytes confirming occupational lung disease in factory worker",
            category: "Occupational Medicine",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
    ],
    csf: [
        {
            id: 1,
            title: "Cutibacterium acnes",
            description: "CSF analysis revealed elevated white cells and low glucose, confirming Streptococcus pneumoniae meningitis in pediatric patient",
            category: "Emergency Neurology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516766/ESKAPE_INFECTIONS_uhnh9b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757583751/i9fvynw1ejyugmkmedxa.pdf"
        },
        {
            id: 2,
            title: "Mycobacterium tuberculosis, Stenotrophomonas maltophilia ",
            description: "CSF showed oligoclonal bands and elevated IgG index supporting MS diagnosis in 28-year-old with neurological symptoms",
            category: "Neurology",
            severity: "High",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.NIKHIL_RATHOD_rs8sac.pdf"
        },
    ],
    swab: [
        {
            id: 1,
            title: "Crenalium Epipsammum, Klebsiella pneumoniae (XDR)",
            description: "Nasopharyngeal swab PCR testing identified SARS-CoV-2 variants during workplace outbreak, enabling contact tracing",
            category: "Public Health",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757582148/INFEXN_-_CASE_STUDY_-_CRENALIUM_EPIPSAMMUM_compressed_pxb1yx.pdf"
        },
    ],
    aspirate: [
        {
            id: 1,
            title: "VAP Prevention Success",
            description: "Serial endotracheal aspirates showed successful clearance of Acinetobacter baumannii following targeted antibiotic therapy",
            category: "Critical Care",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516765/DR.SUJEESH_k6dxru.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
        {
            id: 2,
            title: "Multi-Drug Resistant Pneumonia",
            description: "ET aspirate revealed carbapenem-resistant Klebsiella pneumoniae requiring combination antimicrobial therapy",
            category: "Infectious Disease",
            severity: "Critical",
            backgroundImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.NIKHIL_RATHOD_rs8sac.pdf"
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
        
        // Add click event to open PDF directly in browser
        caseStudyCard.addEventListener('click', function() {
            // Open PDF directly in new tab for all browsers
            const pdfUrl = caseStudy.pdfUrl || 'https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf';
            window.open(pdfUrl, '_blank');
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