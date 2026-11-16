import { Testimonial } from "@/components/testimonial";
import { site } from "@/lib/site";
import { homePageVoices } from "@/lib/testimonials";

export function HomeTestimonials() {
  const voices = homePageVoices(site.showDraftHints);

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {voices.map((voice) => (
        <Testimonial key={voice.id} voice={voice} />
      ))}
    </div>
  );
}