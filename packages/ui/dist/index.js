import { SalesIcon, CaretDownIcon, CheckIcon, CaretUpIcon, CalendarIcon, CaretLeftIcon, CaretRightIcon, ClockIcon, CloseIcon, MagnifyingGlassIcon, XIcon, LoadingIcon } from './chunk-7O6MWCCB.js';
import { cn } from './chunk-DN2AEEA2.js';
import { cva } from 'class-variance-authority';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React11 from 'react';
import { Avatar as Avatar$1, Select as Select$1, Popover, RadioGroup as RadioGroup$1, Checkbox as Checkbox$1, Switch as Switch$1, Progress } from 'radix-ui';

// src/components/button/button.module.css
var button_default = {
  root: "button_root"};
var buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      hierarchy: {
        primary: "",
        secondary: "",
        tertiary: "",
        destructive: ""
      },
      size: {
        sm: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        md: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
      }
    },
    defaultVariants: {
      hierarchy: "primary",
      size: "md"
    }
  }
);
function Button({
  className,
  hierarchy = "primary",
  size = "md",
  tone = "standard",
  label,
  leftIcon,
  rightIcon,
  loading = false,
  ...props
}) {
  const effectiveLeftIcon = loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : leftIcon;
  const effectiveRightIcon = rightIcon ?? (loading ? /* @__PURE__ */ jsx("span", { style: { visibility: "hidden" }, children: effectiveLeftIcon }) : void 0);
  const iconState = loading ? "both" : effectiveLeftIcon && rightIcon ? "both" : effectiveLeftIcon ? "inline-start" : rightIcon ? "inline-end" : void 0;
  const effectiveTone = tone === "inverse" && (hierarchy === "primary" || hierarchy === "secondary") ? "inverse" : "standard";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "data-slot": "button",
      "data-hierarchy": hierarchy,
      "data-size": size,
      "data-tone": effectiveTone,
      "data-icon": iconState,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      className: cn(button_default.root, buttonVariants({ hierarchy, size, className })),
      ...props,
      children: [
        effectiveLeftIcon && /* @__PURE__ */ jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveLeftIcon }),
        label != null && /* @__PURE__ */ jsx("span", { children: label }),
        effectiveRightIcon && /* @__PURE__ */ jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveRightIcon })
      ]
    }
  );
}

// src/components/button-group/button-group.module.css
var button_group_default = {
  root: "button_group_root"
};
function ButtonGroup({
  orientation = "horizontal",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(button_group_default.root, className),
      ...props,
      children
    }
  );
}

// src/components/icon-button/icon-button.module.css
var icon_button_default = {
  root: "icon_button_root",
  iconWrapper: "icon_button_iconWrapper"};
function IconButton({
  icon,
  size = "md",
  hierarchy = "primary",
  tone = "standard",
  loading = false,
  className,
  disabled,
  ...props
}) {
  const displayIcon = loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : icon;
  const effectiveTone = hierarchy === "primary" ? tone : "standard";
  return /* @__PURE__ */ jsx(
    "button",
    {
      "data-slot": "icon-button",
      "data-size": size,
      "data-hierarchy": hierarchy,
      "data-tone": effectiveTone,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: cn(icon_button_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: icon_button_default.iconWrapper, children: displayIcon })
    }
  );
}

// src/components/social-button/social-button.module.css
var social_button_default = {
  root: "social_button_root",
  icon: "social_button_icon"};
function SocialButton({
  label,
  icon,
  size = "md",
  loading = false,
  className,
  disabled,
  type = "button",
  ...props
}) {
  const displayIcon = loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : icon;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "data-slot": "social-button",
      "data-size": size,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: cn(social_button_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: social_button_default.icon, children: displayIcon }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
}

// src/components/link/link.module.css
var link_default = {
  root: "link_root",
  iconWrapper: "link_iconWrapper"
};
function Link({
  context = "standalone",
  tone = "standard",
  href,
  label,
  external = false,
  className,
  target,
  rel,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      "data-slot": "link",
      "data-context": context,
      "data-tone": tone,
      "data-external": external || void 0,
      href,
      target: target ?? (external ? "_blank" : void 0),
      rel: rel ?? (external ? "noopener noreferrer" : void 0),
      className: cn(link_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: link_default.label, children: label }),
        external && /* @__PURE__ */ jsx("span", { className: link_default.iconWrapper, "aria-hidden": "true", children: /* @__PURE__ */ jsx(SalesIcon, {}) })
      ]
    }
  );
}

// src/components/avatar/avatar.module.css
var avatar_default = {
  root: "avatar_root",
  image: "avatar_image",
  fallbackIcon: "avatar_fallbackIcon",
  fallbackCircle: "avatar_fallbackCircle",
  fallbackPerson: "avatar_fallbackPerson",
  initials: "avatar_initials"
};
function resolveInitials(value) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
  }
  return value.trim().slice(0, 2).toUpperCase();
}
function UserFallbackIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ jsx("circle", { className: avatar_default.fallbackCircle, cx: "16", cy: "16", r: "15.5" }),
        /* @__PURE__ */ jsx("circle", { className: avatar_default.fallbackPerson, cx: "16", cy: "10.88", r: "4.48" }),
        /* @__PURE__ */ jsx(
          "ellipse",
          {
            className: avatar_default.fallbackPerson,
            cx: "16",
            cy: "25.28",
            rx: "9.28",
            ry: "6.72"
          }
        )
      ]
    }
  );
}
function resolveContent(src, imageStatus, hasInitials) {
  if (src && imageStatus === "loaded") return "image";
  if (hasInitials) return "initials";
  return "fallback";
}
function Avatar({
  size = "sm",
  src,
  alt = "",
  initials,
  className,
  ...props
}) {
  const resolvedInitials = initials ? resolveInitials(initials) : void 0;
  const [imageStatus, setImageStatus] = React11.useState(src ? "loading" : "idle");
  React11.useEffect(() => {
    setImageStatus(src ? "loading" : "idle");
  }, [src]);
  const content = resolveContent(src, imageStatus, Boolean(resolvedInitials));
  return /* @__PURE__ */ jsxs(
    Avatar$1.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      "data-content": content,
      className: cn(avatar_default.root, className),
      ...props,
      children: [
        src ? /* @__PURE__ */ jsx(
          Avatar$1.Image,
          {
            "data-slot": "avatar-image",
            src,
            alt,
            className: avatar_default.image,
            onLoadingStatusChange: setImageStatus
          }
        ) : null,
        /* @__PURE__ */ jsx(
          Avatar$1.Fallback,
          {
            "data-slot": "avatar-fallback",
            delayMs: src ? 600 : void 0,
            children: resolvedInitials ? /* @__PURE__ */ jsx("span", { className: avatar_default.initials, children: resolvedInitials }) : /* @__PURE__ */ jsx(UserFallbackIcon, { className: avatar_default.fallbackIcon })
          }
        )
      ]
    }
  );
}

// src/components/list-item/list-item.module.css
var list_item_default = {
  root: "list_item_root",
  avatar: "list_item_avatar",
  iconWrapper: "list_item_iconWrapper",
  text: "list_item_text",
  primary: "list_item_primary",
  secondary: "list_item_secondary",
  tertiary: "list_item_tertiary"
};
function resolveLines(secondaryText, tertiaryText) {
  if (tertiaryText) return 3;
  if (secondaryText) return 2;
  return 1;
}
function ListItem({
  primaryText,
  secondaryText,
  tertiaryText,
  avatarSrc,
  avatarInitials,
  avatarAlt = "",
  icon,
  className,
  disabled,
  type = "button",
  ...props
}) {
  const lines = resolveLines(secondaryText, tertiaryText);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "data-slot": "list-item",
      "data-lines": lines,
      disabled,
      className: cn(list_item_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: list_item_default.avatar, "aria-hidden": avatarAlt ? void 0 : true, children: /* @__PURE__ */ jsx(
          Avatar,
          {
            size: "sm",
            src: avatarSrc,
            initials: avatarInitials,
            alt: avatarAlt
          }
        ) }),
        /* @__PURE__ */ jsxs("span", { className: list_item_default.text, children: [
          /* @__PURE__ */ jsx("span", { className: list_item_default.primary, children: primaryText }),
          secondaryText ? /* @__PURE__ */ jsx("span", { className: list_item_default.secondary, children: secondaryText }) : null,
          tertiaryText ? /* @__PURE__ */ jsx("span", { className: list_item_default.tertiary, children: tertiaryText }) : null
        ] }),
        /* @__PURE__ */ jsx("span", { className: list_item_default.iconWrapper, "data-slot": "list-item-icon", "aria-hidden": "true", children: icon })
      ]
    }
  );
}

