# TokenCart Demo

TokenCart is a demo-first reward-powered ordering platform.

Users complete activities and measurable referral actions to earn platform tokens. Approved tokens are spent to unlock product orders. The demo does not collect money.

## Current demo flow

1. Open the site.
2. View token-locked products.
3. Complete daily, profile, direct-link, and sharing activities.
4. Build an approved token balance.
5. Unlock a product when the approved balance reaches its requirement.
6. Submit recipient and delivery details.
7. Spend the required tokens.
8. Create an order with the status `Awaiting admin review`.

## Included demo features

- Approved and pending token balances
- Product catalogue with token progress
- Token-only product unlocking
- WhatsApp referral sharing
- Unique referral code per browser demo state
- Configurable direct-link tasks
- Return timers for direct-link tasks
- Daily check-in task
- Token activity history
- Product order form
- Order history and review status
- Demo admin section for adding products and tasks
- Local browser persistence using `localStorage`
- Visible removable demo banner

## Important verification rule

Opening a WhatsApp share button does not prove that a private message was delivered.

The demo records a small pending share action. A production backend should award larger referral tokens only for measurable events such as:

- Unique referral visit
- Verified signup
- First completed activity
- Approved order or other configured milestone

## Editing direct-link tasks

Open **Demo Admin** inside the app and select **Add task**.

Each direct-link task accepts:

- Task title
- Direct URL
- Token reward
- Required return timer

For permanent default tasks, edit `DEFAULT_TASKS` in `index.html`.

## Editing products

Open **Demo Admin** and select **Add product**, or edit `DEFAULT_PRODUCTS` in `index.html`.

Each product contains:

- Name
- Description
- Emoji placeholder
- Required token amount

## Demo limitations

This build stores everything on the current device only. It does not yet provide:

- Real authentication
- Cross-device accounts
- Secure server-controlled balances
- Verified referral attribution
- Real stock management
- Supplier fulfilment
- Admin authentication
- Fraud detection
- Delivery integrations

## Production advancement path

The next production stage should move these areas to Supabase:

- `profiles`
- `products`
- `tasks`
- `task_completions`
- `referral_events`
- `token_ledger`
- `orders`
- `order_status_history`
- `admin_users`

Token balances should be calculated from an append-only server ledger. The browser must not directly decide or modify approved token balances.

## Demo cleanup rule

The visible demo banner must remain until the project owner explicitly says:

`APPROVE PRODUCTION CLEANUP`
