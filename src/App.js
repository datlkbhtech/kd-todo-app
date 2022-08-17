import React from "react";
import "./assets/App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TodoMain from "./components/todo/TodoMain";

const App = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex flex-col container w-4/6 mx-auto md:pt-8">
          <div className="flex flex-col bg-gray-200 shadow-lg">
            <Header />
            <TodoMain />
          </div>
        <Footer />
      </div>
    </div>
  );
};

export default App; 