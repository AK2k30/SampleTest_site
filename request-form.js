document.addEventListener('DOMContentLoaded', function() {
    const selectedTest = JSON.parse(localStorage.getItem('selectedTest'));
    const selectedCaseStudy = JSON.parse(localStorage.getItem('selectedCaseStudy'));
    const testInfo = document.getElementById('test-info');
    const form = document.getElementById('request-form');
    // Navigation is now handled by the navigation bar
    const successMessage = document.getElementById('success-message');
    const submitAnotherBtn = document.getElementById('submit-another-btn');
    
    // Display test information
    if (selectedTest) {
        testInfo.textContent = `Request ${selectedTest.name} - Fill out the form below to schedule your appointment`;
    }
    
    // Submit another request button
    submitAnotherBtn.addEventListener('click', function() {
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.reset();
        document.getElementById('test-info').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Form submission - Store data locally
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data as object
        const formData = {
            submission_date: new Date().toISOString(),
            full_name: form.full_name.value,
            email: form.email.value,
            phone: form.phone.value,
            age: form.age.value,
            gender: form.gender.value,
            test_name: selectedTest ? selectedTest.name : 'Unknown',
            test_price: selectedTest ? selectedTest.price : 'Unknown',
            test_duration: selectedTest ? selectedTest.duration : 'Unknown',
            case_study_title: selectedCaseStudy ? selectedCaseStudy.title : 'N/A',
            case_study_category: selectedCaseStudy ? selectedCaseStudy.category : 'N/A',
            preferred_date: form.preferred_date.value,
            preferred_time: form.preferred_time.value,
            insurance: form.insurance.value,
            symptoms: form.symptoms.value,
            medical_history: form.medical_history.value,
            emergency_contact: form.emergency_contact.value,
            emergency_phone: form.emergency_phone.value,
            consent: form.consent.checked ? 'Yes' : 'No',
            privacy: form.privacy.checked ? 'Yes' : 'No'
        };
        
        // Store in localStorage
        let existingRequests = JSON.parse(localStorage.getItem('testRequests') || '[]');
        existingRequests.push(formData);
        localStorage.setItem('testRequests', JSON.stringify(existingRequests));
        
        // Show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferred-date').min = today;
});