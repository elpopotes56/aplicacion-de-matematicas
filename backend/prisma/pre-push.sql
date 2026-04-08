-- Eliminar vistas que bloquean ALTER TABLE durante db push
-- Prisma no puede alterar columnas mientras estas vistas existan
DROP VIEW IF EXISTS math_mobile_problem_queries_by_profile CASCADE;
