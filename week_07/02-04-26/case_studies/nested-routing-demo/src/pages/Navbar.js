import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav style={styles.nav}>
        <h2 style={styles.logo}>
            MyApp
        </h2>
        <div>
                
        <NavLink to="/" style={styles.link} end>
            Home
        </NavLink>
        <NavLink to="/about" style={styles.link}>
            About
        </NavLink>
        <NavLink to="/contact" style={styles.link}>
            Contact
        </NavLink>
        </div>
    </nav>
  );
}

const styles = {
    nav: {
        background: "#1e293b",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
    },
    logo: {
        margin: 0
    },

    link: ({ isActive }) => ({
        margin: "0 10px",
        color: isActive ? "#ffffff" : "#bbb",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
    })
};

export default NavBar;

