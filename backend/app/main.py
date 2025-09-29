from fastapi import FastAPI
from app.routes.report_routes import router as report_routes

app = FastAPI(title="Mini Regulatory Report Assistant")

# Include routes
app.include_router(report_routes)
