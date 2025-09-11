// Mobile detection function
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Check if PDF can be displayed inline
function canDisplayPdfInline() {
    // Most mobile browsers struggle with PDF iframes from external sources
    return !isMobileDevice();
}

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
    
    // Load the PDF document with mobile-friendly approach
    loadPdfDocument(selectedCaseStudy);
});

function loadPdfDocument(caseStudy) {
    const pdfContent = document.getElementById('pdf-content');
    const pdfIframe = document.getElementById('pdf-iframe');
    const pdfDownloadLink = document.getElementById('pdf-download-link');
    
    // Use the PDF URL from the case study data
    const pdfPath = caseStudy.pdfUrl || 'https://res.cloudinary.com/dirdm86ij/image/upload/v1757566076/INFEXN_-_DR.PRADEEP_yn8c5s.pdf';
    
    if (isMobileDevice()) {
        // Mobile-friendly approach
        displayMobilePdf(pdfContent, pdfPath, caseStudy.title);
    } else {
        // Desktop approach with iframe
        if (pdfIframe) {
            // Try Google Docs viewer as fallback for better compatibility
            const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfPath)}&embedded=true`;
            pdfIframe.src = googleViewerUrl;
        }
    }
    
    // Always provide download link
    if (pdfDownloadLink) {
        pdfDownloadLink.href = pdfPath;
        pdfDownloadLink.textContent = `Download ${caseStudy.title} Details PDF`;
    }
}

function displayMobilePdf(container, pdfUrl, title) {
    // Create mobile-friendly PDF display
    container.innerHTML = `
        <div class="mobile-pdf-container">
            <div class="pdf-preview">
                <div class="pdf-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#E53E3E"/>
                        <path d="M14 2V8H20" fill="#C53030"/>
                        <text x="12" y="16" text-anchor="middle" fill="white" font-size="6" font-weight="bold">PDF</text>
                    </svg>
                </div>
                <h3>${title}</h3>
                <p>Tap the buttons below to view or download this PDF document.</p>
            </div>
            
            <div class="mobile-pdf-actions">
                <a href="${pdfUrl}" target="_blank" class="pdf-action-btn view-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    Open PDF
                </a>
                
                <a href="${pdfUrl}" download class="pdf-action-btn download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    Download PDF
                </a>
                
                <a href="https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}" target="_blank" class="pdf-action-btn google-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    View in Google
                </a>
            </div>
        </div>
    `;
}

// This function is no longer needed as we're displaying the actual PDF
// The PDF document will be loaded directly in the iframe