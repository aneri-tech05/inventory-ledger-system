/**
 * script.js
 * Applies interactive React-Bits style animations (Spotlight effect) to glass cards.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that should have the spotlight hover effect
    const premiumCards = document.querySelectorAll(".premium-hover");

    const handleMouseMove = e => {
        const { currentTarget: target } = e;

        // Calculate the mouse position relative to the element
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set the CSS variables which control the radial gradient mask in CSS
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const card of premiumCards) {
        card.addEventListener("mousemove", handleMouseMove);
    }
});