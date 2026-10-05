# Ollama — Instalación y ejecución de modelos LLM

Esta guía describe cómo instalar Ollama en Windows, descargar los modelos de lenguaje Qwen3 4B y Llama 3.2 3B, y ejecutarlos localmente para su posterior integración con el sistema de gestión académica.

## 1. Descargar e instalar Ollama

Descargar Ollama desde su página oficial e instalarlo en Windows:

https://ollama.com/download

## 2. Descargar los modelos

Abrir una terminal (CMD o PowerShell) y ejecutar el comando del modelo que se desea utilizar.

### Qwen3 4B

```powershell
ollama pull qwen3:4b
ollama pull qwen3:0.6b
```

### Llama 3.2 3B

```powershell
ollama pull llama3.2:3b
```

Se pueden descargar ambos modelos y seleccionar cuál ejecutar posteriormente.

## 3. Verificar los modelos instalados

Para comprobar que los modelos se descargaron correctamente, ejecutar:

```powershell
ollama list
```

Este comando muestra los modelos disponibles localmente.

## 4. Ubicación de los modelos

Ollama almacena los modelos en la siguiente ruta de Windows:

```text
C:\Users\richa\.ollama\models
```

La carpeta contiene los archivos del modelo y sus manifiestos.

> **Nota:** La ruta anterior corresponde al usuario `richa`. Si Ollama está instalado con otro usuario de Windows o se configuró una ubicación personalizada, la ruta puede ser diferente.

## 5. Ejecutar un modelo

Para iniciar una conversación con el modelo seleccionado, ejecutar el comando correspondiente.

### Ejecutar Qwen3 4B

```powershell
ollama run qwen3:4b
ollama run qwen3:0.6b
```

### Ejecutar Llama 3.2 3B

```powershell
ollama run llama3.2:3b
```

Una vez iniciado, se puede escribir directamente en la terminal para interactuar con el modelo.

Para salir de la conversación, escribir:

```text
/bye
```

## 6. Comandos de referencia

| Comando | Descripción |
|---|---|
| `ollama pull qwen3:4b` | Descarga Qwen3 4B |
| `ollama pull llama3.2:3b` | Descarga Llama 3.2 3B |
| `ollama list` | Lista los modelos instalados |
| `ollama run qwen3:4b` | Ejecuta Qwen3 4B |
| `ollama run llama3.2:3b` | Ejecuta Llama 3.2 3B |
| `ollama serve` | Inicia el servidor de Ollama |

## 7. API local de Ollama

Ollama permite interactuar con los modelos mediante una API local, lo que facilita su integración con el backend desarrollado en Spring Boot.

La dirección predeterminada de la API es:

```text
http://localhost:11434
```

**Nota:** En una instalación de Windows, Ollama puede ejecutarse automáticamente en segundo plano. Si el servidor ya está activo, no es necesario ejecutar `ollama serve` nuevamente.
