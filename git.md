# Guía de Git

Esta documentación contiene el flujo de trabajo utilizado para gestionar versiones del proyecto `todo-app` utilizando Git y GitHub.

## Flujo general

El proyecto utiliza ramas para separar el desarrollo de nuevas funcionalidades, correcciones y cambios de documentación.

El flujo principal es:

1. Actualizar `master`.
2. Crear una rama para el cambio.
3. Trabajar en la rama.
4. Revisar los cambios.
5. Crear un commit.
6. Subir la rama a GitHub.
7. Crear un Pull Request.
8. Hacer merge hacia `master`.
9. Actualizar `master` local.
10. Eliminar la rama terminada.

---

## 1. Git Status

El comando `git status` permite consultar el estado actual del repositorio.

Muestra información como:

- La rama actual.
- Archivos modificados.
- Archivos nuevos.
- Archivos preparados para commit.
- Archivos que todavía no han sido preparados.

### Comando

```bash
git status
```

### Ejemplo

```text
On branch feature/git-docs

Changes not staged for commit:
  modified: GIT.md
```

En este caso:

- `feature/git-docs` indica la rama actual.
- `modified: GIT.md` indica que el archivo fue modificado.
- `not staged` significa que todavía no se ha ejecutado `git add` sobre el archivo.

---

## 2. Git Add

El comando `git add` permite preparar cambios para incluirlos en el próximo commit.

Los cambios pasan del Working Directory al Staging Area.

### Agregar un archivo específico

```bash
git add GIT.md
```

### Agregar todos los cambios

```bash
git add .
```

### Verificar los cambios preparados

Después de utilizar `git add`, podemos ejecutar:

```bash
git status
```

Si el archivo está preparado correctamente, Git mostrará:

```text
Changes to be committed:
    new file: GIT.md
```

### Quitar un archivo del Staging Area

Si agregamos un archivo por error y todavía no queremos incluirlo en el commit:

```bash
git restore --staged GIT.md
```

Esto no elimina el archivo ni sus modificaciones. Simplemente lo devuelve al Working Directory.

---

## 3. Git Diff

El comando `git diff` permite visualizar los cambios realizados en los archivos que todavía no han sido preparados para un commit.

### Ver cambios sin preparar

```bash
git diff
```

Este comando muestra las diferencias entre el estado actual de los archivos y la última versión registrada por Git.

### Ver un resumen de los cambios

```bash
git diff --stat
```

Este comando muestra un resumen indicando qué archivos fueron modificados y cuántas líneas fueron agregadas o eliminadas.

### Ver cambios preparados

Cuando utilizamos `git add`, los cambios pasan al Staging Area.

Para revisar esos cambios antes de realizar el commit:

```bash
git diff --cached
```

También podemos utilizar:

```bash
git diff --staged
```

Ambos comandos permiten revisar lo que está preparado para el próximo commit.

---

## 4. Estados de los cambios

Durante el trabajo con Git, los archivos pueden pasar por diferentes estados.

```text
Working Directory
       │
       │ git add
       ▼
Staging Area
       │
       │ git commit
       ▼
Repository
```

### Working Directory

Es el estado en el que trabajamos normalmente.

Por ejemplo, modificamos:

```text
GIT.md
```

Git detecta el cambio mediante:

```bash
git status
```

y puede mostrar:

```text
Changes not staged for commit:
    modified: GIT.md
```

### Staging Area

Cuando ejecutamos:

```bash
git add GIT.md
```

el cambio pasa al Staging Area.

Git mostrará:

```text
Changes to be committed:
    modified: GIT.md
```

### Repository

Cuando ejecutamos:

```bash
git commit
```

los cambios preparados pasan al historial del repositorio.

---

## 5. Git Commit

El comando `git commit` permite guardar en el historial los cambios que previamente fueron preparados mediante `git add`.

### Comando

```bash
git commit -m "mensaje del commit"
```

### Ejemplo

```bash
git commit -m "docs: agregar guía inicial de Git"
```

El mensaje debe describir de forma clara qué cambio se realizó.

### Convención de commits

Una forma recomendada de escribir commits es utilizar prefijos:

