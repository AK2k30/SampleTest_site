document.addEventListener('DOMContentLoaded', function() {
    const selectedCaseStudy = JSON.parse(localStorage.getItem('selectedCaseStudy'));
    const testTitle = document.getElementById('test-title');
    const pdfTestName = document.getElementById('pdf-test-name');
    const pdfContent = document.getElementById('pdf-content');
    const backToTestsBtn = document.getElementById('back-to-tests-btn');
    const requestTestBtn = document.getElementById('request-test-btn');
    
    // If no case study selected, redirect back
    if (!selectedCaseStudy) {
        window.location.href = 'case-studies.html';
        return;
    }
    
    // Display case study information
    if (testTitle) {
        testTitle.textContent = `${selectedCaseStudy.title} - Detailed Information`;
    }
    if (pdfTestName) {
        pdfTestName.textContent = selectedCaseStudy.title;
    }
    
    // Load the actual PDF document
    loadPdfDocument(selectedCaseStudy);
    
    // Back button functionality is now handled by navigation bar
    
    // Request Test button removed
});

function loadPdfDocument(caseStudy) {
    const pdfIframe = document.getElementById('pdf-iframe');
    const pdfDownloadLink = document.getElementById('pdf-download-link');
    
    // Set the PDF source to the actual PDF file
    const pdfPath = 'attached_assets/BE_CSE_AIML__CSE_DS__AI_DS_AI_ML_DE (1)_1757313571028.pdf';
    
    if (pdfIframe) {
        pdfIframe.src = pdfPath;
    }
    
    if (pdfDownloadLink) {
        pdfDownloadLink.href = pdfPath;
        pdfDownloadLink.textContent = `Download ${caseStudy.title} Details PDF`;
    }
}

// This function is no longer needed as we're displaying the actual PDF
// The PDF document will be loaded directly in the iframe