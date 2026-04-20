import { WidgetSelector } from "../interfaces/widgetSelector.interface";
import CustomScripts from "../widgets/leftPanel/components/CustomScripts";
import MediaWidget from "../widgets/MediaWidget";
import Workspaces from "../widgets/bar/components/Workspaces";
import Information from "../widgets/bar/components/Information";
import Utilities from "../widgets/bar/components/Utilities";
import ScriptTimer from "../widgets/rightPanel/components/ScriptTimer";
import { Accessor } from "ags";
import MangaViewer from "../widgets/leftPanel/components/MangaViewer";
import SettingsWidget from "../widgets/leftPanel/components/SettingsWidget";
import Calendar from "../widgets/rightPanel/components/Calendar";
import NotificationHistory from "../widgets/rightPanel/components/NotificationHistory";
import KeyBinds from "../widgets/leftPanel/components/KeyBinds";
import SystemResources from "../widgets/rightPanel/components/SystemResources";
import { Gtk } from "ags/gtk4";

export const barWidgetSelectors: WidgetSelector[] = [
  {
    name: "workspaces",
    icon: "󰒘",
    widget: ({ halign }: { halign?: Gtk.Align | Accessor<Gtk.Align> }) =>
      Workspaces({ halign: halign }),
    enabled: true,
  },
  {
    name: "information",
    icon: "󰒘",
    widget: ({ halign }: { halign?: Gtk.Align | Accessor<Gtk.Align> }) =>
      Information({ halign: halign }),
    enabled: true,
  },
  {
    name: "utilities",
    icon: "󰒘",
    widget: ({ halign }: { halign?: Gtk.Align | Accessor<Gtk.Align> }) =>
      Utilities({ halign: halign }),
    enabled: true,
  },
];

export const rightPanelWidgetSelectors: WidgetSelector[] = [
  {
    name: "Media",
    icon: "",
    widget: ({
      width,
      height,
      className,
    }: {
      width?: number | Accessor<number>;
      height?: number | Accessor<number>;
      className?: string | Accessor<string>;
    }) => MediaWidget({ width: width, height: height, className: className }),
    enabled: true,
  },
  {
    name: "NotificationHistory",
    icon: "",
    widget: ({ className }: { className?: string | Accessor<string> }) =>
      NotificationHistory({ className }),
    enabled: true,
  },
  {
    name: "ScriptTimer",
    icon: "󰀠",
    widget: ({ className }: { className?: string | Accessor<string> }) =>
      ScriptTimer({ className }),

    enabled: false,
  },
  {
    name: "Calendar",
    icon: "󰃰",
    widget: ({ className }: { className?: string | Accessor<string> }) =>
      Calendar({ className }),
    enabled: true,
  },
  {
    name: "SystemResources",
    icon: "󰍛",
    widget: ({ className }: { className?: string | Accessor<string> }) =>
      SystemResources({ className }),
    enabled: true,
  },
];

export const leftPanelWidgetSelectors: WidgetSelector[] = [
  {
    name: "MangaViewer",
    icon: "",
    widget: () => MangaViewer(),
    enabled: false,
  },
  {
    name: "Settings",
    icon: "",
    widget: () => SettingsWidget(),
    enabled: false,
  },
  {
    name: "CustomScripts",
    icon: "",
    widget: () => CustomScripts(),
    enabled: false,
  },
  {
    name: "KeyBinds",
    icon: "",
    widget: () => KeyBinds(),
    enabled: false,
  },
];
