// layouts/AuthLayout.js
import { Outlet } from "react-router-dom";

function AuthLayout() {

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f1f5f9"
    },
    box: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "300px",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;