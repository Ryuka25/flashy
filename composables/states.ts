import type { CarouselApi } from "~/components/ui/carousel";

export const useShortcutAutoplay = () =>
  useState("shortcutAutoplay", () => true);
export const useShortcutCarouselEmblaApi = () =>
  useState<CarouselApi | null>("shortcutCarouselEmblaApi", () => null);
