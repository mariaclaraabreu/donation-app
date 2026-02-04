import { useEffect, useState } from "react";
import { useParams, useNavigate } from "@tanstack/react-router";
import type { DonationItem } from "../types/donation";
import { getDonationItem } from "../services/items.service";
import { Layout } from "../components/Layout";

const backButtonStyle = {
    marginBottom: 16,
    padding: "8px 14px",
    border: "1px solid #2a2a2a",
    borderRadius: 8,
    background: "transparent",
    color: "#f5f5f5",
    fontSize: 14,
    cursor: "pointer",
} as const;

export function ItemDetail() {
    const { id } = useParams({ strict: false });
    const navigate = useNavigate();
    const [item, setItem] = useState<DonationItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDonationItem(id)
            .then(setItem)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <button
                    type="button"
                    onClick={() => navigate({ to: "/" })}
                    style={backButtonStyle}
                >
                    ← Voltar
                </button>
                <div>loading...</div>
            </Layout>
        );
    }

    if (!item) {
        return (
            <Layout>
                <button
                    type="button"
                    onClick={() => navigate({ to: "/" })}
                    style={backButtonStyle}
                >
                    ← Back
                </button>
                <p>Item not found.</p>
            </Layout>
        );
    }

    const image = item.photos?.[0];

    return (
        <Layout>
            <button
                type="button"
                onClick={() => navigate({ to: "/" })}
                style={backButtonStyle}
            >
                ← Voltar
            </button>
            <article
                style={{
                    maxWidth: 640,
                    margin: "0 auto",
                    border: "1px solid #2a2a2a",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "#121212",
                }}
            >
                {image ? (
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "16/10",
                            background: "#1d1d1d",
                        }}
                    >
                        <img
                            src={image}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                ) : null}

                <div style={{ padding: 24 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                        }}
                    >
                        <div>
                            <h1 style={{ margin: 0, fontSize: 22 }}>
                                {item.title}
                            </h1>
                            <p
                                style={{
                                    margin: "8px 0 0",
                                    opacity: 0.8,
                                    fontSize: 14,
                                }}
                            >
                                {item.category} • {item.neighborhood}
                            </p>
                        </div>
                        <span
                            style={{
                                border: "1px solid #2a2a2a",
                                padding: "6px 12px",
                                borderRadius: 999,
                                fontSize: 12,
                                opacity: 0.9,
                            }}
                        >
                            {item.status}
                        </span>
                    </div>

                    <p
                        style={{
                            margin: "16px 0 0",
                            fontSize: 15,
                            lineHeight: 1.5,
                            opacity: 0.9,
                        }}
                    >
                        {item.description}
                    </p>

                    {"pet" in item && item.pet && (
                        <div
                            style={{
                                marginTop: 20,
                                padding: 16,
                                background: "#1d1d1d",
                                borderRadius: 8,
                            }}
                        >
                            <strong style={{ fontSize: 12, opacity: 0.8 }}>
                                Pet
                            </strong>
                            <p style={{ margin: "8px 0 0", fontSize: 14 }}>
                                Species: {item.pet.species} • Size:{" "}
                                {item.pet.size}
                                {item.pet.vaccinated != null &&
                                    ` • Vaccinated: ${item.pet.vaccinated ? "Yes" : "No"}`}
                                {item.pet.neutered != null &&
                                    ` • Neutered: ${item.pet.neutered ? "Yes" : "No"}`}
                            </p>
                        </div>
                    )}

                    {"clothing" in item && item.clothing && (
                        <div
                            style={{
                                marginTop: 20,
                                padding: 16,
                                background: "#1d1d1d",
                                borderRadius: 8,
                            }}
                        >
                            <strong style={{ fontSize: 12, opacity: 0.8 }}>
                                Clothing
                            </strong>
                            <p style={{ margin: "8px 0 0", fontSize: 14 }}>
                                Type: {item.clothing.type}
                                {item.clothing.size &&
                                    ` • Size: ${item.clothing.size}`}
                                {" • Condition: "}
                                {item.clothing.condition}
                                {item.clothing.brand &&
                                    ` • Brand: ${item.clothing.brand}`}
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </Layout>
    );
}
