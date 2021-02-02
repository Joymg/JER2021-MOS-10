# TANKATS
Documento de Diseño

- Schair Álvarez Maniega - s.alvarezma.2018@alumnos.urjc.es 
- Andrea María Hodas Tortosa - am.hodas.2018@alumnos.urjc.es
- Jose Márquez García - j.marquezg.2018@alumnos.urjc.es
- Alberto Sánchez Romero - a.sanchezr.2018@alumnos.urjc.es
- Marta Vidal Gonzalez - m.vidalg.2018@alumnos.urjc.es

Repositorio en Github: https://github.com/Joymg/JER2021-MOS-10

Video presentación: https://youtu.be/IqPf5rCDHwg

## Introducción:
Este es el documento de diseño de Tankats. Este juego estará desarrollado para la asignatura de Juegos en Red del grado de Diseño y Desarrollo de Videojuegos de la Universidad Rey Juan Carlos, por el Grupo 10 de la misma. 

### 1.1. Concepto del juego:
En Tankats, controlaremos a un gatito que va montado en un tanque con el objetivo de vencer a nuestro rival, que también es un gatito que va montado en un tanque. 
Para conseguir esto, tendremos que usar nuestro ingenio para evadir los ataques del rival y conseguir golpearle y vencerle así.

### 1.2. Historia
> *Cuando cae la noche, en las horas más oscuras, un grupo de gatos se montan en sus tanques para mantener encarnizadas luchas clandestinas. Durante el día, ninguno habla de ello, tienen amos a los que odian para alimentarse de comida que no necesitan. Solo viven por  y para la adrenalina del fragor de la batalla y saborear el dulce manjar de la victoria.*

### 1.3. Caracterısticas principales: 
- **Sencillo pero entretenido:** Tankats se trata de un juego no muy complejo, ni visual ni mecánicamente hablando, pero que sea llamativo para el espectador y que éste pueda pasar un buen rato.
- **Rápido de jugar:** Que las partidas no sean excesivamente largas y aburridas, sino que el dinamismo y el “pensar rápido” caractericen las sesiones de juego.
- **Partidas únicas:** Por medio de power-ups y diferentes niveles que harán única la experiencia de juego.

### 1.4. Género 
Tankats es un juego cuyo género principal es el de acción, siendo un juego dinámico, en el que el jugador experimenta una descarga de adrenalina. Concretamente se trata de un TPS, es decir, Third Person Shooter o juego de disparos en tercera persona. En este tipo de juegos se ve desde la perspectiva del jugador, permitiendo una vista total del personaje y parte del entorno. En Tankats la cámara es cenital, dando al jugador el conocimiento del mapa, la localización de los objetos y de su enemigo, con esta información tratará de derribar a su oponente con un variado arsenal de armas de fuego.

### 1.5. Propósito y público objetivo
A pesar de tratarse de un juego de apariencia cartoon y de dibujos animados, se trata de un juego de peleas con tanques de juguete controlados por gatos, esta violencia no realista provoca que no sea un título apto para todos los públicos, y sea para mayores de 7 años.

### 1.6. Jugabilidad 
- **Jugador contra Jugador:** Dos jugadores entran en una arena en la que controlan unos tanques.
- **Disparos**: Tienen que acabar con el tanque rival, usando para ello el disparo del tanque.
- **Mejoras**: Este disparo puede ser modificado por power ups. 
- **Escenario destructible:** Se podrá romper parte del escenario para obtener ventaja en algunas situaciones.

### 1.7. Estilo visual
Tankats tendrá un estilo sencillo, sin ser demasiado detallista, para encajar en la idea de amigable y mona de los  gatitos en tanques, por eso el estilo visual más apropiado es el cartoon o de dibujo animado. Tanto los personajes jugables, los tanques y el entorno serán exagerados con colores vivos y de texturas simples.


## Mecánicas de juego
En esta sección se detallarán las mecánicas de Tankats. Se comentarán los pilares en los que se basa su jugabilidad y las acciones que podrá llevar a cabo el jugador dentro de la partida. Por último, habrá una lista con las armas y objetos que se podrán utilizar.

