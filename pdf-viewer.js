document.addEventListener('DOMContentLoaded', function() {
    const selectedCaseStudy = JSON.parse(localStorage.getItem('selectedCaseStudy'));
    const pdfTestName = document.getElementById('pdf-test-name');
    
    // If no case study selected, redirect back
    if (!selectedCaseStudy) {
        window.location.href = 'case-studies.html';
        return;
    }
    
    // Display case study information in PDF header
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
    
    // Use the PDF URL from the case study data
    const pdfPath = caseStudy.pdfUrl || 'https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf';
    
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