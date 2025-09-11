// Sample types data based on the design requirements
const sampleTypesData = [
    {
        id: 'blood',
        name: 'Blood',
        icon: '🩸',
        minimumVolume: '2 - 4 ml',
        collectionProcedure: 'Whole blood in sterile EDTA vacutainers',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Minimum Volume Required:</span> 2 - 4 ml<br><span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Whole blood in sterile EDTA vacutainers'
    },
    {
        id: 'sterile-fluids',
        name: 'Sterile body fluids/aspirates',
        icon: '🧪',
        minimumVolume: '2 - 4 ml',
        collectionProcedure: 'Collected with strict aseptic techniques in a sterile container',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Minimum Volume Required:</span> 2 - 4 ml<br><span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Collected with strict aseptic techniques in a sterile container'
    },
    {
        id: 'csf',
        name: 'Cerebrospinal Fluid (CSF)',
        icon: '🧠',
        minimumVolume: '1 ml',
        collectionProcedure: 'Collected with strict aseptic techniques in a sterile container',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Minimum Volume Required:</span> 1 ml<br><span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Collected with strict aseptic techniques in a sterile container'
    },
    {
        id: 'urine',
        name: 'Urine',
        icon: '🥤',
        minimumVolume: '2 ml',
        collectionProcedure: 'Supra pubic tap in-out catheter technique of collection Aseptic draw from anwering catheter Sample collected altinertive of catheter and/or change of catheter',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Minimum Volume Required:</span> 2 ml<br><span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Supra pubic tap in-out catheter technique of collection Aseptic draw from anwering catheter Sample collected altinertive of catheter and/or change of catheter'
    },
    {
        id: 'bal-endotracheal',
        name: 'Bronchoalveolar Lavage (BAL)/ Endotracheal',
        icon: '🫁',
        minimumVolume: '4 ml',
        collectionProcedure: 'Collected with strict aseptic techniques in a sterile container',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Minimum Volume Required:</span> 4 ml<br><span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Collected with strict aseptic techniques in a sterile container'
    },
    {
        id: 'swab',
        name: 'Oropharyngeal / Nasopharyngeal Swab',
        icon: '🦠',
        minimumVolume: '',
        collectionProcedure: 'Follow Manufacturer Recommendations',
        description: '<span style="font-weight: bold; font-size: 1.1em;">Collection Procedure:</span> Follow Manufacturer Recommendations'
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
        
        // No items should be expanded by default
        const isExpanded = false;
        
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