### 2.1. Jugabilidad 
- **Movilidad:** Nuestro personaje, que en este caso es un gato que maneja un tanque, podrá moverse a lo largo del plano bidimensional, evitando los proyectiles del rival, pudiendo usar coberturas para ello.
- **Niveles:** El jugador podrá elegir entre varios niveles diferentes, cada uno con obstáculos y coberturas diferentes. Los niveles estarán ambientados con la misma estética que el conjunto de personajes y power-ups, y será fácilmente distinguible las zonas por las que podremos y no podremos ir.
- **Power-ups:** Serán descritos más adelante en este mismo documento de diseño. Pueden ser tanto mejoras para el jugador que los coja, como deterioros y trabas para el jugador enemigo.
- **Aleatoriedad:** Los recursos que vayan apareciendo en los niveles se generarán de forma totalmente aleatoria, haciendo así que el jugador no sepa lo que va a recoger hasta que lo recoja.
- **Tiempo de recarga:** El jugador no puede estar constantemente disparando al enemigo, los disparos se sucederán con ciertos tiempos de recarga, así habrá que pensar en estrategias para ganar el rival.
- **Dificultad:** La dificultad del juego vendrá dada por el rival contra el que te enfrentes y la habilidad que este posea, así como del power-up/power-down que pueda estar utilizando y cómo se las ingenia el jugador, para vencer al oponente.
- **Limitación por vidas:** Cada jugador cuenta con 3 vidas que deberá proteger a toda costa para no perder la partida.

### 2.2. Flujo de juego 
Tankats es un juego de disparos con vista cenital, en el que los gatos, montados en tanques se enfrentarán en batallas 1v1. Con el disparo principal de sus tanques y las siguientes mejoras de armas los felinos tratan de acabar con la vida de su oponente. 
Se comenzará en esquinas opuestas del nivel, con el mismo acceso a los diferentes *power-ups/power-downs* para cada uno de los jugadores. Con ingenio, se deberá aprovechar las herramientas que se puedan tener a favor para vencer al rival, y saber cómo evitar los desastres que puedan ser causados por el rival. Para que la partida finalice, se tendrá que acabar con las tres vidas del rival, provocando la pérdida de cada vida volver al punto de aparición y un pequeño tiempo de invencibilidad. Cuando estas 3 vidas se acaben, para quien se hayan acabado, habrá perdido, y viceversa.
No se podrá poner pausa en medio de una partida.
El jugador, cuando juega online, no puede conocer los *power-ups/power-downs* con los que cuenta el rival.

### 2.3. Personajes 
#### 2.3.1. Personajes jugables
Los personajes principales de Tanks serían gatos montados en tanques que tienen diferente estética.

- **4RI-Cat-0:** Es un gato robot de combate, tras gastar seis de sus siete vidas sacrificó su cuerpo físico e introdujo su cuerpo en un exoesqueleto felino. Por desgracia, tras su metamorfosis no encontró hueco en el mundo laboral, así que decidió dedicarse profesionalmente al combate de tanques.

- **Catsudon:** Es un gato cocinero de nacionalidad japonesa. Quiere ser el mejor cocinero de todo Japón, y lo quiere conseguir por la fuerza y encima de un tanque.

- **Tankitty:** : Es un tanque veterano de guerra que conduce a su gato excesivamente gordo. Desde que volvió de la guerra vive una vida desmotivada y triste, los atracones de aceite de motor y el combate de tanques le devolvieron parte de la felicidad y autorrealización que tanto anhelaba.

- **Catígula:** Es un gato emperador que da mala espina y parece que está loco. Tiene una corona de laurel y toga virilis. Le encanta asesinar gatos, y más si lo hace subido a un tanque de combate.

- **Catótico:** Es un gato gótico al que le gusta mucho provocar el caos, tanto caos ha provocado que trasciendió tornándose su pelaje morado. Su único objetivo en la vida es provocar el caos allá donde vaya, es por eso que el combate con tanques es su profesión soñada.

#### 2.3.2. Personajes no jugables.
- Sombra, el gato: solía ser un gato que participaba en las batallas. Tal fue su dedicación a estas que, aunque ahora ya no pueda participar en ellas, se dedica a ser el muñeco de pruebas cuando el resto de gatos quiere probar sus armas.

### 2.4. Objetos
- ***Power ups:***
    - **Disparo de dispersión:**  dispara 3 balas en cono (60º).
    - **Lanzacohetes:** se lanzan cohetes que explotan al entrar en contacto con el contrincante o con  cualquier objeto.
    - **Escudo:** se añade una barra de escudo que se va agotando al recibir ataques.
    - **Velocidad:** aumenta la velocidad de movimiento del tanque.
    - **Disparo rápido:** Aumenta la cadencia de disparo del jugador.

- ***Power downs:***
    - **Mina:** se coloca en el suelo y permanece invisible hasta que explota al entrar en contacto con uno de los jugadores.
    - **Velocidad reducida:** se reduce la velocidad de movimiento del contrincante.
    - **Confusión:** se invierten los controles de movimiento del rival.
    
### 2.5. Movimiento y fısicas
#### 2.5.1. Interacción entre elementos
Tankats se desarrolla sobre un plano sobre el cual los personajes pueden desplazarse. En el escenario habrá obstáculos, como muros que no podrán ser atravesados a no ser que sean destruidos y agujeros que solo podrán ser atravesados por los disparos.