// src/components/menu-item/menu-item.module.css
var menu_item_default = {
  root: "menu_item_root"
};
function MenuItem({
  label,
  className,
  disabled,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      "data-slot": "menu-item",
      disabled,
      className: cn(menu_item_default.root, className),
      ...props,
      children: label
    }
  );
}

// src/components/navigation-item/navigation-item.module.css
var navigation_item_default = {
  root: "navigation_item_root",
  icon: "navigation_item_icon"
};
function NavigationItem({
  context = "navigation-bar",
  current = false,
  label,
  icon,
  className,
  disabled,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "data-slot": "navigation-item",
      "data-context": context,
      "data-current": current ? "true" : void 0,
      "data-icon": icon ? "true" : void 0,
      "aria-current": current ? "page" : void 0,
      disabled,
      className: cn(navigation_item_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: navigation_item_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsx("span", { className: navigation_item_default.label, children: label })
      ]
    }
  );
}

// src/components/navigation-bar/navigation-bar.module.css
var navigation_bar_default = {
  root: "navigation_bar_root"
};
function withNavigationBarContext(children) {
  return React11.Children.map(children, (child) => {
    if (!React11.isValidElement(child)) {
      return child;
    }
    return React11.cloneElement(child, { context: "navigation-bar" });
  });
}
function NavigationBar({
  children,
  className,
  "aria-label": ariaLabel = "Navegaci\xF3n",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "data-slot": "navigation-bar",
      "aria-label": ariaLabel,
      className: cn(navigation_bar_default.root, className),
      ...props,
      children: withNavigationBarContext(children)
    }
  );
}

// src/components/breadcrumb/breadcrumb.module.css
var breadcrumb_default = {
  list: "breadcrumb_list",
  item: "breadcrumb_item",
  separator: "breadcrumb_separator"
};
function Separator() {
  return /* @__PURE__ */ jsx("span", { className: breadcrumb_default.separator, "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M5.55806 2.55806C5.80214 2.31398 6.19777 2.31398 6.44185 2.55806L11.4418 7.55806C11.6859 7.80214 11.6859 8.19777 11.4418 8.44185L6.44185 13.4418C6.19777 13.6859 5.80214 13.6859 5.55806 13.4418C5.31398 13.1978 5.31398 12.8021 5.55806 12.5581L10.1162 7.99995L5.55806 3.44185C5.31398 3.19777 5.31398 2.80214 5.55806 2.55806Z",
      fill: "currentColor"
    }
  ) }) });
}
function Breadcrumb({
  className,
  children,
  "aria-label": ariaLabel = "Breadcrumb",
  ...props
}) {
  const items = React11.Children.toArray(children).filter(Boolean);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "data-slot": "breadcrumb",
      "aria-label": ariaLabel,
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ jsx("ol", { className: breadcrumb_default.list, children: items.map((child, index) => /* @__PURE__ */ jsxs("li", { className: breadcrumb_default.item, children: [
        index > 0 ? /* @__PURE__ */ jsx(Separator, {}) : null,
        child
      ] }, index)) })
    }
  );
}

// src/components/breadcrumb-item/breadcrumb-item.module.css
var breadcrumb_item_default = {
  root: "breadcrumb_item_root"
};
function BreadcrumbItem({
  current = false,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      "data-slot": "breadcrumb-item",
      "data-current": current || void 0,
      "aria-current": current ? "page" : void 0,
      context: "standalone",
      tone: "standard",
      className: cn(breadcrumb_item_default.root, className),
      ...props
    }
  );
}

// src/components/filter-chip/filter-chip.module.css
var filter_chip_default = {
  root: "filter_chip_root",
  iconWrapper: "filter_chip_iconWrapper"
};
function FilterChip({
  size = "sm",
  selected = false,
  onSelectedChange,
  icon,
  label,
  className,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "data-slot": "filter-chip",
      "data-size": size,
      "data-selected": selected,
      "aria-pressed": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: cn(filter_chip_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: filter_chip_default.iconWrapper, "aria-hidden": "true", children: icon }),
        label
      ]
    }
  );
}

