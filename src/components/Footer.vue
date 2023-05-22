<template>
    <footer class="footer">
    <div class="left-section">
      <img src="/image/io.jpg" alt="Logo" class="logo2" />
      <div class="contact-info">
        <p class="email">
          <a href="mailto:pedrocazorla03@gmail.com">pedrocazorla03@gmail.com</a>
        </p>
        <p class="phone">932-125-32-12</p>
        <p class="contact-message">¡Contáctame!</p>
      </div>
    </div>
    <div class="right-section">
      <div class="social-media">
        <a href="https://www.facebook.com/pedroluis.cazorlalopez" target="_blank">
          <img
            src="/image/facebook.png"
            alt="Logo de Facebook"
            class="social-media-logo"
          />
          Facebook
        </a>
        <br />
        <a href="https://www.instagram.com/pedrocazorla10/" target="_blank">
          <img
            src="/image/insta.jpg"
            alt="Logo de Instagram"
            class="social-media-logo"
          />
          Instagram
        </a>
        <br />
        <a href="https://github.com/Pedro-UP" target="_blank">
          <img
            src="/image/github.png"
            alt="Logo de GitHub"
            class="social-media-logo"
          />
          GitHub
        </a>
        <br />
      </div>
    </div>
    <div class="copy-section">
      <p class="copy">&copy;2001-2023 Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style>

.footer {
  background-color: rgba(139, 0, 0, 0.8);
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position:static;
  bottom: 0;
  left: 0;
  right: 0;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo2 {
  height: 100px;
  margin-right: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.email,
.phone,
.contact-message {
  margin-bottom: 5px;
}

.email a {
  color: white;
  text-decoration: none;
}

.right-section {
  display: flex;
  align-items: center;
}

.social-media {
  margin-right: 100px;
}

.social-media a {
  color: white;
  text-decoration: none;
}

.social-media-logo {
  height: 30px;
  margin-right: 5px;
}

.copy-section {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.copy {
  margin: 0;
}

/* Media queries */
@media (max-width: 768px) {
  .right-section {
    margin-right: 20px; /* Reduce el margen para dispositivos más pequeños */
  }
}

@media (max-width: 480px) {
  .left-section,
  .right-section {
    flex-basis: 100%; /* Cambia el ancho para ocupar toda la pantalla en dispositivos muy pequeños */
    text-align: center;
    margin-bottom: 10px;
  }

  .right-section {
    margin-right: 0;
  }
}
/* Media query para dispositivos con ancho menor o igual a 375px */
@media (max-width: 375px) {
  .footer {
    padding: 20px;
  }

  .logo2 {
    height: 60px;
  }

  .social-media {
    margin-right: 10px;
  }

  .social-media-logo {
    height: 20px;
  }
}
</style>