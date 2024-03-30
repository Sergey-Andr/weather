export const weatherIcon = (icon: string) =>
    `${import.meta.env.VITE_API_ICONS}/${icon.slice(0, 2)}d.png`;
