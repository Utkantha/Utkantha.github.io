/// <reference types="vite/client" />

// Allow importing image/font/doc asset types
declare module '*.jfif' {
  const src: string
  export default src
}
declare module '*.pdf' {
  const src: string
  export default src
}