// src/components/select/select.module.css
var select_default = {
  trigger: "select_trigger",
  value: "select_value",
  icon: "select_icon",
  content: "select_content",
  viewport: "select_viewport",
  item: "select_item",
  itemSuffix: "select_itemSuffix",
  itemIndicator: "select_itemIndicator",
  scrollButton: "select_scrollButton",
  label: "select_label",
  separator: "select_separator"
};
function Select({ ...props }) {
  return /* @__PURE__ */ jsx(Select$1.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Select$1.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Select$1.Value,
    {
      "data-slot": "select-value",
      className: cn(select_default.value, className),
      ...props
    }
  );
}
function SelectTrigger({
  appearance = "outlined",
  tone = "standard",
  error = false,
  className,
  children,
  disabled,
  embedded = false,
  ...props
}) {
  const showError = error && !disabled;
  return /* @__PURE__ */ jsxs(
    Select$1.Trigger,
    {
      "data-slot": "select-trigger",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-embedded": embedded ? "true" : void 0,
      className: cn(select_default.trigger, className),
      disabled,
      "aria-invalid": showError ? true : void 0,
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Select$1.Icon, { asChild: true, children: /* @__PURE__ */ jsx(CaretDownIcon, { className: select_default.icon }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  align = "start",
  ...props
}) {
  return /* @__PURE__ */ jsx(Select$1.Portal, { children: /* @__PURE__ */ jsxs(
    Select$1.Content,
    {
      "data-slot": "select-content",
      className: cn(select_default.content, className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(Select$1.Viewport, { className: select_default.viewport, children }),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Select$1.Label,
    {
      "data-slot": "select-label",
      className: cn(select_default.label, className),
      ...props
    }
  );
}
function SelectItem({ className, children, suffix, ...props }) {
  return /* @__PURE__ */ jsxs(
    Select$1.Item,
    {
      "data-slot": "select-item",
      className: cn(select_default.item, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(Select$1.ItemText, { "data-slot": "select-item-text", children }),
        suffix ? /* @__PURE__ */ jsx("span", { className: select_default.itemSuffix, children: suffix }) : null,
        /* @__PURE__ */ jsx(Select$1.ItemIndicator, { className: select_default.itemIndicator, children: /* @__PURE__ */ jsx(CheckIcon, {}) })
      ]
    }
  );
}
function SelectSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Select$1.Separator,
    {
      "data-slot": "select-separator",
      className: cn(select_default.separator, className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Select$1.ScrollUpButton,
    {
      className: cn(select_default.scrollButton, className),
      ...props,
      children: /* @__PURE__ */ jsx(CaretUpIcon, {})
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Select$1.ScrollDownButton,
    {
      className: cn(select_default.scrollButton, className),
      ...props,
      children: /* @__PURE__ */ jsx(CaretDownIcon, {})
    }
  );
}

// src/components/text-input/text-input.module.css
var text_input_default = {
  root: "text_input_root"
};
var TextInput = React11.forwardRef(
  function TextInput2({
    appearance = "outlined",
    tone = "standard",
    error = false,
    disabled,
    embedded = false,
    className,
    type = "text",
    ...props
  }, ref) {
    const showError = error && !disabled;
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        type,
        "data-slot": "text-input",
        "data-appearance": appearance,
        "data-tone": tone,
        "data-error": showError ? "true" : void 0,
        "data-embedded": embedded ? "true" : void 0,
        className: cn(text_input_default.root, className),
        disabled,
        "aria-invalid": showError ? true : void 0,
        ...props
      }
    );
  }
);

// src/components/phone-input/phone-input.module.css
var phone_input_default = {
  root: "phone_input_root",
  number: "phone_input_number",
  country: "phone_input_country",
  countryTrigger: "phone_input_countryTrigger",
  menu: "phone_input_menu"
};
var DEFAULT_PHONE_COUNTRIES = [
  { value: "mx", dialCode: "+52", label: "M\xE9xico" },
  { value: "us", dialCode: "+1", label: "Estados Unidos" },
  { value: "ca", dialCode: "+1", label: "Canad\xE1" },
  { value: "co", dialCode: "+57", label: "Colombia" },
  { value: "ar", dialCode: "+54", label: "Argentina" },
  { value: "cl", dialCode: "+56", label: "Chile" },
  { value: "pe", dialCode: "+51", label: "Per\xFA" },
  { value: "es", dialCode: "+34", label: "Espa\xF1a" }
];
function PhoneInput({
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  className,
  countries = DEFAULT_PHONE_COUNTRIES,
  country,
  defaultCountry = "mx",
  onCountryChange,
  countryLabel = "C\xF3digo de pa\xEDs",
  id,
  placeholder = "N\xFAmero telef\xF3nico",
  ...props
}) {
  const generatedId = React11.useId();
  const numberId = id ?? generatedId;
  const rootRef = React11.useRef(null);
  const [menuWidth, setMenuWidth] = React11.useState();
  React11.useLayoutEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const syncWidth = () => {
      setMenuWidth(node.getBoundingClientRect().width);
    };
    syncWidth();
    const observer = new ResizeObserver(syncWidth);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const showError = error && !disabled;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: rootRef,
      "data-slot": "phone-input",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: cn(phone_input_default.root, className),
      children: [
        /* @__PURE__ */ jsx("div", { className: phone_input_default.country, children: /* @__PURE__ */ jsxs(
          Select,
          {
            value: country,
            defaultValue: country ? void 0 : defaultCountry,
            onValueChange: onCountryChange,
            disabled,
            children: [
              /* @__PURE__ */ jsx(
                SelectTrigger,
                {
                  embedded: true,
                  appearance,
                  tone,
                  error,
                  disabled,
                  "aria-label": countryLabel,
                  className: phone_input_default.countryTrigger,
                  children: /* @__PURE__ */ jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsx(
                SelectContent,
                {
                  className: phone_input_default.menu,
                  style: menuWidth ? {
                    "--phone-input-menu-width": `${menuWidth}px`,
                    width: menuWidth,
                    minWidth: menuWidth
                  } : void 0,
                  children: countries.map((item) => /* @__PURE__ */ jsx(
                    SelectItem,
                    {
                      value: item.value,
                      suffix: item.label,
                      textValue: `${item.dialCode} ${item.label}`,
                      children: item.dialCode
                    },
                    item.value
                  ))
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: numberId,
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel-national",
            embedded: true,
            appearance,
            tone,
            error,
            disabled,
            placeholder,
            className: phone_input_default.number,
            ...props
          }
        )
      ]
    }
  );
}

// src/components/text-area/text-area.module.css
var text_area_default = {
  root: "text_area_root"
};
function TextArea({
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  className,
  ...props
}) {
  const showError = error && !disabled;
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "text-area",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      className: cn(text_area_default.root, className),
      disabled,
      "aria-invalid": showError ? true : void 0,
      ...props
    }
  );
}

// src/components/form-field/form-field.module.css
var form_field_default = {
  root: "form_field_root",
  label: "form_field_label",
  supporting: "form_field_supporting"
};
function FormField({
  label,
  supportingText,
  appearance = "outlined",
  tone = "standard",
  control,
  multiline = false,
  rows,
  options,
  value,
  defaultValue,
  onValueChange,
  country,
  defaultCountry,
  onCountryChange,
  countries,
  error = false,
  id,
  className,
  disabled,
  type,
  placeholder,
  ...props
}) {
  const generatedId = React11.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const resolvedControl = control ?? (multiline ? "textarea" : "input");
  const controlProps = {
    id: inputId,
    appearance,
    tone,
    error,
    disabled,
    "aria-describedby": supportingId
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "form-field",
      "data-tone": tone,
      "data-error": error && !disabled ? "true" : "false",
      "data-disabled": disabled || void 0,
      className: cn(form_field_default.root, className),
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: form_field_default.label, children: label }),
        resolvedControl === "phone" ? /* @__PURE__ */ jsx(
          PhoneInput,
          {
            ...controlProps,
            country,
            defaultCountry,
            onCountryChange,
            countries,
            placeholder,
            value,
            defaultValue,
            ...props
          }
        ) : resolvedControl === "select" ? /* @__PURE__ */ jsxs(
          Select,
          {
            value,
            defaultValue,
            onValueChange,
            disabled,
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { ...controlProps, children: /* @__PURE__ */ jsx(SelectValue, { placeholder }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: options?.map((option) => /* @__PURE__ */ jsx(
                SelectItem,
                {
                  value: option.value,
                  disabled: option.disabled,
                  children: option.label
                },
                option.value
              )) })
            ]
          }
        ) : resolvedControl === "textarea" ? /* @__PURE__ */ jsx(
          TextArea,
          {
            rows,
            placeholder,
            value,
            defaultValue,
            ...controlProps,
            ...props
          }
        ) : /* @__PURE__ */ jsx(
          TextInput,
          {
            type,
            placeholder,
            value,
            defaultValue,
            ...controlProps,
            ...props
          }
        ),
        supportingText ? /* @__PURE__ */ jsx("span", { id: supportingId, className: form_field_default.supporting, children: supportingText }) : null
      ]
    }
  );
}

// src/components/date-field/date-field.module.css
var date_field_default = {
  root: "date_field_root",
  label: "date_field_label",
  supporting: "date_field_supporting",
  control: "date_field_control",
  input: "date_field_input",
  trailing: "date_field_trailing"
};
function DateField({
  label,
  supportingText,
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  calendarLabel = "Abrir calendario",
  onCalendarClick,
  calendarExpanded,
  nativePicker = true,
  className,
  id,
  onClick,
  ...props
}) {
  const inputRef = React11.useRef(null);
  const generatedId = React11.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const showError = error && !disabled;
  function openPicker(event) {
    if (disabled) return;
    if (onCalendarClick) {
      onCalendarClick(event);
      return;
    }
    const input = inputRef.current;
    if (!input) return;
    try {
      input.showPicker?.();
    } catch {
      input.focus();
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "date-field",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: cn(date_field_default.root, className),
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: date_field_default.label, children: label }),
        /* @__PURE__ */ jsxs("div", { className: date_field_default.control, children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              ref: inputRef,
              id: inputId,
              type: "date",
              embedded: true,
              appearance,
              tone,
              error,
              disabled,
              "aria-describedby": supportingId,
              className: date_field_default.input,
              ...props,
              onClick: (event) => {
                onClick?.(event);
                if (!nativePicker) event.preventDefault();
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: date_field_default.trailing,
              "aria-label": calendarLabel,
              "aria-haspopup": onCalendarClick ? "dialog" : void 0,
              "aria-expanded": onCalendarClick ? Boolean(calendarExpanded) : void 0,
              disabled,
              tabIndex: onCalendarClick ? 0 : -1,
              onClick: openPicker,
              children: /* @__PURE__ */ jsx(CalendarIcon, {})
            }
          )
        ] }),
        supportingText ? /* @__PURE__ */ jsx("span", { id: supportingId, className: date_field_default.supporting, children: supportingText }) : null
      ]
    }
  );
}

// src/components/calendar-day/calendar-day.module.css
var calendar_day_default = {
  root: "calendar_day_root"
};
function CalendarDay({
  selected = false,
  children,
  className,
  disabled,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      "data-slot": "calendar-day",
      "data-selected": selected ? "true" : void 0,
      "aria-pressed": selected,
      disabled,
      className: cn(calendar_day_default.root, className),
      ...props,
      children
    }
  );
}

