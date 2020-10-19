# TANKATS
Documento de Diseño

- Schair Álvarez Maniega - s.alvarezma.2018@alumnos.urjc.es
- Andrea María Hodas Tortosa - am.hodas.2018@alumnos.urjc.es
- Jose Márquez García - j.marquezg.2018@alumnos.urjc.es
- Alberto Sánchez Romero - a.sanchezr.2018@alumnos.urjc.es
- Marta Vidal Gonzalez - m.vidalg.2018@alumnos.urjc.es

Repositorio en Github: https://github.com/Joymg/JER2021-MOS-10



## Introducción:
Este es el documento de diseño de Tankats. Este juego estará desarrollado para la asignatura de Juegos en Red del grado de Diseño y Desarrollo de Videojuegos de la Universidad Rey Juan Carlos, por el Grupo 10 de la misma. 

### 1.1. Concepto del juego:
En Tankats, controlaremos a un gatito que va montado en un tanque con el objetivo de vencer a nuestro rival, que también es un gatito que va montado en un tanque. 
Para conseguir esto, tendremos que usar nuestro ingenio para evadir los ataques del rival y conseguir golpearle y vencerle así.

### 1.2. Caracterısticas principales: 
- **Sencillo pero entretenido:** Tankats se trata de un juego no muy complejo, ni visual ni mecánicamente hablando, pero que sea llamativo para el espectador y que éste pueda pasar un buen rato.
- **Rápido de jugar:** Que las partidas no sean excesivamente largas y aburridas, sino que el dinamismo y el “pensar rápido” caractericen las sesiones de juego.
- **Partidas únicas:** Por medio de power-ups y diferentes niveles que harán única la experiencia de juego.
- **Apto para todos los públicos:** Que cualquier persona sea capaz de pasarlo bien jugando un par de partidas.

### 1.3. Género 
Tankats es un juego cuyo género principal es el de acción, siendo un juego dinámico, en el que el jugador experimenta una descarga de adrenalina. Concretamente se trata de un TPS, es decir, Third Person Shooter o juego de disparos en tercera persona. En este tipo de juegos se ve desde la perspectiva del jugador, permitiendo una vista total del personaje y parte del entorno. En Tankats cada jugador tratará de derribar a su oponente con un variado arsenal de armas de fuego.

### 1.4. Propósito y público objetivo
Sería un juego para todos los públicos, ya que el propósito de este es pasarlo bien.

### 1.5. Jugabilidad 
- **Jugador contra Jugador:** Dos jugadores entran en una arena en la que controlan unos tanques.
- **Disparos**: Tienen que acabar con el tanque rival, usando para ello el disparo del tanque.
- **Mejoras**: Este disparo puede ser modificado por power ups. 
- **Escenario destructible:** Se podrá romper parte del escenario para obtener ventaja en algunas situaciones.

### 1.6. Estilo visual
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
Se comenzará en esquinas opuestas del nivel, con el mismo acceso a los diferentes power-ups/power-downs para cada uno de los jugadores. Con ingenio, se deberá aprovechar las herramientas que se puedan tener a favor para vencer al rival, y saber cómo evitar los desastres que puedan ser causados por el rival. Para que la partida finalice, se tendrá que acabar con las tres vidas del rival, provocando la pérdida de cada vida volver al punto de aparición y un pequeño tiempo de invencibilidad. Cuando estas 3 vidas se acaben, para quien se hayan acabado, habrá perdido, y viceversa.
No se podrá poner pausa en medio de una partida.
El jugador no puede conocer los power-ups/power-downs con los que cuenta el rival.

### 2.3. Personajes 
Los personajes principales de Tanks serían gatos montados en tanques que tienen diferente estética.

- **4RI-Cat-0:** Es un gato robot de combate, tras gastar seis de sus siete vidas sacrificó su cuerpo físico e introdujo su cuerpo en un exoesqueleto felino. Por desgracia, tras su metamorfosis no encontró hueco en el mundo laboral, así que decidió dedicarse profesionalmente al combate de tanques.

