import { artForm } from './logic/elements';

globalThis.onload = () => {
  artForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    // @ts-expect-error typescript warns about .values
    // because it isn't supported by IE
    for (const entry of values.values()) {
      console.log(entry);
    }
  });
};

export {};
