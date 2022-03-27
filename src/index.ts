import { extract } from "./extractor";
import { parse } from "./parser";

export { extract, parse };

if (require.main === module) {
  const messages = [
    "CLI has been moved to asn3rd-cli.",
    "Use `npx github:proj3rd/asn3rd-cli`.",
    "Visit https://github.com/proj3rd/asn3rd-cli for details.",
  ];
  throw Error(messages.join("\n"));
}
