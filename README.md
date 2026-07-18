# AI-Travel-Planner

---

# 📖 Overview

AI  Travel Planner is a mini AI full-stack web application that generates a personalized travel plan based on the user's destination, budget, travel days, trip type, and travel mode. The application uses FastAPI as the backend and Groq API to generate AI-powered travel recommendations.

---

# ✨ Features

- 📍 Destination-based travel planning
- 💰 Budget breakdown
- 📅 Day-wise itinerary
- 👨‍👩‍👧 Trip type selection (Solo, Friends, Family, Couple)
- 🚆 Travel mode selection
- 🎒 Packing checklist
- 🍛 Food recommendations
- 🏨 Hotel suggestions
- 🌤️ General weather advice
- ⚠️ Safety tips
- 🤖 AI-generated travel recommendations using Groq API

---

# 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- Python
- FastAPI
- Groq API

---

# ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd ai-smart-travel-planner
```

### 2. Install Python Packages

```bash
pip install -r requirements.txt
```

### 3. Configure Groq API Key

Create a `.env` file inside the `backend` folder.

```env
GROQ_API_KEY=your_api_key_here
```

### 4. Start FastAPI Server

```bash
uvicorn main:app --reload
```

### 5. Run Frontend

Open `frontend/index.html` using **Live Server** in VS Code.

---

# 📂 Project Structure

```
ai-smart-travel-planner/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── main.py
│   ├── groq_api.py
│   ├── .env
│   └── requirements.txt
│
└── README.md
```

---



# 📷 output:

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133351" src="https://github.com/user-attachments/assets/a41f9a3a-63f0-49a5-baa2-4a847bedb441" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133417" src="https://github.com/user-attachments/assets/01a19d2f-43bf-40fd-811e-953325cd4280" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133440" src="https://github.com/user-attachments/assets/79a2bb10-3f66-47f2-ac0d-9e6aa8979a17" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133502" src="https://github.com/user-attachments/assets/b23f55a5-1dba-4d33-9664-350cc12aa7b9" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133512" src="https://github.com/user-attachments/assets/cdea0a89-34cc-462a-9ff3-a2bb619f85b0" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133528" src="https://github.com/user-attachments/assets/02d233bd-a34a-482a-9bb5-c13d9c065628" />

<img width="1920" height="1080" alt="Screenshot 2026-07-18 133542" src="https://github.com/user-attachments/assets/961d7fe5-ec11-48c1-b824-521961af1452" />


---

# 🎯 Use Case & Problem Solved

## Problem
Planning a trip often requires visiting multiple websites to find destinations, estimate costs, choose attractions, and prepare a travel checklist.

## Solution
AI Smart Travel Planner simplifies the process by generating a personalized travel itinerary, budget breakdown, packing list, travel suggestions, hotel recommendations, food suggestions, and safety tips using AI.

---

# ▶️ How to Run Backend

1. Open the `backend` folder.
2. Install the required packages:

```bash
pip install -r requirements.txt
```

3. Create a `.env` file:

```env
GROQ_API_KEY=My_api_key_
```

4. Start the FastAPI server:

```bash
uvicorn main:app --reload
```

5. Open:

```
http://127.0.0.1:8000/docs
```

to test the API.

---

# 🔗 How to Connect Frontend & Backend

- Start the FastAPI backend.
- Open the frontend using Live Server.
- JavaScript sends user input to the FastAPI `/plan` endpoint using the Fetch API.
- FastAPI processes the request, calls the Groq API, and returns the AI-generated travel plan to the frontend.

---

# 📚 Learning Outcomes

- HTML, CSS, and JavaScript integration
- FastAPI backend development
- REST API communication
- Fetch API implementation
- AI API integration using Groq
- Environment variable management
- JSON request and response handling

---

# 🧠 Key Concepts

- Frontend Development
- Backend Development
- REST APIs
- FastAPI
- AI Integration
- Prompt Engineering
- Environment Variables (.env)
- Client-Server Communication

---

# 🚀 Future Improvements

- Live Weather API
- Maps Integration
- Hotel & Flight APIs
- Download Travel Plan as PDF
- User Authentication
- Save Travel History
- Multi-language Support

---

# 🎯 Ideal For

- Students
- AI Beginners
- Full Stack Learners
- Python Developers
- Portfolio Projects
- Resume Projects

---

# 🙏 Acknowledgments

- FastAPI
- Groq API
- HTML, CSS & JavaScript
- Python Community

---

# ✅ Conclusion

AI Smart Travel Planner demonstrates how AI can simplify travel planning by providing personalized recommendations through a modern full-stack web application. This project combines frontend development, backend APIs, and AI integration into a practical real-world solution.

---

# 👨‍💻 Author

**Harish M**


