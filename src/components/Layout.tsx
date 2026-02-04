import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
    children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0b0b0b",
                color: "#f5f5f5",
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            }}
        >
            <Header />
            <main style={{ padding: "24px" }}>
                <div style={{ maxWidth: 980, margin: "0 auto" }}>{children}</div>
            </main>
        </div>
    );
}
