let entrada = prompt("Ingrese un número del 1 al 10 y conozca el top ten de las criptomonedas por capitalización de mercado");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("BTC");
            break;
        case "2":
            alert("ETH");
            break;
        case "3":
            alert("ADA");
            break;
        case "4":
            alert("BNB");
            break;
        case "5":
            alert("USDT");
            break;
        case "6":
            alert("SOL");
            break;
        case "7":
            alert("XRP");
            break;
        case "8":
            alert("DOT");
            break;
        case "9":
            alert("USDC");
            break;
        case "10":
            alert("DOGE");
            break;
        default:
            alert("Error");
            break;
}
    entrada = prompt("Ingrese otro número");
}

