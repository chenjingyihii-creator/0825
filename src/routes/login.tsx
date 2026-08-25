import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-screen place-items-center px-6 pt-16">
      <div className="glass w-full max-w-sm space-y-4 rounded-3xl p-8">
        <h1 className="text-xl font-bold">登录</h1>
        <p className="text-sm text-muted">作品集公开可浏览，登录仅用于站点账户。</p>
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <button
              key={p.providerId}
              type="button"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              className="pill-glow w-full py-2.5 text-sm font-medium"
            >
              Continue with {p.label}
            </button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
        <Link to="/" className="block text-center text-xs text-accent">
          返回作品集
        </Link>
      </div>
    </main>
  );
}
