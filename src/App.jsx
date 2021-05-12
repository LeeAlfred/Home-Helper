import React from 'react';
import Header from './Header';
import Hello from './Hello';
import Card from './Card';
import Images from './Images';
import List from './List';
import Today from './Today';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Images />
      <Hello />

      <Today />
      <List />
      <Card name="Garden" content="test" />
      <Card name="Pool Area" content="test" />
      <Card name="Inside" content="test" />
      <Footer />
    </div>
  );
}

export default App;
