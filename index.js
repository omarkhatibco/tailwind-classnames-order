import { SupportLanguage, Parser, Printer } from 'prettier';

export const languages = [
  {
    name: 'svelte',
    parsers: ['svelte'],
    extensions: ['.svelte'],
  },
];

prettier.getSupportInfo()