Ambos jugadores atacan a distancia y no habrá daño por contacto entre personajes.Cuando el jugador dispare en una dirección, el cañón del tanque apuntará en dicha dirección y efectuará el disparo. Cuando un disparo colisiona con un personaje, éste pierde vida y la bala desaparece.

Lista de colisiones que se producirán:
- Personaje - Personaje
- Personaje - Escenario
- Personaje - Objeto
- Bala - Personaje
- Bala - Escenario
- Bala - Bala


#### 2.5.2. Controles 
Online:
-	Teclado: teclas “WASD” para el movimiento del tanque.
-	Ratón: 
-	Movimiento para apuntar el cañón.
-	Botón izquierdo para disparar.

Pantalla dividida:
-	Teclado: 
Jugador 1:
Teclas “WASD” para el movimiento del tanque
Teclas “C” y “V” para girar el cañon en sentido antihorario y horario respectivamente
ESPACIO para disparar

Jugador 2:
Flechas de dirección para el movimiento del tanque
Teclas “I” y “P” para girar el cañon en sentido antihorario y horario respectivamente
“O” para disparar


## Interfaz 
- **Menú principal:** 
    - Jugar
    - Configuración.
    - Creditos
- **Selección de personajes:** 
    - Seleccionar gato.
    - Flechas para visualizar a todos los gatos.
    - Comenzar partida.
    - Volver al menú principal.
- **Pantalla de juego:** 
    - Vida del jugador.
    - Power ups activos.
- **Pausa:**
    - Ajustes de sonido.
    - Ajustes de idioma.
    - Rendirse.
    - Cerrar el menú de pausa.
- **Pantalla de victoria.**
    - Volver al menú principal.
    - Revancha.
- **Pantalla de derrota.**
    - Volver al menú principal.
    - Revancha.
- **Configuración:**
    - Ajustes de sonido: 
        - Mutear la música.
        - Mutear los efectos de sonido.
    - Cambiar de idioma.
        - Español.
        - Inglés.
    - Tutorial (Aun no implementado).
        - Salir del tutorial.


### 3.1. Diagrama de flujo
El siguiente diagrama de flujo muestra las pantallas posibles y los accesos entre ellas en Tankats:
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/Flowchat.png?raw=true)

### 3.2. Menu principal
En el menú principal hay un botón de jugar, el cual inicia una partida local con todo lo que ello conlleva (elegir personaje, comenzar la partida, jugar etc), otro de ajustes y un último botón que nos lleva a los creditos.
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/Mainscreen.png?raw=true)

### 3.3. Créditos
Pantalla en la que se pueden ver los créditos del juego, así como información adicional.
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/Credits.png?raw=true)

### 3.4. Selección de partida (Modo online aun no implementado)
En la pantalla de selección de personaje se podrá elegir modo de partida, emparejado con gente aleatoria que esté buscando partida o creando una partida o buscándola con un código. En el caso de que sea una partida local, saltará directamente la pantalla de selección de personajes.

### 3.5. Selección de personaje
En la pantalla de selección de personaje se podrá elegir el gatito con el que se va a jugar para diferenciarse de forma gráfica del rival y que no haya lugar a equivocaciones.
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/CharacterSelect.png?raw=true)

### 3.6. Pantalla de juego
En la partida, aparecen representadas en la zona superior la vida del personaje escogido por el jugador y el personaje escogido por el rival junto con el power up que estemos utilizando y el tiempo restante de utilización.
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/Gameplay.png?raw=true)

### 3.7. Pantalla de “Pausa”
Durante la partida se podrá acceder a una pantalla de pausa. En ella se podrá modificar los diferentes aspectos de sonido y el idioma, aunque el juego no se detiene, se sigue ejecutando por debajo del *pop-up* de configuraciones.
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/PauseScreen.png?raw=true)



## Arte
### 4.1. Arte
- Sprites de los diferentes personajes.
- Sprite de muro.
- Sprite de muro destruido.
- Sprite de agujero.
- Sprites de los diferentes objetos.
- Sprite de bala.
- Sprite de muñeco de prueba.

### 4.2. Audio 
- Música ambiente: 
    - Un tema para los menús.
    - Un tema para las partidas
    
- Efectos de sonido:
    - Varios sonidos de disparo de bala.
    - Sonido de impacto de bala con un personaje.
    - Sonido de impacto de bala con un objeto/pared.
    - Sonido cuando se hiere a un personaje.
    - Sonido cuando se coge un power up o power down.

## Fase 2:
### 5.1 Capturas

#### 1
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura.PNG?raw=true)
Este es el menú principal, desde aqui podemos acceder a la configuración, a los créditos o empezar una partida

#### 2
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura2.PNG?raw=true)
Esta es la pantalla de configuración, desde aquí se puede "mutear" el juego o cambiar el idioma (aun no implementado al 100%)

