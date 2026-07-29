# MAIN Demo Marketplace

MAIN is a demo-first, token-powered product ordering platform.

Users choose a product goal, earn approved tokens mainly through sharing and configured tasks, complete the product requirements, and submit a token-only order for stock and delivery review.

## Public customer flow

1. Open the starting page.
2. Create a demo profile or explore the catalogue.
3. Choose one product as the active goal.
4. Share the referral link and complete token tasks.
5. Wait for pending share tokens to pass the clearly labelled demo review.
6. Complete the required delivery profile, share count and task count.
7. Reach the selected product’s approved-token requirement.
8. Review the order checklist.
9. Spend tokens and submit the delivery order.
10. Track the order as `Awaiting admin stock and delivery review`.

## Current public interface

The customer navigation contains only:

- Home
- Products
- Earn
- Orders

There is no public admin button, admin screen, product editor, task editor, referral simulator or reset control.

Administration will be built later as a separate authenticated route with server-enforced permissions. Removing an admin link from the public interface is not by itself security; production security must be enforced by the backend.

## Demo catalogue

`assets/js/demo-catalog.js` generates 1,000 organized demo products across 20 categories.

Each product contains:

- Product ID
- Product name
- Category
- Visible product tags
- Demo description
- Product image and emoji fallback
- Token requirement
- Promotional badge
- Demo inventory marker

The catalogue uses search, category filters and progressive loading. It does not render all 1,000 product cards at once, which keeps mobile performance reasonable.

The products are generated demo stock. They are not copied live listings and must not be presented as confirmed inventory.

## Token and order requirements

The current demo requires:

- Enough approved tokens for the selected product
- A completed delivery profile
- At least 5 recorded share actions
- At least 4 completed tasks

Sharing is the main earning activity. Each WhatsApp share records 120 pending demo tokens. Those tokens enter a short, clearly labelled demo review before approval. MAIN cannot inspect private WhatsApp messages.

Production referral rewards should be based on server-verifiable events such as:

- Unique referral visit
- Verified signup
- First completed activity
- Approved referral milestone

## Demo limitations

This version uses browser `localStorage`. It does not yet provide:

- Secure authentication
- Cross-device accounts
- Server-controlled token balances
- Real referral verification
- Confirmed product inventory
- Supplier fulfilment
- Delivery integrations
- Protected administration
- Fraud detection

Production balances should come from an append-only server token ledger. The browser must never have authority to award approved tokens or approve orders.

## Main files

- `index.html` — public customer marketplace and complete demo flow
- `assets/js/demo-catalog.js` — scalable 1,000-product demo catalogue

## Demo cleanup rule

The yellow demo banner remains until the project owner explicitly says:

`APPROVE PRODUCTION CLEANUP`
