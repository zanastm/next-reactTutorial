import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
// eslint-disable-next-line import/no-unresolved
import { TooltipComponent } from '@syncfusion/ej-react-popups';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover'>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App;