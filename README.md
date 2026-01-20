# 🚀 Problix  
### Turning real-world problems into clear product ideas 

---

## ✨ What is Problix?

**Problix** is a product-thinking tool that helps you go from a **raw problem statement** to a **clear, structured MVP plan**.

Instead of guessing:
- *What should I build?*
- *Which features matter?*
- *Is this idea even viable?*

Problix gives you **clarity before execution**.

You describe a problem in plain English — Problix breaks it down into something you can actually build.

---

## 🧠 What Problix Does

From a single problem input, Problix generates:

- 🔍 **Problem Analysis**  
  Understand the real pain point and its context

- 💡 **Product Idea & Positioning**  
  What to build, for whom, and why it matters

- 🧩 **Feature Breakdown**  
  Core features, advanced features, and AI-driven ideas

- 🛠 **Tech Stack Suggestions**  
  Practical recommendations for frontend, backend, and tooling

- 🗺 **MVP Roadmap**  
  A phased plan to move from idea → working product

All outputs are structured, readable, and easy to act on.

---

## 🎯 Who is this for?

Problix is useful for:
- Founders validating an idea
- Developers planning side projects
- Product thinkers structuring MVPs
- Teams stuck at the “idea chaos” stage

If you’ve ever had a good idea but didn’t know **where to start**, Problix is for you.

---

## 🏗 How it Works (High Level)

- A clean **Next.js frontend** collects the problem input
- A **FastAPI backend** orchestrates the analysis
- Modular AI pipelines generate each output step
- Prompt-driven design keeps logic transparent and customizable

Problix can run entirely using **mock intelligence** for safe testing, or switch to **real AI** when configured.

---

## 🧰 Tech Stack

**Frontend**
- Next.js 14 (App Router)
- Tailwind CSS

**Backend**
- FastAPI (Python)
- Pydantic

**AI**
- Google Gemini via `google-genai`
- Prompt-based generation system

---

## 📁 Project Structure

backend/
main.py # FastAPI app & routes
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
lib/ # API helpers & config


---

## ⚡ Getting Started (Local Setup)

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
API Docs:

http://127.0.0.1:8000/docs
▶ Frontend Setup
cd frontend
pnpm install   # or npm install / yarn
Create frontend/.env.local:

NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000
Run frontend:

pnpm dev
Open:

http://localhost:3000
🔌 API Endpoints
All endpoints use POST and accept a simple request body.

Endpoints

/analyze-problem

/generate-idea

/generate-features

/generate-tech-stack

/generate-mvp-roadmap

Example request

{
  "problem": "Your problem statement here"
}
🧠 Prompt System
Prompt templates live in:

backend/ai/prompts/
To customize behavior:

Copy prompts to another folder

Set PROMPT_DIR in backend/.env

Problix will automatically load your custom prompts

This keeps experimentation safe and flexible.

🔐 Security & Safety
API keys are never committed

.env files are gitignored

Mock mode is enabled by default

Live AI usage requires explicit configuration

🌱 Future Direction
Some ideas being explored:

Saving & comparing generated ideas

Exporting results to PDF / Notion

Idea scoring & prioritization

Collaboration features

Problix exists to make the early stage of building products clearer, calmer, and more intentional.
