import { Client } from '@notionhq/client';

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
  console.error("[-] Erreur critique : Les variables d'environnement sont vides.");
  process.exit(1);
}

const notion = new Client({ auth: token });

async function syncDatabase() {
  console.log("[+] Lancement de la synchronisation Sentinel...");
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Nouvelle page": {
          title: [{ text: { content: "⚖️ Licence Soft-Tech Mensuelle" } }]
        },
        "Cycle": {
          select: { name: "Juin 2026" }
        },
        "Montant (€)": {
          number: 2000
        },
        "Validation": {
          status: { name: "Validé" }
        }
      }
    });
    console.log("[SUCCESS] Connexion établie. Infrastructure Notion synchronisée ! ID:", response.id);
  } catch (error) {
    console.error("[-] Erreur d'authentification API :", error.message);
  }
}

syncDatabase();

cat agent_sync.js

rm agent_sync.js
nano agent_sync.js
import { Client } from '@notionhq/client';

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
  console.error("[-] Erreur critique : Les variables d'environnement sont vides.");
  process.exit(1);
}

const notion = new Client({ auth: token });

async function syncDatabase() {
  console.log("[+] Lancement de la synchronisation Sentinel...");
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Nouvelle page": {
          title: [{ text: { content: "⚖️ Licence Soft-Tech Mensuelle" } }]
        },
        "Cycle": {
          select: { name: "Juin 2026" }
        },
        "Montant (€)": {
          number: 2000
        },
        "Validation": {
          status: { name: "Validé" }
        }
      }
    });
    console.log("[SUCCESS] Connexion établie. Infrastructure Notion synchronisée ! ID:", response.id);
  } catch (error) {
    console.error("[-] Erreur d'authentification API :", error.message);
  }
}

syncDatabase();
cat agent_sync.js

cat << 'EOF' > agent_sync.js
import { Client } from '@notionhq/client';

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
  console.error("[-] Erreur : NOTION_TOKEN ou NOTION_DATABASE_ID manquant.");
  process.exit(1);
}

const notion = new Client({ auth: token });

async function syncDatabase() {
  console.log("[+] Initialisation de la synchronisation Sentinel via Node.js...");
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Nouvelle page": {
          title: [{ text: { content: "⚖️ Licence Soft-Tech Mensuelle" } }]
        },
        "Cycle": {
          select: { name: "Juin 2026" }
        },
        "Montant (€)": {
          number: 2000
        },
        "Validation": {
          status: { name: "Validé" }
        }
      }
    });
onsole.log("[SUCCESS] Alignement d'infrastructure Notion validé ! ID:", response.id);
  } catch (error) {
    console.error("[-] Échec de l'alignement de l'API. Détails :", error.message);
  }
}

syncDatabase();
EOF

termux-setup-storage
cd ~/storage/shared/Documents/Sentinel_vault
rm -rf .git

```bash
git init
git branch -m main
 ```bash
   git addgit commit -m "INIT: Architecture Sentinelle validée"
   ```bash
   git remote add origin https://github.com/sntnl-void/Sentinel-Vault-Sync.git
cd ~/storage/shared/Documents/Sentinel_vault
rm -rf .git
clear

