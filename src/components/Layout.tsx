import type { ReactNode } from "react";

type LayoutProps = {
    title?: string;
    children: ReactNode;
};

export function Layout({ title = "Donations App", children }: LayoutProps) {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0b0b0b",
                color: "#f5f5f5",
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            }}
        >
            <header
                style={{
                    borderBottom: "1px solid #2a2a2a",
                    padding: "16px 24px",
                    position: "sticky",
                    top: 0,
                    background: "#0b0b0b",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        maxWidth: 980,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                    }}
                >
                    <div>
                        <h1 style={{ margin: 0, fontSize: 18 }}>{title}</h1>
                        <p style={{ margin: "4px 0 0", opacity: 0.8, fontSize: 12 }}>
                            Doações de animais domésticos e roupas (MVP)
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
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
                            onClick={() => alert("Depois a gente liga isso ao login 🙂")}
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </header>

            <main style={{ padding: "24px" }}>
                <div style={{ maxWidth: 980, margin: "0 auto" }}>{children}</div>
            </main>
        </div>
    );
}
