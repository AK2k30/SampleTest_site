# Medical Specialist Selection Tool

## Overview

This is a web-based medical specialist selection tool that helps users discover recommended medical tests based on their chosen specialist. The application provides a simple three-step workflow: select a medical specialist, view their recommended tests, and access detailed information about each test including preparation instructions and procedures.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a multi-page architecture with streamlined navigation:

- **Main Landing Page (index.html)**: Entry point with "Start Test" button (specialist selection removed)
- **Sample Types Page (sample-types.html)**: Accordion-style layout displaying different medical sample types with expandable descriptions
- **Case Studies Page (case-studies.html)**: Grid layout displaying 5 medical case studies in card format
- **Tests Display Page (tests.html)**: Shows recommended tests for selected specialist (legacy page)
- **PDF Viewer Page (pdf-viewer.html)**: Displays real PDF documents with detailed test information

### Navigation and State Management
- Uses localStorage for cross-page state persistence and form data storage
- JavaScript-based client-side routing between pages
- New simplified flow: Landing → Sample Types → Case Studies
- Client-side Excel generation and download using SheetJS library
- No backend server required - fully client-side application

### Data Structure
- Sample types data with descriptions and medical icons (7 types total)
- Sample-type specific case studies with realistic medical scenarios including:
  - Emergency medicine cases
  - Infectious disease investigations  
  - Cancer detection studies
  - Neurological assessments
  - Critical care monitoring
- Each case study includes category, severity level, and background imagery
- Data is organized by sample type for relevant medical context

### Styling and UI
- Green-blue gradient background (matching provided design mockups)
- Decorative dot pattern overlay for visual enhancement
- CSS Grid and Flexbox for responsive layouts
- Accordion-style expandable cards for sample types
- Card-based grid layout for case studies (2x2 + 1 centered)
- Rounded corners, shadows, and hover effects
- Mobile-responsive design with viewport meta tags
- Consistent color scheme and typography across pages

### User Interaction Flow
1. User clicks "Start Test" button on main landing page
2. Sample types page displays accordion with expandable sections for 7 different sample types:
   - Blood
   - Sterile body fluids/aspirates  
   - Urine
   - Bronchoalveolar Lavage (BAL)
   - Cerebrospinal Fluid (CSF)
   - Oropharyngeal/Nasopharyngeal Swab
   - Endotracheal Aspirate
3. Users can expand different sample types to read descriptions
4. "View Case Studies" buttons navigate to case studies page with sample-type specific content
5. Case studies page displays 5 different case study cards relevant to the selected sample type
6. Each sample type has unique medical case studies with realistic scenarios and conditions
7. Back navigation preserves user context throughout the flow
8. PDF viewer shows detailed information for selected case studies

## External Dependencies

### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with modern features (Grid, Flexbox, gradients)
- **Vanilla JavaScript**: Client-side interactivity and state management

### Browser APIs
- **localStorage**: Cross-page data persistence
- **DOM API**: Dynamic content manipulation and event handling

### External Dependencies
- **SheetJS (xlsx)**: Client-side Excel file generation and download
- **CDN-hosted library**: No local installation required
- No build tools or compilation needed
- No server dependencies - purely client-side data handling
- Self-contained application that runs entirely in the browser

The application is designed as a static web application that can be hosted on any web server or CDN without requiring backend infrastructure.