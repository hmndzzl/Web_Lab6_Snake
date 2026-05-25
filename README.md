# Nokia Snake Game - React + Vite

## Creado por: Hugo Méndez Lee - 241265

## Descripción Breve
Este proyecto es una recreación del clásico juego "Snake", inspirado en la icónica estética retro de los teléfonos Nokia, construido de forma modular utilizando React y Vite. 

El juego cumple con todos los requisitos técnicos esperados: emplea `useState` y `useEffect` de manera óptima para el manejo del estado (movimiento, crecimiento, puntuación, detección de colisiones e inputs de teclado) y el ciclo de juego (game loop). Todo el flujo de datos se maneja a través de *props* entre componentes funcionales aislados, sin requerir variables globales ni manipular manualmente el DOM.

---
<img width="377" height="499" alt="image" src="https://github.com/user-attachments/assets/96ab0f40-4fb7-48ab-8cf2-067360564230" />

<img width="376" height="512" alt="image" src="https://github.com/user-attachments/assets/e7410d21-c8f8-45eb-a2b6-bb6f4b0ee659" />

<img width="528" height="536" alt="image" src="https://github.com/user-attachments/assets/9167a512-d3d1-427f-839c-41a001a14a28" />

Link del juego: http://35.255.29.219:3003/


## Instrucciones para instalar y correr el proyecto

## Clonar Repositorio
```bash
git clone https://github.com/hmndzzl/Web_Lab6_Snake.git
cd Web_Lab6_Snake/snake-game
```

Para poder ejecutar este proyecto en tu entorno local, necesitas tener [Node.js](https://nodejs.org/) instalado. Sigue estos pasos en tu terminal:

1. Asegúrate de estar en el directorio raíz del repositorio clonado.
2. Navega a la carpeta de la aplicación del juego:
   ```bash
   cd snake-game
   ```
3. Instala todas las dependencias requeridas (incluyendo React y Vite):
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
5. Abre tu navegador web y dirígete a la dirección proporcionada por la terminal (normalmente es `http://localhost:5173`).

## Instrucciones para ejecutar con Docker (Local)

Si prefieres aislar el entorno o desplegarlo fácilmente en un servidor, puedes usar Docker. El proyecto ya cuenta con su propio `Dockerfile` y `docker-compose.yml`.

1. Asegúrate de tener [Docker](https://docs.docker.com/get-docker/) instalado.
2. Navega a la carpeta del juego:
   ```bash
   cd snake-game
   ```
3. Construye y levanta el contenedor en segundo plano:
   ```bash
   docker compose up -d --build
   ```
4. Abre tu navegador web y dirígete a `http://localhost:8080`.

## Instrucciones para jugar

1. **Pantalla de Inicio:** Al abrir la aplicación, te recibirá el menú principal. Aquí debes seleccionar el nivel de **Dificultad** (Fácil, Medio o Difícil). La dificultad define permanentemente la velocidad a la que se moverá la serpiente en esa partida.
2. **Controles:** Utiliza las **Flechas del Teclado** (`↑`, `↓`, `←`, `→`) o las teclas **W A S D** para controlar la dirección de la serpiente.
3. **El Objetivo:** Dirige a la serpiente para comer el punto negro (la comida) que aparece aleatoriamente en el tablero. Cada bocado sumará **10 puntos** a tu marcador y hará crecer la longitud de tu serpiente en un segmento.
4. **Game Over (Derrota):** La partida termina instantáneamente si la cabeza de la serpiente choca contra los límites del tablero (las paredes) o si muerde cualquier parte de su propio cuerpo.
5. **Fin de la Partida:** Tras perder, aparecerá una pantalla de *Game Over* mostrando tu Puntuación Final y la Dificultad jugada. Desde aquí tienes dos opciones:
   - **Jugar de Nuevo:** Reinicia la partida inmediatamente utilizando la misma dificultad.
   - **Volver al Menú:** Te regresa al menú de inicio para que puedas cambiar la dificultad de tu próxima partida.
  


