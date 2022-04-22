import Header from "./components/Header/Header";
import "./App.scss";
import EntryForm from "./components/Entry_Form/EntryForm";
import TransactionList from "./components/Transaction_List/TransactionList";
import { BudgetAppProvider } from "./context/BudgetAppContext";

function App() {
  return (
    <BudgetAppProvider>
      <Header />
      <EntryForm />
      <TransactionList />
    </BudgetAppProvider>
  );
}

export default App;
