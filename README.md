# 🎯 Candidate Search Application

## 📝 Description

The **Candidate Search Application** allows employers to search for potential candidates using the GitHub API. Users can view candidate information, save promising candidates to a list, and manage this list as needed.&#8203;:contentReference[oaicite:2]{index=2}

## 📋 Table of Contents

- [Installation](#💾-installation)
- [Usage](#🚀-usage)
- [Features](#✨-features)
- [License](#📄-license)
- [Contact](#📞-contact)

## 💾 Installation

To set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/candidate-search.git


2. **Navigate to the project directory:**

   ```bash
   cd candidate-search

3. **Setup the enviroment variables:**

   ```bash
    VITE_GITHUB_TOKEN=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

4. **Start the deployed:**

    ```bash
    npm run dev

## 🚀 Usage

1. Search for Candidates: 

  Upon loading, the application displays information for a candidate, including their name, username, location, avatar, email, GitHub profile link, and company.

2. Navigate Between Candidates:

  Click the "−" button to skip to the next candidate without saving the current one.

  Save Potential Candidates:

  Click the "+" button to save the current candidate to your list of potential candidates.

3. View Saved Candidates:

  Navigate to the "Potential Candidates" page to view your saved candidates.

  This page displays a list of all saved candidates with their details.

4. Manage Saved Candidates:

  On the "Potential Candidates" page, click the "−" button next to a candidate to remove them from your saved list.

## ✨ Features

Candidate Information Display: View detailed information about each candidate retrieved from GitHub.

Save and Manage Candidates: Save promising candidates to a list and manage this list by removing candidates as needed.

Persistent Data: The list of saved candidates persists across page reloads using local storage.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 📞 Contact
Your Name - Michelle Guzmán

Project Link: https://github.com/MichGuzman/CandidateSearch
