import { cn } from './chunk-DN2AEEA2.js';
import * as React2 from 'react';
import { cva } from 'class-variance-authority';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Avatar as Avatar$1, RadioGroup as RadioGroup$1, Checkbox as Checkbox$1 } from 'radix-ui';

function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// src/components/button/button.module.css
var button_default = {
  root: "button_root"};
var buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none  aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "",
        ghost: "",
        destructive: "",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function LoadingSpinner({ maskId }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "data-slot": "loading-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("mask", { id: maskId, fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z" }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z",
            stroke: "currentColor",
            strokeWidth: "4",
            mask: `url(#${maskId})`
          }
        )
      ]
    }
  );
}
function Button({
  className,
  variant = "default",
  size = "default",
  tone = "standard",
  asChild = false,
  leftIcon,
  rightIcon,
  loading = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const maskId = React2.useId();
  const effectiveLeftIcon = loading ? /* @__PURE__ */ jsx(LoadingSpinner, { maskId }) : leftIcon;
  const effectiveRightIcon = rightIcon ?? (loading ? /* @__PURE__ */ jsx("span", { style: { visibility: "hidden" }, children: effectiveLeftIcon }) : void 0);
  const iconState = loading ? "both" : effectiveLeftIcon && rightIcon ? "both" : effectiveLeftIcon ? "inline-start" : rightIcon ? "inline-end" : void 0;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      "data-tone": tone,
      "data-icon": iconState,
      "data-loading": loading || void 0,
      "aria-busy": loading || void 0,
      className: cn(button_default.root, buttonVariants({ variant, size, className })),
      ...props,
      children: asChild ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
        effectiveLeftIcon && /* @__PURE__ */ jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveLeftIcon }),
        children && /* @__PURE__ */ jsx("span", { children }),
        effectiveRightIcon && /* @__PURE__ */ jsx("span", { className: "flex shrink-0 items-center justify-center", children: effectiveRightIcon })
      ] })
    }
  );
}

// src/components/icon-button/icon-button.module.css
var icon_button_default = {
  root: "icon_button_root"
};
function IconButton({
  icon,
  size = "md",
  variant = "default",
  asChild = false,
  className,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "icon-button",
      "data-size": size,
      "data-variant": variant,
      className: cn(icon_button_default.root, className),
      ...props,
      children: asChild ? children : /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: icon_button_default.iconWrapper, children: icon })
    }
  );
}

// src/components/link/link.module.css
var link_default = {
  root: "link_root",
  iconWrapper: "link_iconWrapper"
};
function Link({
  tone = "standard",
  href,
  children,
  external = false,
  icon,
  iconPosition = "right",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      "data-slot": "link",
      "data-tone": tone,
      href,
      target: external ? "_blank" : void 0,
      rel: external ? "noopener noreferrer" : void 0,
      className: cn(link_default.root, className),
      ...props,
      children: [
        icon && iconPosition === "left" && /* @__PURE__ */ jsx("span", { className: link_default.iconWrapper, "aria-hidden": "true", children: icon }),
        children,
        icon && iconPosition === "right" && /* @__PURE__ */ jsx("span", { className: link_default.iconWrapper, "aria-hidden": "true", children: icon })
      ]
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
  children,
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
        children
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
function CloseIcon({ size = "20" }) {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
    /* @__PURE__ */ jsx("path", { d: "M11.5299 1.17839L1.17839 11.53L0 10.3516L10.3516 4.13259e-06L11.5299 1.17839Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M11.53 10.3516L10.3516 11.5299L4.13259e-06 1.17839L1.17839 0L11.53 10.3516Z", fill: "currentColor" })
  ] });
}
function InputChip({
  size = "sm",
  icon,
  children,
  onClose,
  closeDisabled = false,
  closeLabel = "Quitar",
  className
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "data-slot": "input-chip",
      "data-size": size,
      "data-close-disabled": closeDisabled,
      className: cn(input_chip_default.root, className),
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: input_chip_default.iconWrapper, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: input_chip_default.label, children }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "data-slot": "input-chip-close",
            className: input_chip_default.closeButton,
            onClick: onClose,
            disabled: closeDisabled,
            "aria-label": closeLabel,
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
  iconWrapper: "status_iconWrapper"
};
function Status({
  size = "sm",
  intent = "neutral",
  icon,
  children,
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
        children
      ]
    }
  );
}

// src/components/tag/tag.module.css
var tag_default = {
  root: "tag_root",
  iconWrapper: "tag_iconWrapper"
};
function Tag({ size = "sm", tone = "neutral", icon, children, className, ...props }) {
  return /* @__PURE__ */ jsxs("span", { "data-slot": "tag", "data-size": size, "data-tone": tone, className: cn(tag_default.root, className), ...props, children: [
    icon && /* @__PURE__ */ jsx("span", { className: tag_default.iconWrapper, "aria-hidden": "true", children: icon }),
    children
  ] });
}

// src/components/badge/badge.module.css
var badge_default = {
  root: "badge_root"
};
function Badge({ size = "sm", tone = "neutral", children, className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "badge", "data-size": size, "data-tone": tone, className: cn(badge_default.root, className), ...props, children });
}

// src/components/counter-badge/counter-badge.module.css
var counter_badge_default = {
  root: "counter_badge_root"
};
function CounterBadge({
  size = "sm",
  emphasis = "neutral",
  count,
  max,
  className,
  ...props
}) {
  const display = max !== void 0 && count > max ? `${max}+` : String(count);
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "counter-badge",
      "data-size": size,
      "data-emphasis": emphasis,
      className: cn(counter_badge_default.root, className),
      ...props,
      children: display
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

// src/components/segment/segment.module.css
var segment_default = {
  root: "segment_root"
};
function Segment({
  size = "sm",
  selected = false,
  onSelectedChange,
  children,
  className,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "data-slot": "segment",
      "data-size": size,
      "data-selected": selected,
      "aria-pressed": selected,
      disabled,
      onClick: () => onSelectedChange?.(!selected),
      className: cn(segment_default.root, className),
      ...props,
      children
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
  const [imageStatus, setImageStatus] = React2.useState(src ? "loading" : "idle");
  React2.useEffect(() => {
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
    const { children, "aria-label": ariaLabel2, ...buttonProps } = rest;
    return /* @__PURE__ */ jsx(
      Button,
      {
        "data-slot": "floating-action-button",
        "data-type": "extended",
        "data-floating": floating,
        type: "button",
        variant: "default",
        tone: "standard",
        size: "lg",
        leftIcon: icon,
        disabled,
        "aria-label": ariaLabel2,
        className: sharedClassName,
        ...buttonProps,
        children
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
      variant: "default",
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

// src/components/checkbox/checkbox.module.css
var checkbox_default = {
  root: "checkbox_root",
  indicator: "checkbox_indicator",
  checkIcon: "checkbox_checkIcon",
  mixedIcon: "checkbox_mixedIcon"};
function CheckIcon() {
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
            /* @__PURE__ */ jsx("span", { className: checkbox_default.checkIcon, children: /* @__PURE__ */ jsx(CheckIcon, {}) }),
            /* @__PURE__ */ jsx("span", { className: checkbox_default.mixedIcon, children: /* @__PURE__ */ jsx(MixedIcon, {}) })
          ]
        }
      )
    }
  );
}

export { Avatar, Badge, Button, Checkbox, CounterBadge, Divider, FilterChip, FloatingActionButton, IconButton, InputChip, Link, Radio, RadioGroup, Segment, Status, Tag };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map