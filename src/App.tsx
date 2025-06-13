import { lazy, Suspense, useState } from 'react'
// import Heavy from './components/Heavy'

// Note: dynamic import returns a Promise resolving the module
const Heavy = lazy(() => import('./components/Heavy'))

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>My Vite + TS App</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>

      {/* Suspense shows fallback while chunk downloads */}
      {show && (
        <Suspense fallback={<div>Loading heavy component…</div>}>
          <Heavy />
        </Suspense>
      )}
    </div>
  )
}
