from schemas.mvp_roadmap_schema import MVPRoadmap, MVPDayPlan

def mock_mvp_roadmap() -> MVPRoadmap:
    return MVPRoadmap(
        mvp_scope=[
            "Problem analysis module",
            "Product idea generation",
            "Feature breakdown output",
            "Tech stack recommendation",
            "API-based workflow",
            "Single demo project with realistic sample data",
        ],
        roadmap=[
            MVPDayPlan(
                day="Day 1",
                goals=[
                    "Set up backend structure",
                    "Implement problem analysis and idea generation"
                ],
                deliverables=[
                    "Working API endpoints",
                    "Structured JSON outputs"
                ]
            ),
            MVPDayPlan(
                day="Day 2",
                goals=[
                    "Add feature breakdown and tech stack modules",
                    "Prepare demo flow"
                ],
                deliverables=[
                    "End-to-end pipeline",
                    "Swagger-based demo",
                    "Clickable UI prototype wired to the backend",
                ]
            ),
            MVPDayPlan(
                day="Day 3",
                goals=[
                    "Polish UI/UX for the main flow",
                    "Capture basic analytics on usage to validate interest",
                ],
                deliverables=[
                    "Refined landing page and results view",
                    "Simple metrics on problems analyzed and ideas generated",
                ],
            ),
            MVPDayPlan(
                day="Day 4",
                goals=[
                    "Implement onboarding checklist and sample data seeding",
                    "Add contextual tooltips and help components",
                ],
                deliverables=[
                    "Checklist with progress persistence",
                    "Seeded demo data showing immediate value",
                ],
            ),
            MVPDayPlan(
                day="Day 5",
                goals=[
                    "Backend hardening and error handling",
                    "Introduce mock fallbacks and logging",
                ],
                deliverables=[
                    "Graceful fallbacks in all endpoints",
                    "Structured logs for request/response tracking",
                ],
            ),
            MVPDayPlan(
                day="Day 6",
                goals=[
                    "QA pass and accessibility improvements",
                    "Cross-browser testing and performance checks",
                ],
                deliverables=[
                    "A11y fixes (labels, focus states, contrast)",
                    "Lighthouse report with baseline metrics",
                ],
            ),
            MVPDayPlan(
                day="Day 7",
                goals=[
                    "Prepare launch assets and deploy",
                    "Set up basic product analytics dashboards",
                ],
                deliverables=[
                    "Deployed MVP (frontend + backend)",
                    "Dashboard tracking activation and drop-off points",
                ],
            ),
        ],
        demo_focus="Show how a vague problem turns into a complete, build-ready product plan.",
        future_scope=[
            "User authentication",
            "Saved projects",
            "Collaboration",
            "Live AI inference at scale",
            "Custom templates per industry (SaaS, fintech, health, etc.)",
        ]
    )
