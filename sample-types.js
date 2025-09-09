// Sample types data based on the design requirements
const sampleTypesData = [
    {
        id: 'blood',
        name: 'Blood',
        icon: '🩸',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 'sterile-fluids',
        name: 'Sterile body fluids/aspirates',
        icon: '🧪',
        description: 'Comprehensive testing of sterile body fluids including cerebrospinal fluid, pleural fluid, peritoneal fluid, and synovial fluid. These samples require specialized handling and processing techniques to maintain sterility and provide accurate diagnostic results.'
    },
    {
        id: 'urine',
        name: 'Urine',
        icon: '🥤',
        description: 'Urinalysis and urine culture testing for detecting urinary tract infections, kidney disorders, diabetes, and other metabolic conditions. Our comprehensive urine testing includes microscopic examination and chemical analysis.'
    },
    {
        id: 'bal',
        name: 'Bronchoalveolar Lavage (BAL)',
        icon: '🫁',
        description: 'Specialized respiratory testing through bronchoalveolar lavage samples to diagnose lung infections, inflammatory conditions, and malignancies. Essential for evaluating lower respiratory tract disorders.'
    },
    {
        id: 'csf',
        name: 'Cerebrospinal Fluid (CSF)',
        icon: '🧠',
        description: 'Critical neurological testing of cerebrospinal fluid to diagnose meningitis, encephalitis, multiple sclerosis, and other central nervous system disorders. Requires immediate processing for accurate results.'
    },
    {
        id: 'swab',
        name: 'Oropharyngeal / Nasopharyngeal Swab in Viral Transport Medium',
        icon: '🦠',
        description: 'Respiratory virus testing including COVID-19, influenza, RSV, and other viral pathogens. Proper collection and transport in viral transport medium ensures optimal detection sensitivity.'
    },
    {
        id: 'aspirate',
        name: 'Endotracheal Aspirate',
        icon: '🫁',
        description: 'Lower respiratory tract sampling for critically ill patients, particularly useful in intensive care settings for diagnosing ventilator-associated pneumonia and other respiratory infections.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    displaySampleTypes();
});

function displaySampleTypes() {
    const container = document.querySelector('.sample-types-container');
    container.innerHTML = '';
    
    sampleTypesData.forEach((sampleType, index) => {
        const sampleCard = document.createElement('div');
        sampleCard.className = 'sample-type-card';
        
        // First item (Blood) should be expanded by default
        const isExpanded = index === 0;
        
        sampleCard.innerHTML = `
            <div class="sample-header ${isExpanded ? 'expanded' : ''}" data-sample-id="${sampleType.id}">
                <div class="sample-icon">${sampleType.icon}</div>
                <h3 class="sample-name">${sampleType.name}</h3>
                <div class="expand-icon ${isExpanded ? 'rotated' : ''}">▼</div>
            </div>
            <div class="sample-content ${isExpanded ? 'expanded' : ''}">
                <p class="sample-description">${sampleType.description}</p>
                <button class="view-case-studies-btn" onclick="viewCaseStudies('${sampleType.id}')">View Case Studies</button>
            </div>
        `;
        
        // Add click event to toggle expansion
        const header = sampleCard.querySelector('.sample-header');
        header.addEventListener('click', function() {
            toggleSampleType(sampleCard, sampleType.id);
        });
        
        container.appendChild(sampleCard);
    });
}

function toggleSampleType(cardElement, sampleId) {
    const header = cardElement.querySelector('.sample-header');
    const content = cardElement.querySelector('.sample-content');
    const expandIcon = cardElement.querySelector('.expand-icon');
    
    const isCurrentlyExpanded = header.classList.contains('expanded');
    
    // Close all other cards first
    document.querySelectorAll('.sample-type-card').forEach(card => {
        const otherHeader = card.querySelector('.sample-header');
        const otherContent = card.querySelector('.sample-content');
        const otherIcon = card.querySelector('.expand-icon');
        
        otherHeader.classList.remove('expanded');
        otherContent.classList.remove('expanded');
        otherIcon.classList.remove('rotated');
    });
    
    // If the clicked card wasn't expanded, expand it
    if (!isCurrentlyExpanded) {
        header.classList.add('expanded');
        content.classList.add('expanded');
        expandIcon.classList.add('rotated');
    }
}

function viewCaseStudies(sampleId) {
    // Store selected sample type for reference
    localStorage.setItem('selectedSampleType', sampleId);
    // Navigate to case studies page
    window.location.href = 'case-studies.html';
}