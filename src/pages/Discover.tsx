import { useEffect, useState } from "react";
import type { DonationItem } from "../types/donation";
import { listDonationItems } from "../services/items.service";
import { Layout } from "../components/Layout";
import { DonationCard } from "../components/DonationCard";

export function Discover() {
    const [items, setItems] = useState<DonationItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listDonationItems()
            .then(setItems)
            .finally(() => setLoading(false));
    }, []);

    return (
        <Layout>
            {loading ? (
                <div>loading...</div>
            ) : (
                <>
                    <p style={{ marginTop: 0, opacity: 0.85 }}>
                        Available items: <strong>{items.length}</strong>
                    </p>

                    <div style={{ display: "grid", gap: 12 }}>
                        {items.map((item) => (
                            <DonationCard
                                key={item.id}
                                item={item}
                                onOpen={(id) => alert(`to /item/${id}`)}
                            />
                        ))}
                    </div>
                </>
            )}
        </Layout>
    );
}
