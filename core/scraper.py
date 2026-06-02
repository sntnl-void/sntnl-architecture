import requests
import json
import time
import os

# Configuration
API_URL = "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
DATA_FILE = os.path.join(os.environ.get("HOME"), "sntnl-architecture", "data", "market_state.json")

def fetch_data():
    start_time = time.time()
    try:
        response = requests.get(API_URL, timeout=5)
        response.raise_for_status()
        data = response.json()
        latency = time.time() - start_time
        
        # Structuration de la donnée extraite
        payload = {
            "timestamp": time.strftime('%Y-%m-%d %H:%M:%S'),
            "symbol": data.get("symbol"),
            "price": float(data.get("price")),
            "request_latency_seconds": round(latency, 4)
        }
        
        # Enregistrement local
        with open(DATA_FILE, "a") as f:
            f.write(json.dumps(payload) + "\n")
            
        print(f"SUCCESS: {payload['symbol']} at {payload['price']} (Latency: {payload['request_latency_seconds']}s)")
        
    except Exception as e:
        print(f"ERROR: Echec de l'acquisition - {e}")

if __name__ == "__main__":
    fetch_data()
