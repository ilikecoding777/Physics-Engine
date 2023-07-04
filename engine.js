// Define a Particle class
class Particle {
  constructor(x, y, mass) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.mass = mass;
  }

  applyForce(force) {
    const { x, y } = force;
    this.acceleration.x += x / this.mass;
    this.acceleration.y += y / this.mass;
  }

  update() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Reset acceleration
    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }
}

// Create a simulation with particles
class PhysicsEngine {
  constructor() {
    this.particles = [];
  }

  addParticle(particle) {
    this.particles.push(particle);
  }

  update() {
    for (const particle of this.particles) {
      // Apply gravity force
      particle.applyForce({ x: 0, y: 0.1 });

      // Update particle position
      particle.update();
    }
  }
}

// Usage example
const engine = new PhysicsEngine();

// Create and add particles to the simulation
const particle1 = new Particle(100, 100, 1);
const particle2 = new Particle(200, 100, 2);
engine.addParticle(particle1);
engine.addParticle(particle2);

// Simulate physics
function simulate() {
  // Clear canvas and draw particles
  // ...

  // Update physics simulation
  engine.update();

  requestAnimationFrame(simulate);
}

simulate(); // Start the physics simulation
