# Browser Interaction Test Report

Tested with headless Chromium and Playwright on three viewports: 1440×900, 768×1024 and 390×844.

## Result
24/24 targeted checks passed after correcting project-card pointer handling.

Tests cover JavaScript page errors, document overflow, three project cards, four personal gallery images, dialog opening and closing, gallery navigation or no-op when fully visible, and invalid email validation at each viewport.

## Root cause and fix
`setPointerCapture` on the gallery viewport retargeted pointer clicks away from project cards, preventing the project-detail dialog from opening. Removed pointer capture to preserve click targets and added a window-level pointerup listener for drag cleanup.

## Limitation
The browser environment blocks navigation to file:// and local test HTTP URLs. Tests instead use `page.set_content()` with inline-injected CSS/JS and therefore do not validate HTTP delivery, remote image loading, deployment integration, or every animation/effect. Real-device and deployed-site smoke testing remains recommended.

## Run
`python browser_interaction_test.py` (requires Python, Playwright, BeautifulSoup, and Chromium). When run, update the test script's root path to the local portfolio folder if necessary.