```text
feat: nueva funcionalidad
fix: corrección de un error
docs: cambios en documentación
refactor: reorganización del código
style: cambios de formato
test: cambios relacionados con pruebas
chore: tareas de mantenimiento
```

### Ejemplos

```bash
git commit -m "feat: agregar formulario de tareas"
git commit -m "fix: corregir creación de tareas"
git commit -m "docs: actualizar guía de Git"
git commit -m "refactor: separar lógica de TodoList"
```

---

## 6. Git Branch

Las ramas permiten trabajar en diferentes funcionalidades o cambios sin modificar directamente la rama principal.

### Ver las ramas locales

```bash
git branch
```

La rama actual aparece marcada con `*`.

Ejemplo:

```text
  master
* feature/git-docs
```

### Ver ramas locales y remotas

```bash
git branch -a
```

Ejemplo:

```text
* feature/git-docs
  master
  remotes/origin/master
```

### Crear una nueva rama

```bash
git branch nombre-rama
```

### Crear una rama y posicionarse en ella

```bash
git checkout -b feature/nombre
```

Ejemplo:

```bash
git checkout -b feature/todo-list
```

### Cambiar de rama

```bash
git checkout nombre-rama
```

Ejemplo:

```bash
git checkout master
```

---

## 7. Flujo con Feature Branches

Para desarrollar una nueva funcionalidad se recomienda crear una rama independiente.

Por ejemplo:

```bash
git checkout master
```

Primero actualizamos `master`:

```bash
git pull origin master
```

Después creamos la nueva rama:

```bash
git checkout -b feature/todo-list
```

El flujo queda:

```text
master
   │
   │ git checkout -b
   ▼
feature/todo-list
   │
   ├── desarrollo
   ├── git add
   ├── git commit
   └── git push
```

Esto permite mantener `master` estable mientras se desarrolla la funcionalidad.

---

## 8. Git Remote

Git utiliza repositorios remotos para sincronizar nuestro repositorio local con plataformas como GitHub.

### Ver los repositorios remotos

```bash
git remote -v
```

Ejemplo:

```text
origin  https://github.com/usuario/todo-app.git (fetch)
origin  https://github.com/usuario/todo-app.git (push)
```

Normalmente `origin` representa el repositorio remoto principal.

---

## 9. Git Push

El comando `git push` permite subir los commits locales al repositorio remoto.

### Primera vez que se sube una rama

```bash
git push -u origin feature/nombre
```

Ejemplo:

```bash
git push -u origin feature/todo-list
```

La opción `-u` establece la relación entre la rama local y la rama remota.

Después de configurar el upstream, podemos utilizar:

```bash
git push
```

---

## 10. Git Pull

El comando `git pull` permite descargar los cambios del repositorio remoto e integrarlos en la rama local actual.

### Actualizar la rama actual

```bash
git pull
```

También podemos especificar el remoto y la rama:

```bash
git pull origin master
```

Un uso común es actualizar `master` antes de comenzar una nueva funcionalidad:

```bash
git checkout master
git pull origin master
```

---

## 11. Git Log

El comando `git log` permite consultar el historial de commits.

### Ver el historial

```bash
git log
```

### Historial resumido

```bash
git log --oneline
```

Ejemplo:

```text
a1b2c3d docs: agregar guía inicial de Git
e4f5g6h feat: agregar TodoForm
i7j8k9l chore: configurar proyecto
```

El formato resumido facilita visualizar rápidamente los commits realizados.

---

## 12. Git Show

El comando `git show` permite consultar los detalles de un commit específico.

### Ver el último commit

```bash
git show
```

### Ver un commit específico

```bash
git show ID_DEL_COMMIT
```

Ejemplo:

```bash
git show a1b2c3d
```

Permite revisar los cambios realizados en ese commit.

---

## 13. Git Restore

`git restore` permite descartar modificaciones realizadas en el Working Directory.

### Descartar cambios de un archivo

```bash
git restore GIT.md
```

Esto devuelve el archivo al estado del último commit.

> ⚠️ Los cambios descartados de esta manera pueden perderse. Utilizar el comando con cuidado.

### Quitar un archivo del Staging Area

```bash
git restore --staged GIT.md
```

