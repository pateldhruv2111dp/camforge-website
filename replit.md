# Camforge Technologies Website

## Project Overview
A modern, professional website for Camforge Technologies showcasing CAD/CAM services, training programs, and authorized reseller partnerships. Built with React, TypeScript, and PostgreSQL database integration.

## Brand Identity
- Primary Color: #de0925 (Red)
- Secondary Color: #030035 (Dark Navy Blue)
- Font: Inter (professional, modern)

## Key Features
- Responsive design for all devices
- Hero section with gradient background
- Company overview with key features
- Comprehensive services section (CAM programming, CAD services, training)
- Authorized reseller & training programs for Mastercam and Carveco
- Founder profile section with Mr. Dhruv Patel
- Contact section with database-integrated form
- Professional navigation and footer

## Architecture
- Frontend: React with TypeScript, Tailwind CSS, Shadcn/UI components
- Backend: Express.js with TypeScript
- Database: PostgreSQL with Drizzle ORM
- Forms: React Hook Form with Zod validation
- Styling: Tailwind CSS with custom brand colors

## Recent Changes
- **January 2025**: Added PostgreSQL database integration
- Added contact inquiry form with database storage
- Implemented contact_inquiries table with fields: name, email, phone, company, subject, message, serviceInterest
- Created API endpoints for contact form submission and inquiry retrieval
- Updated storage layer from memory to database storage
- Integrated Camforge logo (PNG with transparent background)
- Updated typography to League Spartan fonts across entire website
- Modified hero section text: "Precision CAD/CAM Solutions & Industrial Training Institute"
- Restructured page layout: moved Authorized Reseller section before Services section
- Applied consistent CAD/CAM styling and MASTERCAM/CARVECO branding throughout

## Database Schema
- users: Basic user management (existing)
- contact_inquiries: Stores website contact form submissions with timestamp

## User Preferences
- Professional, modern design aesthetic
- Red and dark blue brand colors
- Clean, responsive layout
- Database integration for contact management

## Contact Information
- Email: support@camforge.in
- Phone: +91 9825060415
- Address: 4th Floor, A-10, Pelican Complex, Near Barcelona Complex, S.P. Ring Road, Odhav, Ahmedabad - 382415, Gujarat, India

## Technical Notes
- Logo pending: User has CDR file but needs web format (PNG/SVG)
- All sections implemented and functional
- Database successfully configured and deployed