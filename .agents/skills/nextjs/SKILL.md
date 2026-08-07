---
name: nextjs_component_creation
description: Guides the creation of modern Next.js components, distinguishing correctly between Server and Client components, and ensuring best practices in Next.js App Router.
---

# Next.js Component Creation

When instructed to create or modify a Next.js component, follow these essential steps:

1. **Determine the Component Type:**
   - **Server Component (Default):** Use if the component only renders static data, fetches data from the backend, or doesn't require user interaction (e.g., clicks, state).
   - **Client Component:** Use only if the component requires browser APIs, React state (`useState`, `useReducer`), lifecycle hooks (`useEffect`), or event listeners. Add `"use client";` at the very top of the file.

2. **Structure and Typing:**
   - Define the component using an arrow function.
   - If using TypeScript, define and export an interface for the component props.
   - Export the component as the `default` export for pages, or a named export for shared UI components depending on the established project convention.

3. **Styling and UI:**
   - Adhere to the established styling framework (e.g., CSS Modules, Tailwind CSS, or Vanilla CSS).
   - Focus on modern, responsive, and highly polished aesthetics.
   - Utilize micro-animations or hover states to make the component feel dynamic.

## Examples

### Server Component (Data Fetching)
```tsx
import { fetchProductData } from '@/lib/api';

interface ProductDetailsProps {
  productId: string;
}

export default async function ProductDetails({ productId }: ProductDetailsProps) {
  const product = await fetchProductData(productId);

  return (
    <section className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </section>
  );
}
```

### Client Component (Interactive)
```tsx
"use client";

import { useState } from 'react';

interface InteractiveButtonProps {
  label: string;
  onClickAction: () => void;
}

export function InteractiveButton({ label, onClickAction }: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClickAction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`btn ${isHovered ? 'btn-hover' : ''}`}
    >
      {label}
    </button>
  );
}
```
