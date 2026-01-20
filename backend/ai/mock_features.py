from schemas.feature_schema import FeatureBreakdown

def mock_feature_breakdown() -> FeatureBreakdown:
    return FeatureBreakdown(
        core_features=[
            "Problem input and analysis",
            "Structured product idea generation",
            "Feature and MVP planning output",
            "Simple one-page summary view for sharing with stakeholders",
            "Interactive onboarding checklist with progress save",
            "Seed project with sample data to reach first 'aha' quickly",
            "Inline tooltips and contextual help for each critical step",
        ],
        advanced_features=[
            "User accounts and saved ideas",
            "Collaboration for teams",
            "Export to pitch deck or README",
            "Tagging and categorization of ideas by domain and audience",
            "Version history for iterating on the same problem over time",
            "Role-based access (PM, Engineer, CS) with tailored views",
            "Notifications and reminders to complete onboarding",
            "A/B testing of onboarding variants",
        ],
        ai_features=[
            "Context-aware idea refinement",
            "Feasibility scoring based on constraints",
            "Automatic suggestion of edge cases and potential risks",
            "Recommendation of MVP-first scope vs. nice-to-have backlog items",
            "Persona-based copy suggestions to reduce jargon",
            "Predictive drop-off detection with suggested fixes",
        ]
    )
