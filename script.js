/**
 * ARVIX NEXUS 2026 - Indic Cyber-Heritage Mechanics
 * "Where Tech Meets Indian Tradition"
 * Features:
 *  - Floating Golden Diya Sparks + Cyber Data Particles on Canvas
 *  - Interactive Track Modals (all 7 official PDF tracks)
 *  - Responsive Mobile Navigation & FAQ Accordion
 *  - Direct Email Preparation for arvixlabs@gmail.com
 */

const TRACK_DETAILS = {
  ai: {
    title: "Artificial Intelligence & Intelligent Systems",
    trackNum: "Track 1",
    teamSize: "1 to 4 participants per team",
    scope: "AI agents, machine learning, automation, predictive systems, neural architectures.",
    challenge: "Develop practical Artificial Intelligence solutions that solve industrial automation bottlenecks or enhance student-led tech capabilities.",
    deliverables: "Working code repository, architectural diagram, and functioning prototype demonstration.",
    regUrl: "https://konfhub.com/an2026"
  },
  govtech: {
    title: "GovTech & Digital India",
    trackNum: "Track 2",
    teamSize: "1 to 4 participants per team",
    scope: "Citizen services, accessibility, digital public services, transparent administrative tooling.",
    challenge: "Build digital infrastructure that aligns with Digital India and MeitY priorities, focusing on citizen empowerment and vernacular accessibility.",
    deliverables: "User-friendly web/mobile prototype with scalable public-service workflow.",
    regUrl: "https://konfhub.com/an2026"
  },
  cyber: {
    title: "Cybersecurity & Digital Trust",
    trackNum: "Track 3",
    teamSize: "1 to 4 participants per team",
    scope: "Privacy, fraud prevention, secure systems, digital forensics, threat mitigation.",
    challenge: "Engineer secure architectures and privacy-first software to protect digital identities and transaction integrity across Indian ecosystems.",
    deliverables: "Working security proof-of-concept or defensive framework.",
    regUrl: "https://konfhub.com/an2026"
  },
  fintech: {
    title: "FinTech & Financial Inclusion",
    trackNum: "Track 4",
    teamSize: "1 to 4 participants per team",
    scope: "Financial access, literacy, inclusive finance tech, micro-payments.",
    challenge: "Democratize financial services for underbanked populations, rural commerce, and MSMEs using modern distributed systems.",
    deliverables: "Functional transaction/analytics application prototype.",
    regUrl: "https://konfhub.com/an2026"
  },
  health: {
    title: "HealthTech",
    trackNum: "Track 5",
    teamSize: "1 to 4 participants per team",
    scope: "Technology for better healthcare access, telemedicine, triage, emergency response.",
    challenge: "Design accessible digital health systems that bridge the gap between urban specialists and primary health clinics in rural regions.",
    deliverables: "Demonstrable diagnostic/patient-tracking system.",
    regUrl: "https://konfhub.com/an2026"
  },
  sustainability: {
    title: "Sustainability & Smart Infrastructure",
    trackNum: "Track 6",
    teamSize: "1 to 4 participants per team",
    scope: "Environment, energy, smart cities, EV innovations (backed by ADMS E-Bike insights).",
    challenge: "Build sustainable mobility, battery management, energy distribution, or smart waste management solutions.",
    deliverables: "Hardware/software prototype or simulation model.",
    regUrl: "https://konfhub.com/an2026"
  },
  open: {
    title: "Open Innovation",
    trackNum: "Track 7",
    teamSize: "1 to 4 participants per team",
    scope: "Any technology solution to a real-world problem chosen by the team.",
    challenge: "Full freedom of creativity! Pick any acute real-world problem and demonstrate how tech and entrepreneurship create tangible impact.",
    deliverables: "End-to-end working prototype and pitch deck.",
    regUrl: "https://konfhub.com/an2026"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initIntroAnimation();
  initParticleCanvas();
  initFaqAccordion();
  initMobileNav();
});

// Grand Intro Animation Controller
function initIntroAnimation() {
  const intro = document.getElementById("intro-overlay");
  const progressFill = document.getElementById("intro-progress");
  if (!intro) return;

  // Animate progress bar over 3.2 seconds
  let start = null;
  const duration = 3200;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    if (progressFill) {
      progressFill.style.width = (progress * 100) + "%";
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        dismissIntro();
      }, 300);
    }
  }

  requestAnimationFrame(step);
}

window.dismissIntro = function () {
  const intro = document.getElementById("intro-overlay");
  if (intro && !intro.classList.contains("hidden")) {
    intro.classList.add("hidden");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      intro.remove();
    }, 900);
  }
};

// Particle Canvas: Dual Spark Stream (Traditional Golden Diya Sparks + Cyber Cyan Circuit Nodes)
function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 35 : 70, 85);

  class HybridParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 40;
      this.size = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 0.85 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.75 + 0.25;
      this.fade = Math.random() * 0.0035 + 0.0018;
      // 65% Traditional Gold/Saffron, 35% Cyber Cyan Tech Glow
      const rand = Math.random();
      if (rand < 0.4) {
        this.color = `rgba(245, 176, 37, ${this.opacity})`; // Temple Gold
        this.glow = "rgba(245, 176, 37, 0.7)";
      } else if (rand < 0.7) {
        this.color = `rgba(255, 98, 0, ${this.opacity})`; // Royal Saffron
        this.glow = "rgba(255, 98, 0, 0.6)";
      } else {
        this.color = `rgba(0, 242, 254, ${this.opacity})`; // Cyber Cyan
        this.glow = "rgba(0, 242, 254, 0.7)";
      }
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fade;
      if (this.opacity <= 0 || this.y < -10) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.glow;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new HybridParticle();
    p.y = Math.random() * height;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// Track Details Modal
