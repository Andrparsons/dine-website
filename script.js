const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  tabPanels.forEach((panel) => {
    //clear slections
    panel.classList.add("hidden-tab");
    panel.classList.remove("visible-tab");
  });

  tabButtons.forEach((tab) => {
    //clear selections
    tab.setAttribute("aria-selected", false);
  });

  //set the selected tab to true
  event.currentTarget.setAttribute("aria-selected", true);

  //set all tabs that have labels that match the ID of the button to visible
  const { id } = event.currentTarget;
  const visblePanels = tabPanels.filter(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );

  visblePanels.forEach((panel) => {
    panel.classList.remove("hidden-tab");
    panel.classList.add("visble-tab");
  });
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
