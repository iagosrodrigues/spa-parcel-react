import React from 'react'

export default () => (
  <React.Suspense fallback={<h1>Loading</h1>}>
    <main>Home page</main>
  </React.Suspense>
)
