declare module '*.png'
declare module 'platform-detect'
declare module '*.svg' {
    const content: any
    export default content
}
declare module '*.sh' {
    const content: string
    export default content
}
declare module '*.py' {
    const content: string
    export default content
}
