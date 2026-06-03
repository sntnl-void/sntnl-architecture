import { NotionAgentsClient } from "@notionhq/agents-client";

// Chargement des variables d'environnement
const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
    console.error("[-] Variables d'environnement manquantes.");
    process.exit(1);
}

async function run() {
    console.log("[+] Initialisation du client NotionAgents...");
    const client = new NotionAgentsClient({ auth: token });
    
    // Ton bloc logique d'interconnexion
    try {
        const agent = await client.agents.create({
            database_id: databaseId,
            name: "Sentinel Agent",
            context: "Gestion de la validation des licences Soft-Tech"
        });
        
        console.log(`[SUCCESS] Agent initialisé avec l'ID: ${agent.id}`);
        
        // Exemple d'interaction de validation
        const response = await agent.chat({
            message: "Valider le cycle Juin 2026 pour un montant de 2000"
        });
        console.log("[+] Réponse de l'agent :", response);
    } catch (error) {
        console.error("[-] Erreur d'exécution de l'agent :", error.message);
    }
}

run();
