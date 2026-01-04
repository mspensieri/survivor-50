"use client";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  image: {
    width: "100%",
    maxWidth: "700px",
    filter: "var(--upside-down-image-filter)",
    transform: "var(--upside-down-image-transform)",
  },
};

function Rules() {
  return (
    <div style={styles.container}>
      <img src={"rules.png"} alt="Rules of the game" style={styles.image}></img>
    </div>
  );
}

export default Rules;
