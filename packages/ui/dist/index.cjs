'use strict';

var chunkRXYRFJ65_cjs = require('./chunk-RXYRFJ65.cjs');
var classVarianceAuthority = require('class-variance-authority');
var radixUi = require('radix-ui');
var jsxRuntime = require('react/jsx-runtime');
var lucideReact = require('lucide-react');
var React4 = require('react');

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

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);

var buttonVariants = classVarianceAuthority.cva(
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
  const Comp = asChild ? radixUi.Slot.Root : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: chunkRXYRFJ65_cjs.cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: chunkRXYRFJ65_cjs.cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-2xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: chunkRXYRFJ65_cjs.cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function BrandButton({ src, alt, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "brand-button",
      className: chunkRXYRFJ65_cjs.cn(
        "absolute bottom-2 right-4 flex h-12 w-12 items-center justify-center",
        "rounded-xl border border-[var(--ds-color-neutral-600)] bg-white p-2",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      onClick: handleClick,
      disabled,
      "aria-label": isFavorite ? "Quitar de favoritos" : "Agregar a favoritos",
      className: chunkRXYRFJ65_cjs.cn(
        "flex items-center justify-center transition-colors",
        disabled && "opacity-40 cursor-not-allowed"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.HeartIcon,
        {
          size: 24,
          className: isFavorite ? "text-red-500 fill-red-500" : "text-white fill-white"
        }
      )
    }
  );
}
function RatingBadge({ rating, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "rating-badge",
      className: chunkRXYRFJ65_cjs.cn(
        "absolute top-0 right-0 inline-flex items-center gap-2 px-4 py-2",
        "rounded-tr-2xl rounded-bl-2xl bg-blue-800 text-white",
        "font-poppins text-sm font-bold leading-snug",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "shrink-0",
            children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: rating.toFixed(1) })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: chunkRXYRFJ65_cjs.cn(
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
var buttonVariants2 = classVarianceAuthority.cva(
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
  const Comp = asChild ? radixUi.Slot.Root : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: chunkRXYRFJ65_cjs.cn(buttonVariants2({ variant, size, className })),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "p-0 overflow-hidden max-w-[325px]", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative ", children: [
      type === "transactional" && /* @__PURE__ */ jsxRuntime.jsx("img", { src: image, alt: title, className: "w-full object-cover h-[140px]" }),
      type === "evaluative" && /* @__PURE__ */ jsxRuntime.jsx("img", { src: image, alt: title, className: "w-full object-cover" }),
      type === "transactional" && badge && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0", children: /* @__PURE__ */ jsxRuntime.jsx(Badge, { icon: iconBadge, label: badge, variant: "discount" }) }),
      type === "transactional" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntime.jsx(
        FavoriteButton,
        {
          isAuthenticated,
          isFavorite,
          onFavoriteToggle,
          onAuthRequired
        }
      ) }),
      type === "evaluative" && /* @__PURE__ */ jsxRuntime.jsx(RatingBadge, { rating }),
      institution && /* @__PURE__ */ jsxRuntime.jsx(BrandButton, { src: institution, alt: "Instituci\xF3n" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "flex flex-col gap-3 pb-4 pr-4 pl-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium text-md py-4", children: title }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: category }),
      type === "transactional" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-medium", children: [
        "\u2605 ",
        rating
      ] }) }),
      type === "transactional" && description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground line-clamp-3", children: description }),
      type === "evaluative" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground", children: [
        metadata?.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [
          item.icon,
          item.label
        ] }, index)),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center justify-end font-semibold text-foreground text-base col-span-1", children: [
          "$",
          price.toLocaleString("es-MX"),
          " MXN"
        ] })
      ] }),
      type === "transactional" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: metadata?.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [
          item.icon,
          item.label
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold text-base", children: [
            "$",
            price.toLocaleString("es-MX"),
            " MXN"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { size: "sm", onClick: onAddToCart, children: cta })
        ] })
      ] })
    ] })
  ] });
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      radixUi.Dialog.Content,
      {
        "data-slot": "dialog-content",
        className: chunkRXYRFJ65_cjs.cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.XIcon,
                  {}
                ),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: chunkRXYRFJ65_cjs.cn("flex flex-col gap-2", className),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: chunkRXYRFJ65_cjs.cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Title,
    {
      "data-slot": "dialog-title",
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Description,
    {
      "data-slot": "dialog-description",
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(
    DialogContent,
    {
      className: "p-8 gap-6",
      style: { maxWidth },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: title }),
            subheader && /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: subheader })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-4", children }),
        showFooter && /* @__PURE__ */ jsxRuntime.jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { type: "button", variant: "outline", onClick: handleCancel, children: cancelLabel }),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { type: "button", onClick: onSubmit, children: submitLabel })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Separator.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4", children: [
          image && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0 w-48", children: /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: image,
              alt: imageAlt ?? title,
              className: "w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-3", children: paragraphs.map((paragraph, index) => /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: paragraph }, index)) })
        ] }),
        note && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: note }),
        footer && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3 rounded-lg border p-3", children: [
            footer.icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0 text-muted-foreground", children: footer.icon }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: footer.title }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: footer.description })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: chunkRXYRFJ65_cjs.cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function TextInput({
  id,
  name,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  icon,
  iconPosition = "left",
  disabled = false,
  readOnly = false,
  error = false,
  errorMessage,
  hint,
  label,
  required = false,
  maxLength,
  autoComplete,
  autoFocus,
  className
}) {
  const innerId = React4__namespace.useId();
  const inputId = id ?? innerId;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: chunkRXYRFJ65_cjs.cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: inputId, className: "text-sm font-medium", children: [
      label,
      required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-0.5", "aria-hidden": "true", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center", children: [
      icon && iconPosition === "left" && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-3 text-muted-foreground shrink-0 pointer-events-none", children: icon }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        {
          id: inputId,
          name,
          type,
          placeholder,
          value,
          defaultValue,
          onChange,
          onBlur,
          onFocus,
          disabled,
          readOnly,
          maxLength,
          autoComplete,
          autoFocus,
          required,
          "aria-required": required,
          "aria-invalid": error,
          "aria-describedby": error && errorMessage ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
          className: chunkRXYRFJ65_cjs.cn(
            icon && iconPosition === "left" && "pl-9",
            icon && iconPosition === "right" && "pr-9",
            error && "border-destructive focus-visible:ring-destructive/20",
            readOnly && "bg-muted cursor-default"
          )
        }
      ),
      error ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-3 text-destructive shrink-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircle, { size: 16 }) }) : icon && iconPosition === "right" ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-3 text-muted-foreground shrink-0 pointer-events-none", children: icon }) : null
    ] }),
    error && errorMessage ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-error`, className: "text-xs text-destructive", role: "alert", children: errorMessage }) : hint ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-hint`, className: "text-xs text-muted-foreground", children: hint }) : null
  ] });
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: chunkRXYRFJ65_cjs.cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function TextArea({
  id,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  error = false,
  errorMessage,
  hint,
  label,
  required = false,
  maxLength,
  showCount = false,
  rows = 4,
  resize = "vertical",
  autoFocus = false,
  autoComplete,
  className
}) {
  const innerId = React4__namespace.useId();
  const inputId = id ?? innerId;
  const currentLength = value?.length ?? 0;
  const resizeClass = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize"
  }[resize];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: chunkRXYRFJ65_cjs.cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: inputId, className: "text-sm font-medium", children: [
      label,
      required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-0.5", "aria-hidden": "true", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Textarea,
        {
          id: inputId,
          name,
          placeholder,
          value,
          defaultValue,
          onChange,
          onBlur,
          onFocus,
          disabled,
          readOnly,
          maxLength,
          rows,
          autoFocus,
          autoComplete,
          required,
          "aria-required": required,
          "aria-invalid": error,
          "aria-describedby": error && errorMessage ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
          className: chunkRXYRFJ65_cjs.cn(
            resizeClass,
            error && "border-destructive focus-visible:ring-destructive/20 pr-8",
            readOnly && "bg-muted cursor-default"
          )
        }
      ),
      error && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute top-2.5 right-2.5 text-destructive pointer-events-none", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircleIcon, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { children: error && errorMessage ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-error`, className: "text-xs text-destructive", role: "alert", children: errorMessage }) : hint ? /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-hint`, className: "text-xs text-muted-foreground", children: hint }) : null }),
      showCount && maxLength && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: chunkRXYRFJ65_cjs.cn(
        "text-xs text-muted-foreground shrink-0 ml-auto",
        currentLength >= maxLength && "text-destructive"
      ), children: [
        currentLength,
        "/",
        maxLength
      ] })
    ] })
  ] });
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Label.Root,
    {
      "data-slot": "label",
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-2 justify-center", children: Array.from({ length: max }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
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
  const [values, setValues] = React4__namespace.useState(
    () => Object.fromEntries(fields.map((f) => [f.id, f.type === "rating" ? 0 : ""]))
  );
  const handleChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        fields.map((field) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          field.type === "input" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsxs(Label, { htmlFor: field.id, children: [
                field.label,
                field.required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-0.5", children: "*" })
              ] }),
              field.hint && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: field.hint })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
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
          field.type === "rating" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(Label, { children: [
              field.label,
              field.required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              StarRating,
              {
                value: values[field.id],
                max: field.maxStars ?? 5,
                onChange: (val) => handleChange(field.id, val)
              }
            )
          ] }),
          field.type === "textarea" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntime.jsxs(Label, { htmlFor: field.id, children: [
                field.label,
                field.required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-0.5", children: "*" })
              ] }),
              field.maxLength && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                values[field.id].length,
                "/",
                field.maxLength
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
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
        note && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: note })
      ]
    }
  );
}
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Accordion.Root,
    {
      "data-slot": "accordion",
      className: chunkRXYRFJ65_cjs.cn("flex w-full flex-col", className),
      ...props
    }
  );
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Accordion.Item,
    {
      "data-slot": "accordion-item",
      className: chunkRXYRFJ65_cjs.cn("not-last:border-b", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Accordion.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Accordion.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: chunkRXYRFJ65_cjs.cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Plus, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Accordion.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: chunkRXYRFJ65_cjs.cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
          children: /* @__PURE__ */ jsxRuntime.jsx(
            lucideReact.CheckIcon,
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
  return /* @__PURE__ */ jsxRuntime.jsx(Accordion, { type: "multiple", className: "max-w-[249px] ", children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(AccordionItem, { value: item.id, children: [
    /* @__PURE__ */ jsxRuntime.jsx(AccordionTrigger, { className: "text-sm font-medium p-4", children: item.label }),
    /* @__PURE__ */ jsxRuntime.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-3 pt-1", children: item.options.map((option) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Checkbox,
        {
          id: `${item.id}-${option.id}`,
          checked: selected[item.id]?.includes(option.id) ?? false,
          onCheckedChange: (checked) => onSelectionChange?.(item.id, option.id, checked)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(Accordion, { type, collapsible: true, className: "w-full", children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(AccordionItem, { value: item.id, children: [
    /* @__PURE__ */ jsxRuntime.jsx(AccordionTrigger, { className: "hover:no-underline", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
      item.icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0 text-muted-foreground", children: item.icon }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-start gap-0.5", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: item.title }),
        item.subtitle && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: item.subtitle })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-3 pt-2 pb-1", children: [
      item.content.title && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: item.content.title }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: item.content.description }),
      item.content.link && /* @__PURE__ */ jsxRuntime.jsxs(
        "a",
        {
          href: item.content.link.href,
          className: "text-sm text-primary flex items-center gap-1 hover:underline",
          children: [
            item.content.link.label,
            /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": true, children: "\u2192" })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.RadioGroup.Root,
    {
      "data-slot": "radio-group",
      className: chunkRXYRFJ65_cjs.cn("grid w-full gap-2", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.RadioGroup.Item,
    {
      "data-slot": "radio-group-item",
      className: chunkRXYRFJ65_cjs.cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.RadioGroup.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex size-4 items-center justify-center",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Switch.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: chunkRXYRFJ65_cjs.cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Switch.Thumb,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Progress.Root,
    {
      "data-slot": "progress",
      className: chunkRXYRFJ65_cjs.cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Progress.Indicator,
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        className: chunkRXYRFJ65_cjs.cn(
          "relative overflow-hidden cursor-pointer",
          type === "testimonial-s" && "w-[331px] h-[303px]"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-2 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessageSquareIcon, { size: 24, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: emptyMessage })
        ] })
      }
    );
  }
  if (type === "testimonial") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[324px] h-[344px] cursor-pointer group",
        onClick,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 transition-transform group-hover:scale-105",
              style: {
                background: `linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%), url(${src}) lightgray 50% / cover no-repeat`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 flex justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white text-xs font-medium truncate", children: name }),
              description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white/70 text-xs truncate", children: description })
            ] }),
            badge && /* @__PURE__ */ jsxRuntime.jsx(Button, { children: badge.label })
          ] })
        ]
      }
    );
  }
  if (type === "testimonial-l") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[331px] h-[548px] cursor-pointer group p-0",
        onClick,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white/90 rounded-full p-2 group-hover:bg-white transition-colors", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PlayIcon, { size: 24, className: "text-foreground" }) }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white text-xs font-medium truncate", children: name }) })
        ]
      }
    );
  }
  if (type === "testimonial-s") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Card,
      {
        className: "relative overflow-hidden w-[331px] h-[303px] cursor-pointer group p-0",
        onClick,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src,
              alt: imageAlt ?? name,
              className: "w-full h-full object-cover transition-transform group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 flex flex-col gap-1", children: [
            name && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white text-xs font-medium truncate", children: name }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white/80 text-xs line-clamp-2", children: description }),
            badge && /* @__PURE__ */ jsxRuntime.jsx(Button, { children: badge.label })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "relative overflow-hidden cursor-pointer group p-0 w-[680px] h-[433px]", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.00) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative h-full flex flex-col justify-center p-6 gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-white font-bold text-2xl leading-tight", children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white/80 text-sm", children: description }),
      ctaLabel && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntime.jsxs(
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
var linkVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-1 text-sm transition-colors",
  {
    variants: {
      variant: {
        text: "text-primary underline-offset-4 hover:underline",
        button: "font-medium text-foreground hover:underline"
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      variant: "text",
      disabled: false
    }
  }
);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    {
      href: disabled ? void 0 : href,
      onClick: disabled ? void 0 : onClick,
      "aria-disabled": disabled ?? void 0,
      target: external ? "_blank" : void 0,
      rel: external ? "noopener noreferrer" : void 0,
      className: chunkRXYRFJ65_cjs.cn(linkVariants({ variant, disabled }), className),
      children: [
        icon && iconPosition === "left" && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: icon }),
        children,
        icon && iconPosition === "right" && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: icon })
      ]
    }
  );
}
function ChatButton({
  label,
  badge,
  onClick,
  className,
  icon
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed bottom-6 right-0 z-50", children: /* @__PURE__ */ jsxRuntime.jsxs(
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
      className: chunkRXYRFJ65_cjs.cn(
        "relative flex flex-col items-center justify-center gap-2",
        "hover:brightness-95 transition-all",
        className
      ),
      "aria-label": label ?? "Abrir chat",
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: icon }),
        label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-semibold text-primary text-center leading-tight", children: label }),
        badge !== void 0 && badge > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute -top-1.5 -left-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-white text-xs font-medium", children: badge > 99 ? "99+" : badge })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      onClick: disabled ? void 0 : onClick,
      disabled,
      "aria-label": ariaLabel,
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Avatar.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Avatar.Image,
    {
      "data-slot": "avatar-image",
      className: chunkRXYRFJ65_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Avatar.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: chunkRXYRFJ65_cjs.cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
var userImageVariants = classVarianceAuthority.cva("", {
  variants: {
    size: {
      sm: "[&>img]:h-8 [&>img]:w-8 h-8 w-8",
      md: "[&>img]:h-10 [&>img]:w-10 h-10 w-10",
      lg: "[&>img]:h-14 [&>img]:w-14 h-14 w-14",
      xl: "[&>img]:h-20 [&>img]:w-20 h-20 w-20"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function UserImage({
  image,
  fallback,
  alt = "Avatar de usuario",
  size,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Avatar, { className: chunkRXYRFJ65_cjs.cn(userImageVariants({ size }), className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { src: image, alt }),
    /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { children: fallback ?? /* @__PURE__ */ jsxRuntime.jsx(DefaultFallback, {}) })
  ] });
}
function DefaultFallback() {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "h-[60%] w-[60%] text-muted-foreground",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" })
    }
  );
}
function AnnouncementBanner({ message, onClose }) {
  const [visible, setVisible] = React4__namespace.useState(true);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      role: "banner",
      className: "w-full flex items-center justify-center gap-3 px-4 py-2 bg-muted text-sm text-muted-foreground border-b",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-center flex-1 line-clamp-1", children: message }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setVisible(false);
              onClose?.();
            },
            "aria-label": "Cerrar anuncio",
            className: "shrink-0 rounded hover:text-foreground transition-colors p-0.5",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { size: 14 })
          }
        )
      ]
    }
  );
}
function NavItem({ item }) {
  if (item.children?.length) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1",
          children: [
            item.label,
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { size: 14, className: "transition-transform group-hover:rotate-180" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-0 top-full pt-1 hidden group-hover:block z-50", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "min-w-40 rounded-md border bg-popover shadow-md py-1", children: item.children.map((child) => /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(Link, { variant: "button", href: item.href, onClick: item.onClick, children: item.label });
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
  const [searchValue, setSearchValue] = React4__namespace.useState("");
  const logoNode = logo ?? (appImage ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: appImage, alt: appName ?? "Logo", className: "h-7 w-auto" }) : appName ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-base tracking-tight", children: appName }) : null);
  const iconBtn = chunkRXYRFJ65_cjs.cn(
    "relative flex items-center justify-center rounded-md p-2",
    "text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
  );
  const Badge2 = ({ count }) => count != null ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px]  text-white ring-2 ring-background", children: count > 9 ? "9+" : count }) : null;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", lang, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "header",
      {
        className: chunkRXYRFJ65_cjs.cn(
          "w-full flex items-center px-4 h-14 border-b bg-background",
          variant === "search" ? "justify-center" : "justify-between",
          className
        ),
        children: [
          variant === "search" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntime.jsx(
            TextInput,
            {
              icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { size: 16, className: "shrink-0 text-muted-foreground" }),
              placeholder: searchPlaceholder,
              value: searchValue,
              onChange: (e) => {
                setSearchValue(e.target.value);
                onSearch?.(e.target.value);
              }
            }
          ) }),
          variant !== "search" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            logoNode && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0", children: logoNode }),
            /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "hidden md:flex items-center gap-1 mx-4 flex-1", children: nav ?? navItems?.map((item) => /* @__PURE__ */ jsxRuntime.jsx(NavItem, { item }, item.label)) }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 md:hidden" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
              actions,
              showNotificationsButton && /* @__PURE__ */ jsxRuntime.jsxs("button", { type: "button", onClick: onNotificationsClick, className: chunkRXYRFJ65_cjs.cn(iconBtn, "hidden md:flex"), "aria-label": "Notificaciones", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Bell, { size: 18 }),
                /* @__PURE__ */ jsxRuntime.jsx(Badge2, { count: notificationsCount })
              ] }),
              showCartButton && /* @__PURE__ */ jsxRuntime.jsxs("button", { type: "button", onClick: onCartClick, className: iconBtn, "aria-label": "Carrito", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ShoppingCart, { size: 18 }),
                /* @__PURE__ */ jsxRuntime.jsx(Badge2, { count: cartCount })
              ] }),
              variant === "default" && (onLogin || onRegister) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "hidden md:flex items-center gap-2 ml-1", children: [
                onLogin && /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onLogin,
                    className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1.5",
                    children: loginLabel
                  }
                ),
                onRegister && /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onRegister,
                    className: "text-sm font-medium rounded-md bg-primary px-4 py-1.5 text-primary-foreground hover:bg-primary/90 transition-colors",
                    children: registerLabel
                  }
                )
              ] }),
              variant === "logged-in" && /* @__PURE__ */ jsxRuntime.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onUserMenuClick,
                  className: "flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent transition-colors",
                  "aria-label": "Men\xFA de usuario",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      UserImage,
                      {
                        image: user?.avatarUrl
                      }
                    ),
                    user?.name && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden md:block text-sm font-medium max-w-[120px] truncate", children: user.name })
                  ]
                }
              ),
              allowSidebarForMobile && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onMobileMenuClick,
                  className: chunkRXYRFJ65_cjs.cn(iconBtn, "md:hidden"),
                  "aria-label": "Abrir men\xFA",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { size: 20 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    announcement && /* @__PURE__ */ jsxRuntime.jsx(AnnouncementBanner, { message: announcement.message, onClose: announcement.onClose })
  ] });
}

exports.AccordionFilter = AccordionFilter;
exports.AccordionModule = AccordionModule;
exports.Button = Button;
exports.CardCourse = CardCourse;
exports.CategoryCard = CategoryCard;
exports.ChatButton = ChatButton;
exports.Checkbox = Checkbox;
exports.IconButton = IconButton;
exports.Link = Link;
exports.MediaCard = MediaCard;
exports.ModalActionable = ModalActionable;
exports.ModalBase = ModalBase;
exports.ModalInfo = ModalInfo;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.Switch = Switch;
exports.TextArea = TextArea;
exports.TextInput = TextInput;
exports.Topbar = Topbar;
exports.UserImage = UserImage;
exports.buttonVariants = buttonVariants;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map