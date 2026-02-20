
// Player class
    class Player {
      constructor(name = 'Player') {
        this.name = name;
        this.score = 0;
      }
      addScore(n = 1) { this.score += n; }
      reset() { this.score = 0; }
    }

    // UI class: centralizes DOM updates
    class UI {
      constructor(root) {
        this.root = root;
        this.scoreEl = root.querySelector('#score');
        this.playArea = root.querySelector('#playArea');
        this.messageEl = root.querySelector('#message');
        this.startBtn = root.querySelector('#startBtn');
        this.quitBtn = root.querySelector('#quitBtn');
        this.resetBtn = root.querySelector('#resetBtn');
      }
      updateScore(score) {
        this.scoreEl.textContent = score;
      }
      setMessage(text) {
        this.messageEl.textContent = text;
      }
      clearPlayAreaTargets() {
        const targets = this.playArea.querySelectorAll('.target');
        targets.forEach(t => t.remove());
      }
      createTarget(xPercent = 50, yPercent = 50) {
        const t = document.createElement('div');
        t.className = 'target';
        // position using percent so target stays inside
        t.style.left = `calc(${xPercent}% - 20px)`;
        t.style.top = `calc(${yPercent}% - 20px)`;
        t.textContent = '+1';
        this.playArea.appendChild(t);
        return t;
      }
    }

    // Game class
    class Game {
      constructor(ui, player, options = {}) {
        this.ui = ui;
        this.player = player;
        this.running = false;
        this.spawnInterval = options.spawnInterval || 900; // ms
        this.spawnTimer = null;
        this.autoMoveTimer = null;
        this.bindHandlers();
      }

      bindHandlers() {
        // Using arrow functions to keep `this`
        this.ui.startBtn.addEventListener('click', () => this.start());
        this.ui.quitBtn.addEventListener('click', () => this.quit());
        this.ui.resetBtn.addEventListener('click', () => this.reset());
        // Delegate clicks in play area to targets
        this.ui.playArea.addEventListener('click', (e) => {
          if (!this.running) return;
          const target = e.target.closest('.target');
          if (target && this.ui.playArea.contains(target)) {
            this.player.addScore(1);
            this.ui.updateScore(this.player.score);
            // quick feedback and remove
            target.remove();
            this.ui.setMessage('Good! +1');
          }
        });
      }

      start() {
        if (this.running) return;
        this.running = true;
        this.ui.setMessage('Game started — click targets!');
        this.ui.playArea.style.cursor = 'crosshair';
        this.spawnTimer = setInterval(() => this.spawnTarget(), this.spawnInterval);
        // spawn first target immediately
        this.spawnTarget();
      }

      spawnTarget() {
        if (!this.running) return;
        // place at random percent positions within 10-90%
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        const target = this.ui.createTarget(x, y);
        // auto-remove after 1.2s if not clicked
        setTimeout(() => {
          if (target && target.parentNode) target.remove();
        }, 1200);
      }

      quit() {
        if (!this.running) {
          this.ui.setMessage('Game is not running.');
          return;
        }
        this.running = false;
        clearInterval(this.spawnTimer);
        this.spawnTimer = null;
        this.ui.playArea.style.cursor = 'default';
        this.ui.setMessage(`You quit. Final score: ${this.player.score}`);
        // show final score in an alert or modal (simple approach)
        setTimeout(() => {
          alert(`Game over — Final Score: ${this.player.score}`);
        }, 100);
      }

      reset() {
        // stop and reset everything
        this.running = false;
        clearInterval(this.spawnTimer);
        this.spawnTimer = null;
        this.player.reset();
        this.ui.updateScore(this.player.score);
        this.ui.clearPlayAreaTargets();
        this.ui.playArea.style.cursor = 'default';
        this.ui.setMessage('Reset complete. Press Start.');
      }
    }

    // Boot
    const ui = new UI(document.getElementById('app'));
    const player = new Player('Student');
    const game = new Game(ui, player, { spawnInterval: 900 });

    // Optional: keyboard shortcuts (S=start, Q=quit, R=reset)
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 's') game.start();
      if (e.key.toLowerCase() === 'q') game.quit();
      if (e.key.toLowerCase() === 'r') game.reset();
    });