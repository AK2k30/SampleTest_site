// Main page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    const startTestBtn = document.getElementById('start-test-btn');
    
    // Handle start test button click
    if (startTestBtn) {
        startTestBtn.addEventListener('click', function() {
            // Navigate directly to sample types page
            window.location.href = 'sample-types.html';
        });
    }
});

// Specialist data with their recommended tests
const specialistData = {
    cardiologist: {
        name: "Cardiologist",
        tests: [
            {
                name: "ECG (Electrocardiogram)",
                description: "Records electrical activity of the heart to detect rhythm abnormalities and heart conditions.",
                price: "$75",
                duration: "15 minutes"
            },
            {
                name: "Echocardiogram",
                description: "Ultrasound of the heart to assess heart structure and function.",
                price: "$200",
                duration: "30 minutes"
            },
            {
                name: "Stress Test",
                description: "Evaluates heart function during physical activity or medication-induced stress.",
                price: "$300",
                duration: "60 minutes"
            },
            {
                name: "Lipid Panel",
                description: "Blood test measuring cholesterol and triglyceride levels.",
                price: "$50",
                duration: "5 minutes"
            }
        ]
    },
    dermatologist: {
        name: "Dermatologist",
        tests: [
            {
                name: "Skin Biopsy",
                description: "Removal of small skin sample for microscopic examination to diagnose skin conditions.",
                price: "$150",
                duration: "20 minutes"
            },
            {
                name: "Dermoscopy",
                description: "Specialized examination of skin lesions using magnification and lighting.",
                price: "$100",
                duration: "15 minutes"
            },
            {
                name: "Patch Testing",
                description: "Identifies specific allergens causing contact dermatitis reactions.",
                price: "$200",
                duration: "45 minutes"
            },
            {
                name: "Mole Mapping",
                description: "Digital photography and monitoring of moles for changes over time.",
                price: "$250",
                duration: "30 minutes"
            }
        ]
    },
    neurologist: {
        name: "Neurologist",
        tests: [
            {
                name: "EEG (Electroencephalogram)",
                description: "Records electrical activity in the brain to diagnose seizure disorders.",
                price: "$300",
                duration: "60 minutes"
            },
            {
                name: "MRI Brain Scan",
                description: "Detailed imaging of brain structures to detect abnormalities or disease.",
                price: "$800",
                duration: "45 minutes"
            },
            {
                name: "Nerve Conduction Study",
                description: "Tests nerve function and diagnoses peripheral nerve disorders.",
                price: "$400",
                duration: "90 minutes"
            },
            {
                name: "Lumbar Puncture",
                description: "Collection of cerebrospinal fluid for analysis of neurological conditions.",
                price: "$500",
                duration: "30 minutes"
            }
        ]
    },
    orthopedist: {
        name: "Orthopedist",
        tests: [
            {
                name: "X-Ray",
                description: "Imaging to examine bones and joints for fractures or abnormalities.",
                price: "$80",
                duration: "10 minutes"
            },
            {
                name: "MRI Joint Scan",
                description: "Detailed imaging of soft tissues, cartilage, and bone structures.",
                price: "$600",
                duration: "45 minutes"
            },
            {
                name: "Bone Density Test",
                description: "Measures bone mineral density to assess osteoporosis risk.",
                price: "$150",
                duration: "20 minutes"
            },
            {
                name: "Arthroscopy",
                description: "Minimally invasive examination of joint interior using small camera.",
                price: "$1200",
                duration: "60 minutes"
            }
        ]
    },
    gastroenterologist: {
        name: "Gastroenterologist",
        tests: [
            {
                name: "Colonoscopy",
                description: "Examination of the colon using flexible tube with camera for screening.",
                price: "$800",
                duration: "45 minutes"
            },
            {
                name: "Upper Endoscopy",
                description: "Examination of upper digestive tract including stomach and esophagus.",
                price: "$600",
                duration: "30 minutes"
            },
            {
                name: "Liver Function Test",
                description: "Blood tests to assess liver health and function.",
                price: "$100",
                duration: "5 minutes"
            },
            {
                name: "H. Pylori Test",
                description: "Tests for bacteria that can cause stomach ulcers and gastritis.",
                price: "$75",
                duration: "10 minutes"
            }
        ]
    },
    endocrinologist: {
        name: "Endocrinologist",
        tests: [
            {
                name: "HbA1c Test",
                description: "Blood test measuring average blood sugar levels over 2-3 months.",
                price: "$60",
                duration: "5 minutes"
            },
            {
                name: "Thyroid Function Test",
                description: "Blood tests to evaluate thyroid hormone levels and function.",
                price: "$120",
                duration: "5 minutes"
            },
            {
                name: "Glucose Tolerance Test",
                description: "Measures body's response to glucose to diagnose diabetes.",
                price: "$80",
                duration: "180 minutes"
            },
            {
                name: "Cortisol Test",
                description: "Measures cortisol levels to assess adrenal gland function.",
                price: "$90",
                duration: "5 minutes"
            }
        ]
    },
    pulmonologist: {
        name: "Pulmonologist",
        tests: [
            {
                name: "Pulmonary Function Test",
                description: "Measures lung capacity and airflow to assess respiratory function.",
                price: "$200",
                duration: "45 minutes"
            },
            {
                name: "Chest X-Ray",
                description: "Imaging of lungs and chest cavity to detect abnormalities.",
                price: "$70",
                duration: "10 minutes"
            },
            {
                name: "CT Chest Scan",
                description: "Detailed cross-sectional imaging of lungs and surrounding structures.",
                price: "$500",
                duration: "15 minutes"
            },
            {
                name: "Arterial Blood Gas",
                description: "Blood test measuring oxygen and carbon dioxide levels.",
                price: "$100",
                duration: "5 minutes"
            }
        ]
    },
    oncologist: {
        name: "Oncologist",
        tests: [
            {
                name: "Tumor Markers Test",
                description: "Blood test measuring substances produced by cancer cells.",
                price: "$150",
                duration: "5 minutes"
            },
            {
                name: "CT Scan",
                description: "Detailed imaging to detect and monitor cancer progression.",
                price: "$700",
                duration: "30 minutes"
            },
            {
                name: "PET Scan",
                description: "Nuclear imaging to detect cancer cells throughout the body.",
                price: "$2000",
                duration: "90 minutes"
            },
            {
                name: "Biopsy",
                description: "Tissue sample collection for microscopic cancer analysis.",
                price: "$400",
                duration: "30 minutes"
            }
        ]
    }
};