# React SRE App

React SRE App is a sophisticated application designed to provide visual insights and management capabilities for Site Reliability Engineers (SREs). This application integrates data from various sources to display the status of different rooms and areas, highlighting critical issues and enabling SREs to take appropriate actions.

## Table of Contents

- [React SRE App](#react-sre-app)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Features](#features)
  - [Usage](#usage)
  - [Development](#development)
    - [Folder Structure](#folder-structure)
    - [Important Files](#important-files)
    - [Running Tests](#running-tests)
    - [Build and Deployment](#build-and-deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gsampaio-rh/react-sre-app
    cd react-sre-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1. **Start the development server:**

    ```bash
    npm start
    ```

    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- **Visual Insights:** Display the status of different rooms and areas with real-time updates.
- **Critical Issue Highlighting:** Highlight rooms with critical issues such as fires.
- **Integration with Red Hat Insights:** Enable or disable insights to get detailed information about potential problems.

## Usage

1. **Navigate through the application:**
   - Use the sidebar to enable or disable Red Hat Insights.
   - Click on rooms to see more details or highlight issues.

2. **Check for specific rules:**
   - The application checks for specific rules (e.g., `abort_command_issued|ABORT_COMMAND_ISSUED`) and displays alerts accordingly.

## Development

### Folder Structure

- `src/`
  - `assets/`: Contains CSS, data, and images.
  - `components/`: Contains React components used in the application.
  - `contexts/`: Contains context providers for global state management.
  - `hooks/`: Contains custom React hooks.
  - `services/`: Contains service functions for data fetching and processing.

### Important Files

- `App.js`: Main application component.
- `Floor.js`: Component for displaying the floor layout.
- `Room.js`: Component for displaying individual rooms.
- `Sidebar.js`: Component for the sidebar with configuration options.
- `FireModal.js`: Modal component for displaying fire alerts.
- `ComponentModal.js`: Modal component for displaying component details.

### Running Tests

To run tests, use the following command:

```bash
npm test
```

### Build and Deployment

To build the app for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the build folder.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
