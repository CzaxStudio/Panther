function runPanther() {

    const code = document.getElementById("codeArea").value;
    const outputBox = document.getElementById("output");
    outputBox.textContent = "";

    const lines = code.split("\n");
    const variables = {};

    let i = 0;

    function print(text) {
        outputBox.textContent += text + "\n";
    }

    function evaluateExpression(expr) {

        // Replace variable names with values
        for (let key in variables) {
            expr = expr.replaceAll(key, variables[key]);
        }

        try {
            return eval(expr);
        } catch {
            return expr;
        }
    }

    while (i < lines.length) {

        let line = lines[i].trim();

        if (line === "" || line.startsWith("#")) {
            i++;
            continue;
        }

        // ==========================
        // VARIABLE ASSIGNMENT
        // ==========================

        if (line.includes("=") && !line.startsWith("If") && !line.startsWith("While") && !line.startsWith("For")) {
            let parts = line.split("=");
            let varName = parts[0].trim();
            let value = parts.slice(1).join("=").trim();

            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            } else if (!isNaN(value)) {
                value = Number(value);
            } else {
                value = evaluateExpression(value);
            }

            variables[varName] = value;
            i++;
            continue;
        }

        // ==========================
        // COMPUTE
        // ==========================

        if (line.startsWith("Compute(")) {
            let match = line.match(/Compute\((.*)\)/);
            if (match) {
                let content = match[1];

                if (content.startsWith('"') && content.endsWith('"')) {
                    print(content.slice(1, -1));
                } else {
                    print(evaluateExpression(content));
                }
            }
            i++;
            continue;
        }

        // ==========================
        // IF CONDITION
        // ==========================

        if (line.startsWith("If ")) {

            let condition = line.substring(3).trim();
            let result = evaluateExpression(condition);

            i++;

            if (!result) {
                // Skip until Else or next block
                while (i < lines.length && !lines[i].trim().startsWith("Else")) {
                    i++;
                }
                if (lines[i] && lines[i].trim().startsWith("Else")) {
                    i++;
                }
            }

            continue;
        }

        // ==========================
        // WHILE LOOP
        // ==========================

        if (line.startsWith("While ")) {

            let condition = line.substring(6).trim();
            let loopStart = i + 1;

            while (evaluateExpression(condition)) {

                let j = loopStart;

                while (j < lines.length && lines[j].trim() !== "") {
                    executeLine(lines[j].trim());
                    j++;
                }
            }

            // Skip loop block
            while (i < lines.length && lines[i].trim() !== "") {
                i++;
            }

            continue;
        }

        // ==========================
        // FOR LOOP
        // ==========================

        if (line.startsWith("For ")) {

            let match = line.match(/For (.*) = (.*) To (.*)/);

            if (match) {
                let varName = match[1].trim();
                let start = Number(match[2]);
                let end = Number(match[3]);

                let loopStart = i + 1;

                for (let val = start; val <= end; val++) {

                    variables[varName] = val;

                    let j = loopStart;

                    while (j < lines.length && lines[j].trim() !== "") {
                        executeLine(lines[j].trim());
                        j++;
                    }
                }
            }

            while (i < lines.length && lines[i].trim() !== "") {
                i++;
            }

            continue;
        }

        // ==========================
        // SECURITY COMMAND SIMULATION
        // ==========================

        if (line.startsWith("ResolveDNS")) {
            print("[SIMULATED] DNS Resolved → 93.184.216.34");
        }

        else if (line.startsWith("PortScan")) {
            print("[SIMULATED] Port OPEN");
        }

        else if (line.startsWith("GenerateStrongPassword")) {
            print("Generated Password → A9#kL2!xZ7$pQ1@M");
        }

        else if (line.startsWith("WhoIs")) {
            print("[SIMULATED] WHOIS data retrieved");
        }

        else {
            print("[Unknown Command] " + line);
        }

        i++;
    }

    function executeLine(line) {
        if (line.startsWith("Compute(")) {
            let match = line.match(/Compute\((.*)\)/);
            if (match) {
                print(evaluateExpression(match[1]));
            }
        }

        if (line.includes("=")) {
            let parts = line.split("=");
            let varName = parts[0].trim();
            let value = evaluateExpression(parts[1].trim());
            variables[varName] = value;
        }
    }
                    }
    
