$('#main-container').append(`<div class="row"><div class="col">
<div id='wellcome'><h1>console<span style="color:white;">.<span style="color:#e06c75;">log</span>("</h1>
<div class="string">
  <h1 class="greeting en">Hello World!</h1>
  <h1 class="greeting es">¡Hola Mundo!</h1>
  <h1 class="greeting de">Hallo Welt!</h1>
  <h1 class="greeting it">Ciao Mondo!</h1>  
</div>
<h1 class="closure">");</h1><div></div></div>
<style>

#wellcome {
  font-size: 2vmin;
  font-family: JetBrains Mono, monospace;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4bb68;
  background: var(--bs-body-bg);
}
.string {
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: move 4s infinite;
}

.greeting {
  position: relative;
  top: 8.6vmin;
  animation: white-out 5s infinite;
}

.closure::after {
  content: '';
  position: absolute;
  height: 25vmin;
  width: 40vmin;
  background: var(--bs-body-bg);
  transform: translate(-45vmin, -24.5vmin);
}

.closure::before {
  content: '';
  position: absolute;
  height: 25vmin;
  width: 40vmin;
  background: var(--bs-body-bg);
  transform: translate(-40vmin, 5vmin);
}

.en {
  color: #fa8231;
}

.es {
  color: white;
}

.de {
  color: #c678dd;
}

.it {
  color: #a9b0bd;
}

@keyframes move {
  25% {
    transform: translatey(-5.8vmin);
    opacity: 1;
  }
  50% {
    transform: translatey(-11vmin);
  }
  75% {
    transform: translatey(-16.5vmin);
  }
}
<style>`);