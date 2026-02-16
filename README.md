# Core Frontend

Next.js frontend project with component-driven architecture and consistent naming conventions.

## Project Structure

```
app/
├── (auth)/              # Auth routes (sign-in, sign-up, verify)
│   ├── sign-in/
│   │   ├── _module/    # Module components (internal use)
│   │   └── page.tsx
│   └── (other auth routes)
├── (root)/             # Main app routes
│   └── (homepage)/
│       ├── _module/    # Page-specific components
│       └── page.tsx
└── api/                # API routes
```

## Module System (\_module)

Pages can extract their components into a `_module` folder to keep `page.tsx` clean.

### How It Works

1. **page.tsx** - The route entry point, usually just renders the module index
2. **\_module/** - Contains all components specific to that page

### Example

```typescript
// app/(root)/(homepage)/page.tsx
import Index from "./_module";

export default function Page() {
  return <Index />;
}

// app/(root)/(homepage)/_module/index.tsx
import DemoForm from "./demo-form";

export default function Index() {
  return <DemoForm />;
}
```

## Component Architecture

This project follows a **semantic prefix system** for component organization:

### Component Categories

| Prefix | Domain  | Purpose                                                  | Examples                            |
| ------ | ------- | -------------------------------------------------------- | ----------------------------------- |
| **F**  | Form    | Form components that integrate with @tanstack/react-form | `FInput`, `FSelect`, `FButton`      |
| **UI** | Base UI | Reusable UI components that can be used anywhere         | `UIButton`, `UIDialog`, `UISelect`  |
| **L**  | Layout  | Layout and provider components                           | `LClientProvider`, `LQueryProvider` |
| **Ov** | Overlay | Modal/overlay components                                 | `OvDialog`, `OvDrawer`, `OvForm`    |
| **C**  | Custom  | Complex business-specific components                     | `CDataGrid`, `CChart`               |

### Directory Structure

```
components/
├── ui/                    # Base UI components (UI* prefix)
├── form/                  # Form components (F* prefix)
│   ├── input/             # Form input components
│   ├── select/            # Form select components
│   ├── hooks/             # Form-specific hooks
│   └── types.ts           # Form type definitions
├── overlay/               # Overlay components (Ov* prefix)
├── layout/                # Layout components (L* prefix)
└── custom/                # Custom business components (C* prefix)
```

### Import Examples

```typescript
import { UIButton, UIDialog } from "@/components/ui";
import { FInput, FSelect } from "@/components/form";
import { OvWrapper, OvForm } from "@/components/overlay";
import { LClientProvider } from "@/components/layout";
```

## Form Components

### Creating a New Form Field

1. Create component in appropriate folder:

   - Text inputs: `components/form/input/`
   - Selects: `components/form/select/`

2. Use the `useFieldState` hook:

```typescript
import { useFieldState } from '../hooks/useFieldState';

export default function FMyInput({ label, ...props }) {
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
      <input
        id={field.name}
        value={field.state.value ?? ''}
        onChange={(e) => field.setValue(e.target.value)}
        onBlur={field.handleBlur}
        {...props}
      />
    </InputWrapper>
  );
}
```

3. Register in `components/form/index.ts`:

```typescript
export const { useAppForm } = createFormHook({
  fieldComponents: {
    FMyInput, // Add here
    // ...other components
  },
});
```

## Pre Commit Structure

- run format (prettier)
- staged again
- check is there any `use-client` inside `page.tsx` or `layout.tsx`
- check file .tsx max lines length < 300
- check if any big file accidantly stagged
- run audit vuln
- run build