Este comando no elimina los cambios del archivo. Solamente los saca del Staging Area.

---

## 14. Git Reset

`git reset` permite mover el estado de la rama a un commit anterior.

### Quitar un commit manteniendo los cambios

```bash
git reset --soft HEAD~1
```

El commit se elimina del historial local, pero los cambios permanecen preparados.

### Quitar un commit y mantener los cambios sin preparar

```bash
git reset HEAD~1
```

### ⚠️ Reset Hard

```bash
git reset --hard HEAD~1
```

Este comando elimina el commit y también descarta los cambios asociados.

> ⚠️ Utilizar `--hard` con mucho cuidado porque puede provocar pérdida de trabajo.

---

## 15. Git Merge

`git merge` permite integrar los cambios de una rama en otra.

Por ejemplo, después de terminar una funcionalidad:

```bash
git checkout master
```

Actualizamos `master`:

```bash
git pull origin master
```

Después integramos la rama:

```bash
git merge feature/todo-list
```

El flujo sería:

```text
feature/todo-list
       │
       │ git merge
       ▼
     master
```

---

## 16. Pull Request

Un Pull Request permite solicitar la integración de una rama en otra utilizando GitHub.

El flujo habitual es:

```text
feature/todo-list
       │
       │ git push
       ▼
     GitHub
       │
       │ Pull Request
       ▼
     master
```

Antes de crear el Pull Request debemos asegurarnos de que:

- Los cambios funcionan correctamente.
- El código fue revisado.
- Los commits tienen mensajes claros.
- No existen cambios innecesarios.
- La rama está actualizada.

---

## 17. Conflictos de Merge

Un conflicto ocurre cuando Git no puede determinar automáticamente cómo combinar cambios realizados en diferentes ramas.

Ejemplo:

```text
<<<<<<< HEAD
Código de master
=======
Código de feature
>>>>>>> feature/todo-list
```

Para solucionar un conflicto:

1. Abrir los archivos afectados.
2. Revisar las diferencias.
3. Elegir qué código conservar.
4. Eliminar los marcadores del conflicto.
5. Guardar los archivos.
6. Ejecutar `git add`.
7. Crear el commit correspondiente.

Ejemplo:

```bash
git add archivo-conflictivo
git commit -m "fix: resolver conflicto de merge"
```

---

## 18. Eliminar una Rama

Después de integrar una funcionalidad, podemos eliminar la rama que ya no necesitamos.

### Eliminar rama local

```bash
git branch -d feature/todo-list
```

### Eliminar rama remota

```bash
git push origin --delete feature/todo-list
```

Antes de eliminar una rama debemos asegurarnos de que sus cambios ya fueron integrados.

---

## 19. Flujo de Trabajo Completo

Este es el flujo recomendado para trabajar en una nueva funcionalidad.

### Paso 1. Ir a master

```bash
git checkout master
```

### Paso 2. Actualizar master

```bash
git pull origin master
```

### Paso 3. Crear la rama

```bash
git checkout -b feature/nombre-funcionalidad
```

### Paso 4. Desarrollar

Realizamos los cambios necesarios en el proyecto.

### Paso 5. Revisar el estado

```bash
git status
```

### Paso 6. Revisar los cambios

```bash
git diff
```

También podemos consultar un resumen:

```bash
git diff --stat
```

### Paso 7. Preparar los cambios

```bash
git add .
```

### Paso 8. Revisar el Staging Area

```bash
git diff --cached
```

### Paso 9. Crear el commit

```bash
git commit -m "feat: descripción de la funcionalidad"
```

### Paso 10. Subir la rama

Primera vez:

```bash
git push -u origin feature/nombre-funcionalidad
```

Después:

```bash
git push
```

### Paso 11. Crear Pull Request

En GitHub:

```text
feature/nombre-funcionalidad
            ↓
          master
```

### Paso 12. Hacer Merge

Una vez aprobado el Pull Request, se integran los cambios en `master`.

### Paso 13. Actualizar master local

```bash
git checkout master
git pull origin master
```

### Paso 14. Eliminar la rama

```bash
git branch -d feature/nombre-funcionalidad
```

---

## 20. Comandos de Consulta Rápida

