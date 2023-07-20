type Mods = Record<string, boolean | string>;

export function classNames(base: string, mods?: Mods, additional?: string[]): string {
    return [
        base,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, bool]) => Boolean(bool))
            .map(([className]) => className),
    ].join(" ");
}
