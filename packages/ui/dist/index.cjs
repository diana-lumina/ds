'use strict';

var chunkRXYRFJ65_cjs = require('./chunk-RXYRFJ65.cjs');
var chunkPWJ2OBSG_cjs = require('./chunk-PWJ2OBSG.cjs');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var React3 = require('react');
var radixUi = require('radix-ui');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);

// src/components/button/button.module.css
var button_default = {
  root: "button_root"};
var buttonVariants = classVarianceAuthority.cva(
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
  const effectiveLeftIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.LoadingIcon, {}) : leftIcon;
  const effectiveRightIcon = rightIcon ?? (loading ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { visibility: "hidden" }, children: effectiveLeftIcon }) : void 0);
  const iconState = loading ? "both" : effectiveLeftIcon && rightIcon ? "both" : effectiveLeftIcon ? "inline-start" : rightIcon ? "inline-end" : void 0;
  const effectiveTone = tone === "inverse" && (hierarchy === "primary" || hierarchy === "secondary") ? "inverse" : "standard";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      "data-slot": "button",
      "data-hierarchy": hierarchy,
      "data-size": size,
      "data-tone": effectiveTone,
      "data-icon": iconState,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      className: chunkRXYRFJ65_cjs.cn(button_default.root, buttonVariants({ hierarchy, size, className })),
      ...props,
      children: [
        effectiveLeftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveLeftIcon }),
        label != null && /* @__PURE__ */ jsxRuntime.jsx("span", { children: label }),
        effectiveRightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveRightIcon })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: chunkRXYRFJ65_cjs.cn(button_group_default.root, className),
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
  const displayIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.LoadingIcon, {}) : icon;
  const effectiveTone = hierarchy === "primary" ? tone : "standard";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      "data-slot": "icon-button",
      "data-size": size,
      "data-hierarchy": hierarchy,
      "data-tone": effectiveTone,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: chunkRXYRFJ65_cjs.cn(icon_button_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", className: icon_button_default.iconWrapper, children: displayIcon })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    {
      "data-slot": "link",
      "data-context": context,
      "data-tone": tone,
      "data-external": external || void 0,
      href,
      target: target ?? (external ? "_blank" : void 0),
      rel: rel ?? (external ? "noopener noreferrer" : void 0),
      className: chunkRXYRFJ65_cjs.cn(link_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: link_default.label, children: label }),
        external && /* @__PURE__ */ jsxRuntime.jsx("span", { className: link_default.iconWrapper, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.SalesIcon, {}) })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className,
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { className: avatar_default.fallbackCircle, cx: "16", cy: "16", r: "15.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { className: avatar_default.fallbackPerson, cx: "16", cy: "10.88", r: "4.48" }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
  const [imageStatus, setImageStatus] = React3__namespace.useState(src ? "loading" : "idle");
  React3__namespace.useEffect(() => {
    setImageStatus(src ? "loading" : "idle");
  }, [src]);
  const content = resolveContent(src, imageStatus, Boolean(resolvedInitials));
  return /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Avatar.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      "data-content": content,
      className: chunkRXYRFJ65_cjs.cn(avatar_default.root, className),
      ...props,
      children: [
        src ? /* @__PURE__ */ jsxRuntime.jsx(
          radixUi.Avatar.Image,
          {
            "data-slot": "avatar-image",
            src,
            alt,
            className: avatar_default.image,
            onLoadingStatusChange: setImageStatus
          }
        ) : null,
        /* @__PURE__ */ jsxRuntime.jsx(
          radixUi.Avatar.Fallback,
          {
            "data-slot": "avatar-fallback",
            delayMs: src ? 600 : void 0,
            children: resolvedInitials ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: avatar_default.initials, children: resolvedInitials }) : /* @__PURE__ */ jsxRuntime.jsx(UserFallbackIcon, { className: avatar_default.fallbackIcon })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type,
      "data-slot": "list-item",
      "data-lines": lines,
      disabled,
      className: chunkRXYRFJ65_cjs.cn(list_item_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: list_item_default.avatar, "aria-hidden": avatarAlt ? void 0 : true, children: /* @__PURE__ */ jsxRuntime.jsx(
          Avatar,
          {
            size: "sm",
            src: avatarSrc,
            initials: avatarInitials,
            alt: avatarAlt
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: list_item_default.text, children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: list_item_default.primary, children: primaryText }),
          secondaryText ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: list_item_default.secondary, children: secondaryText }) : null,
          tertiaryText ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: list_item_default.tertiary, children: tertiaryText }) : null
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: list_item_default.iconWrapper, "data-slot": "list-item-icon", "aria-hidden": "true", children: icon })
      ]
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
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: breadcrumb_default.separator, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const items = React3__namespace.Children.toArray(children).filter(Boolean);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      "data-slot": "breadcrumb",
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: breadcrumb_default.list, children: items.map((child, index) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: breadcrumb_default.item, children: [
        index > 0 ? /* @__PURE__ */ jsxRuntime.jsx(Separator, {}) : null,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Link,
    {
      "data-slot": "breadcrumb-item",
      "data-current": current || void 0,
      "aria-current": current ? "page" : void 0,
      context: "standalone",
      tone: "standard",
      className: chunkRXYRFJ65_cjs.cn(breadcrumb_item_default.root, className),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type: "button",
      "data-slot": "filter-chip",
      "data-size": size,
      "data-selected": selected,
      "aria-pressed": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: chunkRXYRFJ65_cjs.cn(filter_chip_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: filter_chip_default.iconWrapper, "aria-hidden": "true", children: icon }),
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
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Select.Value,
    {
      "data-slot": "select-value",
      className: chunkRXYRFJ65_cjs.cn(select_default.value, className),
      ...props
    }
  );
}
function SelectTrigger({
  appearance = "outlined",
  error = false,
  className,
  children,
  disabled,
  embedded = false,
  ...props
}) {
  const showError = error && !disabled;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-appearance": appearance,
      "data-error": showError ? "true" : void 0,
      "data-embedded": embedded ? "true" : void 0,
      className: chunkRXYRFJ65_cjs.cn(select_default.trigger, className),
      disabled,
      "aria-invalid": showError ? true : void 0,
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CaretDownIcon, { className: select_default.icon }) })
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
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Select.Content,
    {
      "data-slot": "select-content",
      className: chunkRXYRFJ65_cjs.cn(select_default.content, className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Viewport, { className: select_default.viewport, children }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Select.Label,
    {
      "data-slot": "select-label",
      className: chunkRXYRFJ65_cjs.cn(select_default.label, className),
      ...props
    }
  );
}
function SelectItem({ className, children, suffix, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Select.Item,
    {
      "data-slot": "select-item",
      className: chunkRXYRFJ65_cjs.cn(select_default.item, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.ItemText, { "data-slot": "select-item-text", children }),
        suffix ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: select_default.itemSuffix, children: suffix }) : null,
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.ItemIndicator, { className: select_default.itemIndicator, children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CheckIcon, {}) })
      ]
    }
  );
}
function SelectSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Select.Separator,
    {
      "data-slot": "select-separator",
      className: chunkRXYRFJ65_cjs.cn(select_default.separator, className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Select.ScrollUpButton,
    {
      className: chunkRXYRFJ65_cjs.cn(select_default.scrollButton, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CaretUpIcon, {})
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Select.ScrollDownButton,
    {
      className: chunkRXYRFJ65_cjs.cn(select_default.scrollButton, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CaretDownIcon, {})
    }
  );
}

// src/components/text-input/text-input.module.css
var text_input_default = {
  root: "text_input_root"
};
function TextInput({
  appearance = "outlined",
  error = false,
  disabled,
  embedded = false,
  className,
  type = "text",
  ...props
}) {
  const showError = error && !disabled;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      type,
      "data-slot": "text-input",
      "data-appearance": appearance,
      "data-error": showError ? "true" : void 0,
      "data-embedded": embedded ? "true" : void 0,
      className: chunkRXYRFJ65_cjs.cn(text_input_default.root, className),
      disabled,
      "aria-invalid": showError ? true : void 0,
      ...props
    }
  );
}

