import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.minhaj.growthapp',
  appName: 'Growth Dashboard',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;