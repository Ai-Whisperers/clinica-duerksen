-- Seed Services
INSERT INTO services (slug, title, description, icon, sort_order) VALUES
('odontologia-general', 'Odontologia General y Preventiva', 'Limpiezas profesionales, restauraciones y cuidado preventivo.', 'Stethoscope', 1),
('implantes-dentales', 'Implantes Dentales', 'Restauracion permanente con implantes de titanio.', 'Smile', 2),
('ortodoncia', 'Ortodoncia', 'Brackets metalicos, esteticos y alineadores invisibles.', 'Shield', 3),
('estetica-dental', 'Estetica Dental', 'Blanqueamiento, carillas y diseno de sonrisa.', 'Sparkles', 4),
('endodoncia', 'Endodoncia', 'Tratamientos de conducto indoloros.', 'Heart', 5),
('protesis-dental', 'Protesis Dental', 'Protesis fijas y removibles de calidad.', 'Zap', 6),
('periodoncia', 'Periodoncia', 'Tratamiento de encias.', 'ScanLine', 7),
('odontopediatria', 'Odontopediatria', 'Cuidado dental para ninos.', 'Baby', 8),
('cirugia-oral', 'Cirugia Oral', 'Extracciones y cirugia menor.', 'Siren', 9),
('emergencias-dentales', 'Emergencias Dentales', 'Atencion rapida para urgencias.', 'ShieldCheck', 10);

-- Seed Team Members
INSERT INTO team_members (name, title, bio, sort_order) VALUES
('Dr. Victor German Duerksen Braun', 'Director / Fundador', 'Mas de 26 anos dedicados a la odontologia de excelencia. Egresado de la Universidad Nacional de La Plata.', 1),
('Dra. Gloria Duerksen', 'Odontologa', 'Especialista en odontologia preventiva y estetica. Atencion personalizada para toda la familia.', 2);

-- Seed Testimonials
INSERT INTO testimonials (patient_name, rating, text, treatment_type, is_featured) VALUES
('Paciente Verificado', 5, 'Excelente atencion del Dr. Duerksen. Muy profesional y cuidadoso.', 'Implantes Dentales', true),
('Paciente Verificado', 5, 'La mejor clinica dental de Asuncion. Ambiente limpio y moderno.', 'Odontopediatria', true),
('Paciente Verificado', 5, 'Me realice un blanqueamiento y quede encantada con el resultado.', 'Estetica Dental', true),
('Paciente Verificado', 5, 'Tenia mucho miedo pero el Dr. Duerksen me hizo sentir comoda.', 'Endodoncia', false),
('Paciente Verificado', 5, 'Llevo 15 anos atendiendome. Confianza total.', 'Odontologia General', false);

-- Seed Settings
INSERT INTO settings (key, value) VALUES
('business_hours', '{"weekdays": {"morning": "08:00-12:00", "afternoon": "14:30-18:00"}, "saturday": null, "sunday": null}'::jsonb),
('contact', '{"phone": "+595 21 298 755", "email": "info@clinicaduerksen.com.py", "whatsapp": "59521298755"}'::jsonb),
('address', '{"city": "Asuncion", "state": "Central", "country": "Paraguay"}'::jsonb);

-- Seed Treatment Prices
INSERT INTO treatment_prices (service_name, price_min, price_max) VALUES
('Consulta General + Limpieza', 150000, 250000),
('Restauracion Simple', 200000, 400000),
('Endodoncia', 800000, 1500000),
('Extraccion Simple', 200000, 350000),
('Blanqueamiento Dental', 1000000, 2000000),
('Carilla de Porcelana', 2000000, 4000000),
('Implante Dental', 5000000, 10000000),
('Ortodoncia Completa', 5000000, 12000000),
('Corona de Porcelana', 1500000, 3000000);