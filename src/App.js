import React from 'react';
import './App.css';
import { ThemeProvider } from './context';
import Layout from './components/Layout';

export default function App() {
       
    
  return (
    <>
    
    <ThemeProvider>
      <Layout>
      
      </Layout>
     
    </ThemeProvider >
    </>
  );
}

