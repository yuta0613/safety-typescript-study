import { createInterface } from "node:readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const message = {
    good: "0以上の数値が入力されました",
    bad: "負の数字を入力しないでください",
};
rl.question('コマンドを入力してください:', (line) => {
    const num = Number(line);
    console.log(message[num >= 0 ? "good" : "bad"]);
    rl.close();
});
