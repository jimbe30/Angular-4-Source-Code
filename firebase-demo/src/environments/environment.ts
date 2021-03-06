// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDdiI65wvQkftrMOPSP9xrjVDC7cr_bTy4',
    authDomain: 'oshop-4482e.firebaseapp.com',
    databaseURL: 'https://oshop-4482e.firebaseio.com',
    projectId: 'oshop-4482e',
    storageBucket: 'oshop-4482e.appspot.com',
    messagingSenderId: '360500228944'
  }

  // firebase:{
  //   apiKey: "AIzaSyALRtoBWm0nl7m35-MB6xsg6kdlDz8a0t8",
  //   authDomain: "fir-demo-4cad5.firebaseapp.com",
  //   databaseURL: "https://fir-demo-4cad5.firebaseio.com",
  //   projectId: "fir-demo-4cad5",
  //   storageBucket: "fir-demo-4cad5.appspot.com",
  //   messagingSenderId: "467257487807"
  // }
};
