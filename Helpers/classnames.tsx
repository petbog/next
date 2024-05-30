type classNamesType = (
    cls: string | string[],
    mods?: { [key: string]: boolean },
    additional?: string[]
) => string;


export const classNames: classNamesType = (cls, mods = {}, additional = []) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}