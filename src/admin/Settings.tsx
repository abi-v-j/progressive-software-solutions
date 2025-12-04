import React, { useState } from 'react';
import { AppSettings } from '../types';


const Settings: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'Admin',
    email: 'admin@example.com',
  });

  const [password, setPassword] = useState({
    current: '',
    next: '',
    confirm: '',
  });

  const [appSettings, setAppSettings] = useState<AppSettings>({
    siteName: 'Progressive LMS',
    supportEmail: 'support@progressive.com',
    maintenanceMode: false,
    enableRegistrations: true,
  });

  const handleProfileUpdate = () => {
    if (!profile.name || !profile.email) {
      alert('Profile fields required');
      return;
    }

    console.log('UPDATE PROFILE → API', profile);
  };

  const handlePasswordUpdate = () => {
    if (!password.current || !password.next || !password.confirm) {
      alert('All password fields required');
      return;
    }

    if (password.next !== password.confirm) {
      alert('Passwords do not match');
      return;
    }

    console.log('UPDATE PASSWORD → API', password);
  };

  const handleAppSave = () => {
    console.log('SAVE APP SETTINGS → API', appSettings);
  };

  return (
    <div className="space-y-8">

      {/* ================= PROFILE ================= */}
      <div className="bg-white border rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-semibold">Admin Profile</h2>

        <input
          className="border p-2 rounded w-full"
          placeholder="Full Name"
          value={profile.name}
          onChange={e => setProfile({ ...profile, name: e.target.value })}
        />

        <input
          className="border p-2 rounded w-full"
          placeholder="Email"
          value={profile.email}
          onChange={e => setProfile({ ...profile, email: e.target.value })}
        />

        <button
          onClick={handleProfileUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Update Profile
        </button>
      </div>

      {/* ================= PASSWORD ================= */}
      <div className="bg-white border rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-semibold">Change Password</h2>

        <input
          type="password"
          className="border p-2 rounded w-full"
          placeholder="Current Password"
          value={password.current}
          onChange={e => setPassword({ ...password, current: e.target.value })}
        />

        <input
          type="password"
          className="border p-2 rounded w-full"
          placeholder="New Password"
          value={password.next}
          onChange={e => setPassword({ ...password, next: e.target.value })}
        />

        <input
          type="password"
          className="border p-2 rounded w-full"
          placeholder="Confirm New Password"
          value={password.confirm}
          onChange={e => setPassword({ ...password, confirm: e.target.value })}
        />

        <button
          onClick={handlePasswordUpdate}
          className="bg-amber-600 text-white px-4 py-2 rounded text-sm"
        >
          Update Password
        </button>
      </div>

      {/* ================= APPLICATION SETTINGS ================= */}
      <div className="bg-white border rounded-lg p-6 space-y-5">
        <h2 className="text-sm font-semibold">Application Settings</h2>

        <input
          className="border p-2 rounded w-full"
          placeholder="Site Name"
          value={appSettings.siteName}
          onChange={e =>
            setAppSettings({ ...appSettings, siteName: e.target.value })
          }
        />

        <input
          className="border p-2 rounded w-full"
          placeholder="Support Email"
          value={appSettings.supportEmail}
          onChange={e =>
            setAppSettings({ ...appSettings, supportEmail: e.target.value })
          }
        />

        <div className="flex items-center justify-between">
          <span className="text-sm">Maintenance Mode</span>
          <input
            type="checkbox"
            checked={appSettings.maintenanceMode}
            onChange={e =>
              setAppSettings({
                ...appSettings,
                maintenanceMode: e.target.checked,
              })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Enable User Registrations</span>
          <input
            type="checkbox"
            checked={appSettings.enableRegistrations}
            onChange={e =>
              setAppSettings({
                ...appSettings,
                enableRegistrations: e.target.checked,
              })
            }
          />
        </div>

        <button
          onClick={handleAppSave}
          className="bg-emerald-600 text-white px-4 py-2 rounded text-sm"
        >
          Save Application Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
