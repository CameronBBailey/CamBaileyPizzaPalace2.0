import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

function TemplatePage() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Header />  
      <h1>Blank Page</h1>
      <button onClick={goBack}>Go Back</button>
      <Footer />
    </div>
  );
}

export default TemplatePage;