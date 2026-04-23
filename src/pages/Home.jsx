import Hero from '../sections/Hero';
import SignatureCocktails from '../sections/SignatureCocktails';
import Atmosphere from '../sections/Atmosphere';
import Events from '../sections/Events';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Hero />
      <SignatureCocktails />
      <Atmosphere />
      <Events />
    </main>
  );
}
