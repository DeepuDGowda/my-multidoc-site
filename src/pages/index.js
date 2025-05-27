

// src/pages/index.js
import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/guides/intro'); // Change this path if you want to redirect somewhere else
  }, [history]);

  return null;
}
