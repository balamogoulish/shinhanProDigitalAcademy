from fastapi import FastAPI
import redis

app = FastAPI()
redis_client = redis.Redis(host='redish-test-5.oqijfq.ng.0001.apn2.cache.amazonaws.com', port=6379, db=0)

@app.get("/items/{id}")
def read_item(id: str):
    value = redis_client.get(id)
    if value:
        return {"id": id, "value": value.decode()}
    else:
        return {"message": "Item not found"}

@app.post("/items/{id}")
def create_item(id: str, value: str):
    if redis_client.get(id):
        return {"message": "Item already exists"}
    else:
        redis_client.set(id, value)
        return {"id": id, "value": value}

@app.put("/items/{id}")
def update_item(id: str, value: str):
    if redis_client.get(id):
        redis_client.set(id, value)
        return {"id": id, "value": value}
    else:
        return {"message": "Item not found"}

@app.delete("/items/{id}")
def delete_item(id: str):
    if redis_client.get(id):
        redis_client.delete(id)
        return {"message": "Item deleted"}
    else:
        return {"message": "Item not found"}