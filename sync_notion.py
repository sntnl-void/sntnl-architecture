import os
import requests
import sys

NOTION_TOKEN = os.getenv("NOTION_TOKEN")
DATABASE_ID = os.getenv("NOTION_DATABASE_ID")

if not NOTION_TOKEN or not DATABASE_ID:
    print("[-] Erreur : NOTION_TOKEN ou NOTION_DATABASE_ID manquant.")
    sys.exit(1)

url = "https://api.notion.com/v1/pages"
headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

payload = {
    "parent": {"database_id": DATABASE_ID},
    "properties": {
        "Contrat / Licence": {"title": [{"text": {"content": "⚖️ Licence Soft-Tech Mensuelle"}}]},
        "Validation": {"select": {"name": "Validé"}},
        "Montant (€)": {"number": 2000},
        "Cycle": {"select": {"name": "Juin 2026"}},
        "Prochain renouvellement": {"date": {"start": "2026-07-01"}},
        "Clause / Notes": {"rich_text": [{"text": {"content": "Renouveau automatique via Sentinel protocol."}}]}
    }
}

print("[+] Synchronisation avec Notion...")
response = requests.post(url, headers=headers, json=payload)

if response.status_code in [200, 201]:
    print("[SUCCESS] Données injectées avec succès dans la table !")
else:
    print(f"[-] Échec. Code : {response.status_code} | Détails : {response.text}")