window.openTrackModal = function (trackId) {
  const data = TRACK_DETAILS[trackId];
  const modal = document.getElementById("track-modal");
  const content = document.getElementById("track-modal-content");

  if (!data || !modal || !content) return;

  content.innerHTML = `
    <div style="border-bottom: 1px solid var(--color-border-tech); padding-bottom: 16px; margin-bottom: 20px;">
      <span style="background:linear-gradient(90deg, var(--color-saffron), var(--color-gold)); color:#0b0204; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px; text-transform:uppercase;">${data.trackNum}</span>
      <h2 style="font-family:var(--font-royal); color:#fff; font-size:1.7rem; margin:12px 0 6px;">${data.title}</h2>
      <p style="color:var(--color-cyber-cyan); font-size:0.95rem;">${data.scope}</p>
    </div>

    <div style="background:rgba(0,0,0,0.4); padding:16px; border-radius:12px; border:1px solid rgba(0,242,254,0.25); margin-bottom:20px;">
      <div style="margin-bottom:10px;"><strong style="color:var(--color-gold);">Team Eligibility:</strong> <span style="color:#fff;">${data.teamSize}</span></div>
      <div style="margin-bottom:10px;"><strong style="color:var(--color-gold);">Challenge Scope:</strong> <p style="color:var(--color-sand-muted); font-size:0.92rem; margin-top:4px;">${data.challenge}</p></div>
      <div><strong style="color:var(--color-gold);">Expected Deliverables:</strong> <p style="color:var(--color-sand); font-size:0.92rem; margin-top:4px;">${data.deliverables}</p></div>
    </div>

    <div style="background:rgba(245,176,37,0.1); border-left:4px solid var(--color-gold); padding:12px 16px; margin-bottom:24px; border-radius:4px;">
      <strong style="color:var(--color-gold); display:block; margin-bottom:4px;">Official Judging Weights (From Briefing Report):</strong>
      <span style="color:#fff; font-size:0.88rem; line-height:1.6;">
        Innovation & Originality (20%) • Real-world Impact (20%) • Technical Implementation (20%) • Problem Understanding (15%) • Scalability & Feasibility (15%) • Demonstration & Presentation (10%)
      </span>
    </div>

    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:14px; border-top:1px solid var(--color-border-tech); padding-top:18px;">
      <div>
        <span style="font-size:0.85rem; color:var(--color-sand-muted);">Track Inquiries:</span><br/>
        <a href="mailto:arvixlabs@gmail.com" style="color:var(--color-gold-light); font-weight:700; text-decoration:none;"><i class="fa-solid fa-envelope"></i> arvixlabs@gmail.com</a>
      </div>
      <a href="${data.regUrl}" target="_blank" rel="noopener noreferrer" style="background:linear-gradient(135deg, var(--color-saffron), var(--color-kumkum)); color:#fff; text-decoration:none; padding:12px 24px; border-radius:30px; font-weight:700; border:1px solid var(--color-gold); display:inline-flex; align-items:center; gap:8px;">
        Register Here <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeTrackModal = function () {
  const modal = document.getElementById("track-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
};

window.addEventListener("click", (e) => {
  const modal = document.getElementById("track-modal");
  if (e.target === modal) {
    window.closeTrackModal();
  }
});

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Mobile Navbar Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// Candidate Query Form Submission to arvixlabs@gmail.com
window.handleQuerySubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("c-name").value;
  const email = document.getElementById("c-email").value;
  const phone = document.getElementById("c-phone").value;
  const track = document.getElementById("c-event").value;
  const message = document.getElementById("c-message").value;
  const feedback = document.getElementById("form-feedback");

  const subject = encodeURIComponent(`[ARVIX NEXUS 2026] Inquiry: ${track} from ${name}`);
  const bodyContent = encodeURIComponent(
    `ARVIX NEXUS 2026 - Candidate Query\n\nCandidate / Team Leader: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic / Track: ${track}\n\nQuery Details:\n${message}\n\nOfficial Portal Link: https://konfhub.com/an2026`
  );

  const mailtoLink = `mailto:arvixlabs@gmail.com?subject=${subject}&body=${bodyContent}`;

  if (feedback) {
    feedback.className = "form-feedback success";
    feedback.innerHTML = `
      <strong>✨ Message Prepared!</strong> Launching your email client addressed to <strong>arvixlabs@gmail.com</strong>.<br/>
      <small>If your email client didn't open automatically, <a href="${mailtoLink}" style="color:var(--color-cyber-cyan); text-decoration:underline;">click here to open manually</a>.</small>
    `;
    feedback.classList.remove("hidden");
  }

  window.location.href = mailtoLink;
};
