datalogger.setColumnTitles(
"Tem",
"Lum"
)
loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("Tem", input.temperature()),
    datalogger.createCV("Lum", input.lightLevel())
    )
})
