# Clínica Duerksen — AI Agent Guide

## Quick Links
- **Live:** https://clinicaduerksen.paragu-ai.com
- **Repo:** github.com/Ai-Whisperers/clinica-duerksen
- **Docker service:** clinica-duerksen_web
- **Traefik:** Host(`clinicaduerksen.paragu-ai.com`)

## Pages (15+)
Home, Servicios, Evaluación Dental, Emergencia Dental, Turismo Dental, Casos, Niños, Promociones, Síntomas, Trabaja con Nosotros, Privacidad
Admin: analytics, citas, pacientes, comunicaciones, config, horarios, ingresos, inventario, kb, mensajes, planes, templates (13 pages)

## Components: 28
Full medical practice stack. Supabase + shadcn/ui.

## Build & Deploy
npm run build && docker build -t clinica-duerksen:prod . && docker stack deploy -c docker-compose.yml clinica-duerksen

## Critical Patterns
DB-backed (Supabase). Appointment booking. Dental tourism. Admin dashboard.