#### 3
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura3.PNG?raw=true)
Esta es la pantalla de créditos, donde aparecen los nombres, fotos de los desarrolladores del videojuego y los créditos de la música sin copyright utilizada. 

#### 4
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura4.PNG?raw=true)
Esta es la pantalla de selección de personaje, actualmente solo hay un gato implementado, pero en el juego se pueden diferenciar los jugadores por tintes en el sprite. Primero escoje el jugador 1 (que controla con WASD) y por último el jugador 2 (que controla con las flechas).

#### 5
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura5.PNG?raw=true)
Esta es la pantalla de gameplay, el mapa en cada partida se escoje aleatoriamente de una pool. Arriba se puede ver la vida de cada jugador y si ha cogido algun Power Up. 

#### 6
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura6.PNG?raw=true)
Esta es la pantalla de victoria, en la cual se nos presentan las opciones de volver al menú o volver a jugar con los mismos personajes en un mapa aleatorio de los disponibles.

#### 7
![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/capturas/Captura7.PNG?raw=true)
Si se le da a la tecla Esc durante la pantalla de gameplay se abrirá el menu de pausa, donde podremos mutear la música, volver a la pantalla principal o al juego. 

### 5.2 Diagrama de navegación
Se usará la nomenclatura del apartado anterior para referirse a las pantallas:

 1: Menu principal      2: Configuración
 3: Créditos            4: Selección de personaje
 5: Gameplay            6: Pantalla de victoria
 7: Pausa

1 -> 2,3,4

2 -> 1

3 -> 1

4 -> 1,5

5 -> 6,7

6 -> 5,1

7 -> 5,1

### 5.3 Cambios con respecto a la anterior fase
Realmente han habido pocos cambios de diseño de una fase para otra, principalmente porque se fueron con expectativas realistas del tiempo y recursos disponibles. Sin embargo si que han habido varias cosas planeadas que no se han implementado finalmente:

- Se querían implementar al menos dos personajes jugables para esta fase, pero por falta de tiempo solo se ha podido meter a uno pero con diferentes filtros para que se pueda diferenciar durante el gameplay.
- Se queria implementar un tutorial in-game que introdujese las mecánicas principales (movimiento, disparos y tipos de obstaculos), pero al final se ha decidido poner una pantalla que detalla los controles en la parte inferior de la página.

## Fase 3:
### 6.1 Nuevas pantallas

Para esta entrega no se han añadido nuevas escenas al juego.

### 6.2 Diagrama de clases y API REST

![alt text](https://github.com/Joymg/JER2021-MOS-10/blob/main/GDD-Images/DiagClases.png?raw=true)

### 6.3 Instrucciones para ejecutar la aplicación

1. Se abre el proyecto en eclipse
2. Click derecho en el proyecto -> Maven -> Update project
3. En el menu que sale, pulsar OK
4. Esperar a que se actualice
5. Click derecho en el proyecto -> Run as... -> Spring Boot App 
6. Cargar en el navegador el Local Host, puerto 8080

## Fase 4:
### 7.1 Uso de WebSockets

Al entrar a la pantalla de buscar partida se crea un WebSocket llamado conection y se conecta al servidor. Este WebSocket puede recibir varios tipos de mensajes dependiendo de la id con la que se manden:

0: Se organiza la partida.
1: Para los inputs de los jugadores. Se actualiza constantemente.
2: Por si hay una desconexion de uno de los jugadores.
3: Para iniciar los juegos a la vez.

En la escena de GameFinder, si hay dos jugadores conectados esperando y pulsan "Miau", se inicia la partida. Dentro de la partida los inputs de los jugadores se guardan en strings y se mandan mediante WebSockets al servidor y luego unicamente al otro jugador que está en la partida con él, haciendo que se actualice el movimiento y el disparo del contrincante. 
Para cerrar la sesión, se comprueba si en el juego hay alguien más, si eres el primero en desconectarse se cierra el WebSocket y se manda un mensaje al otro jugador para que se desconecte, para que cierre su socket, si eres el segundo se desconecta del juego directamente. Basicamente, el primero que se desconecta fuerza al otro a desconectarse.

### 7.2 Diagrama de clases
El diagrama de clases está actualizado en el apartado 6.2

## Fase 5:
### 8.1 Mejoras finales incluidas:
Se ha añadido arte adicional, como skins nuevas para los jugadores y animaciones para el tanque (Ahora los tanques apuntan el cuerpo hacia la dirección del movimiento). Se han cambiado las fuentes y se ha cambiado la forma de cargar los mapas (Ahora se usa la herramienta "tiled"). 
También se han corregido algunos bugs (Por ejemplo el de que los tanques pasaran por encima de la barra de vida).
