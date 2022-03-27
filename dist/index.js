"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.extract = void 0;
const extractor_1 = require("./extractor");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return extractor_1.extract; } });
const parser_1 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_1.parse; } });
if (require.main === module) {
    const messages = [
        "CLI has been moved to asn3rd-cli.",
        "Use `npx github:proj3rd/asn3rd-cli`.",
        "Visit https://github.com/proj3rd/asn3rd-cli for details.",
    ];
    throw Error(messages.join("\n"));
}
//# sourceMappingURL=index.js.map