# asn3rd

ASN.1 utilities

- [Extractor](#extractor)
  - [API](#api)
  - [CLI](#cli)
- [Parser / Validator](#parser--validator)
  - [API](#api-1)
  - [CLI](#cli-1)

## Extractor

![](https://img.shields.io/badge/support-NR_RRC-brightgreen)
![](https://img.shields.io/badge/support-NGAP-brightgreen)
![](https://img.shields.io/badge/support-XnAP-brightgreen)
![](https://img.shields.io/badge/support-E1AP-brightgreen)
![](https://img.shields.io/badge/support-F1AP-brightgreen)  
![](https://img.shields.io/badge/support-LTE_RRC-brightgreen)
![](https://img.shields.io/badge/support-S1AP-brightgreen)
![](https://img.shields.io/badge/support-X2AP-brightgreen)
![](https://img.shields.io/badge/support-W1AP-brightgreen)

Extract ASN.1 definition from 3GPP standard specifications.

### API


```sh
npm install proj3rd/asn3rd
```

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

![](https://img.shields.io/badge/support-TXT-brightgreen)
![](https://img.shields.io/badge/support-DOC-brightgreen)
![](https://img.shields.io/badge/support-DOCX-brightgreen)

```sh
npx github:proj3rd/asn3rd extract <path> > <outpath>
```

## Parser / Validator

![](https://img.shields.io/badge/support-NR_RRC-brightgreen)
![](https://img.shields.io/badge/support-NGAP-brightgreen)
![](https://img.shields.io/badge/support-XnAP-brightgreen)
![](https://img.shields.io/badge/support-E1AP-brightgreen)
![](https://img.shields.io/badge/support-F1AP-brightgreen)  
![](https://img.shields.io/badge/support-LTE_RRC-brightgreen)
![](https://img.shields.io/badge/support-S1AP-brightgreen)
![](https://img.shields.io/badge/support-X2AP-brightgreen)
![](https://img.shields.io/badge/support-W1AP-brightgreen)  
![](https://img.shields.io/badge/support-UTRA_RRC-brightgreen)
![](https://img.shields.io/badge/support-RANAP-brightgreen)

Parse (and validate) ASN.1 definition in the form of 3GPP standard specifications.

### API


```sh
npm install proj3rd/asn3rd
```

```ts
import { parse } from 'asn3rd';

const [error, parser] = parse(text);
if (error) {
  // Error handling
} else {
  // Play with the parser
}
```

### CLI

![](https://img.shields.io/badge/support-TXT-brightgreen)

```sh
npx github:proj3rd/asn3rd validate <path>
```
