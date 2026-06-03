import os
import sys
import requests

def main():
    token = os.environ.get("NOTION_TOKEN")
    db_id = os.environ.get("NOTION_DATABASE_ID")

    if not token or not db_id:
        print("[-] Erreur : NOTION_TOKEN ou NOTION_DATABASE_ID manquant.")
        sys.exit(1)

    print("[+] Synchronisation avec la nouvelle architecture Notion...")
    
    # Nouvelle structure d'en-tête compatible avec les jetons d'accès personnels
    url = "https://api.notion.com/v1/pages"
    headers = {
        "Authorization": f"Bearer {token}",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
    }

    # Données correspondantes à ta Licence Soft-Tech de Juin
    payload = {
        "parent": {"database_id": db_id},
        "properties": {
            "⚖️ Licence Soft-Tech Mensuelle": {
                "title": [{"text": {"content": "Licence Soft-Tech Mensuelle"}}]
            },
            "Cycle": {
                "select": {"name": "Juin 2026"}
            },
            "Montant (€)": {
                "number": 2000
            },
            "Validation": {
                "status": {"name": "Validé"}
            }
        }
    }

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200 or response.status_code == 201:
        print("[SUCCESS] Alignement d'infrastructure Notion validé pour Juin 2026 ! (+2000€)")
    else:
        print(f"[-] Échec. Code : {response.status_code} | Détails : {response.text}")

if __name__ == "__main__":
    main()
