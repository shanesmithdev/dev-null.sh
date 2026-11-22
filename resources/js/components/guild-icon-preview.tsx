// Explicit colours (the theme's --muted in each mode), so both previews show
// regardless of which mode the viewer is currently using.
const tiles = [
    { label: 'Light mode', background: '#eef0f2', text: '#121417' },
    { label: 'Dark mode', background: '#232326', text: '#ececec' },
] as const;

export function GuildIconPreview({ src }: { src: string }) {
    return (
        <div
            className="grid grid-cols-2 gap-2"
            data-test="guild-icon-preview"
            role="group"
            aria-label="Icon preview in light and dark mode"
        >
            {tiles.map((tile) => (
                <div
                    key={tile.label}
                    className="flex items-center gap-3 rounded-md border p-3"
                    style={{ background: tile.background, color: tile.text }}
                >
                    <span
                        className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-sm"
                        style={{ background: tile.background }}
                    >
                        <img
                            src={src}
                            alt=""
                            className="size-full object-cover"
                        />
                    </span>
                    <span className="text-xs">{tile.label}</span>
                </div>
            ))}
        </div>
    );
}
