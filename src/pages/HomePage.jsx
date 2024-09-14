import DocumentTitle from "../components/DocumentTitle";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Phonebook</h1>

        <h2> welcome page </h2>
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </div>
    </>
  );
}