// src/components/calendar/calendar.module.css
var calendar_default = {
  root: "calendar_root",
  header: "calendar_header",
  title: "calendar_title",
  grid: "calendar_grid",
  weekdays: "calendar_weekdays",
  week: "calendar_week",
  weekday: "calendar_weekday"
};
var WEEK_STARTS_ON = 1;
function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isSameMonth(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
function toTime(date) {
  return startOfDay(date).getTime();
}
function buildWeeks(viewMonth) {
  const first = startOfMonth(viewMonth);
  const startOffset = (first.getDay() - WEEK_STARTS_ON + 7) % 7;
  const cursor = new Date(first.getFullYear(), first.getMonth(), 1 - startOffset);
  const weeks = [];
  for (let week = 0; week < 6; week += 1) {
    const days = [];
    for (let day = 0; day < 7; day += 1) {
      days.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(days);
  }
  return weeks;
}
function weekdayLabels(locale) {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
  const sunday = new Date(2026, 0, 4);
  const start = new Date(sunday);
  start.setDate(sunday.getDate() + WEEK_STARTS_ON);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const label = formatter.format(date).replace(/\./g, "");
    return label.charAt(0).toUpperCase() + label.slice(1);
  });
}
function monthTitle(month, locale) {
  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric"
  }).format(month);
  return label.charAt(0).toUpperCase() + label.slice(1);
}
function dayLabel(date, locale) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}
function Calendar({
  value,
  defaultValue,
  onValueChange,
  month: monthProp,
  defaultMonth,
  onMonthChange,
  locale = "es-MX",
  minDate,
  maxDate,
  previousLabel = "Mes anterior",
  nextLabel = "Mes siguiente",
  className,
  ...props
}) {
  const titleId = React11.useId();
  const [uncontrolledValue, setUncontrolledValue] = React11.useState(defaultValue);
  const isControlled = value !== void 0;
  const selected = isControlled ? value ?? void 0 : uncontrolledValue;
  const [uncontrolledMonth, setUncontrolledMonth] = React11.useState(
    () => startOfMonth(defaultMonth ?? value ?? defaultValue ?? /* @__PURE__ */ new Date())
  );
  const viewMonth = monthProp ? startOfMonth(monthProp) : uncontrolledMonth;
  const weeks = React11.useMemo(() => buildWeeks(viewMonth), [viewMonth]);
  const labels = React11.useMemo(() => weekdayLabels(locale), [locale]);
  const minTime = minDate ? toTime(minDate) : void 0;
  const maxTime = maxDate ? toTime(maxDate) : void 0;
  function setViewMonth(next) {
    const normalized = startOfMonth(next);
    if (monthProp == null) setUncontrolledMonth(normalized);
    onMonthChange?.(normalized);
  }
  function selectDate(next) {
    if (!isControlled) setUncontrolledValue(next);
    onValueChange?.(next);
    if (!isSameMonth(next, viewMonth)) setViewMonth(next);
  }
  function isDisabled(date) {
    const time = toTime(date);
    if (minTime != null && time < minTime) return true;
    if (maxTime != null && time > maxTime) return true;
    return false;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "calendar",
      role: "group",
      "aria-labelledby": titleId,
      className: cn(calendar_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: calendar_default.header, children: [
          /* @__PURE__ */ jsx(
            IconButton,
            {
              hierarchy: "tertiary",
              size: "md",
              icon: /* @__PURE__ */ jsx(CaretLeftIcon, {}),
              "aria-label": previousLabel,
              onClick: () => setViewMonth(addMonths(viewMonth, -1))
            }
          ),
          /* @__PURE__ */ jsx("h2", { id: titleId, className: calendar_default.title, "aria-live": "polite", children: monthTitle(viewMonth, locale) }),
          /* @__PURE__ */ jsx(
            IconButton,
            {
              hierarchy: "tertiary",
              size: "md",
              icon: /* @__PURE__ */ jsx(CaretRightIcon, {}),
              "aria-label": nextLabel,
              onClick: () => setViewMonth(addMonths(viewMonth, 1))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { role: "grid", "aria-labelledby": titleId, className: calendar_default.grid, children: [
          /* @__PURE__ */ jsx("div", { role: "row", className: calendar_default.weekdays, children: labels.map((label) => /* @__PURE__ */ jsx("div", { role: "columnheader", className: calendar_default.weekday, children: label }, label)) }),
          weeks.map((week) => {
            const firstDay = week[0];
            if (!firstDay) return null;
            return /* @__PURE__ */ jsx(
              "div",
              {
                role: "row",
                className: calendar_default.week,
                children: week.map((date) => {
                  const selectedDay = selected != null && isSameDay(date, selected);
                  const outside = !isSameMonth(date, viewMonth);
                  const disabled = isDisabled(date);
                  return /* @__PURE__ */ jsx(
                    "div",
                    {
                      role: "gridcell",
                      "aria-selected": selectedDay,
                      "data-outside": outside || void 0,
                      children: /* @__PURE__ */ jsx(
                        CalendarDay,
                        {
                          selected: selectedDay,
                          disabled,
                          "aria-label": dayLabel(date, locale),
                          onClick: () => selectDate(date),
                          children: date.getDate()
                        }
                      )
                    },
                    date.toISOString()
                  );
                })
              },
              firstDay.toISOString()
            );
          })
        ] })
      ]
    }
  );
}

// src/components/date-picker/date-picker.module.css
var date_picker_default = {
  root: "date_picker_root",
  anchor: "date_picker_anchor",
  content: "date_picker_content"
};
function toIsoDate(date) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function fromIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return void 0;
  const [yearStr, monthStr, dayStr] = value.split("-");
  if (!yearStr || !monthStr || !dayStr) return void 0;
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return void 0;
  }
  return date;
}
function DatePicker({
  label,
  supportingText,
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  value,
  defaultValue,
  onValueChange,
  minDate,
  maxDate,
  locale = "es-MX",
  calendarLabel,
  name,
  id,
  className,
  ...props
}) {
  const fieldRef = React11.useRef(null);
  const [open, setOpen] = React11.useState(false);
  const [uncontrolled, setUncontrolled] = React11.useState(defaultValue);
  const selected = value ?? uncontrolled;
  function setSelected(next) {
    if (value == null) setUncontrolled(next);
    onValueChange?.(next);
  }
  function handleFieldChange(event) {
    const next = event.target.value ? fromIsoDate(event.target.value) : void 0;
    setSelected(next);
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "date-picker",
      "data-appearance": appearance,
      "data-tone": tone,
      className: cn(date_picker_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxs(
        Popover.Root,
        {
          open,
          onOpenChange: (next) => {
            if (disabled) return;
            setOpen(next);
          },
          children: [
            /* @__PURE__ */ jsx(Popover.Anchor, { asChild: true, children: /* @__PURE__ */ jsx("div", { ref: fieldRef, className: date_picker_default.anchor, children: /* @__PURE__ */ jsx(
              DateField,
              {
                label,
                supportingText,
                appearance,
                tone,
                error,
                disabled,
                calendarLabel,
                nativePicker: false,
                calendarExpanded: open,
                onCalendarClick: () => {
                  if (disabled) return;
                  setOpen((current) => !current);
                },
                value: selected ? toIsoDate(selected) : "",
                onChange: handleFieldChange,
                min: minDate ? toIsoDate(minDate) : void 0,
                max: maxDate ? toIsoDate(maxDate) : void 0,
                name,
                id
              }
            ) }) }),
            /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
              Popover.Content,
              {
                "data-slot": "date-picker-content",
                className: date_picker_default.content,
                side: "bottom",
                align: "start",
                sideOffset: 8,
                onOpenAutoFocus: (event) => event.preventDefault(),
                onInteractOutside: (event) => {
                  if (fieldRef.current?.contains(event.target)) {
                    event.preventDefault();
                  }
                },
                children: /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    value: selected ?? null,
                    onValueChange: (next) => {
                      setSelected(next);
                      setOpen(false);
                    },
                    defaultMonth: selected,
                    minDate,
                    maxDate,
                    locale
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}

// src/components/time-field/time-field.module.css
var time_field_default = {
  root: "time_field_root",
  label: "time_field_label",
  supporting: "time_field_supporting",
  control: "time_field_control",
  input: "time_field_input",
  trailing: "time_field_trailing"
};
function TimeField({
  label,
  supportingText,
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  timeLabel = "Abrir selector de hora",
  className,
  id,
  ...props
}) {
  const inputRef = React11.useRef(null);
  const generatedId = React11.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const showError = error && !disabled;
  function openPicker() {
    if (disabled) return;
    const input = inputRef.current;
    if (!input) return;
    try {
      input.showPicker?.();
    } catch {
      input.focus();
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "time-field",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: cn(time_field_default.root, className),
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: time_field_default.label, children: label }),
        /* @__PURE__ */ jsxs("div", { className: time_field_default.control, children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              ref: inputRef,
              id: inputId,
              type: "time",
              embedded: true,
              appearance,
              tone,
              error,
              disabled,
              "aria-describedby": supportingId,
              className: time_field_default.input,
              ...props
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: time_field_default.trailing,
              "aria-label": timeLabel,
              disabled,
              tabIndex: -1,
              onClick: openPicker,
              children: /* @__PURE__ */ jsx(ClockIcon, {})
            }
          )
        ] }),
        supportingText ? /* @__PURE__ */ jsx("span", { id: supportingId, className: time_field_default.supporting, children: supportingText }) : null
      ]
    }
  );
}

