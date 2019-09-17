export const environment = {
  name: 'PROD',
  production: true,
  identityServerUrl: 'https://id.your-company.com/auth/realms/leanda',
  apiUrl: 'https://api.your-company.com/core/v1/api',
  blobStorageApiUrl: 'https://api.your-company.com/blob/v1/api',
  imagingUrl: 'https://api.your-company.com/imaging/v1/api',
  signalrUrl: 'https://api.your-company.com/core/v1/signalr',
  metadataUrl: 'https://api.your-company.com/metadata/v1/api',
  notificationTimeOut: 60 * 60 * 24 * 1000,
  proxyJSMOL: 'https://api.your-company.com/core/v1/api/proxy/jsmol',
  ketcher: 'https://core.your-company.com/ketcher/indigo/layout',
  maxBlobUploadingFileSize: 10240 * 1024,
  capabilities: {
    chemical: true,
    crystal: true,
    image: true,
    machineLearning: true,
    microscopy: true,
    office: true,
    pdf: true,
    reaction: true,
    spectrum: true,
    tabular: true,
    webPage: true,
    login: true,
    fvc: false,
    ssp: false,
    labwiz: false,
  },
  distribution: {
    code: 'leanda',
    title: 'Leanda',
  },
};
