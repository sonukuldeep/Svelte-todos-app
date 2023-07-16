import { writable, type Writable } from 'svelte/store';

export default function useStorage<Value>(key: string, initialValue: Value): Writable<Value> {

    let storedValue: Value = JSON.parse(localStorage.getItem(key))

    let store = writable(storedValue ? storedValue : initialValue)

    store.subscribe(value => localStorage.setItem(key, JSON.stringify(value)))

    return store
}