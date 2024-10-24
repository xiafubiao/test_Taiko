import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import VeraxSdk from '@verax-attestation-registry/verax-sdk'
import {VeraxSdk} from '@verax-attestation-registry/verax-sdk/src/VeraxSdk.ts'

function App() {


  const attst = async () => {
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_TAIKO_HEKLA);
    const moduleDataMapper = veraxSdk.module;
    const myModule = await moduleDataMapper.findOneById("0x423f87034c587e62e2e66ecc21c192cbc1564027");
    console.log('myModule', myModule)
    const schemaDataMapper = veraxSdk.schema;
    const mySchema = await schemaDataMapper.findOneById("0xcb4da484241ff0b8aebcccb731d53122ee88daa7c207b58854be65a2830af248");
    console.log('mySchema', mySchema);

  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={attst}>
         Hell World
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
