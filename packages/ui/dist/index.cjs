'use strict';

var chunkRXYRFJ65_cjs = require('./chunk-RXYRFJ65.cjs');
var chunkPWJ2OBSG_cjs = require('./chunk-PWJ2OBSG.cjs');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

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
  tone = "standard",
  loading = false,
  className,
  disabled,
  ...props
}) {
  const displayIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunkPWJ2OBSG_cjs.LoadingIcon, {}) : icon;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      "data-slot": "icon-button",
      "data-size": size,
      "data-tone": tone,
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
  const [imageStatus, setImageStatus] = React__namespace.useState(src ? "loading" : "idle");
  React__namespace.useEffect(() => {
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
  const items = React__namespace.Children.toArray(children).filter(Boolean);
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

// src/components/form-field/form-field.module.css
var form_field_default = {
  root: "form_field_root",
  label: "form_field_label",
  control: "form_field_control",
  supporting: "form_field_supporting"
};
function FormField({
  label,
  supportingText,
  error = false,
  id,
  className,
  disabled,
  ...props
}) {
  const generatedId = React__namespace.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "form-field",
      "data-error": error && !disabled ? "true" : "false",
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(form_field_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: form_field_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            id: inputId,
            "data-slot": "form-field-control",
            className: form_field_default.control,
            disabled,
            "aria-invalid": error && !disabled ? true : void 0,
            "aria-describedby": supportingId,
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

// src/components/checkbox/checkbox.module.css
var checkbox_default = {
  root: "checkbox_root",
  indicator: "checkbox_indicator",
  checkIcon: "checkbox_checkIcon",
  mixedIcon: "checkbox_mixedIcon"};
function CheckIcon() {
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
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: checkbox_default.checkIcon, children: /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, {}) }),
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

exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.ChipGroup = ChipGroup;
exports.CounterBadge = CounterBadge;
exports.Divider = Divider;
exports.FilterChip = FilterChip;
exports.FloatingActionButton = FloatingActionButton;
exports.FormField = FormField;
exports.IconButton = IconButton;
exports.InputChip = InputChip;
exports.Link = Link;
exports.ListItem = ListItem;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Segment = Segment;
exports.Status = Status;
exports.Switch = Switch;
exports.TabItem = TabItem;
exports.Tag = Tag;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map