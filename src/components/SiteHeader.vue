<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <h1>FullKeep</h1>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/design-system">Design System</a></li>
            <li><a href="/better-ux">Better UX</a></li>
            <li><a href="/tourist-friendly">Tourist Friendly</a></li>
            <li><a href="/marketing-reengagement">Marketing Reengagement</a></li>
            <li><a href="/cross-platform">Cross Platform</a></li>
            <li><a href="/industry-solutions">Industry Solutions</a></li>
            <li><a href="/demo-cases">Demo & Cases</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Site header component logic
</script>

<style scoped>
.site-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 700;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.2s;
}

.main-nav a:hover {
  color: #1f2937;
}
</style>
