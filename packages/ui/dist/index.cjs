'use strict';

var chunkRXYRFJ65_cjs = require('./chunk-RXYRFJ65.cjs');
var chunk2KTJ3HWR_cjs = require('./chunk-2KTJ3HWR.cjs');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var React12 = require('react');
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

var React12__namespace = /*#__PURE__*/_interopNamespace(React12);

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
  const effectiveLeftIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.LoadingIcon, {}) : leftIcon;
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
  const displayIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.LoadingIcon, {}) : icon;
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
  const displayIcon = loading ? /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.LoadingIcon, {}) : icon;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type,
      "data-slot": "social-button",
      "data-size": size,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: chunkRXYRFJ65_cjs.cn(social_button_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", className: social_button_default.icon, children: displayIcon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: label })
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
        external && /* @__PURE__ */ jsxRuntime.jsx("span", { className: link_default.iconWrapper, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.SalesIcon, {}) })
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
  const [imageStatus, setImageStatus] = React12__namespace.useState(src ? "loading" : "idle");
  React12__namespace.useEffect(() => {
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

// src/components/accordion-item/accordion-item.module.css
var accordion_item_default = {
  scope: "accordion_item_scope",
  root: "accordion_item_root",
  divider: "accordion_item_divider",
  header: "accordion_item_header",
  trigger: "accordion_item_trigger",
  leading: "accordion_item_leading",
  copy: "accordion_item_copy",
  title: "accordion_item_title",
  supporting: "accordion_item_supporting",
  caret: "accordion_item_caret",
  content: "accordion_item_content",
  panel: "accordion_item_panel"
};
var ITEM_VALUE = "accordion-item";
function AccordionItem({
  treatment = "plain",
  title,
  supportingText,
  icon,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  disabled,
  className
}) {
  const isControlled = open !== void 0;
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Accordion.Root,
    {
      type: "single",
      collapsible: true,
      disabled,
      value: isControlled ? open ? ITEM_VALUE : "" : void 0,
      defaultValue: defaultOpen ? ITEM_VALUE : void 0,
      onValueChange: (next) => onOpenChange?.(next === ITEM_VALUE),
      className: accordion_item_default.scope,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        radixUi.Accordion.Item,
        {
          value: ITEM_VALUE,
          "data-slot": "accordion-item",
          "data-treatment": treatment,
          className: chunkRXYRFJ65_cjs.cn(accordion_item_default.root, className),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(radixUi.Accordion.Header, { className: accordion_item_default.header, children: /* @__PURE__ */ jsxRuntime.jsxs(
              radixUi.Accordion.Trigger,
              {
                "data-slot": "accordion-item-trigger",
                className: accordion_item_default.trigger,
                children: [
                  icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "accordion-item-icon", className: accordion_item_default.leading, "aria-hidden": "true", children: icon }) : null,
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: accordion_item_default.copy, children: [
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: accordion_item_default.title, children: title }),
                    supportingText ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: accordion_item_default.supporting, children: supportingText }) : null
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: accordion_item_default.caret, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretDownIcon, {}) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              radixUi.Accordion.Content,
              {
                "data-slot": "accordion-item-content",
                className: accordion_item_default.content,
                children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: accordion_item_default.panel, children })
              }
            ),
            treatment === "plain" ? /* @__PURE__ */ jsxRuntime.jsx(Divider, { thickness: 1, className: accordion_item_default.divider }) : null
          ]
        }
      )
    }
  );
}

// src/components/stat/stat.module.css
var stat_default = {
  root: "stat_root",
  copy: "stat_copy",
  value: "stat_value",
  label: "stat_label",
  icon: "stat_icon"
};
function Stat({ value, label, icon, className, ...props }) {
  const valueId = React12__namespace.useId();
  const labelId = React12__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "stat",
      "aria-labelledby": valueId,
      "aria-describedby": labelId,
      className: chunkRXYRFJ65_cjs.cn(stat_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "stat-icon", className: stat_default.icon, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: stat_default.copy, children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: valueId, className: stat_default.value, children: value }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { id: labelId, className: stat_default.label, children: label })
        ] })
      ]
    }
  );
}

