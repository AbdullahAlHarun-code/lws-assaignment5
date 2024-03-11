
export default function Page({ props, children }) {
  return (
    <>
      <main>
        <section>
          <div className="container">{children}</div>
        </section>
      </main>
    </>
  );
}
