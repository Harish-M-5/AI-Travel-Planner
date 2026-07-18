from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from groq_service import generate_travel_plan

app = FastAPI(
    title="AI Travel Planner"
)

# Frontend connection allow
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data format
class TravelRequest(BaseModel):
    destination: str
    budget: int
    days: int
    tripType: str
    travelMode: str


# Test API
@app.get("/")
def home():
    return {
        "message": "AI Smart Travel Planner API Running"
    }


# Receive travel details
@app.post("/plan")
def create_plan(data: TravelRequest):
    ai_response = generate_travel_plan(data)

    return {
        "travel_plan": ai_response
    }