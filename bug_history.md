# 🐛 Bug History — Angular Course

---

## Bug #1 — 'app-footer' is not a known element

**Error Message:**
```
'app-footer' is not a known element.
1. If 'app-footer' is an Angular component, verify that it is part of this module.
ngtsc(-998001)
```

**Cause:**
Components were created manually or their folders were deleted manually without updating `app.module.ts`.
When you delete a component folder manually, Angular does not automatically remove its `import` and `declaration` from `app.module.ts`.
This leaves broken references pointing to files that no longer exist.

**Example of what was left behind:**
```typescript
// ❌ import pointing to deleted file
import { AboutComponent } from './about/about.component';

// ❌ still declared but component doesn't exist
declarations: [
  AboutComponent,
]
```

**Fix:**
Manually remove the broken import and declaration from `app.module.ts`:
```typescript
// ✅ Remove the import line
import { AboutComponent } from './about/about.component'; // DELETE

// ✅ Remove from declarations array
declarations: [
  AppComponent,
  AboutComponent, // DELETE
]
```

**Checklist when deleting any component:**
- [ ] Delete the component folder from `src/app/`
- [ ] Remove the `import` line from `app.module.ts`
- [ ] Remove the name from `declarations` in `app.module.ts`
- [ ] Remove the selector from any HTML file using it

**Rule to remember:**
> Angular CLI adds components automatically but never removes them.
> Deletion is always manual — always clean up `app.module.ts` after deleting a component folder.

---