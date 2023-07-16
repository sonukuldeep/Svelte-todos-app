/// <reference types="svelte" />
/// <reference types="vite/client" />


interface ITodos {
    id: string;
    text: string;
    completed: boolean
}

type FiltersType = 'all' | 'active' | 'completed'