
from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health_endpoint_returns_success():
    response = client.get("/api/v1/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "marriage-connect-api",
    }


def test_unknown_endpoint_returns_not_found():
    response = client.get("/api/v1/unknown")

    assert response.status_code == 404
