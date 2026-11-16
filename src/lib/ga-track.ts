/** HTML-Attribute für {@link GaInteractionTracker} (data-ga-event + Parameter). */

export function gaTrackAttrs(
  event: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  const attrs: Record<string, string> = { "data-ga-event": event };
  if (!params) return attrs;

  const attrByKey: Record<string, string> = {
    channel: "data-ga-channel",
    placement: "data-ga-placement",
    format: "data-ga-format",
    action: "data-ga-action",
    method: "data-ga-method",
    link_url: "data-ga-link-url",
    outbound: "data-ga-outbound",
    category: "data-ga-category",
  };

  for (const [key, value] of Object.entries(params)) {
    const attr = attrByKey[key];
    if (attr && value !== undefined) attrs[attr] = String(value);
  }

  return attrs;
}