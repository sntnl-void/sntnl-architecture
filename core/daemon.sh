#!/data/data/com.termux/files/usr/bin/bash

source "$HOME/sntnl-architecture/config/env.sh"

# Intervalle en secondes (900s = 15 minutes)
INTERVAL=900 

log_event() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] [DAEMON] $1" >> "$LOG_FILE"
}

log_event "Démarrage du processus fantôme. Cycle défini sur ${INTERVAL}s."

while true; do
    log_event "Déclenchement du moteur Sentinel..."
    $ARCH_DIR/core/sentinel.sh
    
    log_event "Mise en veille pour ${INTERVAL} secondes..."
    sleep $INTERVAL
done
