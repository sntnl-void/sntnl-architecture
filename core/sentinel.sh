#!/data/data/com.termux/files/usr/bin/bash

source "$HOME/sntnl-architecture/config/env.sh"

log_event() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] [$1] $2" >> "$LOG_FILE"
}

log_event "INFO" "Initialisation du cycle Sentinel..."

# --- MODULE D'ACQUISITION ---
log_event "EXEC" "Lancement du Knowledge Scraper (Python)..."
python $ARCH_DIR/core/scraper.py >> "$LOG_FILE" 2>&1
log_event "EXEC" "Acquisition terminée."
# ----------------------------

log_event "SYNC" "Synchronisation des données vers sntnl-void..."
cd "$ARCH_DIR" || exit
git add .
if ! git diff-index --quiet HEAD; then
    git commit -m "Sentinel Automaton - Data Sync $(date +'%Y-%m-%d %H:%M:%S')"
    git push origin main >> "$LOG_FILE" 2>&1
    log_event "SUCCESS" "Nouvelles données propulsées sur GitHub."
else
    log_event "IDLE" "Aucune asynchronie/modification détectée."
fi
