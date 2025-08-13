# Instalación de Entorno de Desarrollo

## Instalación de Git y Node.js (Windows, Linux y macOS)

### Windows
**Opción rápida (Winget, PowerShell como Admin):**
```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
```
> `npm` viene incluido con Node.js.

**Alternativa:**
- Git: descargar “Git for Windows” desde el sitio oficial.
- Node.js: instalar el MSI LTS desde el sitio oficial.
- (Opcional) **nvm-windows** para manejar múltiples versiones: buscar “nvm-setup.exe” del repositorio oficial y luego:
```powershell
nvm install lts
nvm use lts
node -v
npm -v
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install -y git nodejs npm
git --version
node -v
npm -v
```
> (Opcional, recomendado) Instalar **nvm** para versiones de Node:
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# reinicia la terminal o ejecuta:
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"
nvm install --lts
node -v
npm -v
```

### macOS
**Con Homebrew (recomendado):**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git node
git --version
node -v
npm -v
```
**Alternativa:** descargar instaladores de Git y Node.js (LTS) desde sus sitios oficiales.

---

## Instalación de Entorno de Desarrollo (Ubuntu – Consola)

1) **Crear un directorio para el proyecto y descomprimir**
```bash
mkdir ~/proyecto
cd  ~/proyecto
git clone https://github.com/Unahur-Laboratorio/aplicacion-full-stack.git
cd aplicacion-full-stack
```

2) **Instalar Node.js y npm**
```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
# Verificar
node -v
npm -v
```

3) **Instalar el web server para el FE**
```bash
sudo npm install -g http-server
```

4) **Arrancar el proyecto**

**FE (Frontend):**
```bash
# Navegar al directorio del frontend
cd proyecto/frontend

# Instalar dependencias
npm install

# Arrancar el servicio
http-server -p 8080
```

**BE (Backend):** *(ABRIR OTRO TERMINAL)*
```bash
# Navegar al directorio del backend
cd proyecto/backend

# Instalar dependencias
npm install

# Arrancar el servicio
npm start
# Por defecto arranca en el puerto 3000
```

5) **Probar los servicios**

- **FE:** abrir en el navegador `http://localhost:8080`
- **BE:** abrir en el navegador `http://localhost:3000/api`

---

## Notas y Solución de Problemas

- **Permisos al instalar paquetes globales:** si `npm install -g` falla en Linux/macOS, prueba con `sudo` o configura un prefix local para npm.
- **Conflicto de puertos:** si 8080 o 3000 están ocupados, usa otro puerto (por ejemplo `http-server -p 8081`) o exporta `PORT=3001` antes de `npm start` si el backend lo soporta.
- **PATH de Node/npm:** si `node` o `npm` no se encuentran, cierra y vuelve a abrir la terminal. Con **nvm**, asegúrate de cargar el script en tu shell (`.bashrc`, `.zshrc`).