- **Catsudon:** Es un gato cocinero de nacionalidad japonesa. Quiere ser el mejor cocinero de todo Japón, y lo quiere conseguir por la fuerza y encima de un tanque.

- **Tankitty:** Es un gato veterano de guerra. Desde que volvió de la guerra vive una vida desmotivada y triste, los atracones a pienso húmedo y el combate de tanques le devolvieron parte de la felicidad y autorrealización que tanto anhelaba.

- **Catígula:** Es un gato emperador que da mala espina y parece que está loco. Tiene una corona de laurel y toga virilis. Le encanta asesinar gatos, y más si lo hace subido a un tanque de combate.

- **Catótico:** Es un gato gótico al que le gusta mucho provocar el caos, tanto caos ha provocado que trasciendió tornándose su pelaje morado. Su único objetivo en la vida es provocar el caos allá donde vaya, es por eso que el combate con tanques es su profesión soñada.

### 2.4. Power ups y Power Downs
- **Power ups:**
    - **Disparo de dispersión:** se disparan varias balas en un rango de 180º
    - **Mina:** se coloca en el suelo y permanece invisible hasta que explota al entrar en contacto con uno de los jugadores.
    - **Rayo laser:** disparo continuo con rebote hasta en 2 paredes.
    - **Disparo triple:** Cada disparo lanza 3 balas en línea, una detrás de otra.
    - **Lanzacohetes:** se lanzan cohetes que explotan al entrar en contacto con el contrincante o con  cualquier objeto.
    - **Escudo:** Se añade una barra de escudo que se va agotando al recibir ataques.
    - **Velocidad:** aumenta la velocidad de movimiento del tanque.
    - **Disparo rápido:** Aumenta la cadencia de disparo del jugador.

- **Power downs:**
    - **Bloqueo de disparo:** El tanque rival  no podrá disparar durante un breve periodo de tiempo.
    - **Velocidad reducida:** Se reduce la velocidad de movimiento del contrincante.
    - **Visión reducida:** Se reduce el área de visión del rival.
    - **Confusión:** Se invierten los controles de movimiento del rival.
    - **Imán:** Laws bals disparadas, serán atraídas hacia el contrincante.
    - **Charco de slime:**  La zona del mapa cubierta de slime es deslizante.
    
### 2.5. Movimiento y fısicas
#### 2.5.1. Interacción entre elementos
Tankats se desarrolla sobre un plano sobre el cual los personajes pueden desplazarse. En el escenario habrá obstáculos, como muros que no podrán ser atravesados a no ser que sean destruidos y agujeros que solo podrán ser atravesados por los disparos.

Ambos jugadores atacan a distancia y no habrá daño por contacto entre personajes.Cuando el jugador dispare en una dirección, el cañón del tanque apuntará en dicha dirección y efectuará el disparo.Cuando un disparo colisiona con un personaje, éste pierde vida y la bala desaparece.

Lista de colisiones que se producirán:
- Personaje - Personaje
- Personaje - Escenario
- Bala - Personaje
- Bala - Escenario
- Bala - Bala

#### 2.5.2. Controles 
- Teclado: teclas “WASD” para el movimiento del tanque.
- Ratón: 
    - Movimiento para apuntar el cañón.
    - Botón izquierdo para disparar.



## Interfaz 

### 3.1. Diagrama de flujo
- **Menú principal:** Habrá un botón para buscar partida y otro de opciones.
- **Selección de personajes:** En esta pantalla se podrá escoger el gatito y su tanque.
- **Selección del mapa:** En esta pantalla se podrá escoger el mapa que se jugará.
- **Pantalla de juego:** Empieza la partida y en la interfaz saldrá el número de vidas, la puntuación y power ups activos.

### 3.2. Menu principal
En el menú principal habría un botón de buscar partida y otro de opciones.
### 3.3. Créditos
### 3.4. Selección de personaje
### 3.5. Selección de nivel



## Arte
### 4.1. Arte 2D
### 4.2. Audio 
Durante la partida sonaría una musiquilla y al disparar, los tanques harían un sonido.
