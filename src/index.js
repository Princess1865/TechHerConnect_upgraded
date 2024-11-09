 // JavaScript for dynamic content and interactivity
 document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for collaboration spaces
    const collaborationSpaces = [
        { name: 'Web Development Group', members: 15 },
        { name: 'Data Science Projects', members: 20 },
        { name: 'UX/UI Design Challenges', members: 12 }
    ];

    // Populate collaboration spaces
    const collaborationContainer = document.getElementById('collaboration-spaces');
    collaborationSpaces.forEach(space => {
        const spaceElement = document.createElement('div');
        spaceElement.innerHTML = `<h3>${space.name}</h3><p>Members: ${space.members}</p>`;
        collaborationContainer.appendChild(spaceElement);
    });

    // Simulated data for mentorship matches
    const mentorshipMatches = [
        { mentor: 'Alice Johnson', mentee: 'Emma Smith', field: 'Software Engineering' },
        { mentor: 'Sarah Lee', mentee: 'Olivia Brown', field: 'Data Analysis' }
    ];

    // Populate mentorship matches
    const mentorshipContainer = document.getElementById('mentorship-matches');
    mentorshipMatches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.innerHTML = `<p>${match.mentor} mentoring ${match.mentee} in ${match.field}</p>`;
        mentorshipContainer.appendChild(matchElement);
    });

    // Simulated data for resources
    const resources = [
        { title: 'Introduction to Machine Learning', type: 'Course' },
        { title: 'Effective Leadership in Tech', type: 'Webinar' },
        { title: 'Coding Best Practices', type: 'Article' }
    ];

    // Populate resource library
    const resourceContainer = document.getElementById('resource-library');
    resources.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.innerHTML = `<h3>${resource.title}</h3><p>Type: ${resource.type}</p>`;
        resourceContainer.appendChild(resourceElement);
    });

    // Simulated data for events
    const events = [
        { name: 'Tech Women Summit 2023', date: '2023-09-15' },
        { name: 'Coding Workshop: Building RESTful APIs', date: '2023-08-22' },
        { name: 'Networking Mixer', date: '2023-08-30' }
    ];

    // Populate event calendar
    const eventContainer = document.getElementById('event-calendar');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
        eventContainer.appendChild(eventElement);
    });
});

//collaborate navbar script

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

 // Add event listeners for filters
 document.querySelectorAll('.filter-options select').forEach(select => {
    select.addEventListener('change', function() {
        // Add your filter logic here
        console.log('Filter changed:', this.name, this.value);
    });
});

// Add event listeners for register buttons
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add your registration logic here
        console.log('Register clicked');
    });
});

//mentorship navbar script
 // Mobile menu toggle
 const mentorshipNavToggle = document.querySelector('.nav-toggle');
 const mentorshipNavLinks = document.querySelector('.nav-links');

 mentorshipNavToggle.addEventListener('click', () => {
     mentorshipNavLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!mentorshipNavToggle.contains(e.target) && !mentorshipNavLinks.contains(e.target)) {
         mentorshipNavLinks.classList.remove('active');
     }
 });

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const section = document.querySelector(this.getAttribute('href'));
         if (section) {
             section.scrollIntoView({
                 behavior: 'smooth'
             });
             mentorshipNavLinks.classList.remove('active');
         }
     });
 });

 //resources navbar script
       // Category buttons
       const categoryBtns = document.querySelectorAll('.category-btn');
       categoryBtns.forEach(btn => {
           btn.addEventListener('click', () => {
               categoryBtns.forEach(b => b.classList.remove('active'));
               btn.classList.add('active');
               // Add filtering logic here
           });
       });

       // Search functionality
       const searchBar = document.querySelector('.search-bar');
       searchBar.addEventListener('input', (e) => {
           const searchTerm = e.target.value.toLowerCase();
           // Add search logic here
       });
