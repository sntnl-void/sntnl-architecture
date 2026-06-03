import { Client } from "@notionhq/client";

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
        console.log("[SUCCESS] Alignement d'infrastructure Notion validé ! Page créée ID:", response.id);
    } catch (error) {
        console.error("[-] Échec de l'alignement de l'API. Détails :", error.message);
    }
}

syncDatabase();