// src/components/table-cell/table-cell.module.css
var table_cell_default = {
  root: "table_cell_root"
};
function TableCell({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("td", { "data-slot": "table-cell", className: chunkRXYRFJ65_cjs.cn(table_cell_default.root, className), ...props, children });
}

// src/components/table-header-cell/table-header-cell.module.css
var table_header_cell_default = {
  root: "table_header_cell_root",
  trigger: "table_header_cell_trigger",
  label: "table_header_cell_label",
  icon: "table_header_cell_icon"
};
function TableHeaderCell({
  label,
  icon,
  className,
  onClick,
  scope = "col",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    {
      "data-slot": "table-header-cell",
      scope,
      className: chunkRXYRFJ65_cjs.cn(table_header_cell_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("button", { type: "button", className: table_header_cell_default.trigger, onClick, children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: table_header_cell_default.label, children: label }),
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "table-header-cell-icon", className: table_header_cell_default.icon, "aria-hidden": "true", children: icon }) : null
      ] })
    }
  );
}

// src/components/table-row/table-row.module.css
var table_row_default = {
  root: "table_row_root"
};
function TableRow({
  selected = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      "data-slot": "table-row",
      "data-selected": selected ? "true" : void 0,
      "aria-selected": selected || void 0,
      className: chunkRXYRFJ65_cjs.cn(table_row_default.root, className),
      ...props,
      children
    }
  );
}

// src/components/table/table.module.css
var table_default = {
  frame: "table_frame",
  table: "table_table"
};
function Table({ header, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "table", className: chunkRXYRFJ65_cjs.cn(table_default.frame, className), children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: table_default.table, ...props, children: [
    header ? /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsx("tr", { "data-slot": "table-header", children: header }) }) : null,
    children ? /* @__PURE__ */ jsxRuntime.jsx("tbody", { children }) : null
  ] }) });
}

// src/components/data-table-toolbar/data-table-toolbar.module.css
var data_table_toolbar_default = {
  root: "data_table_toolbar_root",
  search: "data_table_toolbar_search",
  slot: "data_table_toolbar_slot"
};
function DataTableToolbar({
  search,
  filters,
  actions,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "data-table-toolbar",
      className: chunkRXYRFJ65_cjs.cn(data_table_toolbar_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "data-table-toolbar-search", className: data_table_toolbar_default.search, children: search }),
        filters ? /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "data-table-toolbar-filters", className: data_table_toolbar_default.slot, children: filters }) : null,
        actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "data-table-toolbar-actions", className: data_table_toolbar_default.slot, children: actions }) : null,
        children
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type,
      "data-slot": "menu-item",
      disabled,
      className: chunkRXYRFJ65_cjs.cn(menu_item_default.root, className),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type,
      "data-slot": "navigation-item",
      "data-context": context,
      "data-current": current ? "true" : void 0,
      "data-icon": icon ? "true" : void 0,
      "aria-current": current ? "page" : void 0,
      disabled,
      className: chunkRXYRFJ65_cjs.cn(navigation_item_default.root, className),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: navigation_item_default.icon, "aria-hidden": "true", children: icon }) : null,
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: navigation_item_default.label, children: label })
      ]
    }
  );
}

// src/components/navigation-bar/navigation-bar.module.css
var navigation_bar_default = {
  root: "navigation_bar_root"
};
function withNavigationBarContext(children) {
  return React12__namespace.Children.map(children, (child) => {
    if (!React12__namespace.isValidElement(child)) {
      return child;
    }
    return React12__namespace.cloneElement(child, { context: "navigation-bar" });
  });
}
function NavigationBar({
  children,
  className,
  "aria-label": ariaLabel = "Navegaci\xF3n",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      "data-slot": "navigation-bar",
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(navigation_bar_default.root, className),
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
  const items = React12__namespace.Children.toArray(children).filter(Boolean);
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
  tone = "standard",
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
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-embedded": embedded ? "true" : void 0,
      className: chunkRXYRFJ65_cjs.cn(select_default.trigger, className),
      disabled,
      "aria-invalid": showError ? true : void 0,
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretDownIcon, { className: select_default.icon }) })
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
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Select.ItemIndicator, { className: select_default.itemIndicator, children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CheckIcon, {}) })
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
      children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretUpIcon, {})
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
      children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretDownIcon, {})
    }
  );
}

