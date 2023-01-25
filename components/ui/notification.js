function Notification({ title, message, status }) {
  let statusClass = "";

  if (status === "success") {
    statusClass = "success";
  }

  if (status === "error") {
    statusClass = "error";
  }

  return (
    <section className={`notification ${statusClass}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

export default Notification;
