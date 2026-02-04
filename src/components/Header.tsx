import { Link, useRouterState } from "@tanstack/react-router";

const navLinkStyle = (active: boolean) => ({
    padding: "8px 12px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: active ? 600 : 400,
    color: "#f5f5f5",
    textDecoration: "none",
    background: active ? "rgba(255,255,255,0.08)" : "transparent",
});

export function Header() {
    const pathname = useRouterState({ select: (s) => s.location.pathname });

    return (
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
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <h1 style={{ margin: 0, fontSize: 18 }}>Donations App</h1>
                    <nav style={{ display: "flex", gap: 4 }}>
                        <Link
                            to="/"
                            style={navLinkStyle(pathname === "/")}
                        >
                            Home
                        </Link>
                        <Link
                            to="/my-donations"
                            style={navLinkStyle(pathname.startsWith("/my-donations"))}
                        >
                            My donations
                        </Link>
                        <Link
                            to="/my-interests"
                            style={navLinkStyle(pathname.startsWith("/my-interests"))}
                        >
                            My interests
                        </Link>
                    </nav>
                </div>

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
                    onClick={() => alert("Will connect to login later 🙂")}
                >
                    Sign in
                </button>
            </div>
        </header>
    );
}
