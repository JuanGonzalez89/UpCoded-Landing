---
name: request-project-quote
description: Enviar una solicitud de proyecto o presupuesto a UpCoded (agencia de desarrollo web en Argentina) en nombre de una persona que lo pidió explícitamente.
---

# Solicitar un proyecto a UpCoded

Usar solo cuando la persona usuaria pidió contactar a UpCoded y confirmó los datos a enviar.

1. Reunir: nombre, empresa, WhatsApp (con código de país), servicio, etapa, mensaje (8–2000 caracteres) y, opcional, email.
2. `service` ∈ `web | automation | system | unsure`. `stage` ∈ `idea | improve | urgent | evaluating`.
3. `POST https://upcoded.dev/api/start-project` con JSON y `startedAt` = `Date.now()` tomado al menos 4 segundos antes del envío.
4. `{"ok": true}` indica éxito; 400 = datos inválidos (el campo `error` dice cuál); 429 = esperar.

Esquema completo: https://upcoded.dev/openapi.json
Formulario para humanos: https://upcoded.dev/es/iniciar-proyecto
