function runPanther() {

    const code = document.getElementById("codeArea").value;
    const outputBox = document.getElementById("output");

    let lines = code.split("\n");
    let output = "";

    for (let line of lines) {

        line = line.trim();

        if (line.startsWith("Compute(")) {
            const match = line.match(/Compute\("(.*)"\)/);
            if (match) {
                output += match[1] + "\n";
            }
        }

        else if (line.startsWith("ResolveDNS")) {
            output += "[SIMULATED] Resolving DNS...\n";
            output += "IP Address: 93.184.216.34\n\n";
        }

        else if (line.startsWith("PortScan")) {
            output += "[SIMULATED] Port OPEN\n\n";
        }

        else if (line.startsWith("GenerateStrongPassword")) {
            output += "Generated Password: Xk9#pL2@zQ8!nW4$\n\n";
        }

        else if (line !== "") {
            output += "[Unknown Command] " + line + "\n";
        }
    }

    outputBox.textContent = output;
                 }
