
from fastapi import FastAPI

from app.api import health


app = FastAPI(
    title="Marriage Connect API",
    description="Backend API for the Marriage Connect wedding marketplace.",
    version="0.1.0",
)


app.include_router(
    health.router,
    prefix="/api/v1",
    tags=["Health"],
)