// src/components/combobox/combobox.module.css
var combobox_default = {
  root: "combobox_root",
  label: "combobox_label",
  supporting: "combobox_supporting",
  control: "combobox_control",
  input: "combobox_input",
  list: "combobox_list",
  options: "combobox_options",
  empty: "combobox_empty"
};
function optionLabel(options, value) {
  if (!value) return "";
  return options.find((option) => option.value === value)?.label ?? "";
}
function matchesQuery(option, query) {
  const normalized = query.trim().toLocaleLowerCase("es-MX");
  if (!normalized) return true;
  return option.label.toLocaleLowerCase("es-MX").includes(normalized);
}
function Combobox({
  label,
  supportingText,
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  placeholder,
  options,
  value,
  defaultValue,
  onValueChange,
  emptyText = "Sin resultados",
  name,
  id,
  className,
  ...props
}) {
  const listId = React11.useId();
  const generatedId = React11.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const showError = error && !disabled;
  const fieldRef = React11.useRef(null);
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React11.useState(defaultValue);
  const selected = isControlled ? value : uncontrolled;
  const [query, setQuery] = React11.useState(() => optionLabel(options, selected));
  const [open, setOpen] = React11.useState(false);
  const [highlight, setHighlight] = React11.useState(0);
  const filtered = React11.useMemo(
    () => options.filter((option) => matchesQuery(option, query)),
    [options, query]
  );
  React11.useEffect(() => {
    setQuery(optionLabel(options, selected));
  }, [options, selected]);
  React11.useEffect(() => {
    setHighlight(0);
  }, [query, open]);
  function setSelected(next) {
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
    setQuery(optionLabel(options, next));
    setOpen(false);
  }
  function moveHighlight(delta) {
    if (filtered.length === 0) return;
    setHighlight((current) => {
      const next = (current + delta + filtered.length) % filtered.length;
      return next;
    });
  }
  function selectHighlighted() {
    const option = filtered[highlight];
    if (!option || option.disabled) return;
    setSelected(option.value);
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "combobox",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: cn(combobox_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxs(Popover.Root, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: combobox_default.label, children: label }),
        /* @__PURE__ */ jsx(Popover.Anchor, { asChild: true, children: /* @__PURE__ */ jsx("div", { ref: fieldRef, className: combobox_default.control, children: /* @__PURE__ */ jsx(
          TextInput,
          {
            id: inputId,
            embedded: true,
            appearance,
            tone,
            error,
            disabled,
            placeholder,
            name,
            role: "combobox",
            "aria-expanded": open,
            "aria-controls": listId,
            "aria-autocomplete": "list",
            "aria-activedescendant": open && filtered[highlight] ? `${listId}-${filtered[highlight].value}` : void 0,
            "aria-describedby": supportingId,
            autoComplete: "off",
            value: query,
            className: combobox_default.input,
            onFocus: () => {
              if (!disabled) setOpen(true);
            },
            onChange: (event) => {
              setQuery(event.target.value);
              if (!disabled) setOpen(true);
            },
            onKeyDown: (event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                if (!open) setOpen(true);
                else moveHighlight(1);
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                if (!open) setOpen(true);
                else moveHighlight(-1);
              } else if (event.key === "Enter") {
                if (open && filtered[highlight]) {
                  event.preventDefault();
                  selectHighlighted();
                }
              } else if (event.key === "Escape") {
                setOpen(false);
              }
            }
          }
        ) }) }),
        supportingText ? /* @__PURE__ */ jsx("span", { id: supportingId, className: combobox_default.supporting, children: supportingText }) : null,
        /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
          Popover.Content,
          {
            "data-slot": "combobox-content",
            className: cn(select_default.content, combobox_default.list),
            side: "bottom",
            align: "start",
            sideOffset: 4,
            onOpenAutoFocus: (event) => event.preventDefault(),
            onCloseAutoFocus: (event) => event.preventDefault(),
            onInteractOutside: (event) => {
              if (fieldRef.current?.contains(event.target)) {
                event.preventDefault();
              }
            },
            children: /* @__PURE__ */ jsx(
              "ul",
              {
                id: listId,
                role: "listbox",
                className: cn(select_default.viewport, combobox_default.options),
                children: filtered.length === 0 ? /* @__PURE__ */ jsx("li", { className: combobox_default.empty, role: "presentation", children: emptyText }) : filtered.map((option, index) => {
                  const selectedOption = option.value === selected;
                  const highlighted = index === highlight;
                  return /* @__PURE__ */ jsxs(
                    "li",
                    {
                      id: `${listId}-${option.value}`,
                      role: "option",
                      "aria-selected": selectedOption,
                      "aria-disabled": option.disabled || void 0,
                      "data-highlighted": highlighted ? "" : void 0,
                      "data-state": selectedOption ? "checked" : void 0,
                      "data-disabled": option.disabled || void 0,
                      className: select_default.item,
                      onMouseEnter: () => {
                        if (!option.disabled) setHighlight(index);
                      },
                      onMouseDown: (event) => event.preventDefault(),
                      onClick: () => {
                        if (option.disabled) return;
                        setSelected(option.value);
                      },
                      children: [
                        /* @__PURE__ */ jsx("span", { "data-slot": "select-item-text", children: option.label }),
                        selectedOption ? /* @__PURE__ */ jsx("span", { className: select_default.itemIndicator, children: /* @__PURE__ */ jsx(CheckIcon, {}) }) : null
                      ]
                    },
                    option.value
                  );
                })
              }
            )
          }
        ) })
      ] })
    }
  );
}

// src/components/input-chip/input-chip.module.css
var input_chip_default = {
  root: "input_chip_root",
  label: "input_chip_label",
  iconWrapper: "input_chip_iconWrapper",
  closeButton: "input_chip_closeButton"
};
function InputChip({
  size = "sm",
  label,
  icon,
  onClose,
  disabled = false,
  closeLabel,
  className
}) {
  const resolvedCloseLabel = closeLabel ?? `Eliminar ${label}`;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "data-slot": "input-chip",
      "data-size": size,
      "data-disabled": disabled || void 0,
      className: cn(input_chip_default.root, className),
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: input_chip_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: input_chip_default.label, children: label }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "data-slot": "input-chip-close",
            className: input_chip_default.closeButton,
            onClick: onClose,
            disabled,
            "aria-label": resolvedCloseLabel,
            children: /* @__PURE__ */ jsx(CloseIcon, {})
          }
        )
      ]
    }
  );
}

// src/components/status/status.module.css
var status_default = {
  root: "status_root",
  iconWrapper: "status_iconWrapper",
  label: "status_label"
};
function Status({
  size = "sm",
  intent = "neutral",
  label,
  icon,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "data-slot": "status",
      "data-size": size,
      "data-intent": intent,
      className: cn(status_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: status_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: status_default.label, children: label })
      ]
    }
  );
}

// src/components/tab-item/tab-item.module.css
var tab_item_default = {
  root: "tab_item_root"
};
function TabItem({
  selected = false,
  onSelectedChange,
  label,
  className,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "tab",
      "data-slot": "tab-item",
      "data-selected": selected,
      "aria-selected": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: cn(tab_item_default.root, className),
      ...props,
      children: label
    }
  );
}

// src/components/tag/tag.module.css
var tag_default = {
  root: "tag_root",
  iconWrapper: "tag_iconWrapper",
  label: "tag_label"
};
function Tag({
  size = "sm",
  tone = "neutral",
  label,
  icon,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "data-slot": "tag",
      "data-size": size,
      "data-tone": tone,
      className: cn(tag_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: tag_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: tag_default.label, children: label })
      ]
    }
  );
}

// src/components/toast/toast.module.css
var toast_default = {
  root: "toast_root",
  icon: "toast_icon",
  copy: "toast_copy",
  title: "toast_title",
  message: "toast_message",
  link: "toast_link"
};
function Toast({
  intent = "info",
  icon,
  title,
  message,
  link,
  onDismiss,
  dismissLabel = "Cerrar",
  className,
  ...props
}) {
  const titleId = React11.useId();
  const messageId = React11.useId();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "toast",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: cn(toast_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: toast_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxs("div", { className: toast_default.copy, children: [
          /* @__PURE__ */ jsx("p", { id: titleId, className: toast_default.title, children: title }),
          /* @__PURE__ */ jsx("p", { id: messageId, className: toast_default.message, children: message }),
          link ? /* @__PURE__ */ jsx("div", { className: toast_default.link, children: link }) : null
        ] }),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsx(CloseIcon, {}),
            "aria-label": dismissLabel,
            onClick: onDismiss
          }
        )
      ]
    }
  );
}

// src/components/badge/badge.module.css
var badge_default = {
  root: "badge_root"
};
function Badge({
  size = "sm",
  tone = "neutral",
  label,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "badge",
      "data-size": size,
      "data-tone": tone,
      className: cn(badge_default.root, className),
      ...props,
      children: label
    }
  );
}

