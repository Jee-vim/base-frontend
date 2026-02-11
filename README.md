# Core Frontend

Next.js frontend project with component-driven architecture and consistent naming conventions.

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

📖 **Detailed Guidelines**: See [Component Guidelines](./docs/component-guidelines.md)

## Pre Commit Structure

- run format (prettier)
- staged again
- check is there any `use-client` inside `page.tsx` or `layout.tsx`
- check file .tsx max lines length < 300
- check if any big file accidantly stagged
- run audit vuln
- run build
