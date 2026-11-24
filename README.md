# TERRABOVINO — Maquetación completa

Proyecto de vistas HTML independientes con Bootstrap 5 y un solo `css/style.css`.

## Inicio

Abrir `PagPrincipal.html` con Live Server. Las cinco vistas iniciales se copiaron sin cambios de contenido.

La imagen `fondo bovino.jpg` es opcional: el CSS incluye un fondo verde alternativo. Si dispones de la imagen original, cópiala a la raíz.

Los formularios, indicadores y tablas contienen datos ficticios. No existe autenticación, validación de negocio, persistencia ni comunicación con servidor.

## Vistas y rutas

### Públicas (4)

- `publicas/introduccion-proyecto.html` — Introducción al proyecto
- `publicas/verificar-codigo.html` — Verificar código de recuperación
- `publicas/crear-nueva-contrasena.html` — Crear nueva contraseña
- `publicas/acceso-denegado.html` — Acceso denegado

### Paneles (4)

- `paneles/dashboard-ganadero.html` — Dashboard del ganadero
- `paneles/dashboard-veterinario.html` — Dashboard del veterinario
- `paneles/dashboard-trabajador.html` — Dashboard del trabajador
- `paneles/dashboard-administrador.html` — Dashboard del administrador

### Aprender (8)

- `aprender/introduccion-ganaderia.html` — Introducción a la ganadería
- `aprender/razas-bovinas.html` — Razas bovinas
- `aprender/enrazamiento.html` — Enrazamiento
- `aprender/alimentacion-bovina.html` — Alimentación bovina
- `aprender/insumos-ganaderos.html` — Insumos ganaderos
- `aprender/vitaminas.html` — Vitaminas
- `aprender/enfermedades.html` — Enfermedades
- `aprender/manejo-ganadero.html` — Manejo ganadero

### Mi ganado (12)

- `mi-ganado/listado-bovinos.html` — Listado de bovinos
- `mi-ganado/registrar-bovino.html` — Registrar bovino
- `mi-ganado/ficha-individual.html` — Ficha individual
- `mi-ganado/editar-bovino.html` — Editar información del bovino
- `mi-ganado/registro-pesajes.html` — Registro de pesajes
- `mi-ganado/historial-pesajes.html` — Historial de pesajes
- `mi-ganado/seguimiento-crecimiento.html` — Seguimiento del crecimiento
- `mi-ganado/gestion-lotes.html` — Gestión de lotes
- `mi-ganado/movimientos-ganado.html` — Movimientos del ganado
- `mi-ganado/historial-movimientos.html` — Historial de movimientos
- `mi-ganado/registro-mortalidad.html` — Registro de mortalidad
- `mi-ganado/registro-destete.html` — Registro de destete

### Potreros (7)

- `potreros/listado-potreros.html` — Listado de potreros
- `potreros/registrar-potrero.html` — Registrar potrero
- `potreros/detalles-potrero.html` — Detalles del potrero
- `potreros/editar-potrero.html` — Editar potrero
- `potreros/ocupacion-potreros.html` — Ocupación de potreros
- `potreros/rotacion-potreros.html` — Rotación de potreros
- `potreros/historial-rotaciones.html` — Historial de rotaciones

### Sanidad (12)

- `sanidad/control-sanitario.html` — Control sanitario
- `sanidad/registro-enfermedades.html` — Registro de enfermedades
- `sanidad/vacunacion.html` — Vacunación
- `sanidad/tratamientos-medicos.html` — Tratamientos médicos
- `sanidad/aplicacion-vitaminas.html` — Aplicación de vitaminas
- `sanidad/desparasitaciones.html` — Desparasitaciones
- `sanidad/controles-veterinarios.html` — Controles veterinarios
- `sanidad/analisis-laboratorio.html` — Análisis de laboratorio
- `sanidad/cuarentena.html` — Cuarentena
- `sanidad/certificados-sanitarios.html` — Certificados sanitarios
- `sanidad/historial-sanitario.html` — Historial sanitario
- `sanidad/estadisticas-sanitarias.html` — Estadísticas sanitarias

### Alimentación e insumos (12)

- `alimentacion-insumos/gestion-alimentacion.html` — Gestión de alimentación
- `alimentacion-insumos/registro-alimentacion.html` — Registro de alimentación
- `alimentacion-insumos/alimentacion-lote.html` — Alimentación por lote
- `alimentacion-insumos/consumo-agua.html` — Consumo de agua
- `alimentacion-insumos/listado-insumos.html` — Listado de insumos
- `alimentacion-insumos/registrar-insumo.html` — Registrar insumo
- `alimentacion-insumos/inventario.html` — Inventario
- `alimentacion-insumos/medicamentos.html` — Medicamentos
- `alimentacion-insumos/vitaminas.html` — Vitaminas
- `alimentacion-insumos/alimentos.html` — Alimentos
- `alimentacion-insumos/alertas-inventario.html` — Alertas de inventario
- `alimentacion-insumos/control-vencimientos.html` — Control de vencimientos

### Producción (6)

- `produccion/produccion-leche.html` — Producción de leche
- `produccion/registro-diario-leche.html` — Registro diario de leche
- `produccion/produccion-carne.html` — Producción de carne
- `produccion/registro-otros-productos.html` — Registro de otros productos
- `produccion/historial-produccion.html` — Historial de producción
- `produccion/estadisticas-produccion.html` — Estadísticas de producción

