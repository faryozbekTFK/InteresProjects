import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TASK</h1>
      <h2>
        API URL:{"  "}
        <a href="http://localhost:3001/products">
          http://localhost:3001/products
        </a>
      </h2>
      <h3>URL TO POST: http://localhost:3001/products</h3>
      <h3>URL TO GET: http://localhost:3001/products</h3>
      <h3>URL TO UPDATE: http://localhost:3001/products/[productId]</h3>
      <h3>URL TO DELETE: http://localhost:3001/products/[productId]</h3>
      <br />
      <h1 style={{ textTransform: "uppercase" }}>
        Instructions for completing the task
      </h1>
      <h2>1. Bazadgi ma'lumotlarni ekranga chiqaring.</h2>
      <h2>2. Yangi mahsulot qo'shing va bazaga yuboring.</h2>
      <h2>
        3. Mahsulotni tahrirlang va tahrirlangan mahsulot bazada ham
        yangilansin.
      </h2>
      <h2>4. Mahsulotni o'chiring va bazandan ham o'chsin.</h2>
    </div>
  );
}

export default App;
