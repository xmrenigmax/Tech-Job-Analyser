# UK Tech Job Market Analyzer

This project is a comprehensive tool for analyzing the UK technology job market. It automatically fetches job data from various sources, processes and analyzes it, and presents the insights through an interactive web dashboard.

## Features

*   **Automated Data Fetching:** Gathers job postings from multiple sources like Adzuna, Reed.co.uk, and others.
*   **In-depth Data Analysis:** Uses Python with Pandas and Scikit-learn to analyze salaries, technologies, locations, and experience levels.
*   **Interactive Dashboard:** A React-based frontend with Tailwind CSS and Recharts to visualize the analyzed data.
*   **Automated Updates:** A GitHub Actions workflow runs weekly to keep the job data up-to-date.

## Tech Stack

*   **Data Processing:**
    *   Python
    *   Pandas
    *   NumPy
    *   Scikit-learn
    *   BeautifulSoup
    *   Requests
*   **Frontend:**
    *   React
    *   Vite
    *   Tailwind CSS
    *   Recharts
*   **Automation:**
    *   GitHub Actions

## Getting Started

### Prerequisites

*   Node.js and npm
*   Python 3.10+ and pip

### Data Processing Setup

1.  **Navigate to the data processing directory:**
    ```bash
    cd tech-job-analyser/data-processing
    ```

2.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `data-processing` directory and add your API keys, for example:
    ```
    ADZUNA_APP_ID=your_adzuna_app_id
    ADZUNA_APP_KEY=your_adzuna_app_key
    ```

4.  **Run the data processing script:**
    ```bash
    python process_data.py
    ```
    This will fetch the latest job data and save it as JSON files in the `tech-job-analyser/react-dashboard/src/data` directory.

### Frontend Setup

1.  **Navigate to the React dashboard directory:**
    ```bash
    cd tech-job-analyser/react-dashboard
    ```

2.  **Install npm dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Data Flow

1.  The `process_data.py` script is executed, either manually or by the GitHub Actions workflow.
2.  The script fetches job data from various APIs and websites.
3.  The collected data is cleaned, processed, and analyzed to extract insights.
4.  The results are saved as JSON files in `tech-job-analyser/react-dashboard/src/data`.
5.  The React dashboard application loads the JSON data to render the charts and visualizations.

## Automated Data Updates