(() => {
  "use strict";

  const STORAGE_KEY = "terrabovino_demo_logs_v1";

  function readDemoLogs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeDemoLogs(logs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch {
      // Ignora restricciones de almacenamiento local si aplican
    }
  }

  function showToast(message, variant = "success") {
    let container = document.getElementById("tb-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tb-toast-container";
      container.className = "position-fixed bottom-0 end-0 p-3";
      container.style.zIndex = "1080";
      document.body.appendChild(container);
    }

    const alertEl = document.createElement("div");
    alertEl.className = `alert alert-${variant} alert-dismissible fade show shadow-sm mb-2`;
    alertEl.setAttribute("role", "alert");
    alertEl.innerHTML = `
      <span>${message}</span>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    `;

    container.appendChild(alertEl);

    window.setTimeout(() => {
      alertEl.classList.remove("show");
      window.setTimeout(() => alertEl.remove(), 200);
    }, 3600);
  }

  function collectFormSummary(form) {
    const entries = [];
    const fields = form.querySelectorAll("input, select, textarea");

    fields.forEach((field) => {
      if (field.type === "password" || field.type === "file") return;
      const label = form.querySelector(`label[for="${field.id}"]`);
      const name = label ? label.textContent.trim() : field.name || field.id;
      const value = (field.value || "").trim();
      if (name && value && field.type !== "checkbox" && field.type !== "radio") {
        entries.push(`${name}: ${value}`);
      }
    });

    return entries.slice(0, 3).join(" · ");
  }

  function bindDemoForms() {
    const forms = document.querySelectorAll("main form");

    forms.forEach((form) => {
      const demoButtons = form.querySelectorAll("button");

      demoButtons.forEach((btn) => {
        if (btn.type === "reset") return;

        btn.addEventListener("click", (event) => {
          const isDemoBtn = btn.textContent.toLowerCase().includes("demostración") || form.getAttribute("action") === "#";
          if (!isDemoBtn) return;

          if (btn.getAttribute("type") === "submit") {
            event.preventDefault();
          }

          const summary = collectFormSummary(form);
          const pageTitle = document.querySelector("h1")?.textContent?.trim() || document.title;
          const now = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });

          const logs = readDemoLogs();
          logs.unshift({
            time: now,
            view: pageTitle,
            action: btn.textContent.trim(),
            detail: summary || "Acción simulada en interfaz"
          });
          writeDemoLogs(logs);

          const detailText = summary ? ` (${summary})` : "";
          showToast(`<strong>Demo registrada [${now}]:</strong> ${btn.textContent.trim()}${detailText}`, "success");
        });
      });

      form.addEventListener("submit", (event) => {
        if (form.getAttribute("action") === "#") {
          event.preventDefault();
        }
      });
    });
  }

  function enhanceTablesWithQuickSearch() {
    const tables = document.querySelectorAll("main table.app-table");

    tables.forEach((table, index) => {
      const tbody = table.querySelector("tbody");
      if (!tbody || tbody.rows.length < 3) return;

      const wrapper = document.createElement("div");
      wrapper.className = "mb-3 d-flex justify-content-between align-items-center gap-2 flex-wrap";

      const inputId = `tb-table-filter-${index}`;
      wrapper.innerHTML = `
        <div class="input-group input-group-sm" style="max-width: 340px;">
          <span class="input-group-text">Filtrar</span>
          <input id="${inputId}" type="search" class="form-control" placeholder="Buscar en esta tabla...">
        </div>
        <span class="small muted" id="${inputId}-count">Mostrando ${tbody.rows.length} registros</span>
      `;

      const responsiveParent = table.closest(".table-responsive");
      if (responsiveParent) {
        responsiveParent.parentNode.insertBefore(wrapper, responsiveParent);
      } else {
        table.parentNode.insertBefore(wrapper, table);
      }

      const input = document.getElementById(inputId);
      const countLabel = document.getElementById(`${inputId}-count`);

      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        let visibleCount = 0;

        Array.from(tbody.rows).forEach((row) => {
          const text = row.textContent.toLowerCase();
          const match = !query || text.includes(query);
          row.style.display = match ? "" : "none";
          if (match) visibleCount += 1;
        });

        countLabel.textContent = `Mostrando ${visibleCount} de ${tbody.rows.length} registros`;
      });
    });
  }

  function highlightCurrentNavLink() {
    const currentFile = window.location.pathname.split("/").pop();
    if (!currentFile) return;

    const links = document.querySelectorAll("nav a[href]");
    links.forEach((link) => {
      const hrefFile = link.getAttribute("href").split("/").pop();
      if (hrefFile === currentFile) {
        link.setAttribute("aria-current", "page");
        link.classList.add("fw-semibold");
        const parentDetails = link.closest("details");
        if (parentDetails) {
          parentDetails.setAttribute("open", "");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    highlightCurrentNavLink();
    bindDemoForms();
    enhanceTablesWithQuickSearch();
  });
})();