// src/components/banner/banner.module.css
var banner_default = {
  root: "banner_root",
  icon: "banner_icon",
  copy: "banner_copy",
  title: "banner_title",
  message: "banner_message",
  link: "banner_link"
};
function Banner({
  intent = "info",
  icon,
  title,
  message,
  link,
  onDismiss,
  dismissLabel = "Cerrar",
  className,
  ...props
}) {
  const titleId = React11.useId();
  const messageId = React11.useId();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "banner",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: cn(banner_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: banner_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxs("div", { className: banner_default.copy, children: [
          /* @__PURE__ */ jsx("p", { id: titleId, className: banner_default.title, children: title }),
          /* @__PURE__ */ jsx("p", { id: messageId, className: banner_default.message, children: message }),
          link ? /* @__PURE__ */ jsx("div", { className: banner_default.link, children: link }) : null
        ] }),
        onDismiss ? /* @__PURE__ */ jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsx(CloseIcon, {}),
            "aria-label": dismissLabel,
            onClick: onDismiss
          }
        ) : null
      ]
    }
  );
}

// src/components/counter-badge/counter-badge.module.css
var counter_badge_default = {
  root: "counter_badge_root"
};
function CounterBadge({
  size = "sm",
  emphasis = "neutral",
  value,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "counter-badge",
      "data-size": size,
      "data-emphasis": emphasis,
      className: cn(counter_badge_default.root, className),
      ...props,
      children: value
    }
  );
}

// src/components/divider/divider.module.css
var divider_default = {
  root: "divider_root"
};
function Divider({ orientation = "horizontal", thickness = 1, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "divider",
      "data-orientation": orientation,
      "data-thickness": thickness,
      role: "separator",
      "aria-orientation": orientation,
      className: cn(divider_default.root, className),
      ...props
    }
  );
}

// src/components/empty-state/empty-state.module.css
var empty_state_default = {
  root: "empty_state_root",
  visual: "empty_state_visual",
  copy: "empty_state_copy",
  title: "empty_state_title",
  message: "empty_state_message",
  action: "empty_state_action"
};
function EmptyState({
  type = "empty",
  icon,
  title,
  message,
  action,
  className,
  ...props
}) {
  const titleId = React11.useId();
  const messageId = React11.useId();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "empty-state",
      "data-type": type,
      role: type === "error" ? "alert" : type === "success" ? "status" : void 0,
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: cn(empty_state_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: empty_state_default.visual, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxs("div", { className: empty_state_default.copy, children: [
          /* @__PURE__ */ jsx("p", { id: titleId, className: empty_state_default.title, children: title }),
          /* @__PURE__ */ jsx("p", { id: messageId, className: empty_state_default.message, children: message })
        ] }),
        action ? /* @__PURE__ */ jsx("div", { className: empty_state_default.action, children: action }) : null
      ]
    }
  );
}

// src/components/bar/bar.module.css
var bar_default = {
  root: "bar_root",
  indicator: "bar_indicator"
};
function Bar({ className, value = 0, max = 100, ...props }) {
  const numericMax = max ?? 100;
  const numericValue = typeof value === "number" ? value : 0;
  const percent = numericMax > 0 ? Math.min(100, Math.max(0, numericValue / numericMax * 100)) : 0;
  return /* @__PURE__ */ jsx(
    Progress.Root,
    {
      "data-slot": "bar",
      className: cn(bar_default.root, className),
      value,
      max,
      ...props,
      children: /* @__PURE__ */ jsx(
        Progress.Indicator,
        {
          "data-slot": "bar-indicator",
          className: bar_default.indicator,
          style: { width: `${percent}%` }
        }
      )
    }
  );
}

// src/components/file-upload-item/file-upload-item.module.css
var file_upload_item_default = {
  root: "file_upload_item_root",
  main: "file_upload_item_main",
  copy: "file_upload_item_copy",
  bar: "file_upload_item_bar",
  primary: "file_upload_item_primary",
  secondary: "file_upload_item_secondary"
};
function FileUploadItem({
  status = "selected",
  tone = "standard",
  primaryText,
  secondaryText,
  actionLabel,
  onAction,
  progress = 0,
  className,
  ...props
}) {
  const primaryId = React11.useId();
  const secondaryId = React11.useId();
  const isInverse = tone === "inverse";
  const isUploading = status === "uploading";
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "file-upload-item",
      "data-status": status,
      "data-tone": tone,
      role: status === "error" ? "alert" : status === "success" || isUploading ? "status" : void 0,
      "aria-busy": isUploading || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": secondaryId,
      className: cn(file_upload_item_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: file_upload_item_default.main, children: [
          /* @__PURE__ */ jsxs("div", { className: file_upload_item_default.copy, children: [
            /* @__PURE__ */ jsx("p", { id: primaryId, className: file_upload_item_default.primary, children: primaryText }),
            /* @__PURE__ */ jsx("p", { id: secondaryId, className: file_upload_item_default.secondary, children: secondaryText })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              hierarchy: "secondary",
              tone: isInverse ? "inverse" : "standard",
              label: actionLabel,
              onClick: onAction
            }
          )
        ] }),
        isUploading ? /* @__PURE__ */ jsx(
          Bar,
          {
            className: file_upload_item_default.bar,
            value: clampedProgress,
            max: 100,
            "aria-labelledby": secondaryId
          }
        ) : null
      ]
    }
  );
}

// src/components/file-upload-drop-zone/file-upload-drop-zone.module.css
var file_upload_drop_zone_default = {
  root: "file_upload_drop_zone_root",
  input: "file_upload_drop_zone_input",
  primary: "file_upload_drop_zone_primary",
  secondary: "file_upload_drop_zone_secondary"
};
function FileUploadDropZone({
  tone = "standard",
  disabled = false,
  primaryText,
  secondaryText,
  actionLabel,
  accept,
  multiple,
  onFilesChange,
  className,
  onDragOver,
  onDrop,
  ...props
}) {
  const inputRef = React11.useRef(null);
  const primaryId = React11.useId();
  const secondaryId = React11.useId();
  const inputId = React11.useId();
  const isInverse = tone === "inverse";
  function openPicker() {
    if (disabled) return;
    inputRef.current?.click();
  }
  function emitFiles(files) {
    if (disabled || !files || files.length === 0) return;
    onFilesChange?.(files);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "file-upload-drop-zone",
      "data-tone": tone,
      "data-disabled": disabled || void 0,
      "aria-disabled": disabled || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": secondaryId,
      className: cn(file_upload_drop_zone_default.root, className),
      onDragOver: (event) => {
        event.preventDefault();
        onDragOver?.(event);
      },
      onDrop: (event) => {
        event.preventDefault();
        emitFiles(event.dataTransfer.files);
        onDrop?.(event);
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            id: inputId,
            className: file_upload_drop_zone_default.input,
            type: "file",
            tabIndex: -1,
            accept,
            multiple,
            disabled,
            onChange: (event) => {
              emitFiles(event.target.files);
              event.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { id: primaryId, className: file_upload_drop_zone_default.primary, children: primaryText }),
        /* @__PURE__ */ jsx("p", { id: secondaryId, className: file_upload_drop_zone_default.secondary, children: secondaryText }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            size: "sm",
            hierarchy: "secondary",
            tone: isInverse ? "inverse" : "standard",
            label: actionLabel,
            disabled,
            onClick: openPicker
          }
        )
      ]
    }
  );
}

