#### Run tests:
* dotnet test


#### What is name space

* namespace en C# es equivalente a un package en Java. Ambos sirven para organizar el código y evitar colisiones de nombres entre clases.



#### Folder default where solutions are saved:

* C:\Users\richa\source\repos

#### Solution vs Project

Solution Name (Nombre de la Solución)
 * Es un contenedor que agrupa uno o más proyectos relacionados.
 * Facilita la organización y administración de múltiples proyectos dentro de un mismo desarrollo.
 * Tiene su propio archivo con la extensión .sln, donde se guardan las referencias a los proyectos incluidos.
 * Puede incluir proyectos de diferentes tipos, por ejemplo, una aplicación web con un backend en C# y un frontend en Angular.

Project Name (Nombre del Proyecto)
 * Representa un proyecto individual dentro de una solución.
 * Es una unidad de compilación que genera un archivo ejecutable, una biblioteca o algún otro artefacto.
 * Puede contener código fuente, archivos de configuración, dependencias, etc.
 * Puedes tener varios proyectos dentro de una misma solución.
 * El nombre del proyecto también define la carpeta donde se almacenan sus archivos dentro de la solución.

Conclusión
 * Solution Name: es el contenedor de múltiples proyectos.
 * Project Name: es un componente dentro de la solución y puede haber varios proyectos en una sola solución.

Ejemplos
Ejemplo 1:
 * Solution Name: MiAplicacion
 * Project Name 1: MiAplicacion.Web (para el frontend)
 * Project Name 2: MiAplicacion.API (para el backend)
 * Project Name 3: MiAplicacion.UnitTests (para pruebas unitarias)
 * Project Name 4: MiAplicacion.IntegrationTests (para pruebas integracion)
 * Project Name 5: MiAplicacion.SystemTests (para pruebas de sistema)