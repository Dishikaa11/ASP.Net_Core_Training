// layouts/MainLayout.js
import { Outlet, Link } from "react-router-dom";

function MainLayout() {

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      fontFamily: "Arial"
    },
    header: {
      background: "#1e293b",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    navLinks: {
      color: "white",
      margin: "0 10px",
      textDecoration: "none"
    },
    body: {
      display: "flex",
      flex: 1
    },
    sidebar: {
      width: "220px",
      background: "#f1f5f9",
      padding: "20px",
      borderRight: "1px solid #ccc"
    },
    content: {
      flex: 1,
      padding: "20px"
    },
    footer: {
      background: "#1e293b",
      color: "white",
      textAlign: "center",
      padding: "10px"
    },
    link: {
    display: "block",
    margin: "10px 0",
    textDecoration: "none",
    color: "#000"
    }
  };

  return (
    <div style={styles.container}>

      {/* Header */}
      <header style={styles.header}>
        <h2>My Website</h2>
        <nav>
          <Link to="/" style={styles.navLinks}>Home</Link>
          <Link to="/about" style={styles.navLinks}>About</Link>
          <Link to="/contact" style={styles.navLinks}>Contact</Link>
        </nav>
      </header>

      {/* Body */}
      <div style={styles.body}>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
        <h3>Sidebar</h3>

        {/* Public */}
        <Link to="/products" style={styles.link}>📦 Products</Link>
        <Link to="/login" style={styles.link}>🔐 Login</Link>
        <Link to="/register" style={styles.link}>📝 Register</Link>

        <hr />

        {/* Dashboard (Protected) */}
        <Link to="/dashboard/analytics" style={styles.link}>📊 Analytics</Link>
        <Link to="/dashboard/settings" style={styles.link}>⚙ Settings</Link>
        </aside>

        {/* Content */}
        <main style={styles.content}>
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 My Website</p>
      </footer>

    </div>
  );
}

export default MainLayout;