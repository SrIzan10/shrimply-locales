// The file is here because tsconfig is set to compile all files in src folder, and not the tests folder
import { Localization } from "./index";

export const locales = new Localization({
    defaultLocale: 'en',
    fallbackLocale: 'en',
    locales: {
        en: {
            hello: 'Hello',
            inside: {
                world: 'World',
                'another/object': {
                    key: 'key inside'
                }
            },
            interp: {
                hello: 'Hello {{int}}'
            }
        },
        es: {
            hello: 'Hola',
            inside: {
                world: 'Mundo',
                'another/object': {
                    key: 'key dentro'
                }
            },
            interp: {
                hello: 'Hola {{int}}'
            }
        }
    }
})