let searchParams = new URLSearchParams(window.location.search);
let searchKeyword = searchParams.get("u");
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("/abm/HTML/header.html")
        .then((res) => res.text())
        .then((html) => {
            document.body.insertAdjacentHTML("afterbegin", html);

            requireAjax("/abm/Data/src/settings.js", function () {
                requireAjax("/abm/Data/src/dataloader.js", function () {
                    requireAjax("/abm/Data/src/tooltips.js", function () {
                        requireAjax("/abm/Data/src/lookuputils.js", function () {
                            requireAjax("/abm/Data/Search.js", function () {
                                requireAjax("/abm/Data/Faction.js", function () {
                                    requireAjax("/abm/Data/Builder.js", function () {
                                        CheckData();
                                        // wait for a while and then  HandleExtraTooltips();
                                        setTimeout(function () {
                                            HandleExtraTooltips();
                                        }, 2000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
});



function requireAjax(file, callback) {
    jQuery.getScript(file, callback);
}