// src/components/text-input/text-input.module.css
var text_input_default = {
  root: "text_input_root"
};
var TextInput = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ref,
        type,
        "data-slot": "text-input",
        "data-appearance": appearance,
        "data-tone": tone,
        "data-error": showError ? "true" : void 0,
        "data-embedded": embedded ? "true" : void 0,
        className: chunkRXYRFJ65_cjs.cn(text_input_default.root, className),
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
  const generatedId = React12__namespace.useId();
  const numberId = id ?? generatedId;
  const rootRef = React12__namespace.useRef(null);
  const [menuWidth, setMenuWidth] = React12__namespace.useState();
  React12__namespace.useLayoutEffect(() => {
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
      "data-tone": tone,
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
                  tone,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      "data-slot": "text-area",
      "data-appearance": appearance,
      "data-tone": tone,
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
  const generatedId = React12__namespace.useId();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "form-field",
      "data-tone": tone,
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
  const inputRef = React12__namespace.useRef(null);
  const generatedId = React12__namespace.useId();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "date-field",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(date_field_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: date_field_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: date_field_default.control, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
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
              children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CalendarIcon, {})
            }
          )
        ] }),
        supportingText ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: supportingId, className: date_field_default.supporting, children: supportingText }) : null
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type,
      "data-slot": "calendar-day",
      "data-selected": selected ? "true" : void 0,
      "aria-pressed": selected,
      disabled,
      className: chunkRXYRFJ65_cjs.cn(calendar_day_default.root, className),
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
  const titleId = React12__namespace.useId();
  const [uncontrolledValue, setUncontrolledValue] = React12__namespace.useState(defaultValue);
  const isControlled = value !== void 0;
  const selected = isControlled ? value ?? void 0 : uncontrolledValue;
  const [uncontrolledMonth, setUncontrolledMonth] = React12__namespace.useState(
    () => startOfMonth(defaultMonth ?? value ?? defaultValue ?? /* @__PURE__ */ new Date())
  );
  const viewMonth = monthProp ? startOfMonth(monthProp) : uncontrolledMonth;
  const weeks = React12__namespace.useMemo(() => buildWeeks(viewMonth), [viewMonth]);
  const labels = React12__namespace.useMemo(() => weekdayLabels(locale), [locale]);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "calendar",
      role: "group",
      "aria-labelledby": titleId,
      className: chunkRXYRFJ65_cjs.cn(calendar_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: calendar_default.header, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              hierarchy: "tertiary",
              size: "md",
              icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretLeftIcon, {}),
              "aria-label": previousLabel,
              onClick: () => setViewMonth(addMonths(viewMonth, -1))
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("h2", { id: titleId, className: calendar_default.title, "aria-live": "polite", children: monthTitle(viewMonth, locale) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              hierarchy: "tertiary",
              size: "md",
              icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretRightIcon, {}),
              "aria-label": nextLabel,
              onClick: () => setViewMonth(addMonths(viewMonth, 1))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { role: "grid", "aria-labelledby": titleId, className: calendar_default.grid, children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { role: "row", className: calendar_default.weekdays, children: labels.map((label) => /* @__PURE__ */ jsxRuntime.jsx("div", { role: "columnheader", className: calendar_default.weekday, children: label }, label)) }),
          weeks.map((week) => {
            const firstDay = week[0];
            if (!firstDay) return null;
            return /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                role: "row",
                className: calendar_default.week,
                children: week.map((date) => {
                  const selectedDay = selected != null && isSameDay(date, selected);
                  const outside = !isSameMonth(date, viewMonth);
                  const disabled = isDisabled(date);
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      role: "gridcell",
                      "aria-selected": selectedDay,
                      "data-outside": outside || void 0,
                      children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const fieldRef = React12__namespace.useRef(null);
  const [open, setOpen] = React12__namespace.useState(false);
  const [uncontrolled, setUncontrolled] = React12__namespace.useState(defaultValue);
  const selected = value ?? uncontrolled;
  function setSelected(next) {
    if (value == null) setUncontrolled(next);
    onValueChange?.(next);
  }
  function handleFieldChange(event) {
    const next = event.target.value ? fromIsoDate(event.target.value) : void 0;
    setSelected(next);
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "date-picker",
      "data-appearance": appearance,
      "data-tone": tone,
      className: chunkRXYRFJ65_cjs.cn(date_picker_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        radixUi.Popover.Root,
        {
          open,
          onOpenChange: (next) => {
            if (disabled) return;
            setOpen(next);
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(radixUi.Popover.Anchor, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: fieldRef, className: date_picker_default.anchor, children: /* @__PURE__ */ jsxRuntime.jsx(
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
            /* @__PURE__ */ jsxRuntime.jsx(radixUi.Popover.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
              radixUi.Popover.Content,
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
                children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const inputRef = React12__namespace.useRef(null);
  const generatedId = React12__namespace.useId();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "time-field",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(time_field_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: time_field_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: time_field_default.control, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: time_field_default.trailing,
              "aria-label": timeLabel,
              disabled,
              tabIndex: -1,
              onClick: openPicker,
              children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.ClockIcon, {})
            }
          )
        ] }),
        supportingText ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: supportingId, className: time_field_default.supporting, children: supportingText }) : null
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
  const listId = React12__namespace.useId();
  const generatedId = React12__namespace.useId();
  const inputId = id ?? generatedId;
  const supportingId = supportingText ? `${inputId}-supporting` : void 0;
  const showError = error && !disabled;
  const fieldRef = React12__namespace.useRef(null);
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React12__namespace.useState(defaultValue);
  const selected = isControlled ? value : uncontrolled;
  const [query, setQuery] = React12__namespace.useState(() => optionLabel(options, selected));
  const [open, setOpen] = React12__namespace.useState(false);
  const [highlight, setHighlight] = React12__namespace.useState(0);
  const filtered = React12__namespace.useMemo(
    () => options.filter((option) => matchesQuery(option, query)),
    [options, query]
  );
  React12__namespace.useEffect(() => {
    setQuery(optionLabel(options, selected));
  }, [options, selected]);
  React12__namespace.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "combobox",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(combobox_default.root, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(radixUi.Popover.Root, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: combobox_default.label, children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Popover.Anchor, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: fieldRef, className: combobox_default.control, children: /* @__PURE__ */ jsxRuntime.jsx(
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
        supportingText ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: supportingId, className: combobox_default.supporting, children: supportingText }) : null,
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Popover.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
          radixUi.Popover.Content,
          {
            "data-slot": "combobox-content",
            className: chunkRXYRFJ65_cjs.cn(select_default.content, combobox_default.list),
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
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "ul",
              {
                id: listId,
                role: "listbox",
                className: chunkRXYRFJ65_cjs.cn(select_default.viewport, combobox_default.options),
                children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("li", { className: combobox_default.empty, role: "presentation", children: emptyText }) : filtered.map((option, index) => {
                  const selectedOption = option.value === selected;
                  const highlighted = index === highlight;
                  return /* @__PURE__ */ jsxRuntime.jsxs(
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
                        /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "select-item-text", children: option.label }),
                        selectedOption ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: select_default.itemIndicator, children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CheckIcon, {}) }) : null
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
            children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {})
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
  const titleId = React12__namespace.useId();
  const messageId = React12__namespace.useId();
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
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {}),
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
  const titleId = React12__namespace.useId();
  const messageId = React12__namespace.useId();
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
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {}),
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
  const titleId = React12__namespace.useId();
  const messageId = React12__namespace.useId();
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
  const primaryId = React12__namespace.useId();
  const secondaryId = React12__namespace.useId();
  const isInverse = tone === "inverse";
  const isUploading = status === "uploading";
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "file-upload-item",
      "data-status": status,
      "data-tone": tone,
      role: status === "error" ? "alert" : status === "success" || isUploading ? "status" : void 0,
      "aria-busy": isUploading || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": secondaryId,
      className: chunkRXYRFJ65_cjs.cn(file_upload_item_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: file_upload_item_default.main, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: file_upload_item_default.copy, children: [
            /* @__PURE__ */ jsxRuntime.jsx("p", { id: primaryId, className: file_upload_item_default.primary, children: primaryText }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { id: secondaryId, className: file_upload_item_default.secondary, children: secondaryText })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
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
        isUploading ? /* @__PURE__ */ jsxRuntime.jsx(
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
  const inputRef = React12__namespace.useRef(null);
  const primaryId = React12__namespace.useId();
  const secondaryId = React12__namespace.useId();
  const inputId = React12__namespace.useId();
  const isInverse = tone === "inverse";
  function openPicker() {
    if (disabled) return;
    inputRef.current?.click();
  }
  function emitFiles(files) {
    if (disabled || !files || files.length === 0) return;
    onFilesChange?.(files);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "file-upload-drop-zone",
      "data-tone": tone,
      "data-disabled": disabled || void 0,
      "aria-disabled": disabled || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": secondaryId,
      className: chunkRXYRFJ65_cjs.cn(file_upload_drop_zone_default.root, className),
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
        /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx("p", { id: primaryId, className: file_upload_drop_zone_default.primary, children: primaryText }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { id: secondaryId, className: file_upload_drop_zone_default.secondary, children: secondaryText }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
  const inputRef = React12__namespace.useRef(null);
  const primaryId = React12__namespace.useId();
  const secondaryId = React12__namespace.useId();
  const supportingId = React12__namespace.useId();
  const isInverse = tone === "inverse";
  const dropTone = tone;
  const isItemsControlled = items != null;
  const [internalFiles, setInternalFiles] = React12__namespace.useState([]);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "file-upload",
      "data-type": type,
      "data-tone": tone,
      "data-disabled": disabled || void 0,
      "aria-disabled": disabled || void 0,
      "aria-labelledby": primaryId,
      "aria-describedby": [secondaryId, supportingText ? supportingId : null].filter(Boolean).join(" ") || void 0,
      className: chunkRXYRFJ65_cjs.cn(file_upload_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { id: primaryId, className: file_upload_default.primary, children: primaryText }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { id: secondaryId, className: file_upload_default.secondary, children: secondaryText }),
        type === "drag-zone" ? /* @__PURE__ */ jsxRuntime.jsx(
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
        ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: file_upload_default.trigger, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
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
        supportingText ? /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            id: supportingId,
            className: file_upload_default.supporting,
            "data-tone": tone,
            children: supportingText
          }
        ) : null,
        displayedItems.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("ul", { className: file_upload_default.list, children: displayedItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
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

// src/components/side-navigation/side-navigation.module.css
var side_navigation_default = {
  root: "side_navigation_root",
  heading: "side_navigation_heading",
  list: "side_navigation_list"
};
function withSideNavigationContext(children) {
  return React12__namespace.Children.map(children, (child) => {
    if (!React12__namespace.isValidElement(child)) {
      return child;
    }
    return React12__namespace.cloneElement(child, { context: "side-navigation" });
  });
}
function SideNavigation({
  heading,
  children,
  className,
  "aria-label": ariaLabel,
  ...props
}) {
  const headingId = React12__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      "data-slot": "side-navigation",
      "aria-label": heading ? void 0 : ariaLabel ?? "Navegaci\xF3n",
      "aria-labelledby": heading ? headingId : void 0,
      className: chunkRXYRFJ65_cjs.cn(side_navigation_default.root, className),
      ...props,
      children: [
        heading ? /* @__PURE__ */ jsxRuntime.jsx("h2", { id: headingId, className: side_navigation_default.heading, children: heading }) : null,
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: side_navigation_default.list, children: withSideNavigationContext(children) })
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
  const titleId = React12__namespace.useId();
  const messageId = React12__namespace.useId();
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
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {}),
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
  const inputRef = React12__namespace.useRef(null);
  const generatedId = React12__namespace.useId();
  const inputId = id ?? generatedId;
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React12__namespace.useState(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "search",
      "data-appearance": appearance,
      "data-tone": tone,
      "data-error": showError ? "true" : void 0,
      "data-disabled": disabled || void 0,
      className: chunkRXYRFJ65_cjs.cn(search_default.root, className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", className: search_default.leading, children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.MagnifyingGlassIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
            className: chunkRXYRFJ65_cjs.cn(search_default.input),
            onChange: handleChange
          }
        ),
        showClear ? /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            className: search_default.clear,
            "aria-label": clearLabel,
            onClick: handleClear,
            children: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.XIcon, {})
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type,
      "data-slot": "pagination-item",
      "data-current": current ? "true" : void 0,
      "aria-current": current ? "page" : void 0,
      disabled,
      className: chunkRXYRFJ65_cjs.cn(pagination_item_default.root, className),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      "data-slot": "pagination",
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(pagination_default.root, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "md",
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretLeftIcon, {}),
            "aria-label": previousLabel,
            disabled: previousDisabled,
            onClick: onPrevious
          }
        ),
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            hierarchy: "tertiary",
            size: "md",
            icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CaretRightIcon, {}),
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
  const labelId = React12__namespace.useId();
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
  if (React12__namespace.isValidElement(child)) {
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
  const items = React12__namespace.Children.toArray(children).filter(Boolean);
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

// src/components/tooltip/tooltip.module.css
var tooltip_default = {
  root: "tooltip_root"
};
function Tooltip({
  label,
  children,
  side = "top",
  delayDuration = 200,
  open,
  defaultOpen,
  onOpenChange,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Provider, { delayDuration, children: /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Tooltip.Root,
    {
      open,
      defaultOpen,
      onOpenChange,
      delayDuration,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Trigger, { asChild: true, children }),
        /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
          radixUi.Tooltip.Content,
          {
            "data-slot": "tooltip",
            side,
            sideOffset: 8,
            className: chunkRXYRFJ65_cjs.cn(tooltip_default.root, className),
            children: label
          }
        ) })
      ]
    }
  ) });
}