// src/components/file-upload/file-upload.module.css
var file_upload_default = {
  root: "file_upload_root",
  dropZone: "file_upload_dropZone",
  trigger: "file_upload_trigger",
  input: "file_upload_input",
  primary: "file_upload_primary",
  secondary: "file_upload_secondary",
  supporting: "file_upload_supporting",
  list: "file_upload_list",
  item: "file_upload_item"
};
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function toEntry(file, id, actionLabel) {
  return {
    id,
    primaryText: file.name,
    secondaryText: formatFileSize(file.size),
    status: "selected",
    actionLabel
  };
}
function FileUpload({
  type = "button",
  tone = "standard",
  disabled = false,
  primaryText,
  secondaryText,
  actionLabel,
  dropZonePrimaryText = "Arrastra el archivo aqu\xED",
  dropZoneSecondaryText = "PDF, DOCX o JPG \xB7 m\xE1ximo 10 MB",
  supportingText,
  accept,
  multiple = true,
  items,
  itemActionLabel = "Eliminar",
  onFilesChange,
  onItemAction,
  className,
  ...props
}) {
  const inputRef = React11.useRef(null);
  const primaryId = React11.useId();
  const secondaryId = React11.useId();
  const supportingId = React11.useId();
  const isInverse = tone === "inverse";
  const dropTone = tone;
  const isItemsControlled = items != null;
  const [internalFiles, setInternalFiles] = React11.useState([]);
  const displayedItems = isItemsControlled ? items : internalFiles.map(({ id, file }) => toEntry(file, id, itemActionLabel));
  function emitFiles(list) {
    if (disabled) return;
    const incoming = Array.from(list);
    if (incoming.length === 0) return;
    if (!isItemsControlled) {
      const first = incoming[0];
      const next = multiple ? [
        ...internalFiles,
        ...incoming.map((file, index) => ({
          id: `${file.name}-${file.size}-${file.lastModified}-${internalFiles.length + index}`,
          file
        }))
      ] : first ? [
        {
          id: `${first.name}-${first.size}-${first.lastModified}`,
          file: first
        }
      ] : internalFiles;
      setInternalFiles(next);
      onFilesChange?.(next.map((entry) => entry.file));
      return;
    }
    onFilesChange?.(incoming);
  }
  function handleItemAction(id) {
    if (!isItemsControlled) {
      const next = internalFiles.filter((entry) => entry.id !== id);
      setInternalFiles(next);
      onFilesChange?.(next.map((entry) => entry.file));
    }
    onItemAction?.(id);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "file-upload",
      "data-type": type,
      "data-tone": tone,
      "data-disabled": disabled || void 0,
      "aria-disabled": disabled || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": [secondaryId, supportingText ? supportingId : null].filter(Boolean).join(" ") || void 0,
      className: cn(file_upload_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("p", { id: primaryId, className: file_upload_default.primary, children: primaryText }),
        /* @__PURE__ */ jsx("p", { id: secondaryId, className: file_upload_default.secondary, children: secondaryText }),
        type === "drag-zone" ? /* @__PURE__ */ jsx(
          FileUploadDropZone,
          {
            className: file_upload_default.dropZone,
            tone: dropTone,
            disabled,
            primaryText: dropZonePrimaryText,
            secondaryText: dropZoneSecondaryText,
            actionLabel,
            accept,
            multiple,
            onFilesChange: emitFiles
          }
        ) : /* @__PURE__ */ jsxs("div", { className: file_upload_default.trigger, children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              className: file_upload_default.input,
              type: "file",
              tabIndex: -1,
              accept,
              multiple,
              disabled,
              onChange: (event) => {
                emitFiles(event.target.files ?? []);
                event.target.value = "";
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              size: "sm",
              hierarchy: "secondary",
              tone: isInverse ? "inverse" : "standard",
              label: actionLabel,
              disabled,
              onClick: () => {
                if (disabled) return;
                inputRef.current?.click();
              }
            }
          )
        ] }),
        supportingText ? /* @__PURE__ */ jsx(
          "p",
          {
            id: supportingId,
            className: file_upload_default.supporting,
            "data-tone": tone,
            children: supportingText
          }
        ) : null,
        displayedItems.length > 0 ? /* @__PURE__ */ jsx("ul", { className: file_upload_default.list, children: displayedItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          FileUploadItem,
          {
            className: file_upload_default.item,
            status: item.status,
            tone,
            primaryText: item.primaryText,
            secondaryText: item.secondaryText,
            actionLabel: item.actionLabel ?? itemActionLabel,
            progress: item.progress,
            onAction: () => handleItemAction(item.id)
          }
        ) }, item.id)) }) : null
      ]
    }
  );
}

// src/components/segment/segment.module.css
var segment_default = {
  root: "segment_root",
  iconWrapper: "segment_iconWrapper"
};
function Segment({
  size = "sm",
  selected = false,
  onSelectedChange,
  icon,
  label,
  className,
  disabled,
  ...props
}) {
  const content = icon && label ? "both" : icon ? "icon" : "label";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "data-slot": "segment",
      "data-size": size,
      "data-selected": selected,
      "data-content": content,
      "aria-pressed": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: cn(segment_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: segment_default.iconWrapper, "aria-hidden": "true", children: icon }) : null,
        label
      ]
    }
  );
}

// src/components/side-navigation/side-navigation.module.css
var side_navigation_default = {
  root: "side_navigation_root",
  heading: "side_navigation_heading",
  list: "side_navigation_list"
};
function withSideNavigationContext(children) {
  return React11.Children.map(children, (child) => {
    if (!React11.isValidElement(child)) {
      return child;
    }
    return React11.cloneElement(child, { context: "side-navigation" });
  });
}
function SideNavigation({
  heading,
  children,
  className,
  "aria-label": ariaLabel,
  ...props
}) {
  const headingId = React11.useId();
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "data-slot": "side-navigation",
      "aria-label": heading ? void 0 : ariaLabel ?? "Navegaci\xF3n",
      "aria-labelledby": heading ? headingId : void 0,
      className: cn(side_navigation_default.root, className),
      ...props,
      children: [
        heading ? /* @__PURE__ */ jsx("h2", { id: headingId, className: side_navigation_default.heading, children: heading }) : null,
        /* @__PURE__ */ jsx("div", { className: side_navigation_default.list, children: withSideNavigationContext(children) })
      ]
    }
  );
}

// src/components/alert/alert.module.css
var alert_default = {
  root: "alert_root",
  icon: "alert_icon",
  copy: "alert_copy",
  title: "alert_title",
  message: "alert_message",
  link: "alert_link"
};
function Alert({
  intent = "info",
  icon,
  title,
  message,
  link,
  onDismiss,
  dismissLabel = "Cerrar",
  className,
  ...props
}) {
  const titleId = React11.useId();
  const messageId = React11.useId();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "alert",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: cn(alert_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx("span", { className: alert_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxs("div", { className: alert_default.copy, children: [
          /* @__PURE__ */ jsx("p", { id: titleId, className: alert_default.title, children: title }),
          /* @__PURE__ */ jsx("p", { id: messageId, className: alert_default.message, children: message }),
          link ? /* @__PURE__ */ jsx("div", { className: alert_default.link, children: link }) : null
        ] }),
        onDismiss ? /* @__PURE__ */ jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsx(CloseIcon, {}),
            "aria-label": dismissLabel,
            onClick: onDismiss
          }
        ) : null
      ]
    }
  );
}

// src/components/floating-action-button/floating-action-button.module.css
var floating_action_button_default = {
  root: "floating_action_button_root"
};
function FloatingActionButton(props) {
  const {
    type = "standard",
    icon,
    floating = true,
    className,
    disabled,
    ...rest
  } = props;
  const sharedClassName = cn(floating_action_button_default.root, className);
  if (type === "extended") {
    const {
      label,
      "aria-label": ariaLabel2,
      loading,
      ...buttonProps
    } = rest;
    return /* @__PURE__ */ jsx(
      Button,
      {
        "data-slot": "floating-action-button",
        "data-type": "extended",
        "data-floating": floating,
        type: "button",
        hierarchy: "primary",
        tone: "standard",
        size: "lg",
        leftIcon: icon,
        label,
        disabled,
        loading,
        "aria-label": ariaLabel2,
        className: sharedClassName,
        ...buttonProps
      }
    );
  }
  const { "aria-label": ariaLabel, ...iconButtonProps } = rest;
  return /* @__PURE__ */ jsx(
    IconButton,
    {
      "data-slot": "floating-action-button",
      "data-type": "standard",
      "data-floating": floating,
      type: "button",
      size: "lg",
      tone: "standard",
      icon,
      disabled,
      "aria-label": ariaLabel,
      className: sharedClassName,
      ...iconButtonProps
    }
  );
}

