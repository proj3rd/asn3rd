# asn3rd

ASN.1 utilities

- [extractor](#extractor)
  - [API](#api)
  - [CLI](#cli)

## extractor

Extract ASN.1 definition from 3GPP standard specifications.

### API

```ts
import { extract } from 'asn3rd';

const [error, extracted] = extract(text);
if (error) {
  // Error handling
} else {
  // Play with the extracted ASN.1 definition
}
```

### CLI

```sh
npx proj3rd:asn3rd extract <path> > <outpath>
```