// src/components/otp-input/otp-input.module.css
var otp_input_default = {
  root: "otp_input_root",
  segment: "otp_input_segment"
};
var OTP_LENGTH = 6;
function onlyDigits(value) {
  return value.replace(/\D/g, "").slice(0, OTP_LENGTH);
}
function cellsOf(value) {
  return Array.from({ length: OTP_LENGTH }, (_, index) => value[index] ?? "");
}
function OtpInput({
  value,
  defaultValue = "",
  onValueChange,
  name,
  autoComplete = "one-time-code",
  autoFocus,
  className,
  id,
  "aria-label": ariaLabel = "C\xF3digo de verificaci\xF3n",
  ...props
}) {
  const generatedId = React12__namespace.useId();
  const groupId = id ?? generatedId;
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React12__namespace.useState(
    () => onlyDigits(String(defaultValue))
  );
  const current = onlyDigits(isControlled ? String(value ?? "") : uncontrolled);
  const cells = cellsOf(current);
  const refs = React12__namespace.useRef([]);
  function commit(next) {
    const digits = onlyDigits(next);
    if (!isControlled) setUncontrolled(digits);
    onValueChange?.(digits);
  }
  function focusAt(index) {
    const clamped = Math.max(0, Math.min(index, OTP_LENGTH - 1));
    refs.current[clamped]?.focus();
    refs.current[clamped]?.select();
  }
  function handleChange(index, raw) {
    const incoming = onlyDigits(raw);
    if (!incoming) return;
    if (incoming.length > 1) {
      commit(incoming);
      focusAt(Math.min(incoming.length, OTP_LENGTH) - 1);
      return;
    }
    const writeAt = Math.min(index, current.length);
    const next = (current.slice(0, writeAt) + incoming + current.slice(writeAt + 1)).slice(0, OTP_LENGTH);
    commit(next);
    focusAt(next.length >= OTP_LENGTH ? OTP_LENGTH - 1 : writeAt + 1);
  }
  function handleKeyDown(index, event) {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      if (current[index]) {
        commit(current.slice(0, index) + current.slice(index + 1));
        return;
      }
      if (index > 0) {
        commit(current.slice(0, index - 1) + current.slice(index));
        focusAt(index - 1);
      }
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusAt(index - 1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusAt(index + 1);
    }
  }
  function handlePaste(event) {
    const pasted = onlyDigits(event.clipboardData.getData("text"));
    if (!pasted) return;
    event.preventDefault();
    commit(pasted);
    focusAt(Math.min(pasted.length, OTP_LENGTH) - 1);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      id: groupId,
      role: "group",
      "data-slot": "otp-input",
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(otp_input_default.root, className),
      ...props,
      children: [
        name ? /* @__PURE__ */ jsxRuntime.jsx("input", { type: "hidden", name, value: current }) : null,
        cells.map((digit, index) => /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            ref: (node) => {
              refs.current[index] = node;
            },
            id: index === 0 ? `${groupId}-0` : void 0,
            className: otp_input_default.segment,
            "data-slot": "otp-input-segment",
            type: "text",
            inputMode: "numeric",
            autoComplete: index === 0 ? autoComplete : "off",
            autoFocus: autoFocus && index === 0,
            "aria-label": `D\xEDgito ${index + 1} de ${OTP_LENGTH}`,
            maxLength: OTP_LENGTH,
            value: digit,
            onChange: (event) => handleChange(index, event.target.value),
            onKeyDown: (event) => handleKeyDown(index, event),
            onPaste: handlePaste,
            onFocus: (event) => event.currentTarget.select()
          },
          index
        ))
      ]
    }
  );
}