### Estado

```bash
git status
```

### Ramas

```bash
git branch
```

### Ramas locales y remotas

```bash
git branch -a
```

### Cambios

```bash
git diff
```

### Resumen de cambios

```bash
git diff --stat
```

### Cambios preparados

```bash
git diff --cached
```

### Preparar cambios

```bash
git add .
```

### Commit

```bash
git commit -m "mensaje"
```

### Subir cambios

```bash
git push
```

### Descargar cambios

```bash
git pull
```

### Historial

```bash
git log --oneline
```

### Repositorios remotos

```bash
git remote -v
```

### Cambiar de rama

```bash
git checkout nombre-rama
```

### Crear y cambiar de rama

```bash
git checkout -b nombre-rama
```

### Fusionar una rama

```bash
git merge nombre-rama
```

### Eliminar rama local

```bash
git branch -d nombre-rama
```

---

## 21. Ejemplo Práctico con Todo App

Supongamos que queremos crear una nueva funcionalidad para mostrar la lista de tareas.

Primero actualizamos `master`:

```bash
git checkout master
git pull origin master
```

Creamos la rama:

```bash
git checkout -b feature/todo-list
```

Desarrollamos la funcionalidad.

Revisamos los cambios:

```bash
git status
git diff
git diff --stat
```

Preparamos los archivos:

```bash
git add .
```

Revisamos lo que vamos a guardar:

```bash
git diff --cached
```

Creamos el commit:

```bash
git commit -m "feat: crear TodoList y TodoItem"
```

Subimos la rama:

```bash
git push -u origin feature/todo-list
```

Creamos el Pull Request en GitHub y lo integramos en `master`.

Después:

```bash
git checkout master
git pull origin master
```

Finalmente eliminamos la rama:

```bash
git branch -d feature/todo-list
```

---

## 22. Buenas Prácticas

### Crear ramas para funcionalidades

Evitar trabajar directamente sobre `master`.

Usar ramas descriptivas:

```text
feature/todo-list
feature/login
feature/register
fix/login-error
refactor/user-service
docs/git-guide
```

### Hacer commits pequeños

Cada commit debería representar un cambio concreto.

Evitar:

```bash
git commit -m "cambios"
```

Preferir:

```bash
git commit -m "feat: agregar validación del formulario"
```

### Revisar antes de hacer commit

Antes de guardar cambios:

```bash
git status
git diff
git diff --cached
```

### Mantener `master` actualizado

Antes de crear una nueva rama:

```bash
git checkout master
git pull origin master
```

### No subir información sensible

Nunca subir archivos que contengan:

- Contraseñas.
- API keys.
- Tokens.
- Variables de entorno.
- Credenciales.

Por ejemplo:

```text
.env
```

debe estar incluido en `.gitignore`.

---

# Flujo resumido

```text
                    Git Workflow

                         master
                           │
                           │ git pull
                           ▼
                    Crear feature
                           │
                           ▼
                 feature/nueva-funcion
                           │
                    ┌──────┴──────┐
                    │             │
                 trabajar       probar
                    │             │
                    └──────┬──────┘
                           │
                       git status
                           │
                       git diff
                           │
                        git add
                           │
                    git diff --cached
                           │
                       git commit
                           │
                       git push
                           │
                           ▼
                    GitHub / Pull Request
                           │
                           ▼
                         master
                           │
                       git pull
                           │
                           ▼
                   Eliminar feature
```

---

# Resumen de los estados

```text
1. Working Directory

   Modificamos archivos.

           │
           │ git add
           ▼

2. Staging Area

   Cambios preparados.

           │
           │ git commit
           ▼

3. Repository

   Cambios guardados en el historial.

           │
           │ git push
           ▼

4. Remote Repository

   Cambios enviados a GitHub.
```

---

# Regla de oro

Antes de hacer cualquier operación importante en Git:

```bash
git status
```

Primero saber:

- ¿En qué rama estoy?
- ¿Qué archivos cambiaron?
- ¿Qué está preparado?
- ¿Tengo cambios pendientes?
- ¿Estoy trabajando sobre la rama correcta?

Después de verificar el estado, realizar la operación correspondiente.