class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const url = this.getAttribute("data-url")
    const card = document.createElement("div");
    card.classList.add("card");
    card.onclick = () => window.open(url)
    const img = document.createElement("img");
    img.classList.add("card-image")
    img.src = `${url}/favicon.ico`;
    img.alt = this.getAttribute("data-title");

    const container = document.createElement("div");
    container.classList.add("card-container");

    const title = document.createElement("h2");
    title.classList.add("card-title")
    title.textContent = this.getAttribute("data-title")

    const desc = document.createElement("p");
    desc.classList.add("card-desc")
    desc.innerHTML = this.getAttribute("data-desc")

    container.appendChild(title);
    container.appendChild(desc)
    card.appendChild(img)
    card.appendChild(container)

    this.replaceWith(card)
  }
}

customElements.define("project-card", ProjectCard)