// src/components/dialog/dialog.module.css
var dialog_default = {
  overlay: "dialog_overlay",
  content: "dialog_content",
  header: "dialog_header",
  title: "dialog_title",
  body: "dialog_body",
  actions: "dialog_actions"
};
function Dialog({
  size = "md",
  title,
  children,
  primaryAction,
  secondaryAction,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  dismissLabel = "Cerrar",
  className
}) {
  const titleId = React12__namespace.useId();
  const descriptionId = React12__namespace.useId();
  const hasActions = Boolean(primaryAction || secondaryAction);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Dialog.Root,
    {
      open,
      defaultOpen,
      onOpenChange,
      children: [
        trigger ? /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Trigger, { asChild: true, children: trigger }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs(radixUi.Dialog.Portal, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Overlay, { "data-slot": "dialog-overlay", className: dialog_default.overlay }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            radixUi.Dialog.Content,
            {
              "data-slot": "dialog",
              "data-size": size,
              "aria-labelledby": titleId,
              "aria-describedby": descriptionId,
              className: chunkRXYRFJ65_cjs.cn(dialog_default.content, className),
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: dialog_default.header, children: [
                  /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Title, { id: titleId, className: dialog_default.title, children: title }),
                  /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
                    IconButton,
                    {
                      hierarchy: "tertiary",
                      size: "sm",
                      icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {}),
                      "aria-label": dismissLabel
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { id: descriptionId, className: dialog_default.body, children }) }),
                hasActions ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: dialog_default.actions, children: /* @__PURE__ */ jsxRuntime.jsxs(ButtonGroup, { children: [
                  secondaryAction,
                  primaryAction
                ] }) }) : null
              ]
            }
          )
        ] })
      ]
    }
  );
}

