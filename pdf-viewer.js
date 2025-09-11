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
        // Safari-compatible PDF loading with multiple fallbacks
        loadPdfInSafari(pdfIframe, pdfPath, caseStudy.title);
    }
    
    if (pdfDownloadLink) {
        pdfDownloadLink.href = pdfPath;
        pdfDownloadLink.textContent = `Download ${caseStudy.title} Details PDF`;
    }
}

function loadPdfInSafari(iframe, pdfUrl, title) {
    // Detect Safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        // Safari-specific PDF handling
        // Method 1: Try direct PDF URL with proper headers
        const safariPdfUrl = pdfUrl + '#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH';
        iframe.src = safariPdfUrl;
        
        // Fallback: If direct loading fails, try Google Docs viewer
        iframe.onerror = function() {
            console.log('Direct PDF loading failed, trying Google Docs viewer');
            const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
            iframe.src = googleViewerUrl;
            
            // Final fallback: Mozilla PDF.js viewer
            iframe.onerror = function() {
                console.log('Google Docs viewer failed, trying PDF.js');
                const pdfJsUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
                iframe.src = pdfJsUrl;
            };
        };
    } else {
        // For other browsers, use Google Docs viewer as primary
        const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
        iframe.src = googleViewerUrl;
        
        // Fallback to direct PDF if Google Docs fails
        iframe.onerror = function() {
            iframe.src = pdfUrl;
        };
    }
    
    // Add loading indicator
    iframe.onload = function() {
        console.log('PDF loaded successfully in iframe');
    };
}

// This function is no longer needed as we're displaying the actual PDF
// The PDF document will be loaded directly in the iframe