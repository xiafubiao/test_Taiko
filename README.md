## How to use the SDK (Now)?

1. Create your dApp locally, e.g., use Vite tool to create a **TypeScipt** project **B**.
2. Since the module is not published at npm, we use “**npm link**” tool to integrate with the SDK. Download the modified SDK code from Github:

```bash
git clone https://github.com/pado-labs/linea-attestation-registry.git
```

switch to the **feat/deploy-on-taiko** branch,  build the project with “**pnpm i**”, switch to “**sdk**” folder, and we use npm link tool as:

```bash
npm link 
```

Since we link the /sdk module, the package name is *@verax-attestation-registry/verax-sdk*,  

Now switch to project **B** folder, type:

```bash
npm link @verax-attestation-registry/verax-sdk
```

You will find the verax-sdk module is now installed in B’s node_modules category. Note to remove the integration and remove the local npm links, you can simply use “**npm unlink**” and “**npm unlink linea-attestation-registry**” instructions in the SDK’s and project B’s folders.

Now in your source file, e.g., App.tsx, you simply import the module like this:

```bash
import {VeraxSdk} from '@verax-attestation-registry/verax-sdk/src/VeraxSdk.ts'
```

And you define a test function like this:

```tsx
const attst = async () => {
  const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_TAIKO_HEKLA);
  const moduleDataMapper = veraxSdk.module;
  const myModule = await moduleDataMapper.findOneById(
    "0x423f87034c587e62e2e66ecc21c192cbc1564027"
  );
  console.log("myModule", myModule);
  const schemaDataMapper = veraxSdk.schema;
  const mySchema = await schemaDataMapper.findOneById(
    "0xcb4da484241ff0b8aebcccb731d53122ee88daa7c207b58854be65a2830af248"
  );
  console.log("mySchema", mySchema);
};
```

And if you run “**npm run dev**”, and access the deployed local dApp URL, you can check the response data by calling the read functions (**findOneById**) through verax registry on Taiko Helka