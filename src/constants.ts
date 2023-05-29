export type Route = {
  path: string
}

export const ROUTES: Record<string, Route> = {
  home: {
    path: '/'
  },
  signIn: {
    path: '/sign-in'
  },
  messenger: {
    path: '/messenger'
  }
}
