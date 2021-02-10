export function render(query, block) {
    const root = document.querySelector(query);
    root.innerHTML = block.render();
    return root;
}