// src/components/drawer/drawer.module.css
var drawer_default = {
  overlay: "drawer_overlay",
  panel: "drawer_panel",
  close: "drawer_close",
  header: "drawer_header",
  body: "drawer_body",
  footer: "drawer_footer",
  footerActions: "drawer_footerActions",
  title: "drawer_title",
  contentTitle: "drawer_contentTitle",
  text: "drawer_text",
  srOnly: "drawer_srOnly"
};
function Drawer({
  size = "sm",
  header,
  title,
  contentTitle,
  children,
  footer,
  primaryAction,
  secondaryAction,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  dismissLabel = "Cerrar",
  className
}) {
  const titleId = React12__namespace.useId();
  const descriptionId = React12__namespace.useId();
  const closeSize = size === "lg" ? "lg" : "sm";
  const accessibleTitle = title ?? "Panel";
  const hasHeader = header != null || title != null && title !== "";
  const hasContent = contentTitle != null || children != null;
  const defaultFooter = primaryAction || secondaryAction ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: drawer_default.footerActions, children: /* @__PURE__ */ jsxRuntime.jsxs(ButtonGroup, { children: [
    secondaryAction,
    primaryAction
  ] }) }) : null;
  const footerContent = footer ?? defaultFooter;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Dialog.Root,
    {
      open,
      defaultOpen,
      onOpenChange,
      children: [
        trigger ? /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Trigger, { asChild: true, children: trigger }) : null,
        /* @__PURE__ */ jsxRuntime.jsxs(radixUi.Dialog.Portal, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Overlay, { "data-slot": "drawer-overlay", className: drawer_default.overlay }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            radixUi.Dialog.Content,
            {
              "data-slot": "drawer",
              "data-size": size,
              "aria-labelledby": titleId,
              "aria-describedby": hasContent ? descriptionId : void 0,
              className: chunkRXYRFJ65_cjs.cn(drawer_default.panel, className),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: drawer_default.close, children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
                  IconButton,
                  {
                    hierarchy: "tertiary",
                    size: closeSize,
                    icon: /* @__PURE__ */ jsxRuntime.jsx(chunk2KTJ3HWR_cjs.CloseIcon, {}),
                    "aria-label": dismissLabel
                  }
                ) }) }),
                hasHeader ? /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "drawer-header", className: drawer_default.header, children: header ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Title, { id: titleId, className: drawer_default.srOnly, children: accessibleTitle }),
                  header
                ] }) : /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Title, { id: titleId, className: drawer_default.title, children: title }) }) : /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Title, { id: titleId, className: drawer_default.srOnly, children: accessibleTitle }),
                hasContent ? /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "drawer-content", className: drawer_default.body, children: [
                  contentTitle ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: drawer_default.contentTitle, children: contentTitle }) : null,
                  children != null ? /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { id: descriptionId, className: drawer_default.text, children }) }) : null
                ] }) : null,
                footerContent ? /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "drawer-footer", className: drawer_default.footer, children: footerContent }) : null
              ]
            }
          )
        ] })
      ]
    }
  );
}

