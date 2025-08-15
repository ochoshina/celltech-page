// script.js

// Animações com AOS
const aosScript = document.createElement("script");
aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
document.head.appendChild(aosScript);

const aosStyle = document.createElement("link");
aosStyle.rel = "stylesheet";
aosStyle.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
document.head.appendChild(aosStyle);

aosScript.onload = () => {
  AOS.init({ duration: 1000 });
};

document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave ao clicar nos links do menu
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Feedback ao enviar formulário
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato.");
      form.reset();
    });
  }

  // Botão de voltar ao topo
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.fontSize = "20px";
  scrollBtn.style.backgroundColor = "#e60000";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "5px";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.zIndex = "999";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Modo escuro automático com base no horário
  const hora = new Date().getHours();
  if (hora >= 18 || hora < 6) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  }

  // Simulação de integração com botão de pagamento (exemplo fictício)
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.textContent.toLowerCase().includes("comprar")) {
        alert("Redirecionando para o checkout seguro... (exemplo de integração)");
      }
    });
  });
});
