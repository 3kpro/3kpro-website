import * as React from "react";

interface WelcomeEmailProps {
  productName: string;
  userName?: string;
  dashboardUrl: string;
}

export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({
  productName,
  userName = "Customer",
  dashboardUrl,
}) => (
  <div style={{
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #000000"
  }}>
    {/* Structural Header */}
    <div style={{
      marginBottom: "40px",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{
        width: "32px",
        height: "32px",
        border: "1px solid #000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "14px",
        marginRight: "12px"
      }}>3K</div>
      <div style={{
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.2em",
        textTransform: "uppercase"
      }}>3KPRO.SERVICES</div>
    </div>

    {/* Content */}
    <h1 style={{
      fontSize: "32px",
      fontWeight: "bold",
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      marginBottom: "24px",
      lineHeight: "0.9"
    }}>
      System Initialized:<br />
      <span style={{ opacity: 0.4 }}>{productName}</span>
    </h1>

    <p style={{
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "32px",
      fontWeight: "500"
    }}>
      Welcome, {userName}.<br /><br />
      Your access to the <strong>{productName}</strong> infrastructure has been successfully provisioned. You can now access your dashboard and begin operations.
    </p>

    {/* CTA Block */}
    <div style={{
      padding: "32px",
      backgroundColor: "#000000",
      color: "#ffffff",
      textAlign: "center"
    }}>
      <a href={dashboardUrl} style={{
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "12px",
        fontWeight: "bold",
        letterSpacing: "0.2em",
        textTransform: "uppercase"
      }}>
        Access Platform →
      </a>
    </div>

    {/* Structural Footer */}
    <div style={{
      marginTop: "40px",
      paddingTop: "24px",
      borderTop: "1px solid #eeeeee",
      fontSize: "10px",
      fontWeight: "bold",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#999999"
    }}>
      © {new Date().getFullYear()} 3KPRO.SYSTEMS // Tulsa // OK // USA
      <br />
      Structural Software for High-Growth Enterprises
    </div>
  </div>
);
