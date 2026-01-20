from schemas.problem_schema import ProblemAnalysis

def mock_problem_analysis() -> ProblemAnalysis:
    return ProblemAnalysis(
        domain="SaaS Onboarding & Activation",
        target_users=[
            "Newly signed-up users",
            "Non-technical SMB owners",
            "Customer success managers",
            "Product managers",
            "Growth/activation teams",
        ],
        core_problem=(
            "Users drop off during the first-session onboarding flow due to unclear steps and missing guidance, "
            "leading to low activation and high first-month churn."
        ),
        pain_points=[
            "Too many steps before first value is delivered",
            "Jargon-heavy copy that confuses non-technical users",
            "No contextual tooltips or walkthroughs",
            "Missing sample data prevents users from seeing value quickly",
            "Inconsistent progress saving across steps",
            "No feedback loop to understand where users get stuck",
        ],
        constraints=[
            "Small team with limited engineering bandwidth",
            "Aggressive timelines for the next release",
            "Must support both desktop and mobile",
            "Need analytics without violating user privacy policies",
        ],
        severity_level=5
    )
