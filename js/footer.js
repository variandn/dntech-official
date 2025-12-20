document.addEventListener("DOMContentLoaded", () => {
  const footer = `
    <footer>
      <div class="container">
        <div class="footer-content">
          <!-- Column 1: Logo / Company -->
          <div class="footer-column" style="text-align: center;">
            <img src="images/DN4.png" alt="DN Tech Logo" style="height: 50px; margin-bottom: 1rem;">
            <p>Africa's Tech Solutions</p>
          </div>

          <!-- Column 2: Contact Us -->
          <div class="footer-column" style="text-align: center;">
            <h3>Contact Us</h3>
            <p>Call: <a href="tel:+256750687268">+256 750 687 268</a><br>
               Email: <a href="mailto:dntech044@gmail.com">dntech044@gmail.com</a></p>
          </div>

          <!-- Column 3: Follow Us -->
          <div class="footer-column" style="text-align: center;">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
              <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Dntech- Africa's Tech Solutions.All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footer);
});