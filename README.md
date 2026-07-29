# MAIN Demo Marketplace

MAIN is a demo-first earn-to-order product marketplace.

Users choose a product goal, earn approved platform tokens through sharing, verified referrals and configured activities, complete an order checklist, and then submit a delivery request without paying money.

## Complete user flow

1. Open the starting page.
2. Create a delivery-ready demo profile or explore the demo.
3. Choose a product as the active goal.
4. Share the unique referral link.
5. Complete daily and direct-link tasks.
6. Build approved tokens.
7. Complete the product order checklist:
   - Enough approved tokens
   - Delivery profile completed
   - At least 4 completed tasks
   - At least 5 recorded share actions
   - At least 3 verified referrals
8. Open the unlocked product.
9. Review the token cost and remaining balance.
10. Enter recipient, phone, state, complete address and optional delivery note.
11. Confirm the order and spend the required tokens.
12. Track the order as `Awaiting admin stock and delivery review`.

## Sharing and referral rule

Sharing is a major earning activity, but opening WhatsApp does not prove that a private message was delivered.

The current demo records:

- 10 pending tokens for a recorded WhatsApp share action
- 100 approved tokens for a simulated verified referral

A production backend should award verified referral tokens only after a measurable event such as a unique visit, verified registration or required completed activity.

## Included demo features

- Visible DEMO banner
- Professional starting page
- Delivery-profile onboarding
- Approved and pending token balances
- Unique referral link
- WhatsApp sharing
- Verified-referral simulation
- Daily check-in
- Profile task
- Configurable direct-link tasks with return timers
- Large categorized product marketplace
- Product search and category filters
- Product photographs with fallbacks
- Active product goal
- Clear next-action guidance
- Five-part order checklist
- Token-only order confirmation
- Recipient and full delivery-address form
- Token deduction after order submission
- Order IDs and order history
- Demo Admin controls
- Browser persistence with `localStorage`

## Demo Admin

The Demo Admin section can:

- Simulate a verified referral
- Approve pending share tokens
- Add direct-link tasks
- Configure task rewards and return timers
- Add products with categories, images and token requirements
- Reset the browser demo

## Production advancement path

The production version should move all sensitive activity to Supabase or another secure backend:

- `profiles`
- `products`
- `inventory`
- `tasks`
- `task_completions`
- `share_events`
- `referral_events`
- `token_ledger`
- `orders`
- `order_status_history`
- `delivery_addresses`
- `admin_users`

Approved balances should be calculated from a server-controlled append-only token ledger. The browser must not directly approve tokens, verify referrals or decide order eligibility.

Production also needs:

- Authentication and session persistence
- Real referral attribution
- Duplicate-account and self-referral protection
- Device and rate-limit controls
- Product stock management
- Order review tools
- Delivery-area rules
- Supplier or fulfilment process
- User notifications
- Privacy policy and terms

## Demo limitation

This build stores test profiles, tokens and orders only on the current browser. Product images require internet access. No supplier receives an order and no real product delivery is promised by the demo.

## Demo cleanup rule

The visible demo banner must remain until the project owner explicitly says:

`APPROVE PRODUCTION CLEANUP`
