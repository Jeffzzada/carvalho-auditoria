import { describe, expect, it } from "vitest";

import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, whatsappUrl } from "@/lib/whatsapp";

describe("WhatsApp", () => {
  it("usa o número comercial oficial no formato internacional nos links", () => {
    expect(WHATSAPP_NUMBER).toBe("5571984501050");
    expect(whatsappUrl()).toContain("https://wa.me/5571984501050");
  });

  it("exibe o número no formato (71) 98450-1050 nos textos", () => {
    expect(WHATSAPP_DISPLAY).toBe("(71) 98450-1050");
  });
});
