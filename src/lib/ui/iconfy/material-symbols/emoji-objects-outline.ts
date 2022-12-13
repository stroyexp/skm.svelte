import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    'emoji-objects-outline': {
      body: `
        <path
          fill="currentColor"
          d="M12 22q-.65 0-1.175-.312q-.525-.313-.825-.838q-.825 0-1.412-.587Q8 19.675 8 18.85V15.3q-1.475-.975-2.362-2.575q-.888-1.6-.888-3.475q0-3.025 2.112-5.138Q8.975 2 12 2t5.137 2.112Q19.25 6.225 19.25 9.25q0 1.925-.887 3.5q-.888 1.575-2.363 2.55v3.55q0 .825-.587 1.413q-.588.587-1.413.587q-.3.525-.825.838Q12.65 22 12 22Zm-2-3.15h4v-.9h-4Zm0-1.9h4V16h-4ZM9.8 14h1.45v-2.7l-2.2-2.2l1.05-1.05l1.9 1.9l1.9-1.9l1.05 1.05l-2.2 2.2V14h1.45q1.35-.65 2.2-1.913q.85-1.262.85-2.837q0-2.2-1.525-3.725T12 4Q9.8 4 8.275 5.525T6.75 9.25q0 1.575.85 2.837Q8.45 13.35 9.8 14ZM12 9.95ZM12 9Z"
        />
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});