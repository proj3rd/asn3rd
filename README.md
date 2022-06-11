# asn3rd

ASN.1 utilities

- [Extractor](#extractor)
  - [Usage](#usage)
- [Parser / Validator](#parser--validator)
  - [Usage](#usage-1)

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

### Usage


```sh
npm install proj3rd/asn3rd
```

```ts
import { extract } from 'asn3rd';

const options = {
  excludeNonTagComment: true,
};
const extracted = await extract(text, options);
```

- `text`: A string containing ASN.1 definition.
- `options`: Options for extraction. Optional.
  - `excludeNonTagComment`: Whether to exclude non-tag comment.
A tag is either a need code or a conditional tag, e.g. `-- Need R` or `-- Cond HO-toEPC`.
Optional. Default `false`.

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

### Usage


```sh
npm install proj3rd/asn3rd
```

```ts
import { parse } from 'asn3rd';

const moduleDefinitionsContext = await parse(text);
```
