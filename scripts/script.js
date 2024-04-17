function draw_calendar(birthday_date) {
    const current_date = new Date();
    const birthday = new Date(birthday_date);
    const delta_t = current_date - birthday;
    const weeks_passed = Math.floor(delta_t / (1000 * 60 * 60 * 24 * 7));

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const rows = 100;
    const cols = 52;


    canvas.height = window.screen.height * 0.9;
    canvas.width = canvas.height / 100 * 52;


    const circleRadius = canvas.width / 104;
    const horizontalSpacing = circleRadius * 2;
    const verticalSpacing = circleRadius * 2;

    function get_color(row) {
        if (row < 12) return ('#D16517');
        if (row < 19) return ('#267C09');
        if (row < 34) return ('#CF1355');
        if (row < 49) return ('#AA127A');
        if (row < 79) return ('#307199');
        return ('#1F0A3C');
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * horizontalSpacing + circleRadius;
            const y = row * verticalSpacing + circleRadius;

            const color = get_color(row)
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
            if (row * 52 + col >= weeks_passed)
                ctx.stroke();
            else
                ctx.fill();
        }
    }
}



document.getElementById("dateInput").addEventListener("change", function () {
    var input = this.value;
    draw_calendar(input);
});

draw_calendar(document.getElementById("dateInput").value);