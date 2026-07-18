import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_travel_plan(data):

    prompt = f"""
You are an AI Travel Planner.

Destination: {data.destination}
Budget: ₹{data.budget}
Days: {data.days}
Trip Type: {data.tripType}
Travel Mode: {data.travelMode}

Generate:

1. Day-wise itinerary
2. Budget breakdown
3. Packing checklist
4. Budget saving tips
5. Top tourist attractions
6. Food recommendations
7. Hotel suggestions
8. Travel suggestions
9. Weather advice
10. Safety tips

Keep the response beginner-friendly and well formatted.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
        max_tokens=2000
    )

    return response.choices[0].message.content