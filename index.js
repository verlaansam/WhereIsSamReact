const container = document.getElementById("position-data");

const socket = new WebSocket("wss://stream.aisstream.io/v0/stream");

socket.onopen = function (event) {
    console.log("socket is open", event);
    const subscriptionMessage = {
        Apikey: "8b97987859a3ae05a72036d8ef26e5cf65d90e15786e
        BoundingBoxes: [
            [e606bdfbb09fb210b4a2b3c4a02c29b61c6b70b1
                [-180, -90],
                [180, 90],
            ],
        ],
    };
    socket.send(JSON.stringify(subscriptionMessage));
};

socket.onmessage = function (event) {
    console.log(event.data)
    const aisMessage = JSON.parse(event.data);
    if (aisMessage["MessageType"] === "PositionReport") {
        let positionReport = aisMessage["Message"]["PositionReport"];
        const positionMessage = `ShipId: ${positionReport["UserID"]} Latitude: ${positionReport["Latitude"]} Longitude: ${positionReport["Longitude"]}`;
        console.log(positionMessage);
        const span = document.createElement("span");
        span.innerText = positionMessage;
        container.appendChild(span);
    }
};

socket.onclose = function (event) {
    console.log("socket is closed", event);
};

console.log("created socket", socket);