exports.AccordionItem = AccordionItem;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Calendar = Calendar;
exports.CalendarDay = CalendarDay;
exports.Checkbox = Checkbox;
exports.ChipGroup = ChipGroup;
exports.Combobox = Combobox;
exports.CounterBadge = CounterBadge;
exports.DEFAULT_PHONE_COUNTRIES = DEFAULT_PHONE_COUNTRIES;
exports.DataTableToolbar = DataTableToolbar;
exports.DateField = DateField;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.EmptyState = EmptyState;
exports.FileUpload = FileUpload;
exports.FileUploadDropZone = FileUploadDropZone;
exports.FileUploadItem = FileUploadItem;
exports.FilterChip = FilterChip;
exports.FloatingActionButton = FloatingActionButton;
exports.FormField = FormField;
exports.IconButton = IconButton;
exports.InputChip = InputChip;
exports.Link = Link;
exports.ListItem = ListItem;
exports.MenuItem = MenuItem;
exports.NavigationBar = NavigationBar;
exports.NavigationItem = NavigationItem;
exports.OTP_LENGTH = OTP_LENGTH;
exports.OtpInput = OtpInput;
exports.Pagination = Pagination;
exports.PaginationItem = PaginationItem;
exports.PhoneInput = PhoneInput;
exports.ProgressBar = ProgressBar;
exports.ProgressIndicator = ProgressIndicator;
exports.ProgressStep = ProgressStep;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Search = Search;
exports.Segment = Segment;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.SideNavigation = SideNavigation;
exports.SocialButton = SocialButton;
exports.Stat = Stat;
exports.Status = Status;
exports.Switch = Switch;
exports.TabItem = TabItem;
exports.Table = Table;
exports.TableCell = TableCell;
exports.TableHeaderCell = TableHeaderCell;
exports.TableRow = TableRow;
exports.Tag = Tag;
exports.TimeField = TimeField;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map