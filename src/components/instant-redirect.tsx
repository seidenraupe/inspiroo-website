import Link from "next/link";

type InstantRedirectProps = {
  target: string;
  message: string;
  linkLabel: string;
};

/** Sofortweiterleitung per `location.replace` (statischer Export, ohne Server-Redirect). */
export function InstantRedirect({ target, message, linkLabel }: InstantRedirectProps) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="text-lg text-ink/75">{message}</p>
        <p className="mt-6">
          <Link
            href={target}
            className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            {linkLabel}
          </Link>
        </p>
      </section>
    </>
  );
}