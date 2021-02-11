import React from 'react';

// import { PageTitle } from '../../layout-components';

// import SettingsPageTitleActions from '../../Components/Settings/SettingsPageTitleActions';
import SettingsProfileForms from '../../Components/Settings/SettingsProfileForms';
export default function Settings() {
  return (
    <>
      <div className="flex-column">
        {/* <PageTitle
          titleHeading="Settings"
          titleDescription="Manage your profile settings from this example page.">
          <SettingsPageTitleActions />
        </PageTitle> */}
        <SettingsProfileForms />
      </div>
    </>
  );
}
