from schemas.product_schema import ProductIdea

def mock_product_idea() -> ProductIdea:
    return ProductIdea(
        product_name="Onboardly AI",
        one_liner_pitch=(
            "An AI onboarding copilot that turns first-session friction into a guided, value-first experience."
        ),
        value_proposition=(
            "Helps SaaS teams boost activation by generating a step-by-step onboarding flow with sample data, "
            "contextual tips, and a checklist that delivers the first 'aha!' moment within minutes."
        ),
        key_differentiator=(
            "Unlike generic product tours, Onboardly AI adapts the flow to user persona and task intent, "
            "recommending the minimal path to value while instrumenting analytics automatically."
        ),
        target_impact=(
            "Raises activation rate, reduces first-month churn, and gives CS/product teams live insight into "
            "where users get stuck—so the onboarding continuously improves."
        ),
    )
