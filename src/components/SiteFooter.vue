<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>FullKeep</h3>
          <p>Building better user experiences through thoughtful design and development.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/design-system">Design System</a></li>
            <li><a href="/demo-cases">Demo & Cases</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/better-ux">Better UX</a></li>
            <li><a href="/tourist-friendly">Tourist Friendly</a></li>
            <li><a href="/cross-platform">Cross Platform</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Get in touch with us</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 FullKeep. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Site footer component logic
</script>

<style scoped>
.site-footer {
  background: #1f2937;
  color: #f9fafb;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin: 0 0 1rem 0;
  color: #f9fafb;
}

.footer-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
}

.footer-section p {
  margin: 0 0 1rem 0;
  color: #d1d5db;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #f9fafb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #9ca3af;
  font-size: 0.875rem;
}
</style>
