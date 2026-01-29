import type { DonationItem } from "../types/donation";

type DonationCardProps = {
    item: DonationItem;
    onOpen?: (id: string) => void; // depois a gente conecta com router
};

function clamp(text: string, max = 120) {
    if (text.length <= max) return text;
    return text.slice(0, max).trimEnd() + "…";
}

export function DonationCard({ item, onOpen }: DonationCardProps) {
    const image = item.photos?.[0];

    return (
        <article
            style={{
                border: "1px solid #2a2a2a",
                borderRadius: 12,
                overflow: "hidden",
                background: "#121212",
            }}
        >
            <div style={{ display: "flex", gap: 12 }}>
                <div
                    style={{
                        width: 140,
                        height: 120,
                        background: "#1d1d1d",
                        flexShrink: 0,
                    }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt={item.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            loading="lazy"
                        />
                    ) : null}
                </div>

                <div style={{ padding: 12, flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                        <div>
                            <h3 style={{ margin: 0, fontSize: 16 }}>{item.title}</h3>
                            <p style={{ margin: "6px 0 0", opacity: 0.8, fontSize: 12 }}>
                                {item.category} • {item.neighborhood}
                            </p>
                        </div>

                        <span
                            style={{
                                border: "1px solid #2a2a2a",
                                padding: "4px 8px",
                                borderRadius: 999,
                                fontSize: 11,
                                height: "fit-content",
                                opacity: 0.9,
                            }}
                            title={`Status: ${item.status}`}
                        >
                            {item.status}
                        </span>
                    </div>

                    <p style={{ margin: "10px 0 0", fontSize: 13, opacity: 0.9 }}>
                        {clamp(item.description, 140)}
                    </p>

                    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                        <button
                            type="button"
                            style={{
                                border: "1px solid #2a2a2a",
                                background: "transparent",
                                color: "#f5f5f5",
                                padding: "8px 10px",
                                borderRadius: 8,
                                cursor: "pointer",
                                fontSize: 12,
                            }}
                            onClick={() => onOpen?.(item.id)}
                        >
                            Ver detalhes
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