// src/components/phone-input/phone-input.module.css
var phone_input_default = {
  root: "phone_input_root",
  country: "phone_input_country",
  countryTrigger: "phone_input_countryTrigger",
  number: "phone_input_number",
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
  const generatedId = React3__namespace.useId();
  const numberId = id ?? generatedId;
  const rootRef = React3__namespace.useRef(null);
  const [menuWidth, setMenuWidth] = React3__namespace.useState();
  React3__namespace.useLayoutEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: rootRef,
      "data-slot": "phone-input",
      "data-appearance": appearance,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(phone_input_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: phone_input_default.country, children: /* @__PURE__ */ jsxRuntime.jsxs(
          Select,
          {
            value: country,
            defaultValue: country ? void 0 : defaultCountry,
            onValueChange: onCountryChange,
            disabled,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                SelectTrigger,
                {
                  embedded: true,
                  appearance,
                  error,
                  disabled,
                  "aria-label": countryLabel,
                  className: phone_input_default.countryTrigger,
                  children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                SelectContent,
                {
                  className: phone_input_default.menu,
                  style: menuWidth ? {
                    "--phone-input-menu-width": `${menuWidth}px`,
                    width: menuWidth,
                    minWidth: menuWidth
                  } : void 0,
                  children: countries.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          TextInput,
          {
            id: numberId,
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel-national",
            embedded: true,
            appearance,
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
  error = false,
  disabled,
  className,
  ...props
}) {
  const showError = error && !disabled;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      "data-slot": "text-area",
      "data-appearance": appearance,
      "data-error": showError ? "true" : void 0,
      className: chunkRXYRFJ65_cjs.cn(text_area_default.root, className),
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
  const generatedId = React3__namespace.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const resolvedControl = control ?? (multiline ? "textarea" : "input");
  const controlProps = {
    id: inputId,
    appearance,
    error,
    disabled,
    "aria-describedby": supportingId
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "form-field",
      "data-error": error && !disabled ? "true" : "false",
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(form_field_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: form_field_default.label, children: label }),
        resolvedControl === "phone" ? /* @__PURE__ */ jsxRuntime.jsx(
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
        ) : resolvedControl === "select" ? /* @__PURE__ */ jsxRuntime.jsxs(
          Select,
          {
            value,
            defaultValue,
            onValueChange,
            disabled,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(SelectTrigger, { ...controlProps, children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, { placeholder }) }),
              /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { children: options?.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
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
        ) : resolvedControl === "textarea" ? /* @__PURE__ */ jsxRuntime.jsx(
          TextArea,
          {
            rows,
            placeholder,
            value,
            defaultValue,
            ...controlProps,
            ...props
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
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
        supportingText ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: supportingId, className: form_field_default.supporting, children: supportingText }) : null
      ]
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      "data-slot": "input-chip",
      "data-size": size,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(input_chip_default.root, className),
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: input_chip_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: input_chip_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            "data-slot": "input-chip-close",
            className: input_chip_default.closeButton,
            onClick: onClose,
            disabled,
            "aria-label": resolvedCloseLabel,
            children: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CloseIcon, {})
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      "data-slot": "status",
      "data-size": size,
      "data-intent": intent,
      className: chunkRXYRFJ65_cjs.cn(status_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: status_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: status_default.label, children: label })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      role: "tab",
      "data-slot": "tab-item",
      "data-selected": selected,
      "aria-selected": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: chunkRXYRFJ65_cjs.cn(tab_item_default.root, className),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      "data-slot": "tag",
      "data-size": size,
      "data-tone": tone,
      className: chunkRXYRFJ65_cjs.cn(tag_default.root, className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: tag_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: tag_default.label, children: label })
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
  const titleId = React3__namespace.useId();
  const messageId = React3__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "toast",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: chunkRXYRFJ65_cjs.cn(toast_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: toast_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: toast_default.copy, children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: titleId, className: toast_default.title, children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: messageId, className: toast_default.message, children: message }),
          link ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: toast_default.link, children: link }) : null
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CloseIcon, {}),
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "badge",
      "data-size": size,
      "data-tone": tone,
      className: chunkRXYRFJ65_cjs.cn(badge_default.root, className),
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
  const titleId = React3__namespace.useId();
  const messageId = React3__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "banner",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: chunkRXYRFJ65_cjs.cn(banner_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: banner_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: banner_default.copy, children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: titleId, className: banner_default.title, children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: messageId, className: banner_default.message, children: message }),
          link ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: banner_default.link, children: link }) : null
        ] }),
        onDismiss ? /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CloseIcon, {}),
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "counter-badge",
      "data-size": size,
      "data-emphasis": emphasis,
      className: chunkRXYRFJ65_cjs.cn(counter_badge_default.root, className),
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "divider",
      "data-orientation": orientation,
      "data-thickness": thickness,
      role: "separator",
      "aria-orientation": orientation,
      className: chunkRXYRFJ65_cjs.cn(divider_default.root, className),
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
  const titleId = React3__namespace.useId();
  const messageId = React3__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "empty-state",
      "data-type": type,
      role: type === "error" ? "alert" : type === "success" ? "status" : void 0,
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: chunkRXYRFJ65_cjs.cn(empty_state_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: empty_state_default.visual, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: empty_state_default.copy, children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: titleId, className: empty_state_default.title, children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: messageId, className: empty_state_default.message, children: message })
        ] }),
        action ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: empty_state_default.action, children: action }) : null
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
      className: chunkRXYRFJ65_cjs.cn(segment_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: segment_default.iconWrapper, "aria-hidden": "true", children: icon }) : null,
        label
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
  const titleId = React3__namespace.useId();
  const messageId = React3__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "alert",
      "data-intent": intent,
      role: intent === "danger" || intent === "warning" ? "alert" : "status",
      "aria-labelledby": titleId,
      "aria-describedby": messageId,
      className: chunkRXYRFJ65_cjs.cn(alert_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: alert_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: alert_default.copy, children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: titleId, className: alert_default.title, children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: messageId, className: alert_default.message, children: message }),
          link ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: alert_default.link, children: link }) : null
        ] }),
        onDismiss ? /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.CloseIcon, {}),
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
  const sharedClassName = chunkRXYRFJ65_cjs.cn(floating_action_button_default.root, className);
  if (type === "extended") {
    const {
      label,
      "aria-label": ariaLabel2,
      loading,
      ...buttonProps
    } = rest;
    return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.RadioGroup.Root,
    {
      "data-slot": "radio-group",
      className: chunkRXYRFJ65_cjs.cn(radio_default.group, className),
      ...props
    }
  );
}
function Radio({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.RadioGroup.Item,
    {
      "data-slot": "radio",
      className: chunkRXYRFJ65_cjs.cn(radio_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.RadioGroup.Indicator,
        {
          "data-slot": "radio-indicator",
          className: radio_default.indicator,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: radio_default.dot })
        }
      )
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Progress.Root,
    {
      "data-slot": "bar",
      className: chunkRXYRFJ65_cjs.cn(bar_default.root, className),
      value,
      max,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Progress.Indicator,
        {
          "data-slot": "bar-indicator",
          className: bar_default.indicator,
          style: { width: `${percent}%` }
        }
      )
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
  const labelId = React3__namespace.useId();
  const numericMax = max > 0 ? max : 100;
  const numericValue = Math.min(numericMax, Math.max(0, value));
  const displayValue = formatValue(numericValue, numericMax, valueFormat);
  const valueText = valueFormat === "fraction" ? `${numericValue} de ${numericMax}` : displayValue;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "progress-bar",
      "data-value-format": valueFormat,
      className: chunkRXYRFJ65_cjs.cn(progress_bar_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { id: labelId, className: progress_bar_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: progress_bar_default.row, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Bar,
            {
              className: progress_bar_default.bar,
              value: numericValue,
              max: numericMax,
              "aria-labelledby": labelId,
              "aria-valuetext": valueText
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: progress_bar_default.value, "aria-hidden": "true", children: displayValue })
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
  if (React3__namespace.isValidElement(child)) {
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
  const items = React3__namespace.Children.toArray(children).filter(Boolean);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      "data-slot": "progress-indicator",
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: progress_indicator_default.list, children: items.map((child, index) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: progress_indicator_default.item, children: [
        child,
        index < items.length - 1 ? /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            "data-slot": "progress-indicator-connector",
            className: progress_indicator_default.connector,
            "data-state": connectorState(getStepState(child)),
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: progress_indicator_default.line })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "progress-step",
      "data-state": state,
      "aria-current": state === "current" ? "step" : void 0,
      "aria-disabled": state === "disabled" ? true : void 0,
      className: chunkRXYRFJ65_cjs.cn(progress_step_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: progress_step_default.marker, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: progress_step_default.label, children: label })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "9",
      viewBox: "0 0 12 9",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "2",
      viewBox: "0 0 10 2",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: chunkRXYRFJ65_cjs.cn(checkbox_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        radixUi.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: checkbox_default.indicator,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: checkbox_default.checkIcon, children: /* @__PURE__ */ jsxRuntime.jsx(CheckIcon2, {}) }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: checkbox_default.mixedIcon, children: /* @__PURE__ */ jsxRuntime.jsx(MixedIcon, {}) })
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "chip-group", className: chunkRXYRFJ65_cjs.cn(chip_group_default.root, className), ...props, children });
}

// src/components/switch/switch.module.css
var switch_default = {
  root: "switch_root",
  thumb: "switch_thumb"};
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Switch.Root,
    {
      "data-slot": "switch",
      className: chunkRXYRFJ65_cjs.cn(switch_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Switch.Thumb,
        {
          "data-slot": "switch-thumb",
          className: switch_default.thumb
        }
      )
    }
  );
}

exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.ChipGroup = ChipGroup;
exports.CounterBadge = CounterBadge;
exports.DEFAULT_PHONE_COUNTRIES = DEFAULT_PHONE_COUNTRIES;
exports.Divider = Divider;
exports.EmptyState = EmptyState;
exports.FilterChip = FilterChip;
exports.FloatingActionButton = FloatingActionButton;
exports.FormField = FormField;
exports.IconButton = IconButton;
exports.InputChip = InputChip;
exports.Link = Link;
exports.ListItem = ListItem;
exports.PhoneInput = PhoneInput;
exports.ProgressBar = ProgressBar;
exports.ProgressIndicator = ProgressIndicator;
exports.ProgressStep = ProgressStep;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Segment = Segment;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Status = Status;
exports.Switch = Switch;
exports.TabItem = TabItem;
exports.Tag = Tag;
exports.Toast = Toast;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map