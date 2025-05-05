document.addEventListener("DOMContentLoaded", () => {
    const timelinePoints = document.querySelectorAll(".timeline-point");

    timelinePoints.forEach((point) => {
        point.addEventListener("click", (event) => {
            event.stopPropagation();

            timelinePoints.forEach((p) => p.classList.remove("active"));

            point.classList.add("active");
        });
    });

    document.addEventListener("click", () => {
        timelinePoints.forEach((point) => point.classList.remove("active"));
    });
});