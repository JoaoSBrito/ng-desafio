/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_LOGIN_API: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}