import { cva } from 'class-variance-authority';
import { Slot, Checkbox as Checkbox$1, RadioGroup as RadioGroup$1, Switch as Switch$1, Progress as Progress$1, Dialog as Dialog$1, Separator as Separator$1, Label as Label$1, Accordion as Accordion$1, Avatar as Avatar$1 } from 'radix-ui';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { AlertCircleIcon, CheckIcon, MessageSquareIcon, PlayIcon, Search, Bell, ShoppingCart, Menu, HeartIcon, XIcon, Plus, Minus, ChevronDown, X } from 'lucide-react';
import * as React2 from 'react';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
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
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-2xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function BrandButton({ src, alt, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "brand-button",
      className: cn(
        "absolute bottom-2 right-4 flex h-12 w-12 items-center justify-center",
        "rounded-xl border border-[var(--ds-color-neutral-600)] bg-white p-2",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt,
          className: "h-full w-full object-contain"
        }
      )
    }
  );
}
function FavoriteButton({
  isAuthenticated = false,
  isFavorite = false,
  disabled = false,
  onFavoriteToggle,
  onAuthRequired
}) {
  function handleClick() {
    if (!isAuthenticated) {
      onAuthRequired?.();
    } else {
      onFavoriteToggle?.();
    }
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      disabled,
      "aria-label": isFavorite ? "Quitar de favoritos" : "Agregar a favoritos",
      className: cn(
        "flex items-center justify-center transition-colors",
        disabled && "opacity-40 cursor-not-allowed"
      ),
      children: /* @__PURE__ */ jsx(
        HeartIcon,
        {
          size: 24,
          className: isFavorite ? "text-red-500 fill-red-500" : "text-white fill-white"
        }
      )
    }
  );
}
function RatingBadge({ rating, className, ...props }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "rating-badge",
      className: cn(
        "absolute top-0 right-0 inline-flex items-center gap-2 px-4 py-2",
        "rounded-tr-2xl rounded-bl-2xl bg-blue-800 text-white",
        "font-poppins text-sm font-bold leading-snug",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "shrink-0",
            children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
          }
        ),
        /* @__PURE__ */ jsx("span", { children: rating.toFixed(1) })
      ]
    }
  );
}
var variantStyles = {
  discount: "bg-[#14532D] text-white",
  amber: "bg-[#FAEEDA] text-[#633806]",
  green: "bg-[#EAF3DE] text-[#27500A]",
  red: "bg-[#FCEBEB] text-[#791F1F]",
  neutral: "bg-muted text-muted-foreground border border-border"
};
function Badge({ label, variant = "amber", icon = null }) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 text-xs font-medium",
        variantStyles[variant]
      ),
      style: {
        borderRadius: "0 var(--spacing-4, 16px) 0 0",
        padding: "var(--spacing-2, 8px) var(--spacing-4, 16px)"
      },
      children: [
        icon,
        label
      ]
    }
  );
}
var buttonVariants2 = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
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
function Button2({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants2({ variant, size, className })),
      ...props
    }
  );
}
function CardCourse({
  type,
  title,
  category,
  price,
  rating,
  image,
  institution,
  metadata,
  badge,
  iconBadge,
  description,
  isFavorite = false,
  isAuthenticated = false,
  cta,
  onAddToCart,
  onFavoriteToggle,
  onAuthRequired
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-0 overflow-hidden max-w-[325px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative ", children: [
      type === "transactional" && /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full object-cover h-[140px]" }),
      type === "evaluative" && /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full object-cover" }),
      type === "transactional" && badge && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0", children: /* @__PURE__ */ jsx(Badge, { icon: iconBadge, label: badge, variant: "discount" }) }),
      type === "transactional" && /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        FavoriteButton,
        {
          isAuthenticated,
          isFavorite,
          onFavoriteToggle,
          onAuthRequired
        }
      ) }),
      type === "evaluative" && /* @__PURE__ */ jsx(RatingBadge, { rating }),
      institution && /* @__PURE__ */ jsx(BrandButton, { src: institution, alt: "Instituci\xF3n" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col gap-3 pb-4 pr-4 pl-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-medium text-md py-4", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: category }),
      type === "transactional" && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        "\u2605 ",
        rating
      ] }) }),
      type === "transactional" && description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground line-clamp-3", children: description }),
      type === "evaluative" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground", children: [
        metadata?.map((item, index) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          item.icon,
          item.label
        ] }, index)),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-end font-semibold text-foreground text-base col-span-1", children: [
          "$",
          price.toLocaleString("es-MX"),
          " MXN"
        ] })
      ] }),
      type === "transactional" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: metadata?.map((item, index) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          item.icon,
          item.label
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-1", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-semibold text-base", children: [
            "$",
            price.toLocaleString("es-MX"),
            " MXN"
          ] }),
          /* @__PURE__ */ jsx(Button2, { size: "sm", onClick: onAddToCart, children: cta })
        ] })
      ] })
    ] })
  ] });
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog$1.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsx(
                  XIcon,
                  {}
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Title,
    {
      "data-slot": "dialog-title",
      className: cn(
        "font-heading text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function ModalBase({
  open,
  onOpenChange,
  icon,
  title,
  subheader,
  children,
  cancelLabel = "Cancelar",
  submitLabel = "Aceptar",
  onCancel,
  onSubmit,
  maxWidth = "480px",
  showFooter = true
}) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(
    DialogContent,
    {
      className: "p-8 gap-6",
      style: { maxWidth },
      children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          icon && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsx(DialogTitle, { children: title }),
            subheader && /* @__PURE__ */ jsx(DialogDescription, { children: subheader })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children }),
        showFooter && /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsx(Button2, { type: "button", variant: "outline", onClick: handleCancel, children: cancelLabel }),
          /* @__PURE__ */ jsx(Button2, { type: "button", onClick: onSubmit, children: submitLabel })
        ] })
      ]
    }
  ) });
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}
function ModalInfo({
  open,
  onOpenChange,
  icon,
  title,
  subheader,
  image,
  imageAlt,
  body,
  note,
  footer,
  cancelLabel,
  submitLabel,
  onCancel,
  onSubmit
}) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return /* @__PURE__ */ jsxs(
    ModalBase,
    {
      open,
      onOpenChange,
      icon,
      title,
      subheader,
      cancelLabel,
      submitLabel,
      onCancel,
      onSubmit,
      maxWidth: "720px",
      showFooter: false,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          image && /* @__PURE__ */ jsx("div", { className: "shrink-0 w-48", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: imageAlt ?? title,
              className: "w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: paragraph }, index)) })
        ] }),
        note && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: note }),
        footer && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 rounded-lg border p-3", children: [
            footer.icon && /* @__PURE__ */ jsx("div", { className: "shrink-0 text-muted-foreground", children: footer.icon }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: footer.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: footer.description })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function TextInput({
  id,
  placeholder,
  value,
  onChange,
  icon,
  disabled = false,
  error = false,
  errorMessage,
  label,
  required = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "text-sm font-medium", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
      icon && /* @__PURE__ */ jsx("span", { className: "absolute left-3 text-muted-foreground shrink-0", children: icon }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id,
          placeholder,
          value,
          onChange,
          disabled,
          className: cn(
            icon && "pl-9",
            error && "border-destructive focus-visible:ring-destructive/20 pr-8"
          )
        }
      )
    ] }),
    error && errorMessage && /* @__PURE__ */ jsx("span", { className: "text-xs text-destructive", children: errorMessage })
  ] });
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function TextArea({
  id,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage,
  label,
  required = false,
  maxLength,
  rows = 4,
  autoFocus = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "text-sm font-medium", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id,
          placeholder,
          value,
          onChange,
          disabled,
          maxLength,
          rows,
          autoFocus,
          className: cn(
            error && "border-destructive focus-visible:ring-destructive/20 pr-8"
          )
        }
      ),
      error && /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2 text-destructive", children: /* @__PURE__ */ jsx(AlertCircleIcon, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: error && errorMessage ? /* @__PURE__ */ jsx("span", { className: "text-xs text-destructive", children: errorMessage }) : /* @__PURE__ */ jsx("span", {}) })
  ] });
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label$1.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function StarRating({
  value,
  max = 5,
  onChange
}) {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center", children: Array.from({ length: max }).map((_, i) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(i + 1),
      "aria-label": `${i + 1} estrella${i !== 0 ? "s" : ""}`,
      className: "text-3xl text-muted-foreground transition-colors hover:text-foreground",
      children: i < value ? "\u2605" : "\u2606"
    },
    i
  )) });
}
function ModalActionable({
  open,
  onOpenChange,
  icon,
  title,
  subheader,
  fields,
  note,
  cancelLabel,
  submitLabel,
  onCancel,
  onSubmit
}) {
  const [values, setValues] = React2.useState(
    () => Object.fromEntries(fields.map((f) => [f.id, f.type === "rating" ? 0 : ""]))
  );
  const handleChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };
  return /* @__PURE__ */ jsxs(
    ModalBase,
    {
      open,
      onOpenChange,
      icon,
      title,
      subheader,
      cancelLabel,
      submitLabel,
      onCancel,
      onSubmit: () => onSubmit?.(values),
      children: [
        fields.map((field) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
          field.type === "input" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: field.id, children: [
                field.label,
                field.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-0.5", children: "*" })
              ] }),
              field.hint && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: field.hint })
            ] }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: field.id,
                placeholder: field.placeholder,
                value: values[field.id],
                onChange: (e) => handleChange(field.id, e.target.value),
                required: field.required
              }
            )
          ] }),
          field.type === "rating" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              field.label,
              field.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              StarRating,
              {
                value: values[field.id],
                max: field.maxStars ?? 5,
                onChange: (val) => handleChange(field.id, val)
              }
            )
          ] }),
          field.type === "textarea" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: field.id, children: [
                field.label,
                field.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-0.5", children: "*" })
              ] }),
              field.maxLength && /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
                values[field.id].length,
                "/",
                field.maxLength
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              TextArea,
              {
                id: field.id,
                placeholder: field.placeholder,
                value: values[field.id],
                onChange: (e) => handleChange(field.id, e.target.value),
                required: field.required,
                maxLength: field.maxLength,
                rows: 4
              }
            )
          ] })
        ] }, field.id)),
        note && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: note })
      ]
    }
  );
}
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Root,
    {
      "data-slot": "accordion",
      className: cn("flex w-full flex-col", className),
      ...props
    }
  );
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Item,
    {
      "data-slot": "accordion-item",
      className: cn("not-last:border-b", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Accordion$1.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    Accordion$1.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Plus, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ jsx(Minus, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
            className
          ),
          children
        }
      )
    }
  );
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Checkbox$1.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Checkbox$1.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
          children: /* @__PURE__ */ jsx(
            CheckIcon,
            {}
          )
        }
      )
    }
  );
}
function AccordionFilter({
  items,
  selected = {},
  onSelectionChange
}) {
  return /* @__PURE__ */ jsx(Accordion, { type: "multiple", className: "max-w-[249px] ", children: items.map((item) => /* @__PURE__ */ jsxs(AccordionItem, { value: item.id, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-sm font-medium p-4", children: item.label }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 pt-1", children: item.options.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          id: `${item.id}-${option.id}`,
          checked: selected[item.id]?.includes(option.id) ?? false,
          onCheckedChange: (checked) => onSelectionChange?.(item.id, option.id, checked)
        }
      ),
      /* @__PURE__ */ jsx(
        Label,
        {
          htmlFor: `${item.id}-${option.id}`,
          className: "text-sm font-normal cursor-pointer",
          children: option.label
        }
      )
    ] }, option.id)) }) })
  ] }, item.id)) });
}
function AccordionModule({
  items,
  type = "single"
}) {
  return /* @__PURE__ */ jsx(Accordion, { type, collapsible: true, className: "w-full", children: items.map((item) => /* @__PURE__ */ jsxs(AccordionItem, { value: item.id, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      item.icon && /* @__PURE__ */ jsx("div", { className: "shrink-0 text-muted-foreground", children: item.icon }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-0.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.title }),
        item.subtitle && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: item.subtitle })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pt-2 pb-1", children: [
      item.content.title && /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.content.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.content.description }),
      item.content.link && /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.content.link.href,
          className: "text-sm text-primary flex items-center gap-1 hover:underline",
          children: [
            item.content.link.label,
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "\u2192" })
          ]
        }
      )
    ] }) })
  ] }, item.id)) });
}
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroup$1.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid w-full gap-2", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroup$1.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        RadioGroup$1.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex size-4 items-center justify-center",
          children: /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" })
        }
      )
    }
  );
}
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Switch$1.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Switch$1.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
        }
      )
    }
  );
}
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Progress$1.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Progress$1.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "size-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
function MediaCard({
  type,
  src,
  imageAlt,
  poster,
  name,
  description,
  badge,
  isEmpty = false,
  emptyMessage = "No se ha encontrado ning\xFAn testimonio",
  onClick
}) {
  if (isEmpty) {
    return /* @__PURE__ */ jsx(
      Card,
      {
        className: cn(
          "relative overflow-hidden cursor-pointer",
          type === "testimonial-s" && "w-[331px] h-[303px]"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-2 p-4 text-center", children: [
          /* @__PURE__ */ jsx(MessageSquareIcon, { size: 24, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: emptyMessage })
        ] })
      }
    );
  }
  if (type === "testimonial") {
    return /* @__PURE__ */ jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[324px] h-[344px] cursor-pointer group",
        onClick,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 transition-transform group-hover:scale-105",
              style: {
                background: `linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%), url(${src}) lightgray 50% / cover no-repeat`
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 flex justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white text-xs font-medium truncate", children: name }),
              description && /* @__PURE__ */ jsx("p", { className: "text-white/70 text-xs truncate", children: description })
            ] }),
            badge && /* @__PURE__ */ jsx(Button, { children: badge.label })
          ] })
        ]
      }
    );
  }
  if (type === "testimonial-l") {
    return /* @__PURE__ */ jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[331px] h-[548px] cursor-pointer group p-0",
        onClick,
        children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              src,
              poster,
              className: "absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105",
              muted: true,
              loop: true,
              playsInline: true
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%)"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-white/90 rounded-full p-2 group-hover:bg-white transition-colors", children: /* @__PURE__ */ jsx(PlayIcon, { size: 24, className: "text-foreground" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ jsx("p", { className: "text-white text-xs font-medium truncate", children: name }) })
        ]
      }
    );
  }
  if (type === "testimonial-s") {
    return /* @__PURE__ */ jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[331px] h-[303px] cursor-pointer group p-0",
        onClick,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: imageAlt ?? name,
              className: "w-full h-full object-cover transition-transform group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 flex flex-col gap-1", children: [
            name && /* @__PURE__ */ jsx("p", { className: "text-white text-xs font-medium truncate", children: name }),
            description && /* @__PURE__ */ jsx("p", { className: "text-white/80 text-xs line-clamp-2", children: description }),
            badge && /* @__PURE__ */ jsx(Button, { children: badge.label })
          ] })
        ]
      }
    );
  }
}
function CategoryCard({
  title,
  description,
  src,
  poster,
  ctaLabel = "Explorar ofertas",
  onCtaClick,
  className
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden cursor-pointer group p-0 w-[680px] h-[433px]", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        src,
        poster,
        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
        muted: true,
        loop: true,
        playsInline: true
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.00) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col justify-center p-6 gap-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-2xl leading-tight", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm", children: description }),
      ctaLabel && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "secondary",
          size: "sm",
          onClick: onCtaClick,
          className: "bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm",
          children: [
            ctaLabel,
            " \u2192"
          ]
        }
      ) })
    ] })
  ] });
}
function Link({
  variant = "text",
  href,
  children,
  disabled = false,
  external = false,
  icon,
  iconPosition = "right",
  onClick,
  className
}) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    icon && iconPosition === "left" && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
    children,
    icon && iconPosition === "right" && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon })
  ] });
  if (variant === "text") {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: disabled ? void 0 : href,
        onClick: disabled ? void 0 : onClick,
        "aria-disabled": disabled,
        className: cn(
          "inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline transition-colors",
          disabled && "opacity-50 pointer-events-none",
          className
        ),
        ...externalProps,
        children: content
      }
    );
  }
  if (variant === "button") {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: disabled ? void 0 : href,
        onClick: disabled ? void 0 : onClick,
        "aria-disabled": disabled,
        className: cn(
          "inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:underline",
          disabled && "opacity-50 pointer-events-none",
          className
        ),
        ...externalProps,
        children: content
      }
    );
  }
}
function ChatButton({
  label,
  badge,
  onClick,
  className,
  icon
}) {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-0 z-50", children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      style: {
        width: "85px",
        height: "114px",
        padding: "12px 8px",
        borderRadius: "4px 0 0 4px",
        background: "#F4F4F5",
        boxShadow: "0 4px 10.7px 0 rgba(0, 0, 0, 0.15)"
      },
      className: cn(
        "relative flex flex-col items-center justify-center gap-2",
        "hover:brightness-95 transition-all",
        className
      ),
      "aria-label": label ?? "Abrir chat",
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
        label && /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary text-center leading-tight", children: label }),
        badge !== void 0 && badge > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 -left-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-white text-xs font-medium", children: badge > 99 ? "99+" : badge })
      ]
    }
  ) });
}
function IconButton({
  icon,
  size = "m",
  disabled = false,
  onClick,
  "aria-label": ariaLabel,
  className
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: disabled ? void 0 : onClick,
      disabled,
      "aria-label": ariaLabel,
      className: cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-background transition-colors",
        "hover:bg-muted",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === "s" && "w-6 h-6",
        size === "m" && "w-8 h-8",
        className
      ),
      children: icon
    }
  );
}
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Image,
    {
      "data-slot": "avatar-image",
      className: cn(
        "aspect-square size-full rounded-full object-cover",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function UserImage({
  image,
  fallback
}) {
  return /* @__PURE__ */ jsxs(Avatar, { children: [
    /* @__PURE__ */ jsx(AvatarImage, { src: image, alt: "@shadcn" }),
    /* @__PURE__ */ jsx(AvatarFallback, { children: fallback })
  ] });
}
function AnnouncementBanner({ message, onClose }) {
  const [visible, setVisible] = React2.useState(true);
  if (!visible) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "banner",
      className: "w-full flex items-center justify-center gap-3 px-4 py-2 bg-muted text-sm text-muted-foreground border-b",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-center flex-1 line-clamp-1", children: message }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setVisible(false);
              onClose?.();
            },
            "aria-label": "Cerrar anuncio",
            className: "shrink-0 rounded hover:text-foreground transition-colors p-0.5",
            children: /* @__PURE__ */ jsx(X, { size: 14 })
          }
        )
      ]
    }
  );
}
function NavItem({ item }) {
  if (item.children?.length) {
    return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1",
          children: [
            item.label,
            /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "transition-transform group-hover:rotate-180" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full pt-1 hidden group-hover:block z-50", children: /* @__PURE__ */ jsx("div", { className: "min-w-40 rounded-md border bg-popover shadow-md py-1", children: item.children.map((child) => /* @__PURE__ */ jsx(
        Link,
        {
          variant: "button",
          href: child.href,
          onClick: child.onClick,
          className: "block px-4 py-2 hover:bg-accent",
          children: child.label
        },
        child.label
      )) }) })
    ] });
  }
  return /* @__PURE__ */ jsx(Link, { variant: "button", href: item.href, onClick: item.onClick, children: item.label });
}
function Topbar({
  variant = "default",
  logo,
  appName,
  appImage,
  navItems,
  nav,
  actions,
  onLogin,
  onRegister,
  loginLabel = "Iniciar sesi\xF3n",
  registerLabel = "Reg\xEDstrate",
  user,
  onUserMenuClick,
  showCartButton = false,
  onCartClick,
  cartCount,
  showNotificationsButton = false,
  onNotificationsClick,
  notificationsCount,
  searchPlaceholder = "Hablemos de tus metas: cu\xE9ntame, \xBFqu\xE9 te gustar\xEDa aprender hoy?",
  onSearch,
  onSearchClose,
  announcement,
  allowSidebarForMobile = true,
  onMobileMenuClick,
  lang = "es",
  className
}) {
  const [searchValue, setSearchValue] = React2.useState("");
  const logoNode = logo ?? (appImage ? /* @__PURE__ */ jsx("img", { src: appImage, alt: appName ?? "Logo", className: "h-7 w-auto" }) : appName ? /* @__PURE__ */ jsx("span", { className: "font-semibold text-base tracking-tight", children: appName }) : null);
  const iconBtn = cn(
    "relative flex items-center justify-center rounded-md p-2",
    "text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
  );
  const Badge2 = ({ count }) => count != null ? /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px]  text-white ring-2 ring-background", children: count > 9 ? "9+" : count }) : null;
  return /* @__PURE__ */ jsxs("div", { className: "w-full", lang, children: [
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: cn(
          "w-full flex items-center px-4 h-14 border-b bg-background",
          variant === "search" ? "justify-center" : "justify-between",
          className
        ),
        children: [
          variant === "search" && /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center gap-2", children: /* @__PURE__ */ jsx(
            TextInput,
            {
              icon: /* @__PURE__ */ jsx(Search, { size: 16, className: "shrink-0 text-muted-foreground" }),
              placeholder: searchPlaceholder,
              value: searchValue,
              onChange: (e) => {
                setSearchValue(e.target.value);
                onSearch?.(e.target.value);
              }
            }
          ) }),
          variant !== "search" && /* @__PURE__ */ jsxs(Fragment, { children: [
            logoNode && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: logoNode }),
            /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1 mx-4 flex-1", children: nav ?? navItems?.map((item) => /* @__PURE__ */ jsx(NavItem, { item }, item.label)) }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 md:hidden" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              actions,
              showNotificationsButton && /* @__PURE__ */ jsxs("button", { type: "button", onClick: onNotificationsClick, className: cn(iconBtn, "hidden md:flex"), "aria-label": "Notificaciones", children: [
                /* @__PURE__ */ jsx(Bell, { size: 18 }),
                /* @__PURE__ */ jsx(Badge2, { count: notificationsCount })
              ] }),
              showCartButton && /* @__PURE__ */ jsxs("button", { type: "button", onClick: onCartClick, className: iconBtn, "aria-label": "Carrito", children: [
                /* @__PURE__ */ jsx(ShoppingCart, { size: 18 }),
                /* @__PURE__ */ jsx(Badge2, { count: cartCount })
              ] }),
              variant === "default" && (onLogin || onRegister) && /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 ml-1", children: [
                onLogin && /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onLogin,
                    className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1.5",
                    children: loginLabel
                  }
                ),
                onRegister && /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onRegister,
                    className: "text-sm font-medium rounded-md bg-primary px-4 py-1.5 text-primary-foreground hover:bg-primary/90 transition-colors",
                    children: registerLabel
                  }
                )
              ] }),
              variant === "logged-in" && /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: onUserMenuClick,
                  className: "flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent transition-colors",
                  "aria-label": "Men\xFA de usuario",
                  children: [
                    /* @__PURE__ */ jsx(
                      UserImage,
                      {
                        image: user?.avatarUrl
                      }
                    ),
                    user?.name && /* @__PURE__ */ jsx("span", { className: "hidden md:block text-sm font-medium max-w-[120px] truncate", children: user.name })
                  ]
                }
              ),
              allowSidebarForMobile && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onMobileMenuClick,
                  className: cn(iconBtn, "md:hidden"),
                  "aria-label": "Abrir men\xFA",
                  children: /* @__PURE__ */ jsx(Menu, { size: 20 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    announcement && /* @__PURE__ */ jsx(AnnouncementBanner, { message: announcement.message, onClose: announcement.onClose })
  ] });
}

export { AccordionFilter, AccordionModule, Button, CardCourse, CategoryCard, ChatButton, Checkbox, IconButton, Link, MediaCard, ModalActionable, ModalBase, ModalInfo, Progress, RadioGroup, RadioGroupItem, Switch, TextArea, TextInput, Topbar, UserImage, buttonVariants };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map