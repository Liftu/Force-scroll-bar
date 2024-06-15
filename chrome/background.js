async function ForceShowScrollBar(tab) {
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                let forced = false;
                if (document.body.style.overflow == "hidden") {
                    document.body.style.overflow = "";
                    forced = true;
                }
                if (document.documentElement.style.overflow == "hidden") {
                    document.documentElement.style.overflow = "";
                    forced = true;
                }
                if (document.body.style.position == "fixed") {
                    document.body.style.position = "";
                    forced = true;
                }
                if (document.documentElement.style.position == "fixed") {
                    document.documentElement.style.position = "";
                    forced = true;
                }
                if (forced)
                    console.log("Scroll bar restored")
            }
        });
    } catch (err) {
        console.error(`failed to restore scroll bar: ${err}`);
    }
}

chrome.action.onClicked.addListener(ForceShowScrollBar);