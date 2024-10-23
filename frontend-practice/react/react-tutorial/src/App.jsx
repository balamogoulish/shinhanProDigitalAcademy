/* eslint-disable prettier/prettier */
import { useState } from 'react';

import UserDetail from './components/UserDetail';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <UserDetail />
    </>
  );
}

export default App;
