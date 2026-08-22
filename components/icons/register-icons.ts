"use client";

import { addIcon } from "@iconify/react";
import { icons as solar } from "@iconify-json/solar";
import { icons as simpleIcons } from "@iconify-json/simple-icons";

const solarNames = [
  "arrow-right-linear",
  "arrow-left-linear",
  "phone-linear",
  "phone-calling-linear",
  "hamburger-menu-linear",
  "close-circle-linear",
  "check-read-linear",
  "check-circle-linear",
  "check-circle-bold",
  "pallete-2-linear",
  "widget-linear",
  "verified-check-linear",
  "document-add-linear",
  "pen-new-square-linear",
  "box-linear",
  "star-bold",
  "letter-linear",
  "map-point-linear",
  "clock-circle-linear",
  "settings-minimalistic-linear",
  "routing-2-linear",
  "shop-linear",
  "text-bold-linear",
  "lightbulb-linear",
  "layers-linear",
  "map-linear",
  "medal-star-linear",
  "bus-linear",
  "printer-linear",
  "scissors-linear",
  "gallery-wide-linear",
  "widget-4-linear",
  "tuning-2-linear",
  "buildings-linear",
] as const;

const simpleNames = ["x", "facebook", "instagram"] as const;

for (const name of solarNames) {
  const icon = solar.icons[name];
  if (icon) {
    addIcon(`solar:${name}`, {
      body: icon.body,
      width: solar.width ?? 24,
      height: solar.height ?? 24,
    });
  }
}

for (const name of simpleNames) {
  const icon = simpleIcons.icons[name];
  if (icon) {
    addIcon(`simple-icons:${name}`, {
      body: icon.body,
      width: simpleIcons.width ?? 24,
      height: simpleIcons.height ?? 24,
    });
  }
}
