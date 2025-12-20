
document.addEventListener("DOMContentLoaded", () => {
    const header = `
      <header class="site-header">
        <div class="logo">
          <img src="images/DN4.png" alt="DN Tech Logo">
          <h1>Dntech</h1>
        </div>
        <div class="menu-toggle">☰</div>
        <nav class="nav-links">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", header);
  });
  