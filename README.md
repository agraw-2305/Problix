# 🚀 Problix
## Where problems turn into powerful product ideas

## ✨ Overview

**Problix** converts a plain-English problem statement into a **structured MVP blueprint**.

It helps founders, developers, and product thinkers move from *idea confusion* to *execution clarity* by generating:

- Clear problem analysis  
- Actionable product ideas & positioning  
- Feature prioritization  
- Recommended tech stack  
- A phased MVP roadmap  

You can run Problix entirely with **offline mock intelligence** or switch to **live AI** powered by Google Gemini.

---

## 🧠 What Problix Generates

From a single input problem:

- 🔍 **Problem Analysis** – identifies the real pain point  
- 💡 **Product Ideation** – value proposition & differentiation  
- 🧩 **Feature Breakdown** – core, advanced, and AI features  
- 🛠 **Tech Stack Suggestions** – frontend, backend, infra  
- 🗺 **MVP Roadmap** – step-by-step execution plan  

---

## 🏗 Architecture

- **Frontend**: Next.js App Router with a responsive UI
- **Backend**: FastAPI with modular AI pipelines
- **AI Layer**: Prompt-driven generators (mock or Gemini)
- **Config-based**: Switch modes without code changes

---

## 🧰 Tech Stack

**Frontend**
- Next.js 14 (React)
- Tailwind CSS

**Backend**
- FastAPI (Python)
- Pydantic

**AI**
- Google Gemini (`google-genai`)
- Prompt-based generation

---

## 📁 Project Structure

backend/
main.py # FastAPI app, CORS, routes
ai/
problem_parser.py # Problem analysis
idea_generator.py # Product ideation
feature_generator.py # Feature breakdown
tech_stack_generator.py # Tech stack suggestions
mvp_roadmap_generator.py # MVP roadmap
prompts/ # Prompt templates
schemas/ # Pydantic models

frontend/
app/ # Next.js App Router
components/ # UI components
lib/ # API helpers

---

## ⚡ Quick Start

### Prerequisites
- Python **3.10+**
- Node.js **18+**
- pnpm / npm / yarn

---

### ▶ Backend Setup

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r backend/requirements.txt
Create backend/.env:

AI_MODE=mock
# GOOGLE_API_KEY=your_key_here
# GEMINI_MODEL=gemini-2.5-flash
# PROMPT_DIR=C:\absolute\path\to\custom_prompts
Run backend:

uvicorn backend.main:app --reload --port 8000
Swagger UI:

http://127.0.0.1:8000/docs
****▶ Frontend Setup*****
cd frontend
pnpm install   # or npm install / yarn
Create frontend/.env.local:

NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000
Run frontend:

pnpm dev
Open:

http://localhost:3000
🔧 Configuration
Backend
AI_MODE: mock | live

GOOGLE_API_KEY / GEMINI_API_KEY: required for live AI

GEMINI_MODEL: default gemini-2.5-flash

PROMPT_DIR: optional absolute path for custom prompts

Frontend
NEXT_PUBLIC_API_BASE: backend base URL

🧠 Prompt System
Default prompts:

backend/ai/prompts/
To customize safely:

Copy prompts to another folder

Set PROMPT_DIR to its absolute path

Problix will automatically load them

🔌 API Endpoints (POST)
/analyze-problem

/generate-idea

/generate-features

/generate-tech-stack

/generate-mvp-roadmap

Example request:

{
  "problem": "Your problem statement here"
}
