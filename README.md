# Dntech Site

## Overview
The Dntech Site is a responsive web application designed to showcase the services and team of Dynamic Network Technologies. The site is structured to provide a seamless user experience across various devices by utilizing reusable components for the header and footer.

## Project Structure
```
dntech-site
├── index.html         # Main HTML document for the website
├── header.html        # Reusable header markup
├── footer.html        # Reusable footer markup
├── css
│   ├── styles.css     # Main styles for the website
│   └── responsive.css  # Styles for responsive design
├── js
│   ├── fragments.js    # JavaScript for loading header and footer
│   └── main.js         # Main JavaScript functionality
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## Features
- **Responsive Design**: The website adapts to different screen sizes using media queries and flexible layouts.
- **Reusable Components**: The header and footer are stored in separate HTML files, allowing for easy updates and maintenance.
- **Dynamic Team Section**: The team section is populated dynamically using JavaScript, making it easy to update team member information.
- **Newsletter Subscription**: Users can subscribe to a newsletter, with email addresses stored in local storage to prevent duplicates.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd dntech-site
   ```
3. Open `index.html` in a web browser to view the site.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Fetch API for loading HTML fragments

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.