### Reproducción (9)

- `reproduccion/control-reproductivo.html` — Control reproductivo
- `reproduccion/registro-montas.html` — Registro de montas
- `reproduccion/inseminaciones.html` — Inseminaciones
- `reproduccion/gestaciones.html` — Gestaciones
- `reproduccion/control-fertilidad.html` — Control de fertilidad
- `reproduccion/registro-partos.html` — Registro de partos
- `reproduccion/registro-nacimientos.html` — Registro de nacimientos
- `reproduccion/historial-reproductivo.html` — Historial reproductivo
- `reproduccion/calendario-reproductivo.html` — Calendario reproductivo

### Servicios ganaderos (5)

- `servicios/catalogo-servicios.html` — Catálogo de servicios
- `servicios/prestamo-reproductores.html` — Préstamo de reproductores
- `servicios/solicitar-servicio.html` — Solicitar servicio
- `servicios/mis-servicios.html` — Mis servicios
- `servicios/historial-servicios.html` — Historial de servicios

### Comercial (10)

- `comercial/compras-ganado.html` — Compras de ganado
- `comercial/ventas-ganado.html` — Ventas de ganado
- `comercial/compras-insumos.html` — Compras de insumos
- `comercial/ventas-productos.html` — Ventas de productos
- `comercial/gestion-clientes.html` — Gestión de clientes
- `comercial/gestion-proveedores.html` — Gestión de proveedores
- `comercial/registro-ingresos.html` — Registro de ingresos
- `comercial/registro-gastos.html` — Registro de gastos
- `comercial/costos-veterinarios.html` — Costos veterinarios
- `comercial/historial-transacciones.html` — Historial de transacciones

### Calendario ganadero (7)

- `calendario/calendario-general.html` — Calendario general
- `calendario/programar-actividades.html` — Programar actividades
- `calendario/programar-vacunaciones.html` — Programar vacunaciones
- `calendario/programar-controles-veterinarios.html` — Programar controles veterinarios
- `calendario/programar-inseminaciones.html` — Programar inseminaciones
- `calendario/programar-partos.html` — Programar partos
- `calendario/recordatorios-actividades.html` — Recordatorios de actividades

### Actividades de la finca (6)

- `actividades/listado-actividades.html` — Listado de actividades
- `actividades/registrar-actividad.html` — Registrar actividad
- `actividades/asignar-actividades.html` — Asignar actividades a trabajadores
- `actividades/actividades-pendientes.html` — Actividades pendientes
- `actividades/actividades-completadas.html` — Actividades completadas
- `actividades/historial-actividades.html` — Historial de actividades

### Reportes (8)

- `reportes/reporte-general-ganado.html` — Reporte general de ganado
- `reportes/reporte-crecimiento.html` — Reporte de crecimiento
- `reportes/reporte-produccion.html` — Reporte de producción
- `reportes/reporte-sanitario.html` — Reporte sanitario
- `reportes/reporte-reproductivo.html` — Reporte reproductivo
- `reportes/reporte-potreros.html` — Reporte de potreros
- `reportes/reporte-comercial.html` — Reporte comercial
- `reportes/estadisticas-generales.html` — Estadísticas generales

### Administración (9)

- `administracion/gestion-usuarios.html` — Gestión de usuarios
- `administracion/registrar-usuario.html` — Registrar usuario
- `administracion/editar-usuario.html` — Editar usuario
- `administracion/gestion-roles.html` — Gestión de roles
- `administracion/gestion-permisos.html` — Gestión de permisos
- `administracion/asignacion-permisos.html` — Asignación de permisos
- `administracion/gestion-fincas.html` — Gestión de fincas
- `administracion/registro-auditoria.html` — Registro de auditoría
- `administracion/configuracion-sistema.html` — Configuración del sistema

### Complementarios (10)

- `complementarios/centro-notificaciones.html` — Centro de notificaciones
- `complementarios/gestion-documentos.html` — Gestión de documentos
- `complementarios/maquinaria-equipos.html` — Maquinaria y equipos
- `complementarios/mantenimiento-equipos.html` — Mantenimiento de equipos
- `complementarios/condiciones-climaticas.html` — Condiciones climáticas
- `complementarios/copias-seguridad.html` — Copias de seguridad
- `complementarios/sesiones-activas.html` — Gestión de sesiones activas
- `complementarios/perfil-usuario.html` — Perfil de usuario
- `complementarios/editar-perfil.html` — Editar perfil
- `complementarios/cambiar-contrasena.html` — Cambiar contraseña

## Vistas existentes preservadas

- `PagPrincipal.html`
- `login.html`
- `registro.html`
- `recuperacion_cuenta.html`
- `seleccion-rol.html`

## Decisiones visuales pendientes

- Logotipo e imagen de fondo originales (no adjuntos).
- Textos técnicos definitivos del módulo Aprender.
- Diseño y datos reales de gráficas, reportes, calendario y fichas.
- Flujos reales de permisos, autenticación y recuperación de cuenta.

## Nota de navegación

El menú lateral usa HTML `<details>` para funcionar sin JavaScript. En móvil aparece dentro de un menú desplegable.
