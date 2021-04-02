import React from 'react';

// import { PageTitle } from '../../layout-components';

// import SettingsPageTitleActions from '../../Components/Settings/SettingsPageTitleActions';
import SettingsProfileForms from '../../Components/Settings/SettingsProfileForms';
export default function Settings() {
  return (
    <>
      <div className="flex-column">
        <SettingsProfileForms />
      </div>
    </>
  );
}
