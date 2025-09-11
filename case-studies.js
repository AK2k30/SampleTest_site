// Sample type-specific case study data
const caseStudyData = {
    blood: [
        {
            id: 1,
            title: "Rickettsia typhi",
            description: "The real-world case of a rare infection diagnosis uncovered by infexn® NGS",
            category: "Emergency Medicine",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516765/DR.SUJEESH_k6dxru.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_DR.SUJEESH_-_CASE_STIDY_-_EMAILER_V2_compressed_mvnbhe.pdf"
        },
        {
            id: 2,
            title: "Rickettsia slovaca",
            description: "A real-world case of uncovering a rare infection in a teenager infexn® NGS",
            category: "Hematology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR.GANESH_ovicd5.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757576171/INFEXN_-_DR.GANESH_-pdf_compressed_c9irnu.pdf"
        },
        {
            id: 3,
            title: "Roseomonas mucosa",
            description: "A real-world case of infection diagnosis in a newborn infexn® NGS",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516763/DR_AMOL-_Roseomonas_mucosa_p4pxxe.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757584484/mlu1odcd2ooemyhro22f.pdf"
        },
        {
            id: 4,
            title: "Actinomadura pelletieri",
            description: "A real-world case study where NGS revealed a rare culprit behind the infection.",
            category: "Endocrinology",
            severity: "Normal",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_MYCETOMA_compressed_j06et0.pdf"
        },
        {
            id: 5,
            title: "Enterococcus faecium",
            description: "A real-world case study of neonatal sepsis caught on time using infexn® NGS",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/NEONATAL_SEPTICAEMIA_cyuyf6.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566455/INFEXN_-NEONATAL_SEPTICAEMIA_compressed_ozj3in.pdf"
        },
        {
            id: 6,
            title: "Orientia tsutsugamushi",
            description: "A real-world case study of identifying a non-culturable pathogen in an elderly patient, using infexn® NGS",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR_u1tsc1.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757593951/INFEXN_-_CASE_STUDY_-_SCRUB_TYPHUS_sy9vck.pdf"
        },
        {
            id: 7,
            title: "Klebsiella pnemoniae, Candida albican and more....",
            description: "A real-world case study of uncovering a complex multi-resistant, polymicrobial infection using infexn® NGS",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR_ouohcu.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        },
        {
            id: 8,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "A real-world case of revealing a viral-bacterial co-infection using infexn® NGS",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR.PRADEEP_bphj7b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
        {
            id: 9,
            title: "Influenza A H3N2",
            description: "A real-world case study of how NGS helped pinpoint the culprit behind a multi-organ distress.",
            category: "Cardiology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757598452/2149005128_iwg1tv.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757576683/INFEXN_-_CASE_STUDY_-_DR.MAHESH_n9oyib.pdf"
        },
    ],
    'sterile-fluids': [
        {
            id: 1,
            title: "Parvimonas micra",
            description: "A real-world case of infection that started in the mouth... and reached the lungs.",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757519716/DR._SUMEET_1_ociaqv.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566452/INFEXN_-_DR._SUMEET_-_CASE_STUDY_-_EMAILER_REMOVE_BUTTON_compressed_jg2u85.pdf"
        },
        {
            id: 2,
            title: "Burkholderia pseudomallei",
            description: "A toddler, a fever,& a hidden puzzle.",
            category: "Pulmonology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757596227/dac_yokeoc.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757585015/Case_Study_6_m52uxt.pdf"
        },
        {
            id: 3,
            title: "Actinomadura pelletieri",
            description: "A real-world case study where NGS revealed a rare culprit behind the infection.",
            category: "Rheumatology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/MYCETOMA_b2huxk.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_MYCETOMA_compressed_j06et0.pdf"
        },
        {
            id: 4,
            title: "Streptococcus pneumoniae",
            description: "A real-world pediatric case study of identifying a rare respiratory pathogen in an infant within 24 hours.",
            category: "Gastroenterology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516767/EMPYEMA_THORACIS_qt14ym.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757612039/oet7t6kjcktqmuhu19lt.pdf"
        },
        {
            id: 5,
            title: "Klebsiella pnemoniae, Candida albican and more....",
            description: "A real-world case study of uncovering a complex multi-resistant, polymicrobial infection using infexn® NGS",
            category: "Cardiology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR_ouohcu.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        }
    ],
    urine: [
        {
            id: 1,
            title: "E. coli, E. faecalis ",
            description: "A real-world case where timely identification of antibiotic resistance genes saved a patient's life.",
            category: "Urology",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR_JAYESH_N_DESAI_yfecky.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566452/INFEXN_-_DR_JAYESH_N_DESAI_-_CASE_STUDY_-_EMAILER_compressed_e4vnww.pdf"
        },
        {
            id: 2,
            title: "Klebsiella pnemoniae(blood), Candida albican and more....",
            description: "A real-world case study of uncovering a complex multi-resistant, polymicrobial infection using infexn® NGS",
            category: "Geriatrics",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516761/DR_ouohcu.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757577021/INFEXN_-_CASE_STUDY_-_DR.AMIT_BOTKONDLE_iuzswi.pdf"
        },
        {
            id: 3,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "A real-world case of revealing a viral-bacterial co-infection using infexn® NGS",
            category: "Nephrology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR.PRADEEP_bphj7b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
    ],
    'bal-endotracheal': [
        {
            id: 1,
            title: "Influenza, Klebsiella pneumoniae",
            description: "The real-world case of diagnostic breakthrough with infexn® NGS",
            category: "Infectious Disease",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757519716/DR.SHAMIM_AKHTAR_1_ybfd7j.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566453/INFEXN_-_DR.SHAMIM_AKHTAR_-_CASE_STUDY_EMAILER_REMOVE_BUTTON_compressed_cmt1jg.pdf"
        },
        {
            id: 2,
            title: "Klebsiella pneumoniae",
            description: "A real-world case of identifying hidden pathogens and resistance genes in an elderly patient using infexn® NGS",
            category: "Pulmonology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516766/ESKAPE_INFECTIONS_uhnh9b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757579104/INFEXN_-_CASE_STUDY_-_ESKAPE_INFECTIONS_compressed_vfsxqk.pdf"
        },
        {
            id: 3,
            title: "Staphylococcus haemolyticus",
            description: "A real-world case of uncovering a complex infection in an elderly man using infexn® NGS",
            category: "Oncology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516762/DR.KIRAN_RAJAGOPAL_xggw12.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757583928/ty65qgmzgerswwng9hsd.pdf"
        },
        {
            id: 4,
            title: "Herpes simplex virus 1, Acinetobacter baumannii",
            description: "A real-world case of revealing a viral-bacterial co-infection using infexn® NGS",
            category: "Occupational Medicine",
            severity: "Moderate",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR.PRADEEP_bphj7b.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf"
        },
    ],
    csf: [
        {
            id: 1,
            title: "Cutibacterium acnes",
            description: "infexn® NGS bring clarity in complex disease.",
            category: "Emergency Neurology",
            severity: "Critical",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757595854/dcsc_u8tg67.png",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/raw/upload/v1757583751/i9fvynw1ejyugmkmedxa.pdf"
        },
        {
            id: 2,
            title: "Mycobacterium tuberculosis, Stenotrophomonas maltophilia ",
            description: "A real-world case where sequencing uncovered a dual pathogen infection.",
            category: "Neurology",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757516764/DR_u1tsc1.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.NIKHIL_RATHOD_rs8sac.pdf"
        },
    ],
    swab: [
        {
            id: 1,
            title: "Crenalium Epipsammum, Klebsiella pneumoniae (XDR)",
            description: "A real-world case study of identifying a rare sand-dwelling pathogen using infexn® NGS",
            category: "icon Health",
            severity: "High",
            backgroundImage: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757597578/WhatsApp_Image_2025-09-11_at_19.01.56_cc48ec3f_h3x5x1.jpg",
            pdfUrl: "https://res.cloudinary.com/dirdm86ij/image/upload/v1757582148/INFEXN_-_CASE_STUDY_-_CRENALIUM_EPIPSAMMUM_compressed_pxb1yx.pdf"
        },
    ],
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