// src/components/radio/radio.module.css
var radio_default = {
  group: "radio_group",
  root: "radio_root",
  indicator: "radio_indicator",
  dot: "radio_dot"};
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    RadioGroup$1.Root,
    {
      "data-slot": "radio-group",
      className: cn(radio_default.group, className),
      ...props
    }
  );
}
function Radio({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    RadioGroup$1.Item,
    {
      "data-slot": "radio",
      className: cn(radio_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsx(
        RadioGroup$1.Indicator,
        {
          "data-slot": "radio-indicator",
          className: radio_default.indicator,
          children: /* @__PURE__ */ jsx("span", { className: radio_default.dot })
        }
      )
    }
  );
}

// src/components/search/search.module.css
var search_default = {
  root: "search_root",
  input: "search_input",
  leading: "search_leading",
  clear: "search_clear"
};
function Search({
  appearance = "outlined",
  tone = "standard",
  error = false,
  disabled,
  className,
  value,
  defaultValue,
  onChange,
  onClear,
  clearLabel = "Borrar b\xFAsqueda",
  placeholder = "Buscar",
  id,
  ...props
}) {
  const inputRef = React11.useRef(null);
  const generatedId = React11.useId();
  const inputId = id ?? generatedId;
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React11.useState(
    () => defaultValue == null ? "" : String(defaultValue)
  );
  const current = isControlled ? String(value ?? "") : uncontrolled;
  const showError = error && !disabled;
  const showClear = current.length > 0 && !disabled;
  function handleChange(event) {
    if (!isControlled) setUncontrolled(event.target.value);
    onChange?.(event);
  }
  function handleClear() {
    if (!isControlled) setUncontrolled("");
    onClear?.();
    onChange?.({
      target: { value: "" },
      currentTarget: { value: "" }
    });
    inputRef.current?.focus();
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "search",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: cn(search_default.root, className),
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: search_default.leading, children: /* @__PURE__ */ jsx(MagnifyingGlassIcon, {}) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            ref: inputRef,
            id: inputId,
            type: "search",
            embedded: true,
            appearance,
            tone,
            error,
            disabled,
            placeholder,
            ...props,
            value: current,
            className: cn(search_default.input),
            onChange: handleChange
          }
        ),
        showClear ? /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: search_default.clear,
            "aria-label": clearLabel,
            onClick: handleClear,
            children: /* @__PURE__ */ jsx(XIcon, {})
          }
        ) : null
      ]
    }
  );
}

// src/components/pagination-item/pagination-item.module.css
var pagination_item_default = {
  root: "pagination_item_root"
};
function PaginationItem({
  current = false,
  children,
  className,
  disabled,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      "data-slot": "pagination-item",
      "data-current": current ? "true" : void 0,
      "aria-current": current ? "page" : void 0,
      disabled,
      className: cn(pagination_item_default.root, className),
      ...props,
      children
    }
  );
}

// src/components/pagination/pagination.module.css
var pagination_default = {
  root: "pagination_root"
};
function Pagination({
  children,
  onPrevious,
  onNext,
  previousDisabled = false,
  nextDisabled = false,
  previousLabel = "P\xE1gina anterior",
  nextLabel = "P\xE1gina siguiente",
  className,
  "aria-label": ariaLabel = "Paginaci\xF3n",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "data-slot": "pagination",
      "aria-label": ariaLabel,
      className: cn(pagination_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "md",
            icon: /* @__PURE__ */ jsx(CaretLeftIcon, {}),
            "aria-label": previousLabel,
            disabled: previousDisabled,
            onClick: onPrevious
          }
        ),
        children,
        /* @__PURE__ */ jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "md",
            icon: /* @__PURE__ */ jsx(CaretRightIcon, {}),
            "aria-label": nextLabel,
            disabled: nextDisabled,
            onClick: onNext
          }
        )
      ]
    }
  );
}

// src/components/progress-bar/progress-bar.module.css
var progress_bar_default = {
  root: "progress_bar_root",
  label: "progress_bar_label",
  row: "progress_bar_row",
  bar: "progress_bar_bar",
  value: "progress_bar_value"
};
function formatValue(value, max, valueFormat) {
  if (valueFormat === "fraction") {
    return `${value} / ${max}`;
  }
  const percent = max > 0 ? Math.round(value / max * 100) : 0;
  return `${percent}%`;
}
function ProgressBar({
  label,
  value = 0,
  max = 100,
  valueFormat = "percent",
  className,
  ...props
}) {
  const labelId = React11.useId();
  const numericMax = max > 0 ? max : 100;
  const numericValue = Math.min(numericMax, Math.max(0, value));
  const displayValue = formatValue(numericValue, numericMax, valueFormat);
  const valueText = valueFormat === "fraction" ? `${numericValue} de ${numericMax}` : displayValue;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "progress-bar",
      "data-value-format": valueFormat,
      className: cn(progress_bar_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { id: labelId, className: progress_bar_default.label, children: label }),
        /* @__PURE__ */ jsxs("div", { className: progress_bar_default.row, children: [
          /* @__PURE__ */ jsx(
            Bar,
            {
              className: progress_bar_default.bar,
              value: numericValue,
              max: numericMax,
              "aria-labelledby": labelId,
              "aria-valuetext": valueText
            }
          ),
          /* @__PURE__ */ jsx("span", { className: progress_bar_default.value, "aria-hidden": "true", children: displayValue })
        ] })
      ]
    }
  );
}

// src/components/progress-indicator/progress-indicator.module.css
var progress_indicator_default = {
  list: "progress_indicator_list",
  item: "progress_indicator_item",
  connector: "progress_indicator_connector",
  line: "progress_indicator_line"
};
function getStepState(child) {
  if (React11.isValidElement(child)) {
    return child.props.state ?? "upcoming";
  }
  return "upcoming";
}
function connectorState(previous) {
  return previous === "completed" ? "completed" : "upcoming";
}
function ProgressIndicator({
  className,
  children,
  "aria-label": ariaLabel = "Progreso",
  ...props
}) {
  const items = React11.Children.toArray(children).filter(Boolean);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "data-slot": "progress-indicator",
      "aria-label": ariaLabel,
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ jsx("ol", { className: progress_indicator_default.list, children: items.map((child, index) => /* @__PURE__ */ jsxs("li", { className: progress_indicator_default.item, children: [
        child,
        index < items.length - 1 ? /* @__PURE__ */ jsx(
          "span",
          {
            "data-slot": "progress-indicator-connector",
            className: progress_indicator_default.connector,
            "data-state": connectorState(getStepState(child)),
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx("span", { className: progress_indicator_default.line })
          }
        ) : null
      ] }, index)) })
    }
  );
}

// src/components/progress-step/progress-step.module.css
var progress_step_default = {
  root: "progress_step_root",
  marker: "progress_step_marker",
  label: "progress_step_label"
};
function ProgressStep({
  state = "upcoming",
  label,
  icon,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "progress-step",
      "data-state": state,
      "aria-current": state === "current" ? "step" : void 0,
      "aria-disabled": state === "disabled" ? true : void 0,
      className: cn(progress_step_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: progress_step_default.marker, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: progress_step_default.label, children: label })
      ]
    }
  );
}

// src/components/checkbox/checkbox.module.css
var checkbox_default = {
  root: "checkbox_root",
  indicator: "checkbox_indicator",
  checkIcon: "checkbox_checkIcon",
  mixedIcon: "checkbox_mixedIcon"};
function CheckIcon2() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "9",
      viewBox: "0 0 12 9",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M1 4.5L4.5 8L11 1",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function MixedIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "2",
      viewBox: "0 0 10 2",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M1 1H9",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Checkbox$1.Root,
    {
      "data-slot": "checkbox",
      className: cn(checkbox_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxs(
        Checkbox$1.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: checkbox_default.indicator,
          children: [
            /* @__PURE__ */ jsx("span", { className: checkbox_default.checkIcon, children: /* @__PURE__ */ jsx(CheckIcon2, {}) }),
            /* @__PURE__ */ jsx("span", { className: checkbox_default.mixedIcon, children: /* @__PURE__ */ jsx(MixedIcon, {}) })
          ]
        }
      )
    }
  );
}

// src/components/chip-group/chip-group.module.css
var chip_group_default = {
  root: "chip_group_root"
};
function ChipGroup({ className, children, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "chip-group", className: cn(chip_group_default.root, className), ...props, children });
}

// src/components/switch/switch.module.css
var switch_default = {
  root: "switch_root",
  thumb: "switch_thumb"};
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Switch$1.Root,
    {
      "data-slot": "switch",
      className: cn(switch_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsx(
        Switch$1.Thumb,
        {
          "data-slot": "switch-thumb",
          className: switch_default.thumb
        }
      )
    }
  );
}

export { Alert, Avatar, Badge, Banner, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Calendar, CalendarDay, Checkbox, ChipGroup, Combobox, CounterBadge, DEFAULT_PHONE_COUNTRIES, DateField, DatePicker, Divider, EmptyState, FileUpload, FileUploadDropZone, FileUploadItem, FilterChip, FloatingActionButton, FormField, IconButton, InputChip, Link, ListItem, MenuItem, NavigationBar, NavigationItem, Pagination, PaginationItem, PhoneInput, ProgressBar, ProgressIndicator, ProgressStep, Radio, RadioGroup, Search, Segment, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SideNavigation, SocialButton, Status, Switch, TabItem, Tag, TimeField, Toast };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map