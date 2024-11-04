import MyComponents from "./components/MyComponents";
import MyComponents2 from "./components/MyComponents2";

function App() {
  return (
    <>
      <h1>Prova</h1>
      <MyComponents
        header={<h2>Header personalizzato</h2>}
        footer={<p>Footer personalizzato</p>}
      >
        <p>Questo è il contenuto principale.</p>
      </MyComponents>

      <MyComponents2
        renderContent={() => (
          <div>{"Ciao sono uno solt tipizzato a string !"}</div>
        )}
      />
    </>
  );
}

export default App;
