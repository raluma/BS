import React from 'react';
import { Route } from 'wouter';
import Match from './client/pages/Match';

export default function App() {
  return (
    <>
      <Route
          component={Match}
          path="/"
      />  
    